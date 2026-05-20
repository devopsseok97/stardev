"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "../data/questions";
import ResultPage from "../components/ResultPage";

type Answers = Record<number, string>;
type Result = {
  id?: string;
  field: string;
  reason: string;
  roadmap: { step: number; title: string; duration: string; description: string }[];
  courses: { name: string; type: string; description: string; url: string }[];
};

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];
  const progress = (currentIndex / questions.length) * 100;

  const handleSelect = async (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setLoading(true);
      setError(null);
      const formatted = questions.map((q) => ({
        question: q.question,
        answer: q.options.find((o) => o.value === newAnswers[q.id])?.label ?? "",
      }));

      try {
        const res = await fetch("/api/diagnose", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: formatted }),
        });
        const data = await res.json();
        if (data.error || !data.roadmap || !data.courses) {
          setError("분석 중 오류가 발생했어요. 다시 시도해주세요.");
          setLoading(false);
          return;
        }
        setResult(data);
      } catch {
        setError("네트워크 오류가 발생했어요. 인터넷 연결을 확인해주세요.");
      } finally {
        setLoading(false);
      }
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-sm text-center space-y-6">
          <p className="text-4xl">⚠️</p>
          <p className="text-white font-black text-xl">{error}</p>
          <button
            onClick={() => { setError(null); setLoading(false); }}
            className="w-full py-4 bg-white text-black font-black hover:bg-gray-100 transition-colors"
          >
            다시 시도하기
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-2xl space-y-6">
          {/* 헤더 스켈레톤 */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-6" />
            <p className="text-xl font-black text-white">AI가 분석 중이에요...</p>
            <p className="text-white/40 mt-2 text-sm">맞춤 로드맵을 만들고 있어요</p>
          </div>
          {/* 결과 카드 스켈레톤 */}
          <div className="bg-white/5 rounded-2xl p-8 animate-pulse">
            <div className="h-16 w-16 bg-white/10 rounded-2xl mx-auto mb-4" />
            <div className="h-6 w-40 bg-white/10 rounded-full mx-auto mb-3" />
            <div className="h-4 w-full bg-white/10 rounded-full mb-2" />
            <div className="h-4 w-3/4 bg-white/10 rounded-full mx-auto" />
          </div>
          <div className="bg-white/5 rounded-2xl p-8 space-y-4 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-9 h-9 bg-white/10 rounded-full flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 bg-white/10 rounded-full" />
                  <div className="h-3 w-full bg-white/10 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <ResultPage
        result={result}
        resultId={result.id}
        onRestart={() => {
          setResult(null);
          setCurrentIndex(0);
          setAnswers({});
          router.push("/");
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl w-full max-w-lg p-8 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {currentIndex > 0 && (
              <button
                onClick={() => setCurrentIndex(currentIndex - 1)}
                className="text-white/30 hover:text-white/70 transition-colors text-sm flex items-center gap-1"
              >
                ← 이전
              </button>
            )}
            <span className="text-white font-black text-lg">★ StarDev</span>
          </div>
          <span className="text-white/30 text-sm">{currentIndex + 1} / {questions.length}</span>
        </div>

        {/* 그라디언트 진행바 */}
        <div className="mb-8">
          <div className="w-full bg-white/10 rounded-full h-1">
            <div
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #a78bfa, #818cf8, #38bdf8)",
              }}
            />
          </div>
        </div>

        <h2 className="text-xl font-black text-white mb-6 leading-relaxed">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="w-full text-left px-5 py-4 rounded-xl border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 active:scale-[0.98] transition-all duration-200 text-white/60 hover:text-white font-medium group"
            >
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-purple-400 transition-colors flex-shrink-0" />
                {option.label}
              </span>
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-white/10 mt-8">StarDev · AI 개발자 적성 진단</p>
      </div>
    </div>
  );
}
