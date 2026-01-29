import { Metadata } from 'next'
import Link from 'next/link'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Taxi Fosses 95470 - Réservation Chauffeur 24/7 | Taxi Goussainville',
  description: 'Votre taxi à Fosses (95470). Déplacements toutes distances : Gare de Fosses-Survilliers, Aéroport CDG, Parc Astérix. Chauffeur ponctuel et véhicule confort.',
  keywords: ['taxi fosses', 'taxi gare fosses survilliers', 'taxi fosses parc asterix', 'taxi 95470'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/taxi-fosses',
  },
}

export default function TaxiFosses() {
  return (
    <main className="pb-24 bg-white">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Taxi Fosses', url: '/taxi-fosses' }
        ]}
      />

      {/* Hero Local */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-900 to-black z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500 text-white font-bold text-sm mb-6">
            📍 Fosses & Survilliers
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Taxi Fosses (95470) <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Votre Chauffeur Privé
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Besoin d'un taxi à Fosses ? Nous sommes à 5 minutes.
            Idéal pour Gare RER D Fosses-Survilliers et Parc Astérix.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+33628532473" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              📞 Appeler le Chauffeur
            </a>
            <Link href="/reservation" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg transition-all shadow-lg">
              📅 Commander en ligne
            </Link>
          </div>
        </div>
      </section>

      {/* Contenu Spécifique Fosses */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Le Taxi de référence à Fosses</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0">🎢</div>
                <div>
                  <h3 className="font-bold text-lg">Navette Parc Astérix</h3>
                  <p className="text-gray-600">Nous assurons la liaison Fosses ↔ Parc Astérix. Idéal pour les familles et les employés du parc.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0">🚆</div>
                <div>
                  <h3 className="font-bold text-lg">Gare Fosses-Survilliers</h3>
                  <p className="text-gray-600">Connexion immédiate avec le RER D. Ne marchez plus avec vos valises, nous vous déposons au pied du quai.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0">👔</div>
                <div>
                  <h3 className="font-bold text-lg">Service Entreprises</h3>
                  <p className="text-gray-600">Facturation mensuelle possible pour les sociétés de la zone industrielle de Fosses/Saint-Witz.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Distances & Temps</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Fosses ➔ Parc Astérix</span>
                <span className="font-bold text-blue-600">10 min</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Fosses ➔ Aéroport CDG</span>
                <span className="font-bold text-blue-600">15 min</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Fosses ➔ Paris Centre</span>
                <span className="font-bold text-blue-600">45 min</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maillage Interne */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Nos autres zones</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/taxi-louvres" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-700 font-medium transition-all">
              Taxi Louvres
            </Link>
            <span className="px-4 py-2 bg-blue-100 rounded-full text-blue-800 font-bold border border-blue-200">
              Taxi Fosses
            </span>
            <Link href="/taxi-goussainville-cdg" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-700 font-medium transition-all">
              Taxi CDG
            </Link>
          </div>
        </div>
      </section>

      <StickyCTA />
    </main>
  )
}
