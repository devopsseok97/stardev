import Anthropic from "@anthropic-ai/sdk";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: existing } = await supabaseAdmin
    .from("tools")
    .select("name");
  const existingNames = existing?.map((t) => t.name).join(", ") ?? "";

  const { data: categories } = await supabaseAdmin
    .from("tool_categories")
    .select("id, name_en");

  const client = new Anthropic();
  const response = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 2048,
    thinking: { type: "adaptive" },
    messages: [
      {
        role: "user",
        content: `You are an AI tools curator for developers. Find 3-5 new, genuinely popular AI tools NOT in this list: ${existingNames}.

Focus on tools trending on Product Hunt, GitHub, or developer communities in the last 3 months.

Return ONLY a valid JSON array (no markdown, no explanation):
[{
  "category_name_en": "one of: Coding AI | AI Dev Platforms / APIs | AI Search / Research | AI Image / Design | AI Video / Media | AI Productivity / Docs",
  "icon": "one emoji",
  "name": "Tool name",
  "desc_ko": "Korean description, 1-2 sentences",
  "desc_en": "English description, 1-2 sentences",
  "tag_ko": "무료 or 유료 or 무료/유료",
  "tag_en": "Free or Paid or Free/Paid",
  "url": "https://official-url.com"
}]`,
      },
    ],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    return NextResponse.json({ error: "No text response" }, { status: 500 });
  }

  let newTools: Array<{
    category_name_en: string;
    icon: string;
    name: string;
    desc_ko: string;
    desc_en: string;
    tag_ko: string;
    tag_en: string;
    url: string;
  }>;

  try {
    newTools = JSON.parse(textBlock.text);
  } catch {
    return NextResponse.json({ error: "Failed to parse JSON" }, { status: 500 });
  }

  let added = 0;
  for (const tool of newTools) {
    const cat = categories?.find((c) => c.name_en === tool.category_name_en);
    if (!cat) continue;

    const { error } = await supabaseAdmin.from("tools").insert({
      category_id: cat.id,
      icon: tool.icon,
      name: tool.name,
      desc_ko: tool.desc_ko,
      desc_en: tool.desc_en,
      tag_ko: tool.tag_ko,
      tag_en: tool.tag_en,
      url: tool.url,
    });
    if (!error) added++;
  }

  return NextResponse.json({ added });
}
