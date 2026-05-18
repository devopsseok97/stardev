export type FieldContent = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  doing: string[];
  skills: { name: string; level: "필수" | "권장" }[];
  salary: { junior: string; mid: string; senior: string };
  pros: string[];
  cons: string[];
  companies: string[];
  roadmap: { step: number; title: string; desc: string }[];
};

export const FIELDS: FieldContent[] = [
  {
    slug: "frontend",
    name: "프론트엔드",
    icon: "🎨",
    tagline: "사용자가 매일 보는 화면을 만드는 개발자",
    description:
      "프론트엔드 개발자는 웹사이트와 앱에서 사용자가 직접 눈으로 보고 손으로 조작하는 모든 화면을 만들어요. 버튼, 애니메이션, 레이아웃부터 로그인 흐름까지 — 사용자 경험을 코드로 설계하는 직군이에요.",
    doing: [
      "HTML/CSS/JavaScript로 웹 UI 구현",
      "React, Vue, Next.js 등 프레임워크 활용",
      "디자이너와 협업해 Figma 시안을 코드로 구현",
      "API 연결 및 데이터 렌더링",
      "반응형 웹 및 크로스 브라우저 대응",
      "웹 성능 최적화 (로딩 속도, 렌더링)",
    ],
    skills: [
      { name: "HTML / CSS", level: "필수" },
      { name: "JavaScript", level: "필수" },
      { name: "React / Next.js", level: "필수" },
      { name: "TypeScript", level: "권장" },
      { name: "Tailwind CSS", level: "권장" },
      { name: "Git / GitHub", level: "필수" },
      { name: "Figma 읽기", level: "권장" },
      { name: "REST API 연동", level: "필수" },
    ],
    salary: { junior: "3,000 ~ 4,500만원", mid: "4,500 ~ 7,000만원", senior: "7,000만원 ~" },
    pros: [
      "결과물이 눈에 바로 보여서 성취감이 커요",
      "디자인 감각을 코드로 표현할 수 있어요",
      "취업 수요가 많고 포트폴리오 만들기 쉬워요",
      "프리랜서 시장이 활발해요",
    ],
    cons: [
      "브라우저 호환성 이슈로 예상치 못한 버그가 많아요",
      "트렌드 변화가 빨라 계속 공부해야 해요",
      "백엔드 대비 '진입 장벽이 낮다'는 인식이 있어요",
    ],
    companies: ["카카오", "네이버", "토스", "당근마켓", "쿠팡", "배민"],
    roadmap: [
      { step: 1, title: "HTML / CSS 기초", desc: "웹 페이지 구조와 스타일링의 기초. 간단한 정적 페이지를 만들어봐요." },
      { step: 2, title: "JavaScript 핵심", desc: "변수, 함수, 이벤트, DOM 조작, 비동기 처리(async/await)를 익혀요." },
      { step: 3, title: "React + Next.js", desc: "컴포넌트 기반 개발과 상태 관리, 라우팅을 배우고 실제 프로젝트를 만들어요." },
      { step: 4, title: "포트폴리오 + 취업", desc: "실제 서비스 수준의 프로젝트 2~3개를 GitHub에 올리고, Vercel로 배포해요." },
    ],
  },
  {
    slug: "backend",
    name: "백엔드",
    icon: "⚙️",
    tagline: "서비스의 두뇌, 보이지 않는 곳에서 모든 걸 처리하는 개발자",
    description:
      "백엔드 개발자는 서버, 데이터베이스, API를 다뤄요. 로그인, 결제, 데이터 저장/조회처럼 사용자 눈에 안 보이지만 서비스의 핵심 로직을 담당해요. 대규모 트래픽을 안정적으로 처리하는 시스템을 설계하는 직군이에요.",
    doing: [
      "REST API / GraphQL 설계 및 구현",
      "데이터베이스 설계 및 쿼리 최적화",
      "사용자 인증/인가 (JWT, OAuth)",
      "서버 성능 최적화 및 캐싱",
      "외부 API 연동 (결제, 알림 등)",
      "코드 리뷰 및 테스트 작성",
    ],
    skills: [
      { name: "Node.js / Python / Java", level: "필수" },
      { name: "데이터베이스 (PostgreSQL, MySQL)", level: "필수" },
      { name: "REST API 설계", level: "필수" },
      { name: "Git / GitHub", level: "필수" },
      { name: "Docker 기초", level: "권장" },
      { name: "Redis (캐싱)", level: "권장" },
      { name: "AWS 기초", level: "권장" },
      { name: "테스트 코드 작성", level: "권장" },
    ],
    salary: { junior: "3,500 ~ 5,000만원", mid: "5,000 ~ 8,000만원", senior: "8,000만원 ~" },
    pros: [
      "논리적인 문제 해결에 집중할 수 있어요",
      "시스템 규모가 커질수록 전문성이 높아져요",
      "프론트엔드보다 연봉 레인지가 넓어요",
      "다양한 기술 스택 선택지가 있어요",
    ],
    cons: [
      "결과물이 직접 눈에 보이지 않아요",
      "초기 학습 곡선이 프론트보다 높을 수 있어요",
      "장애 발생 시 즉각 대응 부담이 있어요",
    ],
    companies: ["카카오", "네이버", "쿠팡", "토스", "라인", "삼성SDS"],
    roadmap: [
      { step: 1, title: "Python 또는 Node.js 기초", desc: "서버 사이드 언어 하나를 선택해 문법과 구조를 익혀요." },
      { step: 2, title: "데이터베이스 + API", desc: "SQL 기초, REST API 설계, CRUD 구현을 해봐요." },
      { step: 3, title: "인증 + 배포", desc: "JWT 인증, Docker 기초, 클라우드 배포(AWS/Vercel)를 익혀요." },
      { step: 4, title: "심화 + 포트폴리오", desc: "실제 서비스에 가까운 프로젝트를 완성하고 성능 최적화까지 도전해요." },
    ],
  },
  {
    slug: "ai-ml",
    name: "AI / ML",
    icon: "🤖",
    tagline: "데이터로 학습하고 스스로 판단하는 AI를 만드는 개발자",
    description:
      "AI/ML 엔지니어는 머신러닝, 딥러닝 모델을 설계하고 훈련시켜요. 이미지 인식, 자연어 처리(챗봇, 번역), 추천 시스템 등 AI가 스스로 판단하고 예측하는 기능을 만드는 분야예요. 현재 가장 빠르게 성장하는 직군이에요.",
    doing: [
      "머신러닝 모델 설계 및 학습",
      "자연어 처리(NLP) — 챗봇, 번역, 감성 분석",
      "이미지/영상 인식 모델 개발",
      "데이터 전처리 및 피처 엔지니어링",
      "모델 성능 평가 및 최적화",
      "LLM 기반 서비스 개발 (RAG, 파인튜닝)",
    ],
    skills: [
      { name: "Python", level: "필수" },
      { name: "수학/통계 기초 (선형대수, 확률)", level: "필수" },
      { name: "PyTorch / TensorFlow", level: "필수" },
      { name: "데이터 전처리 (Pandas, NumPy)", level: "필수" },
      { name: "Hugging Face", level: "권장" },
      { name: "LangChain / LlamaIndex", level: "권장" },
      { name: "클라우드 GPU (AWS, GCP)", level: "권장" },
    ],
    salary: { junior: "4,000 ~ 6,000만원", mid: "6,000 ~ 1억원", senior: "1억원 ~" },
    pros: [
      "현재 가장 수요가 많고 연봉이 높은 분야예요",
      "AI 기술 자체가 매력적이고 미래 지향적이에요",
      "연구부터 실무까지 다양한 커리어 경로가 있어요",
    ],
    cons: [
      "수학/통계 기초 없이는 진입 장벽이 높아요",
      "좋은 결과를 위해 고가의 GPU가 필요해요",
      "논문을 읽어야 하는 경우가 많아요 (영어 필수)",
    ],
    companies: ["네이버 AI Lab", "카카오 AI", "업스테이지", "뤼튼", "SK AI Center", "삼성 AI"],
    roadmap: [
      { step: 1, title: "Python + 수학 기초", desc: "Python 기본 문법과 선형대수, 확률/통계의 핵심 개념을 익혀요." },
      { step: 2, title: "머신러닝 기초", desc: "scikit-learn으로 분류·회귀·클러스터링 모델을 만들고 데이터를 다뤄봐요." },
      { step: 3, title: "딥러닝 + NLP", desc: "PyTorch로 신경망을 만들고, Hugging Face로 LLM을 다뤄봐요." },
      { step: 4, title: "프로젝트 + 논문", desc: "실제 데이터셋으로 end-to-end 프로젝트를 완성하고 캐글 대회에 참가해봐요." },
    ],
  },
  {
    slug: "data",
    name: "데이터 분석",
    icon: "📊",
    tagline: "숫자 속에서 인사이트를 발굴하는 데이터 전문가",
    description:
      "데이터 분석가는 비즈니스 데이터를 수집·정제·분석해서 의사결정에 필요한 인사이트를 뽑아내요. '왜 매출이 떨어졌는가?', '어떤 기능이 유저를 잡는가?' 같은 질문에 데이터로 답하는 직군이에요.",
    doing: [
      "SQL로 데이터 추출 및 분석",
      "대시보드 및 시각화 제작 (Tableau, Looker Studio)",
      "A/B 테스트 설계 및 분석",
      "비즈니스 지표(KPI) 정의 및 모니터링",
      "Python으로 데이터 전처리 및 통계 분석",
      "데이터 기반 의사결정 지원",
    ],
    skills: [
      { name: "SQL", level: "필수" },
      { name: "Python (Pandas)", level: "필수" },
      { name: "데이터 시각화 (Matplotlib, Seaborn)", level: "필수" },
      { name: "통계 기초", level: "필수" },
      { name: "Tableau / Looker Studio", level: "권장" },
      { name: "A/B 테스트 설계", level: "권장" },
      { name: "BigQuery / Redshift", level: "권장" },
    ],
    salary: { junior: "3,000 ~ 4,500만원", mid: "4,500 ~ 7,000만원", senior: "7,000만원 ~" },
    pros: [
      "IT 외 금융, 의료, 커머스 등 모든 산업에서 수요가 있어요",
      "코딩 비중이 상대적으로 낮아 비전공자 진입이 쉬워요",
      "비즈니스 임팩트가 직접 보여서 보람 있어요",
    ],
    cons: [
      "데이터 품질이 낮으면 분석 자체가 의미 없어요",
      "결과를 비개발자에게 설명하는 커뮤니케이션 능력이 중요해요",
      "AI/ML보다 연봉 상한이 낮은 경향이 있어요",
    ],
    companies: ["카카오", "쿠팡", "배민", "토스", "네이버", "라인플러스"],
    roadmap: [
      { step: 1, title: "SQL 마스터", desc: "SELECT, JOIN, GROUP BY, 서브쿼리까지 SQL 핵심을 완벽히 익혀요." },
      { step: 2, title: "Python + 통계", desc: "Pandas로 데이터를 다루고, 기초 통계(평균, 분산, 가설검정)를 익혀요." },
      { step: 3, title: "시각화 + 대시보드", desc: "Matplotlib/Seaborn으로 차트를 그리고, Tableau나 Looker로 대시보드를 만들어요." },
      { step: 4, title: "프로젝트 + 포트폴리오", desc: "공개 데이터셋으로 분석 프로젝트를 완성하고 인사이트를 리포트로 작성해요." },
    ],
  },
  {
    slug: "devops",
    name: "인프라 / DevOps",
    icon: "🛠️",
    tagline: "개발과 운영의 다리, 서비스가 멈추지 않게 하는 엔지니어",
    description:
      "DevOps 엔지니어는 서비스가 안정적으로 운영되도록 인프라를 설계하고 자동화해요. 배포 파이프라인, 서버 관리, 클라우드 설계, 장애 대응 — 서비스의 '지속 가동'을 책임지는 직군이에요.",
    doing: [
      "CI/CD 파이프라인 구축 (GitHub Actions, Jenkins)",
      "Docker / Kubernetes 컨테이너 운영",
      "AWS / GCP / Azure 클라우드 인프라 설계",
      "서버 모니터링 및 장애 대응",
      "배포 자동화 및 Infrastructure as Code",
      "보안 설정 및 네트워크 관리",
    ],
    skills: [
      { name: "Linux / Bash", level: "필수" },
      { name: "Docker", level: "필수" },
      { name: "AWS / GCP / Azure", level: "필수" },
      { name: "Kubernetes", level: "권장" },
      { name: "Terraform (IaC)", level: "권장" },
      { name: "GitHub Actions / CI/CD", level: "필수" },
      { name: "모니터링 (Prometheus, Grafana)", level: "권장" },
    ],
    salary: { junior: "3,500 ~ 5,000만원", mid: "5,500 ~ 9,000만원", senior: "9,000만원 ~" },
    pros: [
      "자동화를 통해 반복 작업을 없애는 게 재미있어요",
      "클라우드 전문성으로 연봉이 높아요",
      "시스템 전체를 보는 넓은 시야가 생겨요",
    ],
    cons: [
      "장애 발생 시 즉각 대응해야 하는 온콜(on-call) 부담이 있어요",
      "입문 러닝 커브가 상당히 높아요",
      "다른 직군 대비 취업 공고 수가 적어요",
    ],
    companies: ["카카오클라우드", "NHN Cloud", "네이버 클라우드", "라인", "쿠팡", "토스"],
    roadmap: [
      { step: 1, title: "Linux + 네트워크 기초", desc: "리눅스 명령어, 파일 시스템, TCP/IP 네트워크 개념을 익혀요." },
      { step: 2, title: "Docker + CI/CD", desc: "Docker로 컨테이너를 다루고, GitHub Actions로 자동 배포 파이프라인을 만들어요." },
      { step: 3, title: "클라우드 (AWS)", desc: "EC2, S3, RDS, VPC 등 AWS 핵심 서비스를 실습하고 자격증(SAA)에 도전해요." },
      { step: 4, title: "Kubernetes + 모니터링", desc: "K8s로 컨테이너 오케스트레이션을 배우고, Prometheus/Grafana로 모니터링 시스템을 구축해요." },
    ],
  },
  {
    slug: "fullstack",
    name: "풀스택",
    icon: "🚀",
    tagline: "프론트부터 백엔드까지, 혼자 서비스를 완성하는 개발자",
    description:
      "풀스택 개발자는 프론트엔드와 백엔드를 모두 다룰 수 있어요. 스타트업이나 1인 개발에 특히 유리하고, 서비스 전체 흐름을 이해하는 넓은 시야가 강점이에요. 빠르게 MVP를 만들고 싶은 분들에게 딱이에요.",
    doing: [
      "프론트엔드 UI 구현 (React/Next.js)",
      "백엔드 API 설계 및 구현",
      "데이터베이스 설계 및 관리",
      "인증, 결제 등 핵심 비즈니스 로직 구현",
      "Vercel/AWS 배포 및 운영",
      "서비스 기획부터 론칭까지 1인 진행",
    ],
    skills: [
      { name: "JavaScript / TypeScript", level: "필수" },
      { name: "React / Next.js", level: "필수" },
      { name: "Node.js / API 개발", level: "필수" },
      { name: "데이터베이스 (PostgreSQL, Supabase)", level: "필수" },
      { name: "Git / GitHub", level: "필수" },
      { name: "배포 (Vercel, AWS)", level: "권장" },
      { name: "인증 (Clerk, NextAuth)", level: "권장" },
    ],
    salary: { junior: "3,000 ~ 4,500만원", mid: "4,500 ~ 7,500만원", senior: "7,500만원 ~" },
    pros: [
      "혼자 서비스를 처음부터 끝까지 만들 수 있어요",
      "창업이나 1인 프로젝트에 최적화돼 있어요",
      "스타트업에서 특히 선호하는 포지션이에요",
    ],
    cons: [
      "프론트/백 각각의 전문가보다 깊이가 얕을 수 있어요",
      "배워야 할 범위가 넓어서 초반에 방향 잡기 어려워요",
      "대기업보다 스타트업 중심 수요예요",
    ],
    companies: ["소규모 스타트업", "인디 해커", "1인 창업자", "에이전시"],
    roadmap: [
      { step: 1, title: "HTML/CSS/JS 기초", desc: "웹 기초를 빠르게 잡아요. 정적 페이지 하나를 직접 만들어봐요." },
      { step: 2, title: "React + Next.js", desc: "컴포넌트 기반 UI와 서버 사이드 렌더링을 익혀요." },
      { step: 3, title: "백엔드 + DB", desc: "API Route, Supabase/Prisma로 데이터 저장·인증·CRUD를 구현해요." },
      { step: 4, title: "완성 + 배포", desc: "실제 유저가 쓸 수 있는 서비스를 Vercel로 배포하고 공개해요." },
    ],
  },
];

export function getField(slug: string): FieldContent | undefined {
  return FIELDS.find((f) => f.slug === slug);
}

export const FIELD_SLUG_MAP: Record<string, string> = {
  "프론트엔드": "frontend",
  "백엔드": "backend",
  "AI / ML": "ai-ml",
  "데이터 분석": "data",
  "DevOps": "devops",
  "풀스택": "fullstack",
  "Frontend": "frontend",
  "Backend": "backend",
  "Data Analytics": "data",
  "Full Stack": "fullstack",
};
