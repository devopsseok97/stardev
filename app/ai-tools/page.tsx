"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLang } from "../context/LangContext";
import type { ToolCategory, Tool } from "@/lib/supabase";

export default function AIToolsPage() {
  const { lang, t } = useLang();
  const [categories, setCategories] = useState<ToolCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [trendingIds, setTrendingIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetch("/api/tools")
      .then((r) => r.json())
      .then((data: ToolCategory[]) => {
        setCategories(data);
        const allTools = data.flatMap((c) => c.tools ?? []);
        const top3 = [...allTools]
          .sort((a, b) => b.click_count - a.click_count)
          .slice(0, 3)
          .filter((t) => t.click_count > 0)
          .map((t) => t.id);
        setTrendingIds(new Set(top3));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const trackClick = (tool: Tool) => {
    fetch(`/api/tools/${tool.id}/click`, { method: "POST" });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <section className="pt-32 pb-20 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="h-3 w-24 bg-white/10 rounded-full mb-4 animate-pulse" />
            <div className="h-16 w-80 bg-white/10 rounded-2xl mb-6 animate-pulse" />
            <div className="h-4 w-64 bg-white/10 rounded-full animate-pulse" />
          </div>
        </section>
        {[0, 1, 2].map((i) => (
          <section key={i} className={`py-20 px-8 ${i % 2 === 0 ? "bg-black" : "bg-white/5"}`}>
            <div className="max-w-5xl mx-auto">
              <div className="h-3 w-8 bg-white/10 rounded-full mb-2 animate-pulse" />
              <div className="h-8 w-40 bg-white/10 rounded-xl mb-10 animate-pulse" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8">
                {[0, 1, 2, 3].map((j) => (
                  <div key={j} className="bg-black p-8 flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 animate-pulse flex-shrink-0" />
                    <div className="flex-1 space-y-3">
                      <div className="h-4 w-32 bg-white/10 rounded-full animate-pulse" />
                      <div className="h-3 w-full bg-white/10 rounded-full animate-pulse" />
                      <div className="h-3 w-3/4 bg-white/10 rounded-full animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            {t.aiTools.badge}
          </p>
          <h1 className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tight mb-6">
            {t.aiTools.title}
          </h1>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed">
            {t.aiTools.desc}
          </p>
        </div>
      </section>

      {/* Tools */}
      {categories.map((cat, i) => (
        <section key={cat.id} className={`py-20 px-8 ${i % 2 === 0 ? "bg-black" : "bg-white"}`}>
          <div className="max-w-5xl mx-auto">
            <p className={`text-xs uppercase tracking-[0.3em] mb-2 ${i % 2 === 0 ? "text-white/30" : "text-black/30"}`}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className={`text-3xl font-black mb-2 ${i % 2 === 0 ? "text-white" : "text-black"}`}>
              {lang === "ko" ? cat.name_ko : cat.name_en}
            </h2>
            <p className={`text-sm mb-10 ${i % 2 === 0 ? "text-white/40" : "text-black/40"}`}>
              {lang === "ko" ? cat.desc_ko : cat.desc_en}
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-px"
              style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
            >
              {(cat.tools ?? []).map((tool) => (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick(tool)}
                  className={`group p-8 flex gap-5 transition-all duration-200 ${
                    i % 2 === 0
                      ? "bg-black hover:bg-purple-950/30 hover:border-purple-500/20"
                      : "bg-white hover:bg-purple-50"
                  } border border-transparent`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                    i % 2 === 0 ? "bg-white/10" : "bg-black/8"
                  }`}>
                    {tool.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-black text-lg ${i % 2 === 0 ? "text-white" : "text-black"}`}>
                          {tool.name}
                        </h3>
                        {trendingIds.has(tool.id) && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-white text-black font-black">
                            🔥 HOT
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <span className={`text-xs px-3 py-1 rounded-full border font-medium whitespace-nowrap ${
                          i % 2 === 0
                            ? "border-white/20 text-white/50"
                            : "border-black/20 text-black/50"
                        }`}>
                          {lang === "ko" ? tool.tag_ko : tool.tag_en}
                        </span>
                        <span className={`text-lg transition-transform group-hover:translate-x-1 ${i % 2 === 0 ? "text-white/20" : "text-black/20"}`}>→</span>
                      </div>
                    </div>
                    <p className={`text-sm leading-relaxed ${i % 2 === 0 ? "text-white/40" : "text-black/40"}`}>
                      {lang === "ko" ? tool.desc_ko : tool.desc_en}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className={`border-t py-8 text-center ${categories.length % 2 === 0 ? "bg-black border-white/10" : "bg-white border-black/10"}`}>
        <p className={`text-sm ${categories.length % 2 === 0 ? "text-white/20" : "text-black/20"}`}>{t.footer}</p>
      </footer>
    </div>
  );
}
