import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vibecheck.page'),
  title: {
    default: "무료 MBTI 테스트 | 심리테스트 모음 - VibeCheck",
    template: "%s | VibeCheck"
  },
  description: "무료 MBTI 성격 유형 테스트 및 다양한 심리테스트 모음. 퍼스널 컬러, 좀비 생존, 연애 유형, 꼰대 테스트 등 회원가입 없이 즉시 이용하세요.",
  keywords: [
    "무료 MBTI 테스트", "MBTI 성격 유형", "심리테스트", "성격 테스트",
    "16가지 성격유형", "MBTI 검사", "무료 심리테스트", "온라인 심리테스트",
    "VibeCheck", "바이브체크", "퍼스널 컬러", "연애 MBTI"
  ],
  authors: [{ name: "VibeCheck Team" }],
  creator: "VibeCheck",
  publisher: "VibeCheck",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://vibecheck.page",
    siteName: "VibeCheck",
    title: "무료 MBTI 테스트 | 심리테스트 모음 - VibeCheck",
    description: "무료 MBTI 성격 유형 테스트 및 다양한 심리테스트 모음. 퍼스널 컬러, 좀비 생존, 연애 유형, 꼰대 테스트 등 회원가입 없이 즉시 이용하세요.",
  },
  twitter: {
    card: "summary_large_image",
    title: "무료 MBTI 테스트 | 심리테스트 모음 - VibeCheck",
    description: "무료 MBTI 성격 유형 테스트 및 다양한 심리테스트 모음. 회원가입 없이 즉시 이용하세요.",
  },
  verification: {
    google: "cnz5bZ2_xuDCfsCEMaJgykEyNZ7AhLNDGToTFQi3e-w",
    other: {
      "naver-site-verification": "8256fe45d94c52e2c1dd176ae1004979205bfa44",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          id="adsense-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2947913248390883"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-0 sm:p-4 md:p-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <main className="w-full max-w-md md:max-w-4xl bg-white min-h-screen sm:min-h-[auto] sm:h-full sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border-gray-100 sm:border relative">
            {children}
          </main>
        </div>
        <GoogleAnalytics gaId="G-HLFXV4C2WN" />
      </body>
    </html>
  );
}
