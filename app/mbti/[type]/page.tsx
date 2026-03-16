import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { mbtiTypeMap, mbtiTypes, MBTI_ALL_TYPES } from "@/data/mbti-types";
import { CheckCircle, XCircle, Heart, Briefcase, Star, Users } from "lucide-react";

type Props = {
    params: Promise<{ type: string }>;
};

export async function generateStaticParams() {
    return MBTI_ALL_TYPES.map((type) => ({ type: type.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { type: rawType } = await params;
    const type = rawType.toUpperCase();
    const data = mbtiTypeMap[type];

    if (!data) return {};

    return {
        title: data.seoTitle,
        description: data.seoDescription,
        keywords: data.keywords,
        alternates: {
            canonical: `https://vibecheck.page/mbti/${type.toLowerCase()}`,
        },
        openGraph: {
            title: data.seoTitle,
            description: data.seoDescription,
            url: `https://vibecheck.page/mbti/${type.toLowerCase()}`,
            images: [data.imageUrl],
        },
        twitter: {
            card: "summary_large_image",
            title: data.seoTitle,
            description: data.seoDescription,
            images: [data.imageUrl],
        },
    };
}

export default async function MbtiTypePage({ params }: Props) {
    const { type: rawType } = await params;
    const type = rawType.toUpperCase();
    const data = mbtiTypeMap[type];

    if (!data) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.seoTitle,
        "description": data.seoDescription,
        "url": `https://vibecheck.page/mbti/${type.toLowerCase()}`,
        "publisher": {
            "@type": "Organization",
            "name": "VibeCheck",
            "url": "https://vibecheck.page",
        },
        "inLanguage": "ko-KR",
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://vibecheck.page" },
            { "@type": "ListItem", "position": 2, "name": "MBTI 유형 가이드", "item": "https://vibecheck.page/mbti" },
            { "@type": "ListItem", "position": 3, "name": `${type} ${data.nickname}`, "item": `https://vibecheck.page/mbti/${type.toLowerCase()}` },
        ],
    };

    const groupBgMap: Record<string, string> = {
        "분석가": "bg-indigo-50 border-indigo-200",
        "외교관": "bg-emerald-50 border-emerald-200",
        "관리자": "bg-amber-50 border-amber-200",
        "탐험가": "bg-sky-50 border-sky-200",
    };

    const groupTextMap: Record<string, string> = {
        "분석가": "text-indigo-600",
        "외교관": "text-emerald-600",
        "관리자": "text-amber-700",
        "탐험가": "text-sky-600",
    };

    const groupBg = groupBgMap[data.group] ?? "bg-gray-50 border-gray-200";
    const groupText = groupTextMap[data.group] ?? "text-gray-600";

    // Related types (same group, excluding current)
    const relatedTypes = mbtiTypes
        .filter((t) => t.group === data.group && t.type !== type)
        .slice(0, 3);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

            <div className="flex flex-col min-h-screen font-sans">
                {/* Header / Breadcrumb */}
                <header className="px-6 py-4 border-b border-gray-100">
                    <nav className="text-xs text-gray-400 mb-3" aria-label="breadcrumb">
                        <Link href="/" className="hover:text-gray-600">홈</Link>
                        <span className="mx-1">/</span>
                        <Link href="/mbti" className="hover:text-gray-600">MBTI 유형</Link>
                        <span className="mx-1">/</span>
                        <span className="text-gray-600 font-medium">{type}</span>
                    </nav>

                    {/* Type Hero */}
                    <div className={`rounded-2xl border p-6 ${groupBg}`}>
                        <div className="flex items-start gap-4">
                            <div className="text-5xl">{data.emoji}</div>
                            <div className="flex-1">
                                <div className={`text-xs font-semibold uppercase tracking-wider mb-1 ${groupText}`}>
                                    {data.group} 유형
                                </div>
                                <h1 className="text-2xl font-black text-gray-900 mb-1">
                                    {type} <span className="font-normal text-lg">— {data.nickname}</span>
                                </h1>
                                <p className="text-sm text-gray-600 leading-relaxed">{data.summary}</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {data.traits.map((trait) => (
                                        <span
                                            key={trait}
                                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${groupBg} ${groupText}`}
                                        >
                                            {trait}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 px-4 py-6 space-y-6">

                    {/* Description */}
                    <section>
                        <h2 className="text-lg font-bold text-gray-800 mb-3">{type} 성격 유형이란?</h2>
                        <div className="space-y-3">
                            {data.description.map((para, i) => (
                                <p key={i} className="text-sm text-gray-600 leading-relaxed">{para}</p>
                            ))}
                        </div>
                    </section>

                    {/* Strengths & Weaknesses */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <section className="bg-green-50 border border-green-100 rounded-2xl p-4">
                            <h2 className="text-sm font-bold text-green-700 flex items-center gap-1.5 mb-3">
                                <CheckCircle className="w-4 h-4" />
                                {type}의 강점
                            </h2>
                            <ul className="space-y-1.5">
                                {data.strengths.map((s) => (
                                    <li key={s} className="text-xs text-gray-700 flex items-start gap-1.5">
                                        <span className="text-green-500 mt-0.5">•</span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="bg-red-50 border border-red-100 rounded-2xl p-4">
                            <h2 className="text-sm font-bold text-red-600 flex items-center gap-1.5 mb-3">
                                <XCircle className="w-4 h-4" />
                                {type}의 약점
                            </h2>
                            <ul className="space-y-1.5">
                                {data.weaknesses.map((w) => (
                                    <li key={w} className="text-xs text-gray-700 flex items-start gap-1.5">
                                        <span className="text-red-400 mt-0.5">•</span>
                                        {w}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Relationships */}
                    <section className="bg-pink-50 border border-pink-100 rounded-2xl p-4">
                        <h2 className="text-sm font-bold text-pink-700 flex items-center gap-1.5 mb-3">
                            <Heart className="w-4 h-4" />
                            {type} 연애 & 인간관계
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed">{data.relationships}</p>
                        <div className="mt-3 pt-3 border-t border-pink-100">
                            <p className="text-xs font-semibold text-pink-600 mb-2">잘 맞는 유형</p>
                            <div className="flex gap-2">
                                {data.compatibleTypes.map((ct) => (
                                    <Link
                                        key={ct}
                                        href={`/mbti/${ct.toLowerCase()}`}
                                        className="px-3 py-1 bg-white border border-pink-200 rounded-full text-xs font-bold text-pink-600 hover:bg-pink-100 transition-colors"
                                    >
                                        {ct}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Careers */}
                    <section className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                        <h2 className="text-sm font-bold text-blue-700 flex items-center gap-1.5 mb-3">
                            <Briefcase className="w-4 h-4" />
                            {type} 추천 직업
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {data.careers.map((career) => (
                                <span
                                    key={career}
                                    className="px-2.5 py-1 bg-white border border-blue-200 rounded-full text-xs text-blue-700"
                                >
                                    {career}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Famous People */}
                    <section className="bg-yellow-50 border border-yellow-100 rounded-2xl p-4">
                        <h2 className="text-sm font-bold text-yellow-700 flex items-center gap-1.5 mb-3">
                            <Star className="w-4 h-4" />
                            {type} 유명인
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {data.famousPeople.map((person) => (
                                <span
                                    key={person}
                                    className="px-2.5 py-1 bg-white border border-yellow-200 rounded-full text-xs text-yellow-800"
                                >
                                    {person}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Related Types */}
                    {relatedTypes.length > 0 && (
                        <section>
                            <h2 className="text-sm font-bold text-gray-700 flex items-center gap-1.5 mb-3">
                                <Users className="w-4 h-4" />
                                같은 {data.group} 그룹 유형
                            </h2>
                            <div className="grid grid-cols-3 gap-2">
                                {relatedTypes.map((related) => (
                                    <Link
                                        key={related.type}
                                        href={`/mbti/${related.type.toLowerCase()}`}
                                        className="flex flex-col items-center p-3 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-colors text-center"
                                    >
                                        <span className="text-2xl mb-1">{related.emoji}</span>
                                        <span className="font-bold text-xs text-gray-800">{related.type}</span>
                                        <span className="text-xs text-gray-500 line-clamp-2 mt-0.5">{related.nickname}</span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA */}
                    <section className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-center text-white">
                        <h2 className="font-black text-lg mb-1">나의 MBTI가 {type}일까?</h2>
                        <p className="text-sm text-indigo-100 mb-4">12문항으로 무료로 알아보세요!</p>
                        <Link
                            href="/test/standard-mbti"
                            className="inline-block bg-white text-indigo-600 font-bold px-6 py-2.5 rounded-full text-sm hover:bg-indigo-50 transition-colors"
                        >
                            무료 MBTI 테스트 시작하기 →
                        </Link>
                    </section>

                    {/* All Types Link */}
                    <div className="text-center pb-4">
                        <Link href="/mbti" className="text-sm text-gray-400 hover:text-gray-600 underline underline-offset-2">
                            16가지 MBTI 유형 전체 보기
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
