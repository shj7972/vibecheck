"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import {
    Share2, RefreshCw, Home, Download, Check,
    Copy, MessageCircle, Twitter
} from "lucide-react";
import Link from "next/link";
import { TestData, TestResult } from "@/lib/types";

interface ResultClientProps {
    test: TestData;
    result: TestResult;
    testId: string;
}

// MBTI 테스트인지 확인 (결과 페이지에서 상세 링크 제공)
const MBTI_TEST_IDS = ["standard-mbti", "love-mbti"];

export default function ResultClient({ test, result, testId }: ResultClientProps) {
    const router = useRouter();
    const cardRef = useRef<HTMLDivElement>(null);
    const [toast, setToast] = useState<string | null>(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [shareMenuOpen, setShareMenuOpen] = useState(false);

    const showToast = useCallback((msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(null), 2500);
    }, []);

    // 링크 복사
    const handleCopyLink = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            showToast("🔗 링크가 복사되었습니다!");
        } catch {
            showToast("링크 복사에 실패했습니다.");
        }
        setShareMenuOpen(false);
    }, [showToast]);

    // 카카오 SDK 로드 + 초기화 헬퍼 (버튼 클릭 시 동적 처리)
    const ensureKakaoReady = useCallback((): Promise<boolean> => {
        return new Promise((resolve) => {
            type KakaoWindow = typeof window & {
                Kakao?: {
                    isInitialized: () => boolean;
                    init: (key: string) => void;
                    Share: { sendDefault: (opts: object) => void };
                };
            };
            const win = window as KakaoWindow;
            const JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY || "";

            if (!JS_KEY) {
                resolve(false);
                return;
            }

            const tryInit = () => {
                if (win.Kakao) {
                    if (!win.Kakao.isInitialized()) {
                        try { win.Kakao.init(JS_KEY); } catch { /* ignore */ }
                    }
                    resolve(win.Kakao.isInitialized());
                } else {
                    resolve(false);
                }
            };

            if (win.Kakao) {
                tryInit();
            } else {
                // SDK가 아직 로드 안 됐으면 동적으로 로드
                const existing = document.getElementById("kakao-sdk-dynamic");
                if (!existing) {
                    const script = document.createElement("script");
                    script.id = "kakao-sdk-dynamic";
                    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js";
                    script.onload = tryInit;
                    script.onerror = () => resolve(false);
                    document.head.appendChild(script);
                } else {
                    // 이미 로드 요청 중 — 짧게 대기
                    let attempts = 0;
                    const poll = setInterval(() => {
                        attempts++;
                        if (win.Kakao) { clearInterval(poll); tryInit(); }
                        else if (attempts > 20) { clearInterval(poll); resolve(false); }
                    }, 100);
                }
            }
        });
    }, []);

    // 카카오 공유
    const handleKakaoShare = useCallback(async () => {
        const ready = await ensureKakaoReady();
        type KakaoWindow = typeof window & {
            Kakao?: { Share: { sendDefault: (opts: object) => void } };
        };
        const win = window as KakaoWindow;

        if (ready && win.Kakao) {
            win.Kakao.Share.sendDefault({
                objectType: "feed",
                content: {
                    title: `[VibeCheck] ${result.title}`,
                    description: result.description.slice(0, 80) + "...",
                    imageUrl: result.imageUrl || test.thumbnailUrl || "https://vibecheck.page/og-default.png",
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                buttons: [
                    {
                        title: "결과 보기",
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                    {
                        title: "나도 테스트하기",
                        link: {
                            mobileWebUrl: `https://vibecheck.page/test/${testId}`,
                            webUrl: `https://vibecheck.page/test/${testId}`,
                        },
                    },
                ],
            });
        } else {
            // fallback: 링크 복사
            handleCopyLink();
            showToast("💛 카카오 공유 준비 중 — 링크를 복사했습니다!");
        }
        setShareMenuOpen(false);
    }, [ensureKakaoReady, result, test, testId, handleCopyLink, showToast]);

    // 트위터/X 공유
    const handleTwitterShare = useCallback(() => {
        const text = `나의 결과는 "${result.title}" 🎉\n${result.description.slice(0, 60)}...\n\n#VibeCheck #심리테스트 #MBTI\n`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
        window.open(url, "_blank", "noopener,noreferrer");
        setShareMenuOpen(false);
    }, [result]);

    // 이미지 카드 저장 (html2canvas 동적 임포트)
    const handleDownloadImage = useCallback(async () => {
        if (!cardRef.current || isDownloading) return;
        setIsDownloading(true);
        try {
            const html2canvas = (await import("html2canvas")).default;
            const canvas = await html2canvas(cardRef.current, {
                useCORS: true,
                allowTaint: true,
                scale: 2,
                backgroundColor: null,
            });
            const link = document.createElement("a");
            link.download = `vibecheck-${result.type || "result"}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
            showToast("📸 이미지가 저장되었습니다!");
        } catch {
            showToast("이미지 저장에 실패했습니다.");
        } finally {
            setIsDownloading(false);
        }
    }, [isDownloading, result, showToast]);

    // 기본 공유 (Web Share API)
    const handleNativeShare = useCallback(async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `[VibeCheck] ${result.title}`,
                    text: result.description,
                    url: window.location.href,
                });
            } catch {
                // 사용자가 취소한 경우 무시
            }
        } else {
            setShareMenuOpen(prev => !prev);
        }
    }, [result]);

    const themeClass = result.themeColor || "bg-primary/5 text-gray-900";
    const isCustomTheme = !!result.themeColor;

    // MBTI 결과인 경우 상세 페이지 링크 표시
    const mbtiTypeUrl = MBTI_TEST_IDS.includes(testId) && result.type && result.type.length === 4
        ? `/mbti/${result.type.toLowerCase()}`
        : null;

    return (
        <div className="flex flex-col min-h-screen sm:min-h-0 sm:h-full bg-white animate-in fade-in duration-500 overflow-y-auto">
            {/* Toast 알림 */}
            {toast && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white text-sm px-5 py-3 rounded-full shadow-xl flex items-center gap-2 animate-in slide-in-from-top-4 duration-300">
                    <Check size={16} className="text-green-400" />
                    {toast}
                </div>
            )}

            <div className="flex-1 flex flex-col md:flex-row">
                {/* Left Col: Result Card (캡처 대상) */}
                <div
                    ref={cardRef}
                    className={`w-full md:w-1/2 p-8 flex flex-col items-center justify-center text-center md:h-full md:sticky md:top-0 transition-colors duration-500 ${isCustomTheme ? `bg-gradient-to-br ${themeClass}` : 'bg-primary/5'}`}
                >
                    <span className={`font-bold tracking-widest text-sm mb-2 opacity-80 ${isCustomTheme ? 'text-white/80' : 'text-primary'}`}>RESULT</span>
                    <h1 className={`text-3xl font-extrabold mb-6 ${isCustomTheme ? 'text-white' : 'text-gray-900'}`}>{result.title}</h1>

                    <div className="w-full max-w-sm aspect-video bg-white rounded-2xl shadow-sm mb-6 flex items-center justify-center text-4xl overflow-hidden">
                        {result.imageUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={result.imageUrl} alt={result.title} className="w-full h-full object-cover" crossOrigin="anonymous" />
                        ) : (
                            <span>🎁</span>
                        )}
                    </div>

                    <div className="flex gap-2 flex-wrap justify-center mb-4">
                        {result.traits.map(t => (
                            <span key={t} className={`px-3 py-1 rounded-full text-sm font-bold shadow-sm ${isCustomTheme ? 'bg-white/20 text-white border-white/30 backdrop-blur-sm' : 'bg-white border-primary/20 text-primary border'}`}>
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* 브랜드 워터마크 (이미지 저장 시 포함) */}
                    <div className={`text-xs mt-2 font-semibold opacity-60 ${isCustomTheme ? 'text-white' : 'text-primary'}`}>
                        vibecheck.page
                    </div>
                </div>

                {/* Right Col: Description & Actions */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">당신의 유형은...</h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6 break-keep flex-1">
                        {result.description}
                    </p>

                    {/* MBTI 상세 링크 */}
                    {mbtiTypeUrl && (
                        <Link
                            href={mbtiTypeUrl}
                            className="mb-6 flex items-center gap-2 px-4 py-3 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold hover:bg-indigo-100 transition-colors group"
                        >
                            <span className="text-lg">🔍</span>
                            <span className="flex-1">
                                <span className="font-black">{result.type}</span> 유형 자세히 알아보기
                                <br />
                                <span className="text-xs font-normal text-indigo-500">강점 · 약점 · 연애 · 추천 직업 전체 보기 →</span>
                            </span>
                        </Link>
                    )}

                    <div className="space-y-3 mt-auto">
                        {/* 공유 버튼 그룹 */}
                        <div className="relative">
                            <div className="grid grid-cols-3 gap-2 w-full">
                                {/* 카카오 공유 */}
                                <button
                                    onClick={handleKakaoShare}
                                    className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-[#FEE500] hover:bg-[#F5D800] text-[#3A1D1D] font-bold text-xs transition-all active:scale-95"
                                    aria-label="카카오톡으로 공유"
                                >
                                    <MessageCircle size={20} />
                                    카카오톡
                                </button>

                                {/* 트위터 공유 */}
                                <button
                                    onClick={handleTwitterShare}
                                    className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-black hover:bg-gray-800 text-white font-bold text-xs transition-all active:scale-95"
                                    aria-label="X(트위터)로 공유"
                                >
                                    <Twitter size={20} />
                                    X(트위터)
                                </button>

                                {/* 링크 복사 */}
                                <button
                                    onClick={handleCopyLink}
                                    className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs transition-all active:scale-95"
                                    aria-label="링크 복사"
                                >
                                    <Copy size={20} />
                                    링크 복사
                                </button>
                            </div>
                        </div>

                        {/* 이미지 저장 + 다시하기 */}
                        <div className="grid grid-cols-2 gap-2 w-full">
                            <button
                                onClick={handleDownloadImage}
                                disabled={isDownloading}
                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary/5 text-gray-600 hover:text-primary font-semibold text-sm transition-all active:scale-95 disabled:opacity-50"
                                aria-label="결과 이미지 저장"
                            >
                                <Download size={16} />
                                {isDownloading ? "저장 중..." : "이미지 저장"}
                            </button>
                            <Button onClick={() => router.push(`/test/${testId}`)} variant="outline" className="w-full gap-2">
                                <RefreshCw size={18} /> 다시하기
                            </Button>
                        </div>

                        {/* 다른 테스트 하러가기 */}
                        <Link href="/" className="block">
                            <Button size="lg" className="w-full shadow-md">
                                <Home size={18} className="mr-2" /> 다른 테스트 하러가기
                            </Button>
                        </Link>
                    </div>

                    {/* 배너 */}
                    <div className="text-center mt-8 pt-6 border-t border-gray-100">
                        <p className="text-xs text-gray-400 mb-3">운세보러 갈까요?</p>
                        <a href="https://unsedam.kr" target="_blank" rel="noopener noreferrer" className="inline-block">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://unsedam.kr/static/images/banner_link_234x60.png" alt="운세담" className="rounded-lg shadow-sm hover:opacity-90 transition-opacity mx-auto" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
