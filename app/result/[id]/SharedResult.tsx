"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const FIELD_ICONS: Record<string, string> = {
  "프론트엔드": "🎨",
  "백엔드": "⚙️",
  "AI/ML": "🤖",
  "데이터 분석": "📊",
  "풀스택": "🚀",
  "인프라/DevOps": "🛠️",
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
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/80 backdrop-blur-md border-b border-white/10">
        <span className="text-xl font-black tracking-tight">★ StarDev</span>
        <button
          onClick={() => router.push("/quiz")}
          className="px-5 py-2 rounded-full border border-white/20 text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors"
        >
          나도 진단받기
        </button>
      </div>

      <div className="max-w-2xl mx-auto space-y-6 pt-20">
        <p className="text-center text-white/30 text-xs uppercase tracking-widest">친구가 공유한 결과</p>

        {/* 결과 헤더 */}
        <div className="bg-white/5 border border-white/10 p-8 text-center">
          <div className="text-6xl mb-4">{icon}</div>
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">이 사람에게 맞는 분야</p>
          <h1 className="text-4xl font-black mb-4">{result.field}</h1>
          <p className="text-white/90 leading-relaxed">{result.reason}</p>
        </div>

        {/* 로드맵 */}
        <div className="bg-white/5 border border-white/10 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-2">Step by Step</p>
          <h2 className="text-xl font-black text-white mb-6">학습 로드맵</h2>
          <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {result.roadmap.map((item) => (
              <div key={item.step} className="bg-black p-6 flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 bg-purple-600 text-white flex items-center justify-center font-black text-sm">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
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
        <div className="bg-white/5 border border-white/10 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-2">Recommended</p>
          <h2 className="text-xl font-black text-white mb-6">추천 강의 / 부트캠프</h2>
          <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {result.courses.map((course, idx) => (
              <a
                key={idx}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black flex gap-4 p-6 group hover:bg-purple-950/20 transition-all duration-200"
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

        {/* 나도 진단받기 CTA */}
        <div className="bg-white/5 border border-white/10 p-8 text-center">
          <p className="text-white font-black text-xl mb-2">나는 어떤 개발자 유형일까?</p>
          <p className="text-white/40 text-sm mb-6">AI가 21가지 질문으로 맞춤 분야와 로드맵을 알려드려요</p>
          <button
            onClick={() => router.push("/quiz")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-black text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
          >
            무료로 진단받기 →
          </button>
        </div>

        <div className="flex gap-3 pb-4">
          <button
            onClick={handleCopy}
            className="flex-1 py-4 border border-white/20 text-gray-300 font-bold hover:bg-white/10 transition-all duration-200"
          >
            {copied ? "✅ 링크 복사됨!" : "🔗 이 결과 공유하기"}
          </button>
        </div>

        <p className="text-center text-xs text-white/20 pb-4">StarDev · AI 개발자 적성 진단</p>
      </div>
    </div>
  );
}
