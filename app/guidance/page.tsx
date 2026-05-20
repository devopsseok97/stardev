"use client";

import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

type Resource = {
  icon: string;
  title: string;
  desc: string;
  tag: string;
  url: string;
};

type Section = {
  badge: string;
  title: string;
  desc: string;
  items: Resource[];
};

const BEGINNER: Section = {
  badge: "For Beginners",
  title: "입문자가 알면\n개이득인 꿀팁",
  desc: "몰라서 손해봤던 것들. 이것만 알아도 시작이 달라져요.",
  items: [
    {
      icon: "✍️",
      title: "VS Code — 코드 쓰는 앱, 이걸로 시작해요",
      desc: "코딩할 때 쓰는 메모장 같은 앱이에요. 무료고 전 세계 개발자 대부분이 써요. 설치하면 AI 도우미도 붙일 수 있어서 모르는 코드를 바로 물어볼 수 있어요.",
      tag: "필수 도구",
      url: "/guidance/vscode",
    },
    {
      icon: "🤖",
      title: "AI한테 코드 오류 붙여넣으면 바로 해결",
      desc: "오류 메시지가 떠도 당황하지 말고 Claude나 ChatGPT에 그냥 복붙하면 돼요. '이 오류 왜 나는지, 어떻게 고치는지' 바로 알려줘요. 구글링보다 10배 빨라요.",
      tag: "AI 활용 꿀팁",
      url: "/guidance/ai-coding",
    },
    {
      icon: "🗂️",
      title: "GitHub — 내 코드 저장하고 포트폴리오로 쓰기",
      desc: "코드를 저장하는 클라우드예요. 무료로 쓸 수 있고, 취업할 때 '내가 이런 걸 만들었어요' 포트폴리오로도 쓸 수 있어요. 개발자라면 반드시 만들어야 해요.",
      tag: "필수 도구",
      url: "/guidance/github",
    },
    {
      icon: "🔍",
      title: "구글링 꿀팁 — 영어로 검색하면 답이 10배 많다",
      desc: "한국어로 검색하면 정보가 너무 적어요. 오류 메시지는 영어 그대로 복붙해서 검색하고, Stack Overflow 사이트에서 나오는 답을 AI한테 번역 시키면 돼요.",
      tag: "검색 꿀팁",
      url: "/guidance/googling",
    },
    {
      icon: "🌐",
      title: "만든 웹사이트 무료로 인터넷에 올리기",
      desc: "Vercel이라는 서비스를 쓰면 내가 만든 사이트를 무료로 인터넷에 올릴 수 있어요. GitHub랑 연결하면 코드 수정할 때마다 자동으로 반영돼요.",
      tag: "배포 꿀팁",
      url: "/guidance/deploy",
    },
    {
      icon: "💬",
      title: "AI한테 코드 설명 시키기 — 이해 속도 3배",
      desc: "모르는 코드가 나오면 그냥 복붙하고 '이게 뭔지 쉽게 설명해줘'라고 하면 돼요. 강의 듣다가 막히는 부분도 AI한테 물어보면 강사보다 더 친절하게 설명해줘요.",
      tag: "AI 활용 꿀팁",
      url: "/guidance/ai-explain",
    },
  ],
};

const PROFESSIONAL: Section = {
  badge: "For Professionals",
  title: "현직 개발자를\n위한 리소스",
  desc: "이미 개발하고 있는 분들을 위한 커리어 성장, 연봉, 트렌드 리소스 모음.",
  items: [
    {
      icon: "📰",
      title: "코드너리 — 국내 기술 블로그 한 곳에서 보기",
      desc: "토스, 카카오, 라인, 당근 등 탑 테크 기업 기술 블로그를 한 피드에서 읽을 수 있어요. 매일 5분씩 읽으면 자연스럽게 트렌드가 쌓여요.",
      tag: "기술 블로그 모음",
      url: "https://www.codenary.co.kr/techblog/list",
    },
    {
      icon: "💬",
      title: "OKKY — 국내 최대 개발자 커뮤니티",
      desc: "회원 17만 명의 국내 최대 개발자 Q&A 사이트예요. 취업·이직 정보, 기술 질문, 연봉 이야기까지 뭐든 물어볼 수 있어요.",
      tag: "커뮤니티",
      url: "https://okky.kr/",
    },
    {
      icon: "📖",
      title: "요즘IT — 개발자 트렌드 매거진",
      desc: "개발 트렌드, 커리어 인터뷰, 실무 기술 글을 읽기 좋게 정리해줘요. 출퇴근 시간에 읽기 딱 좋은 분량이에요.",
      tag: "IT 매거진",
      url: "https://yozm.wishket.com/magazine/",
    },
    {
      icon: "🏢",
      title: "토스 기술 블로그",
      desc: "대규모 트래픽, 핀테크 설계, 디자인 시스템까지 수준 높은 글이 가득해요. '탑 회사는 어떻게 개발하나' 눈높이 올리기에 최고예요.",
      tag: "기술 블로그",
      url: "https://toss.tech/",
    },
    {
      icon: "🏢",
      title: "우아한형제들 기술 블로그",
      desc: "배달의민족 개발팀이 대규모 주문 처리, MSA 설계 실무 경험을 직접 공유해요. 백엔드·인프라에 관심 있으면 꼭 읽어야 하는 블로그예요.",
      tag: "기술 블로그",
      url: "https://techblog.woowahan.com/",
    },
    {
      icon: "📺",
      title: "개발바닥 유튜브 — 현직 CTO가 말하는 현실",
      desc: "네이버·카카오 출신 현직 CTO들이 이직, 연봉, 개발 문화를 솔직하게 얘기해요. 신입·주니어라면 진로 감 잡는 데 강력 추천해요.",
      tag: "유튜브 · 커리어",
      url: "https://www.youtube.com/channel/UCSEOUzkGNCT_29EU_vnBYjg",
    },
  ],
};

function ResourceCard({ item, dark }: { item: Resource; dark: boolean }) {
  const isInternal = item.url.startsWith("/");
  const className = `group flex gap-5 p-7 border transition-all duration-200 ${
    dark
      ? "border-white/10 hover:border-purple-500/40 hover:bg-purple-950/20 bg-black"
      : "border-black/10 hover:border-purple-400/40 hover:bg-purple-50 bg-white"
  }`;
  const inner = (
    <>
      <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
        dark ? "bg-white/8" : "bg-black/5"
      }`}>
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <h3 className={`font-black text-base ${dark ? "text-white" : "text-black"}`}>{item.title}</h3>
          <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
            dark
              ? "border-white/15 text-white/40"
              : "border-black/15 text-black/40"
          }`}>
            {item.tag}
          </span>
        </div>
        <p className={`text-sm leading-relaxed ${dark ? "text-white/40" : "text-black/50"}`}>{item.desc}</p>
      </div>
      <span className={`flex-shrink-0 text-lg transition-transform group-hover:translate-x-1 ${dark ? "text-white/20 group-hover:text-purple-400" : "text-black/20 group-hover:text-purple-500"}`}>→</span>
    </>
  );

  if (isInternal) {
    return (
      <Link href={item.url} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  );
}

const FAQS = [
  {
    q: "Python이랑 JavaScript 중에 뭐부터 배워야 하나요?",
    a: "만들고 싶은 게 뭔지에 따라 달라요. 웹사이트를 만들고 싶으면 JavaScript, 데이터 분석이나 AI에 관심 있으면 Python이에요. 둘 다 입문 난이도는 비슷하고, 뭘 골라도 기본기는 똑같이 쌓여요.",
    linkSlug: "vscode",
    linkLabel: "코딩 환경 세팅하는 법 →",
  },
  {
    q: "강의를 봐도 혼자서 코드를 못 짜겠어요. 이게 정상인가요?",
    a: "완전히 정상이에요. '강의 이해'랑 '혼자 짜기'는 완전히 달라요. 막히는 순간을 AI한테 물어보면서 해결하는 게 실력이 느는 과정이에요.",
    linkSlug: "ai-explain",
    linkLabel: "AI로 코드 이해하는 법 →",
  },
  {
    q: "ChatGPT랑 Claude 중에 코딩 질문하기 더 좋은 게 있어요?",
    a: "둘 다 잘해요. Claude는 코드 설명이 더 친절하고 맥락을 잘 기억해요. ChatGPT는 플러그인 생태계가 넓어요. 코딩 오류 해결이나 개념 이해는 Claude가 조금 더 낫다는 평이 많아요.",
    linkSlug: "ai-coding",
    linkLabel: "AI로 코딩하는 법 →",
  },
  {
    q: "배운 게 금방 까먹어요. 어떻게 해요?",
    a: "당연한 현상이에요. 코딩은 외워서 하는 게 아니라 필요할 때 찾아서 하는 거예요. 현직 개발자들도 구글링하고 AI한테 물어보면서 짜요. 문법을 외우려 하지 말고 만들면서 반복하세요.",
  },
];

function FAQItem({ q, a, linkSlug, linkLabel }: { q: string; a: string; linkSlug?: string; linkLabel?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-6 flex items-center justify-between gap-6 group"
      >
        <span className={`font-bold text-lg transition-colors ${open ? "text-white" : "text-white/60 group-hover:text-white/90"}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-sm transition-all ${
          open ? "border-purple-500 text-purple-400 rotate-45" : "border-white/20 text-white/30"
        }`}>
          +
        </span>
      </button>
      {open && (
        <div className="pb-6">
          <p className="text-white/50 leading-relaxed mb-4">{a}</p>
          {linkSlug && linkLabel && (
            <Link
              href={`/guidance/${linkSlug}`}
              className="inline-flex items-center gap-1 text-purple-400 text-sm font-bold hover:text-purple-300 transition-colors"
            >
              {linkLabel}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

function GuidanceSection({ section, dark }: { section: Section; dark: boolean }) {
  return (
    <section className={`py-28 px-8 relative overflow-hidden ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      {dark && (
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      )}
      <div className="max-w-5xl mx-auto relative z-10">
        <p className={`text-xs uppercase tracking-[0.3em] mb-4 ${dark ? "text-purple-400" : "text-purple-500"}`}>
          {section.badge}
        </p>
        <h2 className={`text-5xl md:text-6xl font-black leading-tight mb-4 whitespace-pre-line ${dark ? "text-white" : "text-black"}`}>
          {section.title}
        </h2>
        <p className={`text-lg mb-14 max-w-xl leading-relaxed ${dark ? "text-white/40" : "text-black/50"}`}>
          {section.desc}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
          {section.items.map((item) => (
            <ResourceCard key={item.title} item={item} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GuidancePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Guidance
          </p>
          <h1 className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tight mb-6">
            당신의 레벨에<br />
            <span className="gradient-text">맞는 가이드</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed mb-10">
            개발 입문자부터 현직 개발자까지, 단계에 맞는 리소스를 골랐어요.
          </p>
          <div className="flex gap-4">
            <a href="#beginner" className="px-6 py-3 rounded-full bg-white text-black font-black text-sm hover:bg-gray-100 transition-colors">
              입문자 가이드 ↓
            </a>
            <a href="#professional" className="px-6 py-3 rounded-full border border-white/20 text-white/70 font-bold text-sm hover:bg-white/10 transition-colors">
              현직자 리소스 ↓
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black border-t border-white/8 px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-4">자주 묻는 질문</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-14 leading-tight">
            많이들 궁금해하는<br />것들
          </h2>
          <div className="border border-white/10 px-8 divide-y divide-white/8">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

      <div id="beginner">
        <GuidanceSection section={BEGINNER} dark={true} />
      </div>
      <div id="professional">
        <GuidanceSection section={PROFESSIONAL} dark={false} />
      </div>

      {/* CTA */}
      <section className="relative bg-black py-32 text-center px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            아직 내 분야를<br />모르겠다면?
          </h2>
          <p className="text-white/40 mb-10">AI가 20가지 질문으로 맞춤 분야를 찾아드려요</p>
          <button
            onClick={() => router.push("/quiz")}
            className="glow-btn inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black font-black text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
          >
            무료로 진단받기 →
          </button>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-8 text-center">
        <p className="text-white/20 text-sm">StarDev · AI 개발자 적성 진단</p>
      </footer>
    </div>
  );
}
