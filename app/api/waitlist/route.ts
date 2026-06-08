import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "유효하지 않은 이메일" }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from("waitlist")
      .upsert({ email: email.toLowerCase().trim() }, { onConflict: "email" });

    if (error) {
      console.error("Waitlist 저장 오류:", error.message);
      return NextResponse.json({ error: "저장 실패" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Waitlist API 오류:", err);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
