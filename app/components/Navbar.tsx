"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth, useClerk } from "@clerk/nextjs";
import { useLang } from "../context/LangContext";

export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const { lang, t, toggle } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.diagnosis, desc: lang === "ko" ? "AI 개발자 적성 진단" : "AI Career Diagnosis" },
    { href: "/ai-tools", label: t.nav.aiTools, desc: lang === "ko" ? "AI 개발 도구 모음" : "AI Dev Tools" },
    { href: "/guidance", label: "Guidance", desc: lang === "ko" ? "분야별 학습 가이드" : "Learning Guide" },
    { href: "/faq", label: "FAQ", desc: lang === "ko" ? "자주 묻는 질문" : "Frequently Asked" },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-4 md:px-10 py-4">
          <Link href="/" className="text-lg md:text-xl font-black tracking-tight text-white">
            ★ StarDev
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  path === l.href ? "text-white" : "text-white/40 hover:text-white/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={toggle}
              className="px-2.5 py-1 rounded-full border border-white/20 text-white/50 text-xs font-bold hover:border-white/50 hover:text-white/80 transition-all"
            >
              {lang === "ko" ? "EN" : "한"}
            </button>

            <Link
              href="/quiz"
              className="hidden md:inline-flex px-6 py-2 rounded-full bg-white text-black text-sm font-black hover:bg-gray-100 transition-colors"
            >
              {isSignedIn ? t.nav.quizBtn : t.nav.startBtn}
            </Link>

            {isSignedIn && (
              <button
                onClick={() => signOut({ redirectUrl: "/" })}
                className="hidden md:block text-white/30 text-sm hover:text-white/70 transition-colors"
              >
                {t.nav.logout}
              </button>
            )}

            {/* 햄버거 버튼 */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              aria-label="메뉴"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* 모바일 풀스크린 메뉴 */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* 배경 오버레이 */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />

        {/* 메뉴 컨텐츠 */}
        <div className={`absolute inset-0 flex flex-col pt-20 px-6 pb-10 transition-all duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-4"}`}>

          {/* 메뉴 링크 */}
          <div className="flex-1 space-y-1 pt-4">
            {links.map((l, i) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                  path === l.href
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
              >
                <div>
                  <p className="font-black text-lg">{l.label}</p>
                  <p className="text-xs text-white/30 mt-0.5">{l.desc}</p>
                </div>
                <span className="text-white/20 group-hover:text-purple-400 transition-colors text-xl">→</span>
              </button>
            ))}
          </div>

          {/* 하단 버튼들 */}
          <div className="space-y-3">
            <button
              onClick={() => handleNav("/quiz")}
              className="w-full py-4 bg-white text-black font-black text-lg rounded-xl hover:bg-gray-100 active:scale-95 transition-all"
            >
              {isSignedIn ? t.nav.quizBtn : (lang === "ko" ? "무료로 진단받기 →" : "Start Free →")}
            </button>

            <div className="flex items-center justify-between px-1">
              <button
                onClick={toggle}
                className="text-white/40 text-sm font-medium hover:text-white transition-colors"
              >
                {lang === "ko" ? "🌐 English" : "🌐 한국어"}
              </button>

              {isSignedIn && (
                <button
                  onClick={() => { signOut({ redirectUrl: "/" }); setMenuOpen(false); }}
                  className="text-white/30 text-sm hover:text-white/60 transition-colors"
                >
                  {t.nav.logout}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
