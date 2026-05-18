import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getCoursesByField } from "@/lib/courses";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `당신은 개발자 커리어 전문 상담사입니다. 사용자의 21가지 응답을 종합 분석해서 JSON 형식으로만 답변해주세요.

분야별 추천 기준:
- 프론트엔드: 시각적 결과물 선호, 디자인 감각, UX 관심, 사용자 화면 만들기 원함
- 백엔드: 시스템/로직 선호, 서버·DB 관심, 논리적 문제 해결 방식
- AI/ML: AI 결과물 선호, 수학·통계 흥미, AI 연구 개발자 롤 매력
- 데이터 분석: 데이터·그래프 결과물 선호, 통계 흥미, 분석 리포팅 서비스 원함
- 풀스택: 전반적 균형, 창업/자기 서비스 목표, 빠른 결과물 원함
- 인프라/DevOps: 클라우드·인프라 관심, 자동화 흥미, 시스템 최적화 선호

개발자 MBTI 타입 도출 기준:
- mbtiType: 4글자 MBTI 코드를 추론하세요 (INTJ, ENTP, ISFP 등 16개 중 하나)
  - I/E: 작업 스타일(혼자 vs 팀), 선호하는 롤, MBTI 답변을 종합
  - N/S: 직관/아이디어 선호 vs 현실/데이터 선호, 문제 해결 방식
  - T/F: 논리/구조 선호 vs 감성/창의 선호, 결정 방식
  - J/P: 체계적/계획적 vs 유연/탐색적 성향
- mbtiTitle: 해당 타입에 맞는 개발자 성향 한국어 타이틀 (예: "전략적 설계자", "탐구하는 창조자", "데이터 탐험가", "조용한 혁신가")
- mbtiDesc: 이 개발자 성향에 대한 설명 2문장 (구체적이고 공감 가게)

학습 기간과 하루 공부시간을 반드시 로드맵 duration에 반영하세요.
수입이 급한 경우 빠른 취업 경로를 로드맵에 반영하세요.

다음 JSON 형식으로만 응답하세요 (다른 텍스트 없이):
{
  "field": "추천 개발 분야 (반드시 다음 중 하나: 프론트엔드, 백엔드, AI/ML, 데이터 분석, 풀스택, 인프라/DevOps)",
  "reason": "이 분야를 추천하는 구체적인 이유 3~4문장. 사용자의 답변 특성을 구체적으로 언급하세요.",
  "mbtiType": "INTJ",
  "mbtiTitle": "전략적 설계자",
  "mbtiDesc": "이 개발자 성향 설명 2문장",
  "roadmap": [
    { "step": 1, "title": "단계 제목", "duration": "기간", "description": "구체적인 학습 내용" },
    { "step": 2, "title": "단계 제목", "duration": "기간", "description": "구체적인 학습 내용" },
    { "step": 3, "title": "단계 제목", "duration": "기간", "description": "구체적인 학습 내용" },
    { "step": 4, "title": "단계 제목", "duration": "기간", "description": "구체적인 학습 내용" }
  ]
}`;

export async function POST(req: NextRequest) {
  try {
    const { answers } = await req.json();

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1500,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [
        {
          role: "user",
          content: `사용자 응답:\n${JSON.stringify(answers, null, 2)}`,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== "text") {
      return NextResponse.json({ error: "응답 오류" }, { status: 500 });
    }

    const jsonMatch = content.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: "파싱 오류" }, { status: 500 });
    }

    const parsed = JSON.parse(jsonMatch[0]);
    const courses = getCoursesByField(parsed.field);

    const result = {
      field: parsed.field,
      reason: parsed.reason,
      mbtiType: parsed.mbtiType ?? null,
      mbtiTitle: parsed.mbtiTitle ?? null,
      mbtiDesc: parsed.mbtiDesc ?? null,
      roadmap: parsed.roadmap,
      courses,
    };

    // Supabase에 결과 저장 → 공유 URL용 ID 발급
    const { data, error } = await supabaseAdmin
      .from("results")
      .insert(result)
      .select("id")
      .single();

    if (error) {
      console.error("Supabase 저장 오류:", error.message);
      // 저장 실패해도 결과는 반환 (id 없이)
      return NextResponse.json(result);
    }

    return NextResponse.json({ ...result, id: data.id });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("API 오류 상세:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
