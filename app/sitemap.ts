import { MetadataRoute } from 'next'
import { tests } from '@/data/tests'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vibecheck.page' // Update this if domain changes

    const testUrls = tests.map((test) => ({
        url: `${baseUrl}/test/${test.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...testUrls,
    ]
}
