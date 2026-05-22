"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser, SignInButton } from "@clerk/nextjs";

const FIELD_ICONS: Record<string, string> = {
  "프론트엔드": "🎨",
  "백엔드": "⚙️",
  "AI/ML": "🤖",
  "데이터 분석": "📊",
  "풀스택": "🚀",
  "인프라/DevOps": "🛠️",
  "게임": "🎮",
};

type RoadmapStep = { step: number; title: string; duration: string; description: string };
type Course = { name: string; type: string; description: string; url: string };
type Result = {
  field: string;
  reason: string;
  roadmap: RoadmapStep[];
  courses: Course[];
};

export default function SharedResult({ result, resultId }: { result: Result; resultId: string }) {
  const router = useRouter();
  const { isSignedIn } = useUser();
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined"
    ? `${window.location.origin}/result/${resultId}`
    : `${process.env.NEXT_PUBLIC_APP_URL ?? ""}/result/${resultId}`;

  const icon = FIELD_ICONS[result.field] ?? "💻";

  const handleCopy = async () => {
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

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
        <button onClick={() => router.push("/")} className="text-lg font-black tracking-tight text-white">★ StarDev</button>
        <button
          onClick={() => router.push("/quiz")}
          className="px-4 py-2 rounded-full border border-white/20 text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors"
        >
          나도 진단받기
        </button>
      </div>

      <div className="max-w-2xl mx-auto space-y-px pt-16 pb-12 px-4 md:px-6">

        {/* 결과 헤더 */}
        <div className="bg-white/5 border border-white/10 p-6 text-center">
          <div className="text-5xl mb-3">{icon}</div>
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">당신에게 맞는 분야</p>
          <h1 className="text-3xl md:text-4xl font-black mb-3">{result.field}</h1>
          <p className="text-white/90 leading-relaxed text-sm md:text-base">{result.reason}</p>
        </div>

        {isSignedIn ? (
          <>
            {/* 로드맵 */}
            <div className="bg-white/5 border border-white/10 p-5 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-1">Step by Step</p>
              <h2 className="text-lg font-black text-white mb-4">학습 로드맵</h2>
              <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {result.roadmap.map((item) => (
                  <div key={item.step} className="bg-black p-4 flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white flex items-center justify-center font-black text-sm">
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-bold text-white text-sm">{item.title}</span>
                        <span className="text-xs text-purple-400 border border-purple-500/20 px-2 py-0.5 font-medium flex-shrink-0">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 추천 강의 */}
            <div className="bg-white/5 border border-white/10 p-5 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-1">Recommended</p>
              <h2 className="text-lg font-black text-white mb-4">추천 강의</h2>
              <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {result.courses.map((course, idx) => (
                  <a
                    key={idx}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black flex gap-3 p-4 group hover:bg-purple-950/20 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-sm">
                      {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 mb-1 flex-wrap">
                        <span className="font-bold text-white text-sm leading-snug">{course.name}</span>
                        <span className={`text-xs px-2 py-0.5 font-medium border flex-shrink-0 ${
                          course.type === "무료"
                            ? "text-green-400 border-green-500/20"
                            : "text-orange-400 border-orange-500/20"
                        }`}>
                          {course.type}
                        </span>
                      </div>
                      <p className="text-xs text-white/40">{course.description}</p>
                    </div>
                    <span className="text-white/20 group-hover:text-purple-400 transition-colors flex-shrink-0">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* 공유 */}
            <div className="flex gap-3">
              <button
                onClick={handleCopy}
                className="flex-1 py-3.5 border border-white/20 text-gray-300 font-bold text-sm hover:bg-white/10 transition-all duration-200"
              >
                {copied ? "✅ 복사됨!" : "🔗 결과 공유하기"}
              </button>
              <button
                onClick={() => router.push("/quiz")}
                className="flex-1 py-3.5 bg-white text-black font-bold text-sm hover:bg-gray-100 transition-all duration-200"
              >
                다시 진단하기 →
              </button>
            </div>
          </>
        ) : (
          /* 비로그인: 블러 + 로그인 CTA */
          <div className="relative">
            <div className="space-y-px pointer-events-none select-none blur-sm opacity-30">
              <div className="bg-white/5 border border-white/10 p-5">
                <h2 className="text-lg font-black text-white mb-4">학습 로드맵</h2>
                <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-black p-4 flex gap-3">
                      <div className="w-8 h-8 bg-purple-600" />
                      <div className="flex-1 h-8 bg-white/10" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 h-36" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/95 border border-white/20 p-7 text-center max-w-xs mx-4">
                <p className="text-3xl mb-4">🔒</p>
                <h3 className="text-white font-black text-xl mb-2">로그인하면 전체 공개!</h3>
                <p className="text-white/40 text-sm mb-6 leading-relaxed">
                  맞춤 로드맵, 추천 강의, 공유 URL까지<br />모두 무료로 확인할 수 있어요.
                </p>
                <SignInButton mode="modal" forceRedirectUrl={`/result/${resultId}`}>
                  <button className="w-full py-3 bg-white text-black font-black text-base hover:bg-gray-100 active:scale-95 transition-all duration-200">
                    Google로 무료 로그인
                  </button>
                </SignInButton>
              </div>
            </div>
          </div>
        )}

        {/* 나도 진단받기 CTA */}
        <div className="bg-white/5 border border-white/10 p-6 text-center">
          <p className="text-white font-black text-lg mb-2">나는 어떤 개발자 유형일까?</p>
          <p className="text-white/40 text-sm mb-5">AI가 21가지 질문으로 맞춤 분야와 로드맵을 알려드려요</p>
          <button
            onClick={() => router.push("/quiz")}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-black text-base hover:bg-gray-100 active:scale-95 transition-all duration-200"
          >
            무료로 진단받기 →
          </button>
        </div>

        <p className="text-center text-xs text-white/20 py-4">StarDev · AI 개발자 적성 진단</p>
      </div>
    </div>
  );
}
