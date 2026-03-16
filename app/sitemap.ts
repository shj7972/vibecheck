import { MetadataRoute } from 'next'
import { tests } from '@/data/tests'
import { MBTI_ALL_TYPES } from '@/data/mbti-types'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vibecheck.page'

    const testUrls = tests.map((test) => ({
        url: `${baseUrl}/test/${test.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Result pages for each test type - helps rank for specific type queries
    const resultUrls = tests.flatMap((test) =>
        test.results.map((result) => ({
            url: `${baseUrl}/test/${test.id}/result?type=${result.type}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
    )

    // Individual MBTI type pages - rank for "[TYPE] 특징", "[TYPE] 성격" queries
    const mbtiIndexUrl = {
        url: `${baseUrl}/mbti`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }

    const mbtiTypeUrls = MBTI_ALL_TYPES.map((type) => ({
        url: `${baseUrl}/mbti/${type.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        mbtiIndexUrl,
        ...mbtiTypeUrls,
        ...testUrls,
        ...resultUrls,
    ]
}
