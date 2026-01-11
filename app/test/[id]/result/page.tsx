"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { getTestById } from "@/lib/logic";
import { Button } from "@/components/ui/Button";
import { Share2, RefreshCw, Home } from "lucide-react";
import Link from "next/link";
import { TestData, TestResult } from "@/lib/types";

export default function ResultPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();

    const testId = params.id as string;
    const resultType = searchParams.get("type");

    const [test, setTest] = useState<TestData | null>(null);
    const [result, setResult] = useState<TestResult | null>(null);

    useEffect(() => {
        const t = getTestById(testId);
        if (t) {
            setTest(t);
            const r = t.results.find((res) => res.type === resultType);
            setResult(r || t.results[0]); // Fallback
        }
    }, [testId, resultType]);

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: result?.title,
                text: result?.description,
                url: window.location.href,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("링크가 복사되었습니다!");
        }
    };

    if (!test || !result) return <div className="p-10 text-center">Loading...</div>;

    // Dynamic theme color (default to primary if not set)
    const themeClass = result.themeColor || "bg-primary/5 text-gray-900";
    const isCustomTheme = !!result.themeColor;

    return (
        <div className="flex flex-col min-h-screen sm:min-h-0 sm:h-full bg-white animate-in fade-in duration-500 overflow-y-auto">
            <div className="flex-1 flex flex-col md:flex-row">
                {/* Left Col: Result Title & Image */}
                <div className={`w-full md:w-1/2 p-8 flex flex-col items-center justify-center text-center md:h-full md:sticky md:top-0 transition-colors duration-500 ${isCustomTheme ? `bg-gradient-to-br ${themeClass}` : 'bg-primary/5'}`}>
                    <span className={`font-bold tracking-widest text-sm mb-2 opacity-80 ${isCustomTheme ? 'text-white/80' : 'text-primary'}`}>RESULT</span>
                    <h1 className={`text-3xl font-extrabold mb-6 ${isCustomTheme ? 'text-white' : 'text-gray-900'}`}>{result.title}</h1>

                    <div className="w-full max-w-sm aspect-video bg-white rounded-2xl shadow-sm mb-6 flex items-center justify-center text-4xl overflow-hidden">
                        {result.imageUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={result.imageUrl} alt={result.title} className="w-full h-full object-cover" />
                        ) : (
                            <span>🎁</span>
                        )}
                    </div>

                    <div className="flex gap-2 flex-wrap justify-center">
                        {result.traits.map(t => (
                            <span key={t} className={`px-3 py-1 rounded-full text-sm font-bold shadow-sm ${isCustomTheme ? 'bg-white/20 text-white border-white/30 backdrop-blur-sm' : 'bg-white border-primary/20 text-primary border'}`}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Col: Description & Actions */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">당신의 유형은...</h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-8 break-keep flex-1">
                        {result.description}
                    </p>

                    <div className="space-y-4 mt-auto">
                        <div className="grid grid-cols-2 gap-3 w-full">
                            <Button onClick={handleShare} variant="secondary" className="w-full gap-2">
                                <Share2 size={18} /> 공유하기
                            </Button>
                            <Button onClick={() => router.push(`/test/${testId}`)} variant="outline" className="w-full gap-2">
                                <RefreshCw size={18} /> 다시하기
                            </Button>
                        </div>

                        <Link href="/" className="block">
                            <Button size="lg" className="w-full shadow-md">
                                <Home size={18} className="mr-2" /> 다른 테스트 하러가기
                            </Button>
                        </Link>
                    </div>

                    <div className="text-center mt-8 pt-6 border-t border-gray-100">
                        <p className="text-xs text-gray-400 mb-2">운세보러 갈까요?</p>
                        <a href="https://unsedam.kr" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-600 underline underline-offset-4 decoration-primary/50 decoration-2 hover:text-primary transition-colors">
                            2026년 신년 운세 확인하기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
