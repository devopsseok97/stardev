import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "유효하지 않은 이메일" }, { status: 400 });
    }

    await supabaseAdmin
      .from("waitlist")
      .upsert({ email: email.toLowerCase().trim() }, { onConflict: "email" });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
