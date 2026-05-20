"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getField, FIELDS } from "../../../lib/field-content";
import { notFound } from "next/navigation";

export default function FieldDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const field = getField(slug);

  if (!field) notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white/60 text-sm font-medium hover:bg-white hover:text-black active:scale-95 transition-all duration-200 mb-10"
          >
            ← 돌아가기
          </button>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="text-6xl mb-6">{field.icon}</div>
              <h1 className="text-6xl md:text-8xl font-black leading-[1.0] tracking-tight mb-4">
                {field.name}
              </h1>
              <p className="text-white/50 text-xl leading-relaxed max-w-xl">{field.tagline}</p>
            </div>
            <button
              onClick={() => router.push("/quiz")}
              className="glow-btn flex-shrink-0 inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-black text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              내가 이 분야인지 진단받기 →
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-8 pb-24 space-y-px">

        {/* 한 줄 설명 */}
        <div className="border border-white/10 p-10 bg-white/[0.02]">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-4">Overview</p>
          <p className="text-white/70 text-lg leading-relaxed">{field.description}</p>
        </div>

        {/* 하는 일 + 연봉 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
          <div className="border border-white/10 p-10" style={{ borderRight: "none" }}>
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-6">주로 하는 일</p>
            <ul className="space-y-3">
              {field.doing.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-white/10 p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-6">평균 연봉 (한국 기준)</p>
            <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
              {[
                { label: "주니어 (0~3년)", value: field.salary.junior },
                { label: "미드 (3~7년)", value: field.salary.mid },
                { label: "시니어 (7년+)", value: field.salary.senior },
              ].map((s) => (
                <div key={s.label} className="bg-black px-6 py-5 flex justify-between items-center">
                  <span className="text-white/40 text-sm">{s.label}</span>
                  <span className="text-white font-black">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 필요 기술 */}
        <div className="border border-white/10 p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-6">필요한 기술</p>
          <div className="flex flex-wrap gap-3">
            {field.skills.map((s) => (
              <span
                key={s.name}
                className={`px-4 py-2 text-sm font-bold border ${
                  s.level === "필수"
                    ? "border-white/30 text-white bg-white/5"
                    : "border-white/10 text-white/40"
                }`}
              >
                {s.name}
                <span className={`ml-2 text-xs ${s.level === "필수" ? "text-purple-400" : "text-white/20"}`}>
                  {s.level}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* 장단점 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
          <div className="border border-white/10 p-10" style={{ borderRight: "none" }}>
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-6">이런 점이 좋아요</p>
            <ul className="space-y-3">
              {field.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="flex-shrink-0 text-purple-400 font-black">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-white/10 p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-6">이런 점은 알아두세요</p>
            <ul className="space-y-3">
              {field.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="flex-shrink-0 text-white/20 font-black">−</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 학습 로드맵 */}
        <div className="border border-white/10 p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-2">Learning Roadmap</p>
          <h2 className="text-2xl font-black text-white mb-10">입문 학습 경로</h2>
          <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {field.roadmap.map((item) => (
              <div key={item.step} className="bg-black p-8 flex gap-6 hover:bg-white/[0.02] transition-colors">
                <div className="flex-shrink-0 w-10 h-10 border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-purple-400 font-black text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-white font-black text-lg mb-2">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 주요 채용 기업 */}
        <div className="border border-white/10 p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-6">주요 채용 기업</p>
          <div className="flex flex-wrap gap-3">
            {field.companies.map((c) => (
              <span key={c} className="px-4 py-2 border border-white/10 text-white/50 text-sm font-bold hover:border-white/30 hover:text-white/80 transition-colors">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* 다른 분야 */}
        <div className="border border-white/10 p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-8">다른 분야 보기</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
            {FIELDS.filter((f) => f.slug !== slug).map((f) => (
              <Link
                key={f.slug}
                href={`/field/${f.slug}`}
                className="bg-black p-6 flex items-center gap-4 hover:bg-white/[0.03] transition-colors group"
              >
                <span className="text-2xl flex-shrink-0">{f.icon}</span>
                <div>
                  <p className="text-white font-black group-hover:text-purple-300 transition-colors">{f.name}</p>
                  <p className="text-white/30 text-xs mt-0.5">{f.tagline.slice(0, 20)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* 하단 CTA */}
      <section className="relative bg-black border-t border-white/8 py-24 text-center px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {field.name} 분야가<br />내 길인지 확인해볼까요?
          </h2>
          <p className="text-white/40 mb-10">AI가 21가지 질문으로 나에게 맞는 분야를 정확히 진단해드려요</p>
          <button
            onClick={() => router.push("/quiz")}
            className="glow-btn inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-black text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
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
