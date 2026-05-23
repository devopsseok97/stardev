"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth, useClerk } from "@clerk/nextjs";
import { useLang } from "../context/LangContext";

export default function Navbar() {
  const path = usePathname();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const { lang, t, toggle } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.diagnosis },
    { href: "/ai-tools", label: t.nav.aiTools },
    { href: "/guidance", label: "Guidance" },
    { href: "/faq", label: "FAQ" },
  ];

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
              className="px-4 md:px-6 py-2 rounded-full bg-white text-black text-sm font-black hover:bg-gray-100 transition-colors"
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
              className="md:hidden flex flex-col gap-1.5 p-1.5"
            >
              <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-4 text-sm font-medium border-b border-white/5 transition-colors ${
                  path === l.href ? "text-white bg-white/5" : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            ))}
            {isSignedIn && (
              <button
                onClick={() => { signOut({ redirectUrl: "/" }); setMenuOpen(false); }}
                className="w-full text-left px-6 py-4 text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                {t.nav.logout}
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
