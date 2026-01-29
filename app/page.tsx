import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import VehiculeSection from '@/components/VehiculeSection'
import StickyCTA from '@/components/StickyCTA'
import UberSuggestions from '@/components/UberSuggestions'
import ZonesService from '@/components/ZonesService'
import Testimonials from '@/components/Testimonials'
import { LiveReviews } from '@/components/LiveReviews'

import TaxiProfessionnelSection from '@/components/TaxiProfessionnelSection'
import UberConnect from '@/components/UberConnect'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Taxi Goussainville Paris - Allez n\'importe où | Service 24/7',
  description: 'Demandez une course, montez à bord, détendez-vous. Service de taxi professionnel à Goussainville et Paris. Transferts aéroports CDG, Orly, Beauvais. Réservation immédiate 06 28 53 24 73.',
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
      
      {/* Section Guide - Teasing */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-6">Guides & Conseils Voyageurs</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez nos articles d'experts pour voyager malin : comparatifs prix, astuces aéroports et bien plus.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/guide/prix-taxi-goussainville-cdg" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left border border-gray-100">
              <span className="text-2xl mb-2 block">💰</span>
              <h3 className="font-bold text-lg mb-2">Le VRAI prix Taxi Goussainville - CDG</h3>
              <p className="text-sm text-gray-500">Tout savoir sur les tarifs 2026...</p>
            </a>
            <a href="/guide" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left border border-gray-100 flex flex-col justify-center items-center">
              <span className="text-2xl mb-2 block">📚</span>
              <h3 className="font-bold text-lg text-yellow-500">Voir tous nos guides →</h3>
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection />
      <UberConnect />
      <StickyCTA />
    </main>
  )
}
