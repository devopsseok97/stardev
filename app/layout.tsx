import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { koKR } from "@clerk/localizations";
import { LangProvider } from "./context/LangContext";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "StarDev · AI 개발자 적성 진단",
  description: "21가지 질문으로 나에게 맞는 개발 분야와 학습 로드맵을 AI가 찾아드려요. 프론트엔드, 백엔드, AI/ML, 데이터 분석, DevOps 중 나에게 딱 맞는 길을 무료로 진단받으세요.",
  keywords: ["개발자 적성 진단", "AI 개발자", "프론트엔드", "백엔드", "AI ML", "코딩 적성", "개발 로드맵", "StarDev"],
  authors: [{ name: "StarDev" }],
  openGraph: {
    title: "StarDev · AI 개발자 적성 진단",
    description: "21가지 질문으로 나에게 맞는 개발 분야와 학습 로드맵을 AI가 찾아드려요.",
    url: process.env.NEXT_PUBLIC_APP_URL ?? "https://stardev.vercel.app",
    siteName: "StarDev",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: "StarDev · AI 개발자 적성 진단",
    description: "21가지 질문으로 나에게 맞는 개발 분야와 학습 로드맵을 AI가 찾아드려요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={koKR}>
      <html lang="ko" className={`${notoSansKR.variable} h-full antialiased`}>
        <body className={`min-h-full flex flex-col ${notoSansKR.className}`}>
          <LangProvider>{children}</LangProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
