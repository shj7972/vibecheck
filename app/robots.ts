import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://vibecheck.page' // Update this if domain changes

    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/', '/ads.txt'],
            },
            {
                userAgent: 'Mediapartners-Google',
                allow: ['/', '/ads.txt'],
            },
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
