# StarDev 프로젝트 인수인계

## 프로젝트
- 경로: `/Users/gimhyeongseog/Desktop/devmatch`
- 서비스: AI 개발자 적성 진단 + AI 툴 허브 + 개발자 커뮤니티
- 브랜드명: **StarDev**

## 기술 스택
- Next.js 16.2.6 (App Router, TypeScript)
- Tailwind CSS v4
- Clerk v7 (`@clerk/nextjs`) — Google OAuth
- Anthropic Claude API (`claude-sonnet-4-6`)
- Supabase (AI 툴 DB + 클릭 트래킹)
- React Context (한/영 전환)

## 디자인 원칙
- **순수 흑백만** (색상 절대 금지)
- 섹션 교대: 검정 ↔ 흰색
- Apple/Tesla 스타일 미니멀

## 완료된 작업
- 랜딩페이지 (5섹션, 한/영)
- 퀴즈 + Claude AI 진단 + 결과 페이지
- AI 툴 모음 (Supabase DB, 클릭 트래킹, 🔥 HOT 뱃지)
- 커뮤니티 페이지 (Coming Soon)
- 한/영 전환 (`messages/ko.json`, `messages/en.json`, `LangContext`)
- Clerk 로그인/회원가입 (dark theme)
- Vercel Cron Job (매주 월요일 Claude가 새 툴 자동 추가)

## 남은 작업
- 배포 (Vercel)
- 퀴즈 결과 개선
- SEO

## 주요 파일 구조
```
app/
  page.tsx               — 랜딩
  quiz/page.tsx          — 퀴즈 + 결과
  ai-tools/page.tsx      — AI 툴 목록 (Supabase 연동)
  community/page.tsx     — 커뮤니티
  sign-in/[[...sign-in]]/page.tsx
  sign-up/[[...sign-up]]/page.tsx
  api/
    diagnose/route.ts    — Claude API 퀴즈 분석
    tools/route.ts       — Supabase 툴 목록 GET
    tools/[id]/click/route.ts — 클릭 트래킹
    cron/update-tools/route.ts — 자동 업데이트
  components/
    LandingPage.tsx
    Navbar.tsx
    ResultPage.tsx
  context/LangContext.tsx
lib/
  supabase.ts
  supabase-admin.ts
messages/
  ko.json
  en.json
middleware.ts            — Clerk 보호 (/quiz)
vercel.json              — cron 설정
```

## 환경변수 (.env.local)
```
ANTHROPIC_API_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/quiz
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/quiz
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
CRON_SECRET=
```

## Supabase
- 테이블: `tool_categories`, `tools` (click_count 포함)
- RPC: `increment_tool_click(tool_id)`
- RLS: 공개 읽기 허용, 쓰기는 service role만

## 주의사항
- 색상 절대 사용 금지 (흑백만)
- middleware.ts 이름 유지 (proxy.ts 아님)
- Clerk v7: `fallbackRedirectUrl` 사용, localization은 ClerkProvider에만
- Next.js 16 middleware matcher: Clerk 최신 권장 형식 사용
- 응답 짧게, 반말로
