export const questions = [
  {
    id: 1,
    question: "개발을 배우려는 이유가 뭔가요?",
    options: [
      { label: "취업/이직을 하고 싶어요", value: "job" },
      { label: "창업/내 서비스를 만들고 싶어요", value: "startup" },
      { label: "현재 업무에 자동화를 적용하고 싶어요", value: "automation" },
      { label: "그냥 취미로 배우고 싶어요", value: "hobby" },
    ],
  },
  {
    id: 2,
    question: "어떤 결과물이 더 끌리나요?",
    options: [
      { label: "눈에 보이는 예쁜 화면/앱", value: "visual" },
      { label: "눈에 안 보이지만 빠르고 안정적인 시스템", value: "system" },
      { label: "데이터 분석 결과/그래프", value: "data" },
      { label: "AI가 뭔가를 판단하고 추천해주는 것", value: "ai" },
    ],
  },
  {
    id: 3,
    question: "어떤 개발자가 가장 매력적으로 느껴져요?",
    options: [
      { label: "사용자가 보는 화면/앱을 직접 만드는 개발자", value: "frontend_role" },
      { label: "서버, 데이터베이스를 설계하는 백엔드 개발자", value: "backend_role" },
      { label: "AI/딥러닝 모델을 연구하고 만드는 개발자", value: "ai_role" },
      { label: "클라우드/배포/자동화 시스템을 구축하는 엔지니어", value: "devops_role" },
    ],
  },
  {
    id: 4,
    question: "만들고 싶은 서비스가 있다면 어떤 종류인가요?",
    options: [
      { label: "예쁜 UI의 웹/앱 서비스", value: "visual_service" },
      { label: "대규모 트래픽을 처리하는 플랫폼", value: "platform_service" },
      { label: "데이터 기반 분석 리포팅 도구", value: "data_service" },
      { label: "AI 기능이 탑재된 서비스", value: "ai_service" },
    ],
  },
  {
    id: 5,
    question: "문제를 풀 때 나는?",
    options: [
      { label: "규칙과 패턴을 찾아 논리적으로 접근해요", value: "logical" },
      { label: "여러 방법을 시도하다 보면 감이 와요", value: "trial" },
      { label: "원리부터 이해하고 체계적으로 풀어가요", value: "principled" },
      { label: "다른 사람의 방법을 참고해서 응용해요", value: "reference" },
    ],
  },
  {
    id: 6,
    question: "작업 스타일이 어떤가요?",
    options: [
      { label: "혼자 집중해서 깊게 파고드는 게 좋아요", value: "solo" },
      { label: "팀원들과 협업하는 게 좋아요", value: "team" },
      { label: "둘 다 괜찮아요", value: "both" },
    ],
  },
  {
    id: 7,
    question: "앞으로 어떤 환경에서 일하고 싶나요?",
    options: [
      { label: "대기업/안정적인 회사", value: "large_company" },
      { label: "빠르게 성장하는 스타트업", value: "startup" },
      { label: "프리랜서로 자유롭게", value: "freelance" },
      { label: "내 서비스를 직접 운영하는 창업", value: "entrepreneurship" },
    ],
  },
  {
    id: 8,
    question: "디자인 감각이 있는 편인가요?",
    options: [
      { label: "네, 시각적인 것에 관심 많아요", value: "yes" },
      { label: "아니요, 논리/구조가 더 좋아요", value: "no" },
      { label: "잘 모르겠어요", value: "unknown" },
    ],
  },
  {
    id: 9,
    question: "수학/통계/숫자 분석에 흥미가 있나요?",
    options: [
      { label: "네, 데이터 분석이 재미있어요", value: "yes" },
      { label: "아니요, 별로 안 좋아해요", value: "no" },
      { label: "보통이에요", value: "neutral" },
    ],
  },
  {
    id: 10,
    question: "클라우드, 서버, 네트워크 같은 인프라에 흥미가 있나요?",
    options: [
      { label: "네! 시스템이 어떻게 돌아가는지 궁금해요", value: "high" },
      { label: "조금 있어요", value: "medium" },
      { label: "별로 없어요, 코드 자체에 집중하고 싶어요", value: "low" },
    ],
  },
  {
    id: 11,
    question: "반복되는 작업을 자동화하거나 시스템을 최적화하는 데 흥미가 있나요?",
    options: [
      { label: "매우 흥미 있어요, 자동화를 좋아해요", value: "high" },
      { label: "조금 흥미 있어요", value: "medium" },
      { label: "별로 없어요", value: "low" },
    ],
  },
  {
    id: 12,
    question: "창의적인 표현 vs 논리적인 구조, 어떤 게 더 즐거워요?",
    options: [
      { label: "창의적인 표현 (디자인, 스토리텔링)", value: "creative" },
      { label: "논리적인 구조 (설계, 최적화)", value: "logical" },
      { label: "둘 다 즐거워요", value: "both" },
    ],
  },
  {
    id: 13,
    question: "평소에 관심 있는 분야는?",
    options: [
      { label: "시각 디자인, UX, 사용자 경험", value: "design_ux" },
      { label: "비즈니스 로직, 서버, 데이터 흐름", value: "backend_systems" },
      { label: "통계, 데이터, 숫자 분석", value: "data_stats" },
      { label: "인공지능, 자연어처리, 컴퓨터 비전", value: "ai_ml" },
    ],
  },
  {
    id: 14,
    question: "지금 어떤 상황이에요?",
    options: [
      { label: "학생이에요", value: "student" },
      { label: "비개발 직종 직장인이에요 (기획, 마케팅, 디자인 등)", value: "non_dev_worker" },
      { label: "취준생이에요", value: "job_seeker" },
      { label: "이미 개발 관련 일을 하고 있어요", value: "dev_worker" },
    ],
  },
  {
    id: 15,
    question: "하루에 얼마나 공부할 수 있어요?",
    options: [
      { label: "30분~1시간 (직장 다니면서 틈틈이)", value: "30m_1h" },
      { label: "1~2시간", value: "1h_2h" },
      { label: "3~5시간", value: "3h_5h" },
      { label: "그 이상 (거의 풀타임 가능)", value: "fulltime" },
    ],
  },
  {
    id: 16,
    question: "목표 학습 기간이 얼마나 되나요?",
    options: [
      { label: "3개월 이내 (빠르게 핵심만)", value: "3months" },
      { label: "6개월 (기초부터 탄탄하게)", value: "6months" },
      { label: "1년 이상 (깊이 있게 마스터)", value: "1year" },
    ],
  },
  {
    id: 17,
    question: "수입이 얼마나 급한가요?",
    options: [
      { label: "3개월 안에 수익이 필요해요", value: "urgent" },
      { label: "6개월 정도 여유 있어요", value: "moderate" },
      { label: "1년 이상 여유 있어요", value: "relaxed" },
    ],
  },
  {
    id: 18,
    question: "영어로 된 기술 문서를 읽는 데 거부감이 있나요?",
    options: [
      { label: "없어요, 자주 읽어요", value: "comfortable" },
      { label: "AI 번역 쓰면 할 수 있어요", value: "with_tools" },
      { label: "솔직히 좀 부담돼요", value: "uncomfortable" },
    ],
  },
  {
    id: 19,
    question: "아이디어를 실현할 때 나에게 중요한 것은?",
    options: [
      { label: "사용자 경험, 보기 좋아야 해요", value: "ux_design" },
      { label: "성능, 안정성, 빠른 처리 속도", value: "performance" },
      { label: "데이터와 근거, 분석 결과", value: "data_driven" },
      { label: "효율적인 자동화와 확장 가능한 구조", value: "scalability" },
    ],
  },
  {
    id: 20,
    question: "지금 나의 코딩 경험 수준은?",
    options: [
      { label: "완전 입문자, 코드 한 줄도 몰라요", value: "beginner" },
      { label: "조금 찾아봤고 기초 개념은 알아요", value: "basic" },
      { label: "간단한 코드는 짜본 적 있어요", value: "intermediate" },
      { label: "프로젝트를 완성해본 경험이 있어요", value: "experienced" },
    ],
  },
  {
    id: 21,
    question: "혹시 본인의 MBTI를 알고 있나요?",
    options: [
      { label: "I형 (내향형) — 혼자 있을 때 에너지 충전", value: "introvert" },
      { label: "E형 (외향형) — 사람들과 함께할 때 에너지 충전", value: "extrovert" },
      { label: "T형 (사고형) — 논리와 분석으로 판단해요", value: "thinking" },
      { label: "F형 (감정형) — 직관과 감성으로 판단해요", value: "feeling" },
    ],
  },
];
