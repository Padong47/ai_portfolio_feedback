import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSB · AI Builder Portfolio",
  description:
    "LLM, Multi-Agent, RAG, Voice AI를 실제 사용자 경험으로 연결한 AI 활용 중심 포트폴리오",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
