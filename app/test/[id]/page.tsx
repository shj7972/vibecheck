import { Metadata } from "next";
import { getTestById } from "@/lib/logic";
import { notFound } from "next/navigation";
import QuizClient from "./QuizClient";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = (await params).id;
    const test = getTestById(id);

    if (!test) return {};

    return {
        title: test.title,
        description: test.description,
        openGraph: {
            title: test.title,
            description: test.description,
            images: test.thumbnailUrl ? [test.thumbnailUrl] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: test.title,
            description: test.description,
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
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1205"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
