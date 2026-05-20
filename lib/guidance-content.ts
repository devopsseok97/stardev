export type Step = {
  title: string;
  desc: string;
};

export type FAQ = {
  q: string;
  a: string;
  linkSlug?: string;
  linkLabel?: string;
};

export type Shortcut = { icon: string; title: string; desc: string };
export type UseCase = { icon: string; title: string; prompt: string; desc: string };
export type Command = { cmd: string; desc: string };
export type BeforeAfter = { bad: string; good: string; why: string };
export type Site = { name: string; url?: string; desc: string; tag: string };
export type EnvSetup = { title: string; desc: string; steps: string[] };
export type Domain = { name: string; example: string; price: string };
export type Example = { situation: string; prompt: string; tip: string };

export type GuideContent = {
  slug: string;
  icon: string;
  tag: string;
  title: string;
  subtitle: string;
  intro: string;
  why: string;
  steps: Step[];
  tip: string;
  tipLabel: string;
  faqs: FAQ[];
  shortcuts?: Shortcut[];
  useCases?: UseCase[];
  commands?: Command[];
  beforeAfter?: BeforeAfter[];
  sites?: Site[];
  envSetup?: EnvSetup;
  domains?: Domain[];
  examples?: Example[];
  extraTips?: string[];
};

export const GUIDES: GuideContent[] = [
  {
    slug: "vscode",
    icon: "✍️",
    tag: "필수 도구",
    title: "VS Code",
    subtitle: "코딩할 때 쓰는 앱, 이걸로 시작해요",
    intro: "VS Code는 마이크로소프트가 만든 무료 코드 편집기예요. 쉽게 말하면 '개발자용 메모장'인데, 일반 메모장이랑 다른 점은 코드를 색깔별로 구분해주고, 오타를 잡아주고, AI 도우미도 붙일 수 있어요. 전 세계 개발자 대부분이 이걸 써요.",
    why: "왜 VS Code를 써야 하냐고요? 무료인 데다가 확장 프로그램(플러그인)을 설치하면 기능이 무한히 늘어나요. Claude, ChatGPT 같은 AI를 VS Code 안에서 바로 쓸 수도 있어서 입문자한테 특히 좋아요.",
    steps: [
      {
        title: "1. VS Code 다운로드",
        desc: "code.visualstudio.com 에 접속해서 Download 버튼 클릭. 내 컴퓨터 운영체제(Mac/Windows)에 맞는 버전이 자동으로 선택돼요.",
      },
      {
        title: "2. 설치하기",
        desc: "다운받은 파일을 실행하면 설치가 진행돼요. 그냥 '다음'만 눌러도 돼요. 5분이면 끝나요.",
      },
      {
        title: "3. 한국어 설정",
        desc: "VS Code 열고 왼쪽 아이콘 중 퍼즐 모양(Extensions) 클릭 → 검색창에 'Korean' 입력 → Korean Language Pack 설치. 재시작하면 한국어로 바뀌어요.",
      },
      {
        title: "4. AI 붙이기 (선택)",
        desc: "Extensions에서 'Claude' 또는 'GitHub Copilot' 검색해서 설치하면 코딩하면서 바로 AI한테 물어볼 수 있어요. 입문자한테 게임 체인저예요.",
      },
    ],
    tip: "VS Code 단축키 하나만 외우세요: Ctrl+` (백틱) 누르면 터미널(명령창)이 열려요. 여기서 코드를 실행할 수 있어요.",
    tipLabel: "꿀팁",
    faqs: [
      {
        q: "꼭 VS Code여야 하나요? 다른 편집기도 있나요?",
        a: "아니요, 꼭 VS Code일 필요는 없어요. Cursor라는 편집기도 인기가 많아요. AI가 더 강하게 통합돼 있어서 코드 자동완성이 훨씬 강력해요. 다만 입문자에겐 VS Code가 레퍼런스가 많아서 막히면 찾기 쉬워요.",
      },
      {
        q: "컴퓨터 설치 없이 온라인에서 바로 코딩할 수 없나요?",
        a: "가능해요! CodeSandbox(codesandbox.io)나 StackBlitz(stackblitz.com)에서 브라우저에서 바로 코딩할 수 있어요. 설치가 귀찮으면 여기서 시작해도 돼요. 하지만 나중엔 로컬 VS Code가 훨씬 편해요.",
      },
      {
        q: "AI를 VS Code에 붙이려면 유료인가요?",
        a: "GitHub Copilot은 월 $10이지만, Claude Code (Anthropic)는 무료로 써볼 수 있어요. 또 Cursor 편집기 자체에도 무료 AI 기능이 있어요. 처음엔 무료로 시작해도 충분해요.",
        linkSlug: "ai-coding",
        linkLabel: "AI로 코딩하는 법 →",
      },
      {
        q: "VS Code 설치했는데 첫 번째로 뭘 해야 하나요?",
        a: "한국어 팩 설치 → GitHub 연동 → AI 확장 설치 순서로 하면 돼요. 그 다음엔 간단한 HTML 파일을 만들어보는 게 제일 좋아요. 'Hello World'라고 적고 브라우저에서 열어보는 것부터 시작하세요.",
        linkSlug: "github",
        linkLabel: "GitHub 연동하는 법 →",
      },
    ],
    shortcuts: [
      { icon: "⌨️", title: "Ctrl+` (백틱)", desc: "터미널 열기. 코드 실행할 때 씀." },
      { icon: "🔍", title: "Ctrl+P", desc: "파일 빠르게 열기. 파일명 타이핑하면 바로 이동." },
      { icon: "✨", title: "Ctrl+Shift+P", desc: "명령어 팔레트. 뭐든 검색 가능." },
      { icon: "📋", title: "Alt+클릭", desc: "커서 여러 개 동시에. 같은 내용 여러 줄 한번에 수정." },
      { icon: "📦", title: "Ctrl+D", desc: "같은 단어 선택. 변수명 일괄 변경할 때 유용." },
      { icon: "🎨", title: "Shift+Alt+F", desc: "코드 자동 정렬. 지저분한 코드 한 번에 정리." },
    ],
  },
  {
    slug: "ai-coding",
    icon: "🤖",
    tag: "AI 활용 꿀팁",
    title: "AI로 코딩 오류 해결하기",
    subtitle: "오류 메시지 복붙하면 바로 해결돼요",
    intro: "코딩하다가 빨간 오류 메시지가 뜨면 처음엔 무조건 당황하게 돼요. 근데 사실 그럴 필요가 전혀 없어요. 그 오류 메시지를 Claude나 ChatGPT에 그냥 붙여넣으면 '왜 이 오류가 났는지, 어떻게 고치는지' 바로 알려줘요. 구글링보다 10배 빠르고, 내 코드에 맞게 설명해줘요.",
    why: "AI가 등장하기 전엔 오류 하나 해결하려면 구글에서 영어로 검색하고, Stack Overflow 글을 읽고, 내 코드에 맞게 수정하는 게 기본 30분이었어요. 지금은 복붙 하나로 5분 안에 해결돼요. 이걸 모르면 진짜 손해예요.",
    steps: [
      {
        title: "1. 오류 메시지 복사",
        desc: "빨간 오류 메시지가 나오면 그 텍스트를 전체 복사해요. 영어로 돼 있어도 괜찮아요. 그대로 복사하면 돼요.",
      },
      {
        title: "2. Claude.ai 또는 ChatGPT 접속",
        desc: "claude.ai 또는 chat.openai.com 에 접속해요. 둘 다 무료 플랜이 있어요.",
      },
      {
        title: "3. 이렇게 물어보기",
        desc: "\"이 오류가 왜 나는지, 어떻게 고치는지 알려줘\" + 오류 메시지 붙여넣기. 내 코드도 같이 붙여넣으면 더 정확하게 알려줘요.",
      },
      {
        title: "4. 설명도 요청하기",
        desc: "고친 코드를 받았으면 \"이게 왜 이렇게 되는지 쉽게 설명해줘\"라고 추가로 물어보세요. 단순히 복붙하는 것보다 이해하면서 배울 수 있어요.",
      },
    ],
    tip: "모르는 코드가 나오면 \"이 코드가 뭘 하는 건지 10살도 이해할 수 있게 설명해줘\"라고 물어보세요. 생각보다 훨씬 쉽게 설명해줘요.",
    tipLabel: "꿀팁",
    faqs: [
      {
        q: "Claude랑 ChatGPT 중에 뭐가 더 나아요?",
        a: "코딩 오류 해결은 둘 다 잘 해요. Claude는 코드 설명이 더 친절하고, ChatGPT는 플러그인 생태계가 넓어요. 무료로 쓴다면 둘 다 번갈아 써보고 손에 맞는 걸 쓰세요.",
        linkSlug: "ai-explain",
        linkLabel: "AI로 코드 이해하는 법 →",
      },
      {
        q: "AI가 알려준 코드 그냥 복붙해도 되나요?",
        a: "단기적으론 괜찮지만 장기적으론 이해하고 쓰는 게 훨씬 좋아요. AI한테 '이 코드 한 줄씩 설명해줘'라고 요청해보세요. 이해 없이 계속 복붙만 하면 실력이 안 늘어요.",
        linkSlug: "ai-explain",
        linkLabel: "코드 이해하는 법 →",
      },
      {
        q: "오류가 너무 많이 나와서 어디서부터 시작해야 할지 모르겠어요",
        a: "오류가 여러 개면 맨 위에서부터 하나씩 해결하세요. 보통 첫 번째 오류를 고치면 나머지가 연쇄적으로 사라지는 경우가 많아요. AI한테 '이 오류들 중에 뭐부터 고쳐야 해?'라고 물어봐도 돼요.",
      },
      {
        q: "VS Code 안에서 AI를 바로 쓸 수 있나요?",
        a: "네! VS Code에 Claude 또는 GitHub Copilot 확장을 설치하면 코드 짜다가 바로 물어볼 수 있어요. 브라우저 왔다갔다 할 필요 없어요.",
        linkSlug: "vscode",
        linkLabel: "VS Code에 AI 붙이는 법 →",
      },
    ],
    useCases: [
      {
        icon: "🐛",
        title: "오류 해결",
        prompt: "이 오류가 왜 나는지, 어떻게 고치는지 알려줘:\n\n[오류 메시지 붙여넣기]",
        desc: "에러 메시지 전체를 복붙하면 원인과 해결책을 바로 알려줘요. 구글링보다 10배 빨라요.",
      },
      {
        icon: "🤔",
        title: "코드 이해",
        prompt: "이 코드가 뭘 하는 건지 쉽게 설명해줘:\n\n[코드 붙여넣기]",
        desc: "강의에서 이해 안 되는 코드가 나오면 그냥 복붙하면 돼요.",
      },
      {
        icon: "✍️",
        title: "코드 작성",
        prompt: "Next.js에서 로그인 폼 컴포넌트 만들어줘. 이메일이랑 비밀번호 입력창, 제출 버튼 있어야 해.",
        desc: "만들고 싶은 걸 말로 설명하면 코드를 짜줘요. 최대한 구체적으로 설명할수록 좋아요.",
      },
      {
        icon: "♻️",
        title: "코드 개선",
        prompt: "이 코드 더 깔끔하게 리팩토링해줘:\n\n[코드 붙여넣기]",
        desc: "작동은 하는데 지저분한 코드를 정리해달라고 하면 돼요.",
      },
      {
        icon: "📚",
        title: "개념 질문",
        prompt: "useState랑 useEffect 차이가 뭔지 예시 코드로 설명해줘",
        desc: "용어나 개념이 헷갈릴 때 편하게 물어보면 돼요. 구글보다 훨씬 친절해요.",
      },
      {
        icon: "🔍",
        title: "코드 리뷰",
        prompt: "이 코드에서 문제가 될 수 있는 부분이 있어? 있으면 어떻게 고치면 좋을지 알려줘:\n\n[코드 붙여넣기]",
        desc: "완성한 코드를 검토받고 싶을 때 써요. 보안이나 성능 문제도 잡아줘요.",
      },
    ],
    extraTips: [
      "짧게 말하지 말고 배경 설명을 같이 해주세요. '오류 났어' 보다 'Next.js 14에서 fetch 쓸 때 이 오류 났어'가 훨씬 정확한 답을 받아요.",
      "답이 맘에 안 들면 '더 간단하게', '초보자한테 설명하듯', '다른 방법 없어?'라고 다시 물어보세요.",
      "한 번에 너무 많이 물어보지 마세요. 질문 하나씩 해결하는 게 대화가 꼬이지 않아요.",
      "AI가 틀릴 수 있어요. 특히 최신 라이브러리 버전 관련 답은 공식 문서로 교차 확인하세요.",
    ],
  },
  {
    slug: "github",
    icon: "🗂️",
    tag: "필수 도구",
    title: "GitHub",
    subtitle: "내 코드 저장하고 포트폴리오로 쓰기",
    intro: "GitHub는 코드를 저장하는 클라우드예요. 구글 드라이브가 문서를 저장하듯, GitHub는 코드를 저장해요. 근데 단순 저장 그 이상이에요. 언제 어떤 코드를 수정했는지 기록이 남고, 전 세계 개발자들과 코드를 공유할 수 있고, 취업할 때 포트폴리오로도 쓸 수 있어요. 개발자라면 반드시 만들어야 해요.",
    why: "면접관이 '포트폴리오 보여주세요'라고 하면 GitHub 링크 하나 보내면 돼요. 내가 얼마나 열심히 코딩했는지, 어떤 걸 만들었는지 한눈에 보여줄 수 있어요. 지금 당장 만들어 두는 게 나중에 도움이 돼요.",
    steps: [
      {
        title: "1. GitHub 회원가입",
        desc: "github.com 접속 → Sign up → 이메일, 비밀번호, 유저네임 입력. 유저네임은 나중에 포트폴리오 주소가 되니까 영어로 깔끔하게 만드세요.",
      },
      {
        title: "2. 첫 저장소(Repository) 만들기",
        desc: "로그인 후 오른쪽 위 + 버튼 → New repository → 이름 입력 → Create repository. 이게 내 코드를 담는 폴더예요.",
      },
      {
        title: "3. VS Code에서 연결하기",
        desc: "VS Code 터미널에서 git init → git add . → git commit -m '첫 커밋' → git push. 처음엔 복잡해 보이지만 AI한테 물어보면서 하면 30분이면 익혀요.",
      },
      {
        title: "4. 매일 커밋하는 습관",
        desc: "코드 조금 수정할 때마다 저장(커밋)하면 GitHub 잔디가 채워져요. 초록 잔디가 빼곡한 GitHub 프로필은 그 자체로 노력의 증거가 돼요.",
      },
    ],
    tip: "GitHub 프로필에 README.md 파일을 만들면 자기소개 페이지가 생겨요. '나는 이런 걸 공부하고 있어요'라고 써두면 취업할 때 인상이 좋아요.",
    tipLabel: "꿀팁",
    faqs: [
      {
        q: "GitHub 말고 다른 코드 저장 서비스도 있나요?",
        a: "GitLab, Bitbucket 같은 서비스도 있어요. 하지만 개발자 커뮤니티, 오픈소스 프로젝트 대부분이 GitHub에 있어서 취업 포트폴리오 목적이라면 GitHub가 압도적으로 유리해요.",
      },
      {
        q: "git이랑 GitHub는 다른 건가요?",
        a: "맞아요! git은 버전 관리 프로그램(내 컴퓨터에 설치하는 것)이고, GitHub는 git으로 관리한 코드를 올려두는 클라우드 서비스예요. git 없이는 GitHub를 쓸 수 없어요.",
      },
      {
        q: "GitHub에 올린 코드가 남들한테 다 보여요?",
        a: "Public으로 설정하면 보이고, Private으로 설정하면 안 보여요. 포트폴리오용 프로젝트는 Public, 회사 코드나 개인 정보 있는 건 Private으로 만드세요. 무료 플랜에서도 Private 저장소를 만들 수 있어요.",
      },
      {
        q: "GitHub에 코드 올리고 나서 사이트로 배포할 수 있나요?",
        a: "네, 바로 가능해요! Vercel과 연동하면 GitHub에 코드 올릴 때마다 자동으로 사이트가 업데이트돼요. 포트폴리오 사이트 만들기에 완벽한 조합이에요.",
        linkSlug: "deploy",
        linkLabel: "무료 배포하는 법 →",
      },
    ],
    commands: [
      { cmd: "git init", desc: "현재 폴더를 Git 저장소로 만들기" },
      { cmd: "git add .", desc: "변경된 파일 전부 스테이징" },
      { cmd: 'git commit -m "메시지"', desc: "변경사항 저장 (스냅샷 찍기)" },
      { cmd: "git push", desc: "GitHub에 올리기" },
      { cmd: "git pull", desc: "GitHub에서 최신 버전 받아오기" },
      { cmd: "git status", desc: "현재 상태 확인" },
      { cmd: "git log", desc: "커밋 히스토리 보기" },
      { cmd: "git clone [URL]", desc: "GitHub 저장소 내 컴퓨터로 복제" },
    ],
  },
  {
    slug: "googling",
    icon: "🔍",
    tag: "검색 꿀팁",
    title: "구글링 잘 하는 법",
    subtitle: "영어로 검색하면 답이 10배 많아요",
    intro: "코딩하다 막히면 구글 검색을 하게 되는데, 한국어로 검색하면 정보가 너무 적어요. 전 세계 개발자 대부분이 영어로 질문하고 답변하기 때문에, 영어로 검색하면 같은 문제를 겪은 수천 명의 해결책을 찾을 수 있어요. 영어를 못해도 괜찮아요. AI가 번역해줘요.",
    why: "예를 들어 '버튼 클릭 안 됨'을 한국어로 검색하면 결과가 몇 개 없지만, 영어로 'button click not working javascript'라고 검색하면 정확히 같은 문제를 겪은 사람의 해결책이 수십 개 나와요.",
    steps: [
      {
        title: "1. 오류 메시지는 영어 그대로 검색",
        desc: "빨간 오류 메시지가 나오면 한국어로 번역하지 말고 그대로 복붙해서 검색하세요. 'TypeError: Cannot read property of undefined' 이런 식으로요.",
      },
      {
        title: "2. Stack Overflow 답변 활용",
        desc: "검색 결과에서 stackoverflow.com 링크를 클릭하세요. 초록 체크 표시된 답변이 채택된 해결책이에요. 영어 읽기 싫으면 Claude에 붙여넣고 '번역해줘'라고 하면 돼요.",
      },
      {
        title: "3. 검색어 공식: 언어 + 뭘 하고 싶은지 + 문제",
        desc: "'javascript button click not working', 'python list 정렬 방법', 'react useState 사용법' 이런 식으로 짧고 구체적으로 검색하면 원하는 답이 바로 나와요.",
      },
      {
        title: "4. AI로 검색 결과 이해하기",
        desc: "Stack Overflow 답변이 이해 안 되면 그 내용을 Claude에 붙여넣고 '이걸 쉽게 설명해줘, 내 코드에 어떻게 적용하면 돼?'라고 물어보세요.",
      },
    ],
    tip: "검색할 때 site:stackoverflow.com 을 추가하면 Stack Overflow 결과만 나와요. 예: 'javascript array filter site:stackoverflow.com'",
    tipLabel: "꿀팁",
    faqs: [
      {
        q: "영어를 잘 못하는데 괜찮나요?",
        a: "전혀 문제없어요. 오류 메시지는 영어 그대로 복붙하면 되고, 결과가 영어로 나오면 Claude에 붙여넣고 '한국어로 번역해줘'라고 하면 돼요. 영어 실력이 전혀 없어도 구글링 충분히 할 수 있어요.",
        linkSlug: "ai-coding",
        linkLabel: "AI로 오류 해결하는 법 →",
      },
      {
        q: "구글 말고 다른 검색 방법도 있나요?",
        a: "개발자 전용 검색 도구도 있어요. Devv.ai는 AI가 개발 관련 검색 결과를 정리해줘서 구글보다 빠를 때가 있어요. 또 공식 문서(MDN, React Docs 등)를 직접 찾아보는 습관도 중요해요.",
      },
      {
        q: "검색해도 답을 못 찾을 때는 어떻게 하나요?",
        a: "그럴 땐 AI한테 직접 물어보는 게 제일 빨라요. 검색으로 못 찾는 문제도 AI는 대화하면서 해결해줘요. '이런 상황인데 어떻게 해야 해?'라고 설명하면서 물어보세요.",
        linkSlug: "ai-coding",
        linkLabel: "AI로 해결하는 법 →",
      },
      {
        q: "Stack Overflow 답변이 너무 오래됐어요. 믿어도 되나요?",
        a: "날짜 확인이 중요해요. 5년 이상 된 답변은 지금 방식이랑 다를 수 있어요. 오래된 답변을 찾으면 Claude한테 '이 방법이 지금도 유효한지'를 확인해보세요.",
      },
    ],
    beforeAfter: [
      {
        bad: "리액트 오류 해결",
        good: "React cannot read properties of undefined reading map",
        why: "오류 메시지를 영어 그대로 검색하면 Stack Overflow에서 정확한 답이 나와요.",
      },
      {
        bad: "자바스크립트 배열 중복 제거",
        good: "javascript remove duplicates from array",
        why: "영어로 검색하면 결과가 10배 많아요. MDN, Stack Overflow 같은 신뢰할 수 있는 사이트가 상단에 떠요.",
      },
      {
        bad: "CSS 가운데 정렬 안될때",
        good: "css flexbox center align items justify-content",
        why: "기술 키워드를 영어로 포함하면 공식 문서나 정확한 예시 코드가 나와요.",
      },
      {
        bad: "넥스트제이에스 이미지 최적화",
        good: "Next.js Image component optimization site:nextjs.org",
        why: "site: 연산자로 공식 문서만 검색하면 가장 정확한 정보를 얻을 수 있어요.",
      },
    ],
    sites: [
      {
        name: "Stack Overflow",
        url: "stackoverflow.com",
        desc: "오류 해결의 성지예요. 영어지만 오류 메시지 그대로 검색하면 대부분 답이 있어요.",
        tag: "오류 해결",
      },
      {
        name: "MDN Web Docs",
        url: "developer.mozilla.org/ko",
        desc: "HTML, CSS, JavaScript 공식 레퍼런스예요. 한국어도 돼요. 가장 신뢰할 수 있는 문서예요.",
        tag: "공식 문서",
      },
      {
        name: "공식 문서",
        url: "docs.각라이브러리.com",
        desc: "React, Next.js, Tailwind 등 쓰는 기술 공식 문서가 최고예요. 블로그보다 공식 문서 먼저 보세요.",
        tag: "공식 문서",
      },
      {
        name: "YouTube",
        desc: "기술 개념 이해할 때 유튜브 영상이 글보다 빨리 이해돼요. 영어 채널이면 자막 켜서 봐요.",
        tag: "영상 학습",
      },
    ],
    extraTips: [
      "오류 메시지는 영어 그대로 복붙해서 검색하세요.",
      "검색 결과에 Stack Overflow가 있으면 바로 클릭하세요.",
      "블로그 글은 날짜 확인하세요. 1년 이상 된 글은 정보가 구식일 수 있어요.",
      "공식 문서가 있으면 블로그보다 공식 문서를 먼저 보세요.",
      "이해가 안 되는 검색 결과는 AI한테 번역이랑 설명 같이 부탁하면 돼요.",
      "site:stackoverflow.com 또는 site:nextjs.org 처럼 특정 사이트만 검색할 수 있어요.",
    ],
  },
  {
    slug: "deploy",
    icon: "🌐",
    tag: "배포 꿀팁",
    title: "무료로 웹사이트 배포하기",
    subtitle: "만든 사이트를 인터넷에 올리는 법",
    intro: "코딩으로 뭔가를 만들었는데 내 컴퓨터에서만 볼 수 있다면 아쉽잖아요. Vercel이라는 서비스를 쓰면 내가 만든 웹사이트를 무료로 인터넷에 올릴 수 있어요. GitHub에 코드를 올려놓으면 Vercel이 자동으로 사이트를 만들어줘요. 주소도 생겨서 친구한테 링크 보낼 수 있어요.",
    why: "포트폴리오를 보여줄 때 '코드가 있어요'보다 '이 링크 들어가면 실제로 돌아가요'가 훨씬 임팩트 있어요. 코드 수정하면 자동으로 사이트에도 반영돼서 번거롭지도 않아요.",
    steps: [
      {
        title: "1. GitHub에 코드 올리기",
        desc: "배포하려면 먼저 코드가 GitHub에 있어야 해요. GitHub 가이드를 먼저 읽고 오세요.",
      },
      {
        title: "2. Vercel 회원가입",
        desc: "vercel.com 접속 → GitHub 계정으로 로그인 (별도 회원가입 없이 GitHub 계정 연동 가능해요).",
      },
      {
        title: "3. 프로젝트 연결",
        desc: "Add New → Project → GitHub 저장소 선택 → Deploy 클릭. 1~2분 기다리면 자동으로 배포가 완료돼요.",
      },
      {
        title: "4. 주소 확인",
        desc: "배포가 완료되면 'your-project.vercel.app' 같은 주소가 생겨요. 이 링크를 누구한테나 보내면 내가 만든 사이트를 볼 수 있어요.",
      },
    ],
    tip: "GitHub Pages라는 서비스도 있어요. HTML/CSS만 쓴다면 GitHub Pages가 더 간단해요. 저장소 설정에서 Pages 탭 클릭하면 돼요.",
    tipLabel: "꿀팁",
    faqs: [
      {
        q: "Vercel 말고 다른 무료 배포 서비스도 있나요?",
        a: "네! Netlify도 Vercel이랑 거의 같은 방식으로 쓸 수 있어요. Railway는 백엔드 서버 배포에 좋고, GitHub Pages는 HTML/CSS만 있는 정적 사이트에 적합해요. 처음엔 Vercel이 제일 쉬워요.",
      },
      {
        q: "배포하면 주소가 너무 길어요. 내 도메인 쓸 수 있나요?",
        a: "가능해요! 가비아나 Namecheap에서 도메인을 구매(연 1~2만원)하고 Vercel에 연결하면 돼요. Vercel 대시보드에서 Domains 탭에서 설정하면 10분이면 끝나요.",
      },
      {
        q: "코드 수정하면 사이트도 자동으로 바뀌나요?",
        a: "맞아요! GitHub에 코드 올리면(push) Vercel이 자동으로 감지해서 1~2분 안에 새 버전으로 배포해줘요. 수동으로 다시 올릴 필요가 없어요.",
      },
      {
        q: "GitHub에 코드가 없는데 배포할 수 있나요?",
        a: "GitHub 먼저 세팅해야 해요. GitHub에 코드를 올리는 게 Vercel 배포의 전제 조건이에요.",
        linkSlug: "github",
        linkLabel: "GitHub 사용법 보기 →",
      },
    ],
    envSetup: {
      title: "환경변수 설정하는 법",
      desc: "API 키 같은 민감한 정보는 코드에 직접 넣으면 안 돼요.",
      steps: [
        "Vercel 프로젝트 대시보드 → Settings",
        "Environment Variables 탭 클릭",
        "Key (예: ANTHROPIC_API_KEY), Value 입력",
        "Save → Redeploy",
      ],
    },
    domains: [
      { name: "Vercel 기본 도메인", example: "myproject.vercel.app", price: "무료" },
      { name: "커스텀 도메인 연결", example: "mysite.com", price: "도메인 구입비 연 1~3만원" },
    ],
  },
  {
    slug: "ai-explain",
    icon: "💬",
    tag: "AI 활용 꿀팁",
    title: "AI로 코드 이해하기",
    subtitle: "모르는 코드, AI한테 설명 시키면 끝",
    intro: "강의 따라가다 보면 이해 안 되는 코드가 나오는 게 당연해요. 예전엔 그냥 외우거나 넘어가는 수밖에 없었는데, 이제는 AI한테 물어보면 그 자리에서 바로 설명해줘요. 강사한테 직접 물어보는 것보다 더 친절하고 빠르게요.",
    why: "이해 없이 그냥 따라 치면 나중에 응용을 못 해요. AI한테 설명을 요청하면 내 수준에 맞게, 내가 원하는 방식으로 설명해줘요. '더 쉽게 설명해줘', '비유로 설명해줘' 이런 요청도 다 들어줘요.",
    steps: [
      {
        title: "1. 모르는 코드 복사",
        desc: "이해 안 되는 코드 부분을 드래그해서 복사해요. 한 줄이든 여러 줄이든 상관없어요.",
      },
      {
        title: "2. Claude.ai 접속",
        desc: "claude.ai 에 접속해서 새 대화를 시작해요. 무료 플랜으로도 충분해요.",
      },
      {
        title: "3. 이렇게 물어보기",
        desc: "\"이 코드가 뭘 하는 건지 코딩 처음 배우는 사람도 이해할 수 있게 설명해줘\" + 코드 붙여넣기. 구체적으로 요청할수록 더 좋은 설명을 받을 수 있어요.",
      },
      {
        title: "4. 계속 질문하기",
        desc: "설명을 들어도 모르면 '더 쉽게 설명해줘', '실생활 예시로 설명해줘', '이 부분만 더 자세히 설명해줘' 라고 계속 물어보면 돼요. AI는 절대 귀찮아하지 않아요.",
      },
    ],
    tip: "코드를 이해했으면 AI한테 '이 코드를 살짝 변형한 문제를 내줘'라고 해보세요. 직접 풀어보면 진짜로 이해한 건지 확인할 수 있어요.",
    tipLabel: "꿀팁",
    faqs: [
      {
        q: "AI 설명을 들었는데도 이해가 안 가요",
        a: "그럴 땐 표현을 바꿔서 다시 물어보세요. '실생활에 비유해서 설명해줘', '5살짜리한테 설명하듯이 해줘', '그림으로 그리듯이 설명해줘' 이런 식으로요. 같은 개념을 3가지 방법으로 설명받으면 보통 이해돼요.",
      },
      {
        q: "AI가 틀린 설명을 해줄 수도 있나요?",
        a: "드물지만 가능해요. 특히 최신 기술이나 특정 라이브러리 버전에서 틀릴 수 있어요. 중요한 코드라면 공식 문서(공식 홈페이지의 Docs)와 대조해보는 게 좋아요. 평소엔 AI 설명만으로 충분해요.",
      },
      {
        q: "강의가 너무 빨라서 따라가기 힘들어요",
        a: "강의는 0.75배속으로 천천히 보면서, 모르는 부분이 나올 때마다 멈추고 AI한테 물어보세요. '지금 강사가 이걸 설명하는데 이게 뭔지 모르겠어'라고 해도 돼요. 강의 따라가는 속도보다 이해하는 깊이가 훨씬 중요해요.",
      },
      {
        q: "코드 오류가 났을 때도 AI한테 물어보면 되나요?",
        a: "당연하죠! 오류 해결도 AI가 정말 잘 해줘요. 오류 메시지를 그대로 복붙하고 '이 오류가 왜 나는지, 어떻게 고치는지 알려줘'라고 하면 돼요.",
        linkSlug: "ai-coding",
        linkLabel: "AI로 오류 해결하는 법 →",
      },
    ],
    examples: [
      {
        situation: "강의 보다가 이해 안 되는 코드가 나올 때",
        prompt: "이 코드가 뭘 하는 건지 초등학생도 이해할 수 있게 설명해줘:\n\n[코드 붙여넣기]",
        tip: "'초등학생도 이해할 수 있게' 라고 하면 진짜 쉽게 설명해줘요.",
      },
      {
        situation: "용어가 이해 안 될 때",
        prompt: "클로저(closure)가 뭔지 실생활 비유로 설명해줘. 코드 예시도 같이 보여줘.",
        tip: "'실생활 비유로' 라고 하면 추상적인 개념도 쉽게 이해돼요.",
      },
      {
        situation: "코드 한 줄씩 이해하고 싶을 때",
        prompt: "이 코드 각 줄이 뭘 하는지 주석으로 달아서 설명해줘:\n\n[코드 붙여넣기]",
        tip: "주석 달아달라고 하면 코드 흐름을 한눈에 볼 수 있어요.",
      },
      {
        situation: "왜 이렇게 쓰는지 이해가 안 될 때",
        prompt: "React에서 useEffect를 왜 쓰는 건지, 안 쓰면 어떻게 되는지 비교해서 설명해줘.",
        tip: "왜 쓰는지 이해하면 외우지 않아도 자연스럽게 기억돼요.",
      },
      {
        situation: "비슷한 개념들이 헷갈릴 때",
        prompt: "var, let, const 차이를 표로 정리해줘. 언제 뭘 써야 하는지도 알려줘.",
        tip: "표로 정리해달라고 하면 비교가 한눈에 들어와요.",
      },
      {
        situation: "더 깊이 이해하고 싶을 때",
        prompt: "Promise가 내부적으로 어떻게 동작하는지 단계별로 설명해줘.",
        tip: "내부 동작을 이해하면 응용력이 훨씬 높아져요.",
      },
    ],
    extraTips: [
      "모르는 게 당연해요. 개발자도 매일 검색하고 물어봐요.",
      "AI한테 물어보는 건 부끄러운 게 아니에요. 오히려 빠르게 배우는 방법이에요.",
      "한 번 설명 듣고 이해 안 되면 '더 쉽게', '다른 방식으로' 다시 물어보세요.",
      "이해한 내용을 직접 코드로 써보는 게 진짜 실력이 되는 과정이에요.",
    ],
  },
];

export function getGuide(slug: string): GuideContent | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
