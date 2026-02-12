import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tra-3d.vercel.app'
    const locales = ['en', 'fr', 'ar']
    const pages = [
        { path: '', priority: 1, changeFrequency: 'weekly' as const },
        { path: 'pricing', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: 'faq', priority: 0.5, changeFrequency: 'monthly' as const },
        { path: 'contact', priority: 0.5, changeFrequency: 'monthly' as const },
    ]

    const entries: MetadataRoute.Sitemap = []

    pages.forEach((page) => {
        locales.forEach((locale) => {
            const url = `${baseUrl}/${locale}${page.path ? `/${page.path}` : ''}`
            entries.push({
                url,
                lastModified: new Date(),
                changeFrequency: page.changeFrequency,
                priority: page.priority,
                alternates: {
                    languages: {
                        en: `${baseUrl}/en${page.path ? `/${page.path}` : ''}`,
                        fr: `${baseUrl}/fr${page.path ? `/${page.path}` : ''}`,
                        ar: `${baseUrl}/ar${page.path ? `/${page.path}` : ''}`,
                    },
                },
            })
        })
    })

    return entries
}

