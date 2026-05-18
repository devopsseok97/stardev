"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { useLang } from "../context/LangContext";

export default function CommunityPage() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-20 px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="animate-fade-in-up">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              {t.community.badge}
            </p>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-6xl md:text-8xl font-black leading-[1.05] tracking-tight mb-6 whitespace-pre-line">
            {t.community.title.split("\n")[0]}<br />
            <span className="gradient-text">{t.community.title.split("\n")[1]}</span>
          </h1>

          <p className="animate-fade-in-up delay-200 text-white/40 text-lg max-w-xl leading-relaxed mb-12">
            {t.community.desc}
          </p>

          <div className="animate-fade-in-up delay-300 inline-flex items-center gap-4 px-8 py-5 border border-purple-500/20 bg-purple-500/5 rounded-2xl">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-white font-bold">{t.community.soon}</span>
            <span className="text-purple-400/60 text-sm">· {t.community.comingSoon}</span>
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="relative bg-black border-t border-white/8 py-28 px-8 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-4">{t.community.previewBadge}</p>
          <h2 className="text-5xl md:text-6xl font-black mb-16 leading-tight whitespace-pre-line">
            {t.community.previewTitle}
          </h2>

          <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {t.community.topics.map((topic) => (
              <div key={topic.category} className="bg-black">
                <div className="px-8 pt-10 pb-4 flex items-center gap-3">
                  <span className="text-2xl">{topic.icon}</span>
                  <h3 className="text-white font-black text-xl">{topic.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                  {topic.boards.map((board) => (
                    <div key={board.name} className="bg-black px-8 py-7 group hover:bg-white/[0.03] transition-colors cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1 h-1 rounded-full bg-purple-400/50 group-hover:bg-purple-400 transition-colors" />
                        <h4 className="text-white font-bold">{board.name}</h4>
                      </div>
                      <p className="text-white/30 text-sm leading-relaxed pl-3">{board.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black border-t border-white/8 py-32 text-center px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-4 whitespace-pre-line">
            {t.community.ctaTitle}
          </h2>
          <p className="text-white/40 text-lg mb-12">
            {t.community.ctaDesc}
          </p>

          {submitted ? (
            <div className="max-w-md mx-auto border border-purple-500/30 bg-purple-500/10 px-8 py-6">
              <p className="text-purple-300 font-black text-lg mb-1">등록 완료!</p>
              <p className="text-white/50 text-sm">커뮤니티 오픈 소식을 가장 먼저 알려드릴게요.</p>
            </div>
          ) : (
            <>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!email.trim()) return;
                  setSubmitting(true);
                  await fetch("/api/waitlist", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                  }).catch(() => {});
                  setSubmitted(true);
                  setSubmitting(false);
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.community.emailPlaceholder}
                  className="flex-1 px-6 py-4 rounded-full bg-white/8 border border-white/15 text-white placeholder-white/25 outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="glow-btn px-8 py-4 rounded-full bg-white text-black font-black text-sm hover:bg-gray-100 active:scale-95 transition-all duration-200 whitespace-nowrap disabled:opacity-50"
                >
                  {submitting ? "등록 중..." : t.community.emailBtn}
                </button>
              </form>
              <p className="text-white/20 text-xs mt-4">{t.community.emailSub}</p>
            </>
          )}
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-8 text-center">
        <p className="text-white/20 text-sm">{t.footer}</p>
      </footer>
    </div>
  );
}
