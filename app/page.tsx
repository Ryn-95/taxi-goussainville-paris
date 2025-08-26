import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import VehiculeSection from '@/components/VehiculeSection'
import StickyCTA from '@/components/StickyCTA'
import UberSuggestions from '@/components/UberSuggestions'
import ZonesService from '@/components/ZonesService'
import TestimonialsSection from '@/components/TestimonialsSection'
import LiveActivitySection from '@/components/LiveActivitySection'

import TaxiProfessionnelSection from '@/components/TaxiProfessionnelSection'
import UberConnect from '@/components/UberConnect'

export const metadata: Metadata = {
  title: 'Taxi Goussainville Paris - Allez n\'importe où | Service 24/7',
  description: 'Demandez une course, montez à bord, détendez-vous. Service de taxi professionnel à Goussainville et Paris. Transferts aéroports CDG, Orly, Beauvais. Réservation immédiate 01 23 45 67 89.',
  keywords: [
    'taxi Goussainville',
    'taxi Paris', 
    'taxi aéroport CDG',
    'taxi aéroport Orly',
    'taxi aéroport Beauvais',
    'taxi pas cher Goussainville',
    'réservation taxi Goussainville',
    'transport aéroport CDG',
    'taxi 24h Goussainville',
    'VTC Goussainville',
    'chauffeur privé Goussainville',
    'taxi Sarcelles',
    'taxi Villiers-le-Bel',
    'transport Paris Goussainville',
    'course taxi',
    'réserver taxi',
    'taxi fiable',
    'transport rapide'
  ],
  openGraph: {
    title: 'Taxi Goussainville Paris - Allez n\'importe où',
    description: 'Demandez une course, montez à bord, détendez-vous. Service de taxi professionnel 24/7.',
    url: 'https://taxi-goussainville-paris.vercel.app',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Taxi Goussainville Paris - Service Professionnel'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Goussainville Paris - Allez n\'importe où',
    description: 'Demandez une course, montez à bord, détendez-vous. Service de taxi professionnel 24/7.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app',
  },
}

export default function HomePage() {
  return (
    <main className="pb-24">
      <HeroSection />
      <VehiculeSection />
      <UberSuggestions />
      <ZonesService />
      <TaxiProfessionnelSection />
      <TestimonialsSection />
      <LiveActivitySection />
      <UberConnect />
      <StickyCTA />
    </main>
  )
}
