import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await supabase.rpc("increment_tool_click", { tool_id: parseInt(id) });
  return NextResponse.json({ ok: true });
}
