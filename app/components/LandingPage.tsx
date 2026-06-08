"use client";

import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import { useLang } from "../context/LangContext";
import { FrontendIcon, BackendIcon, AIMLIcon, DataIcon, DevOpsIcon, FullstackIcon, GameIcon } from "./FieldIcons";
import { FIELD_SLUG_MAP } from "../../lib/field-content";

export default function LandingPage() {
  const router = useRouter();
  const { lang, t } = useLang();
  const onStart = () => router.push("/quiz");

  const FIELD_ICONS = [FrontendIcon, BackendIcon, AIMLIcon, DataIcon, DevOpsIcon, FullstackIcon, GameIcon];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* 배경 그리드 */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-8 text-center">
          <div className="animate-fade-in-up">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6 md:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              {lang === "ko" ? "AI 개발자 적성 진단" : "AI Developer Career Diagnosis"}
            </p>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-8xl font-black leading-[1.05] tracking-tight mb-6 md:mb-8">
            {lang === "ko" ? (
              <>
                개발자의 길,<br />
                <span className="gradient-text">나에게 맞게</span><br />
                설계됩니다.
              </>
            ) : (
              <>
                Your Dev Path,<br />
                <span className="gradient-text">Designed</span><br />
                For You.
              </>
            )}
          </h1>

          <p className="animate-fade-in-up delay-200 text-white/50 text-base md:text-xl max-w-xl mx-auto leading-relaxed mb-8 md:mb-12 whitespace-pre-line">
            {lang === "ko"
              ? "20가지 질문으로 당신의 강점을 분석하고\nAI가 최적의 개발 분야와 로드맵을 설계해드려요."
              : "20 questions. AI analysis. Your personalized\ndevelopment roadmap — in under 3 minutes."}
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-col items-center gap-4">
            <button
              onClick={onStart}
              className="glow-btn inline-flex items-center gap-3 px-12 py-5 rounded-full bg-white text-black font-black text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              {lang === "ko" ? "무료로 진단받기 →" : "Start Free Diagnosis →"}
            </button>
            <p className="text-white/20 text-xs">
              {lang === "ko" ? "완전 무료 · 2분 소요 · 간편 로그인으로 전체 결과 확인" : "Free · 2 min · Quick login to unlock full results"}
            </p>
          </div>

          {/* 분야 태그 */}
          <div className="animate-fade-in-up delay-400 flex flex-wrap justify-center gap-3 mt-16">
            {(lang === "ko"
              ? ["프론트엔드", "백엔드", "AI / ML", "데이터 분석", "DevOps", "풀스택", "게임"]
              : ["Frontend", "Backend", "AI / ML", "Data Analytics", "DevOps", "Full Stack", "Game"]
            ).map((f) => {
              const slug = FIELD_SLUG_MAP[f];
              return (
                <span
                  key={f}
                  onClick={() => slug ? router.push(`/field/${slug}`) : onStart()}
                  className="px-4 py-2 rounded-full border border-white/10 text-white/40 text-sm font-medium hover:border-purple-500/50 hover:text-white/80 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer"
                >
                  {f}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ HOW IT WORKS ━━━ */}
      <section className="bg-white text-black py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-black/30 text-xs uppercase tracking-[0.3em] mb-4">{t.landing.howBadge}</p>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-20 whitespace-pre-line">
            {t.landing.howTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
            {t.landing.steps.map((step) => (
              <div key={step.num} className="bg-white p-10 group hover:bg-black/[0.02] transition-colors duration-300">
                <p className="text-8xl font-black text-black/8 mb-6 leading-none group-hover:text-black/12 transition-colors">{step.num}</p>
                <h3 className="text-black font-black text-xl mb-3">{step.title}</h3>
                <p className="text-black/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ 분야 카드 ━━━ */}
      <section className="relative bg-black text-white py-32 px-8 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-4">{t.landing.fieldBadge}</p>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-16 whitespace-pre-line">
            {t.landing.fieldTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
            {t.fields.map((f, i) => {
              const Icon = FIELD_ICONS[i];
              const slug = FIELD_SLUG_MAP[f.name];
              const isLastAlone = i === t.fields.length - 1 && t.fields.length % 3 !== 0;
              return (
                <div
                  key={f.name}
                  onClick={() => slug ? router.push(`/field/${slug}`) : onStart()}
                  className={`card-hover bg-black p-8 group cursor-pointer border border-transparent hover:bg-white/5 transition-all duration-300 ${isLastAlone ? "col-span-2 md:col-span-3" : ""}`}
                >
                  <div className="w-10 h-10 text-white/20 group-hover:text-purple-400 transition-colors duration-300 mb-5">
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-white font-black text-xl mb-3">{f.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{f.desc}</p>
                  <span className="text-purple-400/60 text-xs font-bold group-hover:text-purple-400 transition-colors">
                    {lang === "ko" ? "자세히 보기 →" : "Learn more →"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ WHY STARDEV ━━━ */}
      <section className="bg-white text-black py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-black/30 text-xs uppercase tracking-[0.3em] mb-4">{t.landing.whyBadge}</p>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">{t.landing.whyTitle}</h2>
          <p className="text-black/50 text-lg leading-relaxed mb-20 max-w-2xl whitespace-pre-line">
            {t.landing.whyDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 mb-20">
            {t.landing.stats.map((s) => (
              <div key={s.value} className="bg-white py-16 text-center group hover:bg-black/[0.02] transition-colors">
                <p className="text-7xl font-black text-black mb-3 group-hover:scale-110 transition-transform duration-300">{s.value}</p>
                <p className="text-black/40 text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.landing.reasons.map((r) => (
              <div key={r.title} className="group">
                <p className="text-3xl mb-5 inline-block group-hover:scale-110 transition-transform duration-300">{r.icon}</p>
                <h3 className="font-black text-xl mb-3">{r.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="relative bg-black text-white py-40 text-center px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tight mb-4 whitespace-pre-line">
            {t.landing.ctaTitle}
          </h2>
          <p className="text-white/40 text-lg mb-14">{t.landing.ctaSub2}</p>
          <button
            onClick={onStart}
            className="glow-btn inline-flex items-center gap-3 px-14 py-6 rounded-full bg-white text-black font-black text-xl hover:bg-gray-100 active:scale-95 transition-all duration-200"
          >
            {lang === "ko" ? "무료로 진단받기 →" : "Start Free →"}
          </button>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-8 text-center">
        <p className="text-white/20 text-sm">{t.footer}</p>
      </footer>
    </div>
  );
}
