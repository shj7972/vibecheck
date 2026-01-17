import { Metadata, ResolvingMetadata } from "next";
import { getTestById } from "@/lib/logic";
import ResultClient from "./ResultClient";
import { notFound } from "next/navigation";

// Define Props type for Next.js 15+ (approximate, since we are on 16)
type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = (await params).id;
    const type = (await searchParams).type as string;

    const test = getTestById(id);
    if (!test) return {};

    const result = test.results.find((r) => r.type === type) || test.results[0];

    const images = result.imageUrl
        ? [result.imageUrl]
        : test.thumbnailUrl
            ? [test.thumbnailUrl]
            : [];

    return {
        title: `${result.title} (결과)`,
        description: `${test.title} 결과: ${result.description}`,
        openGraph: {
            title: `${result.title} | ${test.title}`,
            description: result.description,
            images: images,
            type: "website",
            url: `https://vibecheck.page/test/${id}/result?type=${type}`,
        },
        twitter: {
            card: "summary_large_image",
            title: `${result.title} | ${test.title}`,
            description: result.description,
            images: images,
        },
        alternates: {
            canonical: `https://vibecheck.page/test/${id}/result?type=${type}`,
        },
    };
}

export default async function ResultPage({ params, searchParams }: Props) {
    const id = (await params).id;
    const type = (await searchParams).type as string;

    const test = getTestById(id);

    if (!test) {
        notFound();
    }

    const result = test.results.find((res) => res.type === type) || test.results[0];

    return <ResultClient test={test} result={result} testId={id} />;
}

