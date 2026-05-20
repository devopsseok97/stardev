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
      name: "인프런 - HTML/CSS/JS 완성 패키지",
      type: "유료",
      description: "제로베이스부터 취업까지, 국내 최대 프론트엔드 강의",
      url: `https://www.inflearn.com/roadmaps/39${UTM}`,
    },
    {
      name: "노마드코더 - React 완성반",
      type: "유료",
      description: "실전 프로젝트 중심, 영어+한국어 자막 제공",
      url: `https://nomadcoders.co/react-for-beginners${UTM}`,
    },
    {
      name: "MDN Web Docs",
      type: "무료",
      description: "Mozilla 공식 웹 기술 레퍼런스, 가장 신뢰할 수 있는 문서",
      url: `https://developer.mozilla.org/ko${UTM}`,
    },
  ],
  "백엔드": [
    {
      name: "인프런 - 스프링 부트와 JPA 실무",
      type: "유료",
      description: "김영한님 강의, 국내 백엔드 취업 1위 커리큘럼",
      url: `https://www.inflearn.com/course/ORM-JPA-Basic${UTM}`,
    },
    {
      name: "패스트캠퍼스 - Node.js 서버 개발",
      type: "유료",
      description: "Express, TypeScript, DB 설계까지 실무 중심",
      url: `https://fastcampus.co.kr/dev_online_nodeadv${UTM}`,
    },
    {
      name: "The Odin Project",
      type: "무료",
      description: "풀스택 웹 개발 무료 커리큘럼, 글로벌 인기 1위",
      url: `https://www.theodinproject.com${UTM}`,
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
      name: "코드스테이츠 - 소프트웨어 엔지니어링 부트캠프",
      type: "유료",
      description: "6개월 풀스택, 취업 연계율 높은 국내 1위 부트캠프",
      url: `https://www.codestates.com/course/software-engineering${UTM}`,
    },
    {
      name: "노마드코더 - 풀스택 챌린지",
      type: "유료",
      description: "Next.js + Prisma + TailwindCSS, 실전 프로젝트 중심",
      url: `https://nomadcoders.co/fullstack-challenge${UTM}`,
    },
    {
      name: "freeCodeCamp",
      type: "무료",
      description: "HTML부터 React까지 3000시간 무료 커리큘럼",
      url: `https://www.freecodecamp.org${UTM}`,
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
      name: "Farm 온라인 게임 만들기 - 유니티 + AI 수익화",
      type: "무료",
      description: "유니티와 뒤끝서버로 온라인 게임을 처음부터 완성, AI 수익화까지",
      url: "https://inf.run/ek91o",
    },
    {
      name: "인프런 - Unity 6 온라인 오목 게임 만들기",
      type: "유료",
      description: "Unity + C# 서버로 멀티플레이 게임을 처음부터 끝까지 완성하는 실전 강의",
      url: "https://inf.run/kFHsN",
    },
    {
      name: "Unreal Engine 공식 학습 포털",
      type: "무료",
      description: "Unreal Engine 공식 무료 강의. 블루프린트부터 C++ 게임 개발까지",
      url: "https://dev.epicgames.com/community/unreal-engine/learning",
    },
  ],
};

export function getCoursesByField(field: string): Course[] {
  return COURSES[field] ?? COURSES["풀스택"];
}
