import { Metadata } from "next";
import Link from "next/link";
import { mbtiTypes } from "@/data/mbti-types";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "MBTI 16가지 성격 유형 완벽 가이드 | 특징·강점·직업·연애 총정리",
    description: "MBTI 16가지 성격 유형(INFJ, ENFP, INTJ, ISTJ 등)의 특징, 강점, 약점, 연애 스타일, 추천 직업을 한눈에 정리했습니다. 나의 MBTI 유형을 무료로 알아보세요.",
    keywords: [
        "MBTI 16가지 유형", "MBTI 유형별 특징", "MBTI 성격 유형 정리",
        "INFJ 특징", "ENFP 특징", "INTJ 특징", "ISFJ 특징",
        "MBTI 유형 가이드", "MBTI 종류", "성격 유형 16가지"
    ],
    alternates: {
        canonical: "https://vibecheck.page/mbti",
    },
    openGraph: {
        title: "MBTI 16가지 성격 유형 완벽 가이드 | VibeCheck",
        description: "MBTI 16가지 성격 유형의 특징, 강점, 약점, 연애 스타일, 추천 직업을 한눈에 정리했습니다.",
        url: "https://vibecheck.page/mbti",
    },
};

const GROUP_ORDER = ["분석가", "외교관", "관리자", "탐험가"] as const;

const GROUP_META: Record<string, { desc: string; bg: string; text: string; border: string }> = {
    "분석가": {
        desc: "논리적이고 전략적인 사고를 가진 유형들",
        bg: "bg-indigo-50",
        text: "text-indigo-700",
        border: "border-indigo-200",
    },
    "외교관": {
        desc: "공감 능력과 이상주의를 겸비한 유형들",
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        border: "border-emerald-200",
    },
    "관리자": {
        desc: "책임감과 안정성을 중시하는 유형들",
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200",
    },
    "탐험가": {
        desc: "자유롭고 실용적인 현재 지향 유형들",
        bg: "bg-sky-50",
        text: "text-sky-700",
        border: "border-sky-200",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "MBTI 16가지 성격 유형 목록",
    "description": "MBTI 16가지 성격 유형의 특징과 가이드",
    "url": "https://vibecheck.page/mbti",
    "numberOfItems": 16,
    "itemListElement": mbtiTypes.map((t, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${t.type} - ${t.nickname}`,
        "url": `https://vibecheck.page/mbti/${t.type.toLowerCase()}`,
        "description": t.summary,
    })),
};

const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://vibecheck.page" },
        { "@type": "ListItem", "position": 2, "name": "MBTI 16가지 유형 가이드", "item": "https://vibecheck.page/mbti" },
    ],
};

export default function MbtiIndexPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

            <div className="flex flex-col min-h-screen font-sans">
                <header className="px-6 py-6 pb-2">
                    <nav className="text-xs text-gray-400 mb-3">
                        <Link href="/" className="hover:text-gray-600">홈</Link>
                        <span className="mx-1">/</span>
                        <span className="text-gray-600 font-medium">MBTI 유형 가이드</span>
                    </nav>
                    <h1 className="text-2xl font-extrabold flex items-center gap-2 text-gray-900">
                        <Sparkles className="text-indigo-500 w-6 h-6" />
                        MBTI 16가지 성격 유형
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        각 유형을 클릭하면 특징·강점·약점·연애·직업을 확인할 수 있어요
                    </p>
                </header>

                <div className="flex-1 px-4 py-4 space-y-8">

                    {GROUP_ORDER.map((group) => {
                        const meta = GROUP_META[group];
                        const typesInGroup = mbtiTypes.filter((t) => t.group === group);

                        return (
                            <section key={group}>
                                <div className={`rounded-xl border px-4 py-2.5 mb-3 ${meta.bg} ${meta.border}`}>
                                    <h2 className={`font-bold text-sm ${meta.text}`}>{group}</h2>
                                    <p className="text-xs text-gray-500 mt-0.5">{meta.desc}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {typesInGroup.map((t) => (
                                        <Link
                                            key={t.type}
                                            href={`/mbti/${t.type.toLowerCase()}`}
                                            className={`flex items-start gap-3 p-3.5 rounded-2xl border bg-white hover:${meta.bg} hover:${meta.border} transition-colors group`}
                                        >
                                            <span className="text-2xl flex-shrink-0">{t.emoji}</span>
                                            <div className="min-w-0">
                                                <div className={`font-black text-sm ${meta.text} group-hover:underline`}>
                                                    {t.type}
                                                </div>
                                                <div className="text-xs text-gray-500 truncate">{t.nickname}</div>
                                                <div className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed hidden sm:block">
                                                    {t.summary.slice(0, 40)}...
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        );
                    })}

                    {/* CTA to test */}
                    <section className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-center text-white">
                        <h2 className="font-black text-lg mb-1">내 MBTI가 궁금하다면?</h2>
                        <p className="text-sm text-indigo-100 mb-4">12문항으로 지금 바로 무료로 알아보세요!</p>
                        <Link
                            href="/test/standard-mbti"
                            className="inline-block bg-white text-indigo-600 font-bold px-6 py-2.5 rounded-full text-sm hover:bg-indigo-50 transition-colors"
                        >
                            무료 MBTI 테스트 시작하기 →
                        </Link>
                    </section>

                </div>
            </div>
        </>
    );
}
