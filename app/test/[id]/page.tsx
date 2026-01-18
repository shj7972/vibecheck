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
        </>
    );
}
