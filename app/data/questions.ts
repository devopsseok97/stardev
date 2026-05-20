export const questions = [
  {
    id: 1,
    question: "개발을 배우려는 이유가 뭔가요?",
    options: [
      { label: "취업이나 이직을 하고 싶어요", value: "job" },
      { label: "내 서비스를 만들거나 창업하고 싶어요", value: "startup" },
      { label: "지금 하는 일에 자동화를 적용하고 싶어요", value: "automation" },
      { label: "그냥 취미로 배워보고 싶어요", value: "hobby" },
    ],
  },
  {
    id: 2,
    question: "다음 중 어떤 결과물을 만들고 싶나요?",
    options: [
      { label: "예쁘게 디자인된 화면이나 앱", value: "visual" },
      { label: "수많은 사용자를 처리하는 안 멈추는 서비스", value: "system" },
      { label: "내가 만든 게임을 사람들이 직접 즐기는 것", value: "game" },
      { label: "ChatGPT처럼 똑똑하게 대답해주는 AI 기능", value: "ai" },
    ],
  },
  {
    id: 3,
    question: "다음 중 어떤 일이 가장 재미있어 보여요?",
    options: [
      { label: "인스타그램 같은 앱 화면을 직접 만드는 일", value: "frontend_role" },
      { label: "회원가입, 로그인, 데이터 저장 같은 보이지 않는 부분 만드는 일", value: "backend_role" },
      { label: "ChatGPT 같은 AI를 직접 만들고 학습시키는 일", value: "ai_role" },
      { label: "게임을 직접 만들어 플레이어에게 즐거움을 주는 일", value: "game_role" },
    ],
  },
  {
    id: 4,
    question: "내가 만들고 싶은 서비스에 가까운 건?",
    options: [
      { label: "디자인이 예쁜 쇼핑몰이나 SNS 같은 웹/앱", value: "visual_service" },
      { label: "유튜브나 카카오톡처럼 사람들이 많이 쓰는 서비스", value: "platform_service" },
      { label: "매출 데이터를 정리해서 보여주는 분석 도구", value: "data_service" },
      { label: "AI가 추천하거나 자동으로 답해주는 서비스", value: "ai_service" },
    ],
  },
  {
    id: 5,
    question: "새로운 문제를 만났을 때 나는?",
    options: [
      { label: "공통점을 찾아서 차근차근 정리하면서 풀어요", value: "logical" },
      { label: "일단 이것저것 해보면서 답을 찾아요", value: "trial" },
      { label: "왜 이런 문제가 생기는지 원인부터 파악해요", value: "principled" },
      { label: "비슷한 문제를 푼 사람 찾아보고 따라해요", value: "reference" },
    ],
  },
  {
    id: 6,
    question: "작업 스타일이 어떤가요?",
    options: [
      { label: "혼자 집중해서 깊게 파고드는 게 좋아요", value: "solo" },
      { label: "팀원들과 같이 의논하면서 하는 게 좋아요", value: "team" },
      { label: "둘 다 괜찮아요", value: "both" },
    ],
  },
  {
    id: 7,
    question: "앞으로 어떤 곳에서 일하고 싶나요?",
    options: [
      { label: "대기업이나 안정적인 회사", value: "large_company" },
      { label: "빠르게 성장하는 스타트업", value: "startup" },
      { label: "프리랜서로 자유롭게", value: "freelance" },
      { label: "내 서비스를 만들어 창업", value: "entrepreneurship" },
    ],
  },
  {
    id: 8,
    question: "디자인이나 색감, 화면 배치에 관심 있는 편인가요?",
    options: [
      { label: "네, 보기 좋게 꾸미는 거 좋아해요", value: "yes" },
      { label: "아니요, 그런 것보단 구조나 원리가 더 좋아요", value: "no" },
      { label: "잘 모르겠어요", value: "unknown" },
    ],
  },
  {
    id: 9,
    question: "숫자나 통계 보는 거 어떤가요?",
    options: [
      { label: "재미있어요, 숫자에서 의미 찾는 게 좋아요", value: "yes" },
      { label: "별로예요, 숫자만 봐도 머리 아파요", value: "no" },
      { label: "보통이에요", value: "neutral" },
    ],
  },
  {
    id: 10,
    question: "유튜브나 카카오톡이 어떻게 24시간 안 멈추고 돌아가는지 궁금한가요?",
    options: [
      { label: "네, 그런 거 어떻게 만드는지 진짜 궁금해요", value: "high" },
      { label: "조금 궁금해요", value: "medium" },
      { label: "별로요, 코드 짜는 거 자체가 더 재밌어요", value: "low" },
    ],
  },
  {
    id: 11,
    question: "엑셀 반복 작업이나 매번 하던 일을 자동으로 처리하게 만드는 거 어떤가요?",
    options: [
      { label: "엄청 좋아해요, 시간 줄이는 거 짱이에요", value: "high" },
      { label: "조금 흥미 있어요", value: "medium" },
      { label: "별로요", value: "low" },
    ],
  },
  {
    id: 12,
    question: "다음 중 더 즐거운 일은?",
    options: [
      { label: "예쁘게 꾸미고 스토리를 만드는 것", value: "creative" },
      { label: "순서대로 정리하고 효율적으로 만드는 것", value: "logical" },
      { label: "둘 다 좋아해요", value: "both" },
    ],
  },
  {
    id: 13,
    question: "평소 가장 관심 가는 분야는?",
    options: [
      { label: "예쁜 디자인, 사용하기 편한 화면", value: "design_ux" },
      { label: "주문 처리, 회원 관리 같은 시스템이 어떻게 돌아가는지", value: "backend_systems" },
      { label: "매출 데이터 분석, 통계로 결과 보기", value: "data_stats" },
      { label: "AI, 챗봇, 이미지 인식 같은 기술", value: "ai_ml" },
    ],
  },
  {
    id: 14,
    question: "지금 어떤 상황이에요?",
    options: [
      { label: "학생이에요", value: "student" },
      { label: "개발 아닌 일을 하고 있어요 (기획, 마케팅, 디자인 등)", value: "non_dev_worker" },
      { label: "취업 준비 중이에요", value: "job_seeker" },
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
      { label: "3개월 안에 빠르게 핵심만", value: "3months" },
      { label: "6개월, 기초부터 탄탄하게", value: "6months" },
      { label: "1년 이상, 깊이 있게", value: "1year" },
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
    question: "영어로 된 글 읽는 거 어떤가요?",
    options: [
      { label: "괜찮아요, 자주 읽어요", value: "comfortable" },
      { label: "번역기/AI 쓰면 할 수 있어요", value: "with_tools" },
      { label: "솔직히 좀 부담돼요", value: "uncomfortable" },
    ],
  },
  {
    id: 19,
    question: "내가 뭔가 만들 때 가장 중요하게 생각하는 건?",
    options: [
      { label: "사용하기 편하고 보기 좋게", value: "ux_design" },
      { label: "빠르고 안 멈추게", value: "performance" },
      { label: "숫자랑 근거로 정확하게", value: "data_driven" },
      { label: "자동으로 잘 돌아가고 나중에 키우기 쉽게", value: "scalability" },
    ],
  },
  {
    id: 20,
    question: "지금 코딩 경험이 어느 정도인가요?",
    options: [
      { label: "한 번도 안 해봤어요", value: "beginner" },
      { label: "유튜브 영상 보거나 기초 강의 들어봤어요", value: "basic" },
      { label: "간단한 거 직접 만들어본 적 있어요", value: "intermediate" },
      { label: "프로젝트 하나는 끝까지 완성해봤어요", value: "experienced" },
    ],
  },
];
