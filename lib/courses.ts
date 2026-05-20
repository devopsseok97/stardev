const UTM = "?utm_source=stardev&utm_medium=referral&utm_campaign=quiz_result";

export type Course = {
  name: string;
  type: "무료" | "유료";
  description: string;
  url: string;
};

// 어필리에이트 수익화 안내:
// - 인프런 파트너스: https://www.inflearn.com/affiliates
// - 패스트캠퍼스: https://fastcampus.co.kr/partner
// - Udemy 어필리에이트: https://www.udemy.com/affiliate
// 위 프로그램에 등록 후 아래 URL을 각 어필리에이트 링크로 교체하세요.

const COURSES: Record<string, Course[]> = {
  "프론트엔드": [
    {
      name: "프론트엔드 실전 로드맵: Zero to One (취업 가이드)",
      type: "유료",
      description: "입문부터 취업까지 한 번에, 실전 중심 프론트엔드 완성 로드맵",
      url: "https://inf.run/19upS",
    },
    {
      name: "프론트엔드 마스터클래스",
      type: "유료",
      description: "HTML/CSS/JS/React를 실무 수준으로 끌어올리는 마스터클래스",
      url: "https://inf.run/LkoU1",
    },
    {
      name: "[코드캠프] 부트캠프에서 만든 완벽한 프론트엔드 코스",
      type: "유료",
      description: "부트캠프 커리큘럼 그대로, 처음부터 포트폴리오까지",
      url: "https://inf.run/qB9i4",
    },
  ],
  "백엔드": [
    {
      name: "스프링과 JPA 기반 웹 애플리케이션 개발",
      type: "유료",
      description: "국내 백엔드 취업 1위 커리큘럼, 실무 스프링+JPA 완성",
      url: "https://inf.run/MntAj",
    },
    {
      name: "Salesforce APEX 실무",
      type: "무료",
      description: "글로벌 CRM 플랫폼 Salesforce 개발 실무, 무료로 시작",
      url: "https://inf.run/Druc8",
    },
  ],
  "AI/ML": [
    {
      name: "클로드로 시작하는 바이브코딩 입문부터 실전까지",
      type: "무료",
      description: "AI 코딩 도구 Claude로 코딩을 처음 배우는 입문자 최적 강의",
      url: "https://inf.run/yDmA7",
    },
    {
      name: "프롬프트 엔지니어링 완전 정복",
      type: "무료",
      description: "AI를 제대로 쓰는 핵심 기술, 프롬프트 설계부터 실전 활용까지",
      url: "https://inf.run/LkvRN",
    },
    {
      name: "바이브코딩으로 월급의 10배 버는 기술",
      type: "유료",
      description: "AI 툴로 실제 수익을 만드는 실전 바이브코딩 강의",
      url: "https://inf.run/sxJiP",
    },
    {
      name: "직장인을 위한 ChatGPT & 생성형 AI 업무 효율화",
      type: "무료",
      description: "AI 툴로 업무 생산성을 극대화하는 실용 강의",
      url: "https://inf.run/fEEdN",
    },
  ],
  "데이터 분석": [
    {
      name: "인프런 - 파이썬 데이터 분석 실무",
      type: "유료",
      description: "판다스, 시각화, SQL까지 데이터 분석가 취업 코스",
      url: `https://www.inflearn.com/roadmaps/236${UTM}`,
    },
    {
      name: "패스트캠퍼스 - 데이터 분석 부트캠프",
      type: "유료",
      description: "3개월 집중 과정, 취업 연계 지원",
      url: `https://fastcampus.co.kr/data_camp_da${UTM}`,
    },
    {
      name: "Google Data Analytics Certificate",
      type: "유료",
      description: "구글 공식 데이터 분석 자격증, 링크드인 배지 제공",
      url: `https://www.coursera.org/professional-certificates/google-data-analytics${UTM}`,
    },
  ],
  "풀스택": [
    {
      name: "350개 개인앱 만들고 월급 7배 수익 달성하는 방법",
      type: "유료",
      description: "앱 개발부터 실제 수익화까지, 혼자서 서비스를 완성하는 실전 강의",
      url: "https://inf.run/RWM9t",
    },
    {
      name: "AI 개발팀 운영 + 결제 수익화 웹서비스 런칭",
      type: "유료",
      description: "AI로 팀 운영하며 Next.js + 결제 연동까지, 실전 수익화 강의",
      url: "https://inf.run/5xHbM",
    },
    {
      name: "바이브코딩으로 월급의 10배 버는 기술",
      type: "유료",
      description: "AI 툴로 실제 수익을 만드는 실전 바이브코딩 강의",
      url: "https://inf.run/sxJiP",
    },
  ],
  "인프라/DevOps": [
    {
      name: "Udemy - Docker & Kubernetes 완전정복",
      type: "유료",
      description: "글로벌 베스트셀러, 실습 위주 DevOps 강의",
      url: `https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide${UTM}`,
    },
    {
      name: "AWS Skill Builder",
      type: "유료",
      description: "AWS 공식 학습 플랫폼, SAA 자격증 준비 최적",
      url: `https://explore.skillbuilder.aws${UTM}`,
    },
    {
      name: "Linux Foundation - 무료 강의",
      type: "무료",
      description: "리눅스, 쿠버네티스 공식 무료 입문 강의",
      url: `https://training.linuxfoundation.org/resources/?_sft_content_type=free-course${UTM}`,
    },
  ],
  "게임": [
    {
      name: "게임 프로그래머 입문 올인원: C++ & 자료구조 & 게임 서버",
      type: "유료",
      description: "C++부터 자료구조, 알고리즘, 게임 수학, 서버까지 게임 개발 전체를 한 번에",
      url: "https://inf.run/fo1SQ",
    },
    {
      name: "Farm 온라인 게임 만들기 - 유니티 + AI 수익화",
      type: "무료",
      description: "유니티와 뒤끝서버로 온라인 게임을 처음부터 완성, AI 수익화까지",
      url: "https://inf.run/ek91o",
    },
    {
      name: "Unity WebGL 디지털트윈 프로젝트 실전",
      type: "유료",
      description: "CAD 3D 자동 변환과 실시간 공간 생성, Unity 실전 프로젝트",
      url: "https://inf.run/FCdMs",
    },
  ],
};

export function getCoursesByField(field: string): Course[] {
  return COURSES[field] ?? COURSES["풀스택"];
}
