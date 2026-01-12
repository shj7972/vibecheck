import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vibecheck.page'),
  title: "VibeCheck - 나를 찾는 트렌디한 심리테스트",
  description: "트렌디한 심리테스트 모음. 좀비 생존 유형부터 퍼스널 컬러, MBTI까지 다양한 테스트로 나의 바이브(Vibe)를 확인해보세요!",
  keywords: ["심리테스트", "MBTI", "성격테스트", "VibeCheck", "바이브체크", "무료테스트"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "VibeCheck",
  },
  verification: {
    other: {
      "naver-site-verification": "8256fe45d94c52e2c1dd176ae1004979205bfa44",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-0 sm:p-4 md:p-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <main className="w-full max-w-md md:max-w-4xl bg-white min-h-screen sm:min-h-[auto] sm:h-full sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border-gray-100 sm:border relative">
            {children}
          </main>
        </div>
        <GoogleAnalytics gaId="G-YOUR-ID-HERE" />
      </body>
    </html>
  );
}
