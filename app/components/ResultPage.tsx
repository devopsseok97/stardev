"use client";

import { useState } from "react";
import { useUser, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

type RoadmapStep = {
  step: number;
  title: string;
  duration: string;
  description: string;
};

type Course = {
  name: string;
  type: string;
  description: string;
  url: string;
};

type Result = {
  field: string;
  reason: string;
  mbtiType?: string | null;
  mbtiTitle?: string | null;
  mbtiDesc?: string | null;
  roadmap: RoadmapStep[];
  courses: Course[];
};

const FIELD_GRADIENT: Record<string, string> = {
  "프론트엔드": "from-pink-600 to-rose-700",
  "백엔드": "from-blue-600 to-indigo-700",
  "AI/ML": "from-purple-600 to-violet-700",
  "데이터 분석": "from-orange-500 to-amber-600",
  "풀스택": "from-emerald-500 to-teal-700",
  "인프라/DevOps": "from-slate-500 to-gray-700",
};

const FIELD_ICONS: Record<string, string> = {
  "프론트엔드": "🎨",
  "백엔드": "⚙️",
  "AI/ML": "🤖",
  "데이터 분석": "📊",
  "풀스택": "🚀",
  "인프라/DevOps": "🛠️",
};

export default function ResultPage({
  result,
  resultId,
  onRestart,
}: {
  result: Result;
  resultId?: string;
  onRestart: () => void;
}) {
  const { isSignedIn } = useUser();
  const [copied, setCopied] = useState(false);

  const shareUrl = resultId
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/result/${resultId}`
    : "";

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      const el = document.createElement("textarea");
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const icon = FIELD_ICONS[result.field] ?? "💻";
  const gradient = FIELD_GRADIENT[result.field] ?? "from-purple-600 to-blue-700";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-black/90 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-xl font-black tracking-tight text-white">★ StarDev</Link>
        <button
          onClick={onRestart}
          className="px-6 py-2.5 rounded-full border border-white/20 text-white/50 text-sm font-medium hover:text-white hover:border-white/50 transition-all"
        >
          다시 진단하기
        </button>
      </div>

      <div className="max-w-3xl mx-auto pt-28 pb-20 px-8 space-y-px">

        {/* 결과 헤더 */}
        <div className={`bg-gradient-to-br ${gradient} p-10 relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="relative z-10">
            <p className="text-white/60 text-xs uppercase tracking-[0.3em] mb-6">당신에게 맞는 분야</p>
            <div className="text-5xl mb-4">{icon}</div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">{result.field}</h1>
            <p className="text-white/80 leading-relaxed text-lg max-w-xl">{result.reason}</p>
          </div>
        </div>

        {/* MBTI 개발자 성향 카드 */}
        {result.mbtiType && result.mbtiTitle && (
          <div className="bg-black border border-white/10 p-10" style={{ borderTop: "none" }}>
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-2">Developer MBTI</p>
            <h2 className="text-2xl font-black text-white mb-8">나의 개발자 성향 타입</h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* MBTI 코드 뱃지 */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-28 h-28 border border-purple-500/40 bg-purple-500/10">
                <span className="text-3xl font-black text-white tracking-widest">{result.mbtiType}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-white mb-3">{result.mbtiTitle}</h3>
                {result.mbtiDesc && (
                  <p className="text-white/50 leading-relaxed">{result.mbtiDesc}</p>
                )}
                {/* MBTI 글자 설명 */}
                <div className="flex gap-2 mt-5 flex-wrap">
                  {result.mbtiType.split("").map((letter, i) => {
                    const desc: Record<string, string> = {
                      I: "내향형", E: "외향형",
                      N: "직관형", S: "현실형",
                      T: "사고형", F: "감정형",
                      J: "계획형", P: "탐색형",
                    };
                    return (
                      <span key={i} className="px-3 py-1.5 border border-white/15 text-xs font-bold text-white/60">
                        {letter} · {desc[letter] ?? letter}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {isSignedIn ? (
          <>
            {/* 로드맵 */}
            <div className="bg-black border border-white/10 p-10" style={{ borderTop: "none" }}>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-2">Step by Step</p>
              <h2 className="text-2xl font-black text-white mb-10">학습 로드맵</h2>
              <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {result.roadmap.map((item) => (
                  <div key={item.step} className="bg-black p-6 flex gap-5 group hover:bg-white/[0.02] transition-colors">
                    <div className="flex-shrink-0 w-9 h-9 bg-purple-600 text-white flex items-center justify-center font-black text-sm">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-bold text-white">{item.title}</span>
                        <span className="text-xs text-purple-400 border border-purple-500/20 px-2 py-0.5 font-medium">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 추천 강의 */}
            <div className="bg-black border border-white/10 p-10" style={{ borderTop: "none" }}>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-2">Recommended</p>
              <h2 className="text-2xl font-black text-white mb-10">추천 강의 · 부트캠프</h2>
              <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {result.courses.map((course, idx) => (
                  <a
                    key={idx}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black flex gap-5 p-6 group hover:bg-purple-950/20 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                      {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-bold text-white">{course.name}</span>
                        <span className={`text-xs px-2 py-0.5 font-medium border ${
                          course.type === "무료"
                            ? "text-green-400 border-green-500/20"
                            : "text-orange-400 border-orange-500/20"
                        }`}>
                          {course.type}
                        </span>
                      </div>
                      <p className="text-sm text-white/40">{course.description}</p>
                    </div>
                    <span className="text-white/20 group-hover:text-purple-400 transition-colors flex-shrink-0 text-lg">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* 공유 */}
            {resultId && (
              <div className="bg-black border border-white/10 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ borderTop: "none" }}>
                <div className="flex-1 min-w-0">
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">내 결과 공유하기</p>
                  <p className="text-white/50 text-sm truncate">{shareUrl}</p>
                </div>
                <button
                  onClick={handleShare}
                  className="flex-shrink-0 px-8 py-3 border border-white/20 text-white/60 font-bold text-sm hover:border-purple-500/40 hover:text-white hover:bg-purple-500/5 transition-all duration-200"
                >
                  {copied ? "✅ 복사됨" : "🔗 링크 복사"}
                </button>
              </div>
            )}
          </>
        ) : (
          /* 비로그인: 블러 + 로그인 CTA */
          <div className="relative" style={{ borderTop: "none" }}>
            <div className="space-y-px pointer-events-none select-none blur-sm opacity-30">
              <div className="bg-black border border-white/10 p-10">
                <h2 className="text-2xl font-black text-white mb-8">학습 로드맵</h2>
                <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-black p-6 flex gap-5">
                      <div className="w-9 h-9 bg-purple-600" />
                      <div className="flex-1 h-10 bg-white/10" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black border border-white/10 p-10 h-52" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/95 border border-white/20 p-10 text-center max-w-sm mx-4">
                <p className="text-4xl mb-5">🔒</p>
                <h3 className="text-white font-black text-2xl mb-3">로그인하면 전체 공개!</h3>
                <p className="text-white/40 text-sm mb-8 leading-relaxed">
                  맞춤 로드맵, 추천 강의, 공유 URL까지<br />모두 무료로 확인할 수 있어요.
                </p>
                <SignInButton mode="modal">
                  <button className="w-full py-4 bg-white text-black font-black text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200">
                    Google로 무료 로그인
                  </button>
                </SignInButton>
              </div>
            </div>
          </div>
        )}

        <div className="pt-6 flex gap-3">
          <button
            onClick={onRestart}
            className="flex-1 py-4 border border-white/20 text-white/60 font-bold hover:bg-white/5 hover:text-white transition-all duration-200 text-sm"
          >
            🔄 다시 진단하기
          </button>
          <Link
            href="/guidance"
            className="flex-1 py-4 bg-purple-600 text-white font-bold hover:bg-purple-700 transition-colors duration-200 text-sm text-center"
          >
            학습 가이드 보기 →
          </Link>
        </div>

      </div>

      <footer className="bg-black border-t border-white/10 py-8 text-center">
        <p className="text-white/20 text-sm">StarDev · AI 개발자 적성 진단</p>
      </footer>
    </div>
  );
}
