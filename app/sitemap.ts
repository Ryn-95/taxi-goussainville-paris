import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://taxi-goussainville-paris.vercel.app'
  
  return [
    // Page principale - priorité maximale
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reservation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Pages géolocalisées pour SEO ultra-local - DOMINATION TOTALE
    {
      url: `${baseUrl}/taxi-goussainville-cdg`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/taxi-goussainville-orly`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/taxi-goussainville-paris`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/meilleur-taxi-goussainville`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.97,
    },
    {
      url: `${baseUrl}/numero-taxi-goussainville`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.97,
    },
    {
      url: `${baseUrl}/reserver-taxi-goussainville`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.97,
    },
    {
      url: `${baseUrl}/taxi-24h-goussainville`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.96,
    },
    {
      url: `${baseUrl}/taxi-pas-cher-goussainville`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.96,
    },
    {
      url: `${baseUrl}/taxi-sarcelles-goussainville`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/taxi-villiers-le-bel-goussainville`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.90,
    },

  ]
}