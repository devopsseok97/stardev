"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import ko from "../../messages/ko.json";
import en from "../../messages/en.json";

type Lang = "ko" | "en";
type Messages = typeof ko;

const messages: Record<Lang, Messages> = { ko, en };

const LangContext = createContext<{
  lang: Lang;
  t: Messages;
  toggle: () => void;
}>({ lang: "ko", t: ko, toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ko") setLang(saved);
  }, []);

  const toggle = () =>
    setLang((l) => {
      const next = l === "ko" ? "en" : "ko";
      localStorage.setItem("lang", next);
      return next;
    });

  return (
    <LangContext.Provider value={{ lang, t: messages[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
