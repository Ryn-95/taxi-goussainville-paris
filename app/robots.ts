import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [],
        crawlDelay: 0,
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://taxi-goussainville-paris.vercel.app/sitemap.xml',
    host: 'https://taxi-goussainville-paris.vercel.app',
  }
}