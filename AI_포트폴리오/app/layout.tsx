import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "류승민 · AI 엔지니어 포트폴리오",
  description:
    "LLM, RAG, 음성 AI로 고객 지원, 문서 검색, 키오스크 서비스를 만든 류승민의 포트폴리오",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
