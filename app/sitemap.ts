import { MetadataRoute } from 'next'
import { cities } from '@/lib/idf-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://taxi-goussainville-paris.vercel.app'
  
  // Pages statiques existantes
  const staticPages: MetadataRoute.Sitemap = [
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
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/zones-intervention`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Pages géolocalisées manuelles (Top Priorité)
    {
      url: `${baseUrl}/taxi-goussainville-cdg`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/taxi-goussainville-orly`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/taxi-goussainville-paris`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/taxi-louvres`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/taxi-fosses`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/taxi-roissy-en-france`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/taxi-gonesse`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/navette-hotel-roissy`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    // Guide
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide/prix-taxi-goussainville-cdg`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide/taxi-vs-vtc-goussainville`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide/reserver-taxi-nuit-goussainville`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Pages générées dynamiquement (Programmatic SEO)
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7, // Priorité légèrement inférieure aux pages principales
  }))

  return [...staticPages, ...cityPages]
}
