"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import { FAQ_CATEGORIES, searchFAQs, type FAQItem } from "../../lib/faq-content";

function FAQRow({ item, open, onToggle }: { item: FAQItem; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-6 flex items-center justify-between gap-6 group"
      >
        <span className={`font-bold text-base transition-colors ${open ? "text-white" : "text-white/60 group-hover:text-white/90"}`}>
          {item.q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center text-sm transition-all ${
          open ? "border-purple-500 text-purple-400 rotate-45" : "border-white/20 text-white/30"
        }`}>
          +
        </span>
      </button>
      {open && (
        <div className="pb-6">
          <p className="text-white/50 leading-relaxed mb-4">{item.a}</p>
          {item.linkHref && item.linkLabel && (
            <Link
              href={item.linkHref}
              className="inline-flex items-center gap-1 text-purple-400 text-sm font-bold hover:text-purple-300 transition-colors"
            >
              {item.linkLabel}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const searchResults = searchFAQs(query);
  const isSearching = query.trim().length > 0;

  const displayCategories = activeCategory
    ? FAQ_CATEGORIES.filter((c) => c.id === activeCategory)
    : FAQ_CATEGORIES;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/12 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            FAQ
          </p>
          <h1 className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tight mb-6">
            자주 묻는<br />
            <span className="gradient-text">질문들</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed mb-10">
            개발 입문자들이 가장 많이 궁금해하는 것들을 모았어요.
          </p>

          {/* 검색창 */}
          <div className="relative max-w-2xl">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 text-lg">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="궁금한 걸 검색해보세요 (예: 오류, 강의, 터미널...)"
              className="w-full pl-12 pr-6 py-5 bg-white/5 border border-white/15 text-white placeholder-white/25 outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all text-base"
            />
          </div>
        </div>
      </section>

      {/* 검색 결과 */}
      {isSearching ? (
        <section className="px-8 pb-20">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/30 text-sm mb-6">
              <span className="text-white font-bold">"{query}"</span> 검색 결과 {searchResults.length}개
            </p>
            {searchResults.length === 0 ? (
              <div className="border border-white/10 p-16 text-center">
                <p className="text-white/30 text-lg mb-2">검색 결과가 없어요</p>
                <p className="text-white/20 text-sm">다른 키워드로 검색해보세요</p>
              </div>
            ) : (
              <div className="border border-white/10 px-8">
                {searchResults.map((r, i) => (
                  <div key={i}>
                    <span className="text-xs text-purple-400/70 mt-4 block">{r.categoryIcon} {r.categoryLabel}</span>
                    <FAQRow
                      item={r.item}
                      open={openItems.has(`search-${i}`)}
                      onToggle={() => toggle(`search-${i}`)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="px-8 pb-20">
          <div className="max-w-5xl mx-auto">
            {/* 카테고리 필터 */}
            <div className="flex flex-wrap gap-2 mb-12">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-5 py-2 text-sm font-bold border transition-all ${
                  !activeCategory
                    ? "border-purple-500 text-purple-300 bg-purple-500/10"
                    : "border-white/15 text-white/40 hover:border-white/30 hover:text-white/70"
                }`}
              >
                전체
              </button>
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                  className={`px-5 py-2 text-sm font-bold border transition-all flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? "border-purple-500 text-purple-300 bg-purple-500/10"
                      : "border-white/15 text-white/40 hover:border-white/30 hover:text-white/70"
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* 카테고리별 FAQ */}
            <div className="space-y-12">
              {displayCategories.map((cat) => (
                <div key={cat.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{cat.icon}</span>
                    <h2 className="text-xl font-black text-white">{cat.label}</h2>
                    <span className="text-white/20 text-sm">{cat.items.length}개</span>
                  </div>
                  <div className="border border-white/10 px-8">
                    {cat.items.map((item, i) => (
                      <FAQRow
                        key={i}
                        item={item}
                        open={openItems.has(`${cat.id}-${i}`)}
                        onToggle={() => toggle(`${cat.id}-${i}`)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative bg-black border-t border-white/8 py-24 text-center px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-purple-600/12 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            여기 없는 질문이<br />있다면?
          </h2>
          <p className="text-white/40 mb-10">AI가 21가지 질문으로 맞춤 분야를 찾아드려요</p>
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
