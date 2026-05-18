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
      name: "패스트캠퍼스 - 딥러닝/NLP 올인원",
      type: "유료",
      description: "파이썬부터 LLM까지, 국내 AI 강의 중 가장 넓은 커버리지",
      url: `https://fastcampus.co.kr/data_online_deep${UTM}`,
    },
    {
      name: "Coursera - Andrew Ng 머신러닝",
      type: "유료",
      description: "전 세계 AI 입문자의 필수 강의, 수료증 제공",
      url: `https://www.coursera.org/specializations/machine-learning-introduction${UTM}`,
    },
    {
      name: "Kaggle Learn",
      type: "무료",
      description: "실전 데이터셋으로 배우는 ML, 무료 수료증",
      url: `https://www.kaggle.com/learn${UTM}`,
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
};

export function getCoursesByField(field: string): Course[] {
  return COURSES[field] ?? COURSES["풀스택"];
}
