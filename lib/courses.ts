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
      name: "자바와 스프링 부트로 생애 최초 서버 만들기",
      type: "유료",
      description: "누구나 쉽게 개발부터 배포까지, 서버 개발 입문 올인원 패키지",
      url: "https://inf.run/vWvUt",
    },
    {
      name: "스프링과 JPA 기반 웹 애플리케이션 개발",
      type: "유료",
      description: "국내 백엔드 취업 1위 커리큘럼, 실무 스프링+JPA 완성",
      url: "https://inf.run/MntAj",
    },
    {
      name: "스프링부트를 이용한 웹 프로그래밍",
      type: "유료",
      description: "웹사이트가 만들어지는 원리를 이해하며 배우는 스프링 부트",
      url: "https://inf.run/cKgtB",
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
      name: "데이터 사이언스로 내리는 경영 의사결정 마스터클래스",
      type: "유료",
      description: "데이터 분석을 실제 비즈니스 의사결정에 적용하는 실전 강의",
      url: "https://inf.run/atEeA",
    },
    {
      name: "빅데이터분석기사 필기 올인원: 3주에 끝내는 완벽 대비",
      type: "유료",
      description: "국가공인 빅데이터분석기사 자격증 합격 커리큘럼",
      url: "https://inf.run/kfqaJ",
    },
    {
      name: "엑셀로 배우는 기초통계",
      type: "무료",
      description: "데이터 분석의 첫걸음, 엑셀로 쉽게 배우는 통계 기초",
      url: "https://inf.run/UwiqD",
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
      name: "데브옵스(DevOps)를 위한 쿠버네티스 마스터",
      type: "유료",
      description: "쿠버네티스 핵심 개념부터 실무 운영까지, DevOps 필수 강의",
      url: "https://inf.run/FDEEV",
    },
    {
      name: "AWS 전 직원이 알려주는 AWS 아키텍처 (스타트업 with AWS)",
      type: "유료",
      description: "스타트업 관점에서 배우는 실전 AWS 인프라 설계",
      url: "https://inf.run/E9Ug5",
    },
    {
      name: "[DevOps] 빠르고 안전한 배포 파이프라인(CI/CD) 만들기",
      type: "유료",
      description: "GitHub Actions, Docker, Kubernetes로 CI/CD 자동화 완성",
      url: "https://inf.run/jgq39",
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
  const courses = COURSES[field] ?? COURSES["풀스택"];
  return courses.map((c) => ({ ...c, url: c.url + UTM }));
}
