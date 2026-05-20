"use client";

import { notFound } from "next/navigation";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getGuide, GUIDES } from "../../../lib/guidance-content";

function FAQItem({ q, a, linkSlug, linkLabel }: { q: string; a: string; linkSlug?: string; linkLabel?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
      >
        <span className={`font-bold text-base transition-colors ${open ? "text-white" : "text-white/60 group-hover:text-white/90"}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-all ${
          open ? "border-purple-500 text-purple-400 rotate-45" : "border-white/20 text-white/30"
        }`}>
          +
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-white/50 leading-relaxed mb-3">{a}</p>
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

export default function GuidanceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[300px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <button
            onClick={() => router.push("/guidance")}
            className="text-white/30 text-sm hover:text-white/70 transition-colors mb-8 flex items-center gap-2"
          >
            ← 가이드 목록으로
          </button>

          <span className="inline-block text-xs px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-semibold uppercase tracking-widest mb-6">
            {guide.tag}
          </span>

          <div className="text-6xl mb-6">{guide.icon}</div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
            {guide.title}
          </h1>
          <p className="text-white/50 text-xl leading-relaxed">
            {guide.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 pb-20">
        <div className="max-w-3xl mx-auto space-y-16">

          {/* Intro */}
          <div className="border border-white/10 p-8 bg-white/[0.02]">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-4">이게 뭔가요?</p>
            <p className="text-white/70 text-lg leading-relaxed">{guide.intro}</p>
          </div>

          {/* Why */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-4">왜 써야 하나요?</p>
            <p className="text-white/70 text-lg leading-relaxed">{guide.why}</p>
          </div>

          {/* Steps */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">시작하는 법</p>
            <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
              {guide.steps.map((step, i) => (
                <div
                  key={i}
                  className="bg-black p-8 flex gap-6 group hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-purple-400 font-black text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-black text-lg mb-2">{step.title.replace(/^\d+\.\s*/, "")}</h3>
                    <p className="text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tip */}
          <div className="border border-purple-500/20 bg-purple-500/5 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-3">{guide.tipLabel}</p>
            <p className="text-white/80 leading-relaxed">{guide.tip}</p>
          </div>

          {/* Shortcuts (VS Code) */}
          {guide.shortcuts && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">꼭 외울 단축키</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {guide.shortcuts.map((s) => (
                  <div key={s.title} className="flex gap-4 p-5 bg-black">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <p className="font-black text-white text-sm mb-1">{s.title}</p>
                      <p className="text-white/40 text-xs">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Use Cases (AI 코딩) */}
          {guide.useCases && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">이렇게 써먹으세요</p>
              <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {guide.useCases.map((u) => (
                  <div key={u.title} className="p-6 bg-black">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{u.icon}</span>
                      <p className="font-black text-white">{u.title}</p>
                    </div>
                    <div className="bg-white/[0.03] border border-white/8 rounded p-4 mb-3 font-mono text-sm text-purple-300 whitespace-pre-wrap">
                      {u.prompt}
                    </div>
                    <p className="text-sm text-white/40">{u.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Commands (Git) */}
          {guide.commands && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">자주 쓰는 명령어</p>
              <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {guide.commands.map((c) => (
                  <div key={c.cmd} className="flex gap-4 p-4 bg-black items-center">
                    <code className="text-purple-400 font-mono text-sm flex-shrink-0 min-w-[200px]">{c.cmd}</code>
                    <p className="text-white/40 text-sm">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Before/After (Googling) */}
          {guide.beforeAfter && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">이렇게 검색하세요</p>
              <div className="space-y-4">
                {guide.beforeAfter.map((item, i) => (
                  <div key={i} className="border border-white/10 p-6">
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                      <div className="flex-1 p-3 bg-red-950/30 border border-red-500/20 rounded">
                        <p className="text-xs text-red-400 mb-1 uppercase tracking-wider">❌ 이렇게 말고</p>
                        <p className="text-white/60 text-sm">{item.bad}</p>
                      </div>
                      <div className="flex-1 p-3 bg-green-950/30 border border-green-500/20 rounded">
                        <p className="text-xs text-green-400 mb-1 uppercase tracking-wider">✅ 이렇게</p>
                        <p className="text-white/70 text-sm font-mono">{item.good}</p>
                      </div>
                    </div>
                    <p className="text-white/40 text-sm">— {item.why}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sites (Googling) */}
          {guide.sites && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">믿을 수 있는 사이트</p>
              <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {guide.sites.map((s) => (
                  <div key={s.name} className="flex gap-4 p-5 bg-black">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-black text-white">{s.name}</p>
                        <span className="text-xs border border-white/15 text-white/30 px-2 py-0.5">{s.tag}</span>
                      </div>
                      {s.url && <p className="text-white/30 text-xs font-mono mb-1">{s.url}</p>}
                      <p className="text-white/40 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Env Setup (Deploy) */}
          {guide.envSetup && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">환경변수 설정</p>
              <div className="border border-white/10 p-6">
                <p className="font-black text-white mb-2">{guide.envSetup.title}</p>
                <p className="text-white/40 text-sm mb-4">{guide.envSetup.desc}</p>
                <div className="space-y-2">
                  {guide.envSetup.steps.map((step, i) => (
                    <div key={i} className="flex gap-3 text-sm">
                      <span className="text-purple-400 flex-shrink-0">{i + 1}.</span>
                      <span className="text-white/50">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Domains (Deploy) */}
          {guide.domains && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">도메인 옵션</p>
              <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {guide.domains.map((d) => (
                  <div key={d.name} className="flex items-center justify-between p-5 bg-black">
                    <div>
                      <p className="font-bold text-white text-sm">{d.name}</p>
                      <p className="text-white/30 text-xs font-mono">{d.example}</p>
                    </div>
                    <span className="text-xs border border-white/15 text-white/40 px-3 py-1">{d.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Examples (AI Explain) */}
          {guide.examples && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">상황별 질문법</p>
              <div className="space-y-4">
                {guide.examples.map((e, i) => (
                  <div key={i} className="border border-white/10 p-6">
                    <p className="text-purple-400 text-sm font-bold mb-3">📌 {e.situation}</p>
                    <div className="bg-white/[0.03] border border-white/8 rounded p-4 mb-3 font-mono text-sm text-white/70 whitespace-pre-wrap">
                      {e.prompt}
                    </div>
                    <p className="text-white/30 text-xs">💡 {e.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Extra Tips */}
          {guide.extraTips && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">더 잘 쓰는 법</p>
              <div className="space-y-2">
                {guide.extraTips.map((tip, i) => (
                  <div key={i} className="flex gap-3 p-4 border border-white/10">
                    <span className="text-white/20 flex-shrink-0">—</span>
                    <p className="text-white/50 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">자주 묻는 질문</p>
            <div className="border border-white/10 px-6 divide-y divide-white/8">
              {guide.faqs.map((faq, i) => (
                <FAQItem key={i} {...faq} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Other guides */}
      <section className="bg-white/[0.02] border-t border-white/10 px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-8">다른 가이드 보기</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
            {GUIDES.filter((g) => g.slug !== slug).map((g) => (
              <button
                key={g.slug}
                onClick={() => router.push(`/guidance/${g.slug}`)}
                className="bg-black p-6 text-left group hover:bg-white/[0.03] transition-colors flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{g.icon}</span>
                <div>
                  <p className="text-white font-black mb-1 group-hover:text-purple-300 transition-colors">{g.title}</p>
                  <p className="text-white/30 text-sm">{g.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black py-24 text-center px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            내 개발 분야가<br />뭔지 모르겠다면?
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
