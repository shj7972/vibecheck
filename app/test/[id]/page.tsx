import { Metadata } from "next";
import { getTestById } from "@/lib/logic";
import { notFound } from "next/navigation";
import QuizClient from "./QuizClient";

type Props = {
    params: Promise<{ id: string }>;
};

const TEST_SEO: Record<string, { title: string; description: string; keywords: string[] }> = {
    "standard-mbti": {
        title: "무료 MBTI 성격 유형 테스트 - 나의 16가지 성격 알아보기",
        description: "무료 MBTI 성격 유형 검사. 12문항으로 INFJ, ENFP, INTJ 등 16가지 성격 유형 중 나의 타입을 즉시 알아보세요. 회원가입 불필요.",
        keywords: ["MBTI 테스트", "무료 MBTI", "16가지 성격유형", "MBTI 유형 검사", "INFJ", "ENFP", "INTJ", "MBTI 성격 유형"],
    },
    "love-mbti": {
        title: "연애 MBTI 테스트 - 나의 연애 스타일 & 사랑 유형 알아보기",
        description: "내 연애 스타일은 어떤 유형일까? 10문항으로 알아보는 나의 연애 MBTI. 썸남녀, 커플, 솔로 모두 즐길 수 있는 무료 연애 심리테스트.",
        keywords: ["연애 MBTI", "연애 심리테스트", "연애 스타일 테스트", "연애 유형", "커플 테스트", "사랑 유형 테스트"],
    },
    "work-survival": {
        title: "직장인 생존 유형 테스트 - 나의 회사 생활 스타일은?",
        description: "직장에서 나는 어떤 유형의 직장인일까? 카멜레온형 vs 고독한 늑대형. 10문항으로 알아보는 나의 직장 생활 생존 전략.",
        keywords: ["직장인 심리테스트", "회사 생활 유형", "직장인 성격", "직장 생존 테스트"],
    },
    "zombie-survival": {
        title: "좀비 아포칼립스 생존 유형 테스트 - 나의 생존 타입은?",
        description: "좀비 아포칼립스가 온다면 나는 어떤 생존자 유형일까? 리더, 과학자, 배신자, 약탈자, 희생자 중 나의 생존 유형을 무료로 알아보세요.",
        keywords: ["좀비 생존 테스트", "좀비 아포칼립스 유형", "생존 유형 심리테스트", "좀비 심리테스트"],
    },
    "personal-color": {
        title: "퍼스널 컬러 심리테스트 - 내 성격의 색깔은 웜톤? 쿨톤?",
        description: "성격으로 알아보는 나의 퍼스널 컬러! 따뜻한 웜톤 감성인지, 차분한 쿨톤 감성인지 10문항으로 즉시 무료로 알아보세요.",
        keywords: ["퍼스널 컬러 테스트", "퍼스널 컬러 심리", "웜톤 쿨톤 테스트", "성격 색깔 테스트"],
    },
    "kkondae-test": {
        title: "꼰대 테스트 - 나는 꼰대일까? 꼰대 지수 측정",
        description: "나도 모르게 꼰대가 됐을지도? 10문항으로 알아보는 나의 꼰대 지수. 구세대 사고방식인지 열린 마음인지 무료로 테스트해보세요.",
        keywords: ["꼰대 테스트", "꼰대 지수", "꼰대 심리테스트", "세대 차이 테스트"],
    },
    "joseon-job": {
        title: "조선시대 직업 테스트 - 나는 왕? 선비? 내 전생 직업은?",
        description: "조선시대에 살았다면 나는 어떤 직업이었을까? 왕, 선비, 거상, 한량, 노비 중 나의 조선시대 직업을 7문항으로 알아보세요.",
        keywords: ["조선시대 직업 테스트", "전생 직업 테스트", "조선 성격 테스트", "조선시대 심리테스트"],
    },
    "isekai-truck": {
        title: "이세계 전생 테스트 - 나는 마왕? 용사? 내 이세계 역할은?",
        description: "이세계로 전생한다면 나의 역할은? 마왕, 용사, 마법사, 슬라임, 마을주민 중 나의 이세계 클래스를 7문항으로 무료로 알아보세요.",
        keywords: ["이세계 테스트", "전생 유형 테스트", "이세계 심리테스트", "판타지 성격 테스트"],
    },
    "rich-dna": {
        title: "부자 DNA 테스트 - 나는 워렌 버핏형? 욜로족?",
        description: "나의 금전 감각과 재정 심리는 어떤 유형일까? 워렌 버핏형 부자 DNA인지, 현재를 즐기는 욜로족인지 10문항으로 무료로 알아보세요.",
        keywords: ["부자 DNA 테스트", "재테크 심리테스트", "소비 유형 테스트", "욜로 심리테스트"],
    },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = (await params).id;
    const test = getTestById(id);

    if (!test) return {};

    const seo = TEST_SEO[id];
    const title = seo?.title ?? `${test.title} - 무료 온라인 심리테스트`;
    const description = seo?.description ?? `${test.description} 회원가입 없이 즉시 무료로 이용하세요.`;

    return {
        title,
        description,
        keywords: seo?.keywords,
        openGraph: {
            title,
            description,
            images: test.thumbnailUrl ? [test.thumbnailUrl] : [],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: test.thumbnailUrl ? [test.thumbnailUrl] : [],
        },
        alternates: {
            canonical: `https://vibecheck.page/test/${id}`,
        },
    };
}

export default async function QuizPage({ params }: Props) {
    const id = (await params).id;
    const test = getTestById(id);

    if (!test) {
        notFound();
    }

    const seo = TEST_SEO[id];
    const pageTitle = seo?.title ?? `${test.title} - 무료 온라인 심리테스트`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": test.title,
        "description": test.description,
        "applicationCategory": "EntertainmentApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW",
            "availability": "https://schema.org/InStock"
        },
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "VibeCheck 홈",
                "item": "https://vibecheck.page"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": pageTitle,
                "item": `https://vibecheck.page/test/${id}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <QuizClient test={test} />

            {/* AdSense Rich Content Section */}
            {test.content && test.content.length > 0 && (
                <article className="max-w-3xl mx-auto px-4 py-12 space-y-12">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                    {test.content.map((section, idx) => (
                        <section key={idx} className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="w-1.5 h-8 bg-indigo-500 rounded-full inline-block" />
                                {section.title}
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                {section.paragraphs.map((para, pIdx) => (
                                    <p key={pIdx}>{para}</p>
                                ))}
                            </div>
                        </section>
                    ))}
                </article>
            )}
        </>
    );
}
