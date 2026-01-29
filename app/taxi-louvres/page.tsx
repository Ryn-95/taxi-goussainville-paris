import { Metadata } from 'next'
import Link from 'next/link'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Taxi Louvres 95380 - Votre Chauffeur Privé Local | Arrivée 10 min',
  description: 'Besoin d\'un taxi à Louvres ? Service disponible 24h/24 pour Gare RER D Louvres, Aéroport CDG et Paris. Réservation immédiate au 06 28 53 24 73.',
  keywords: ['taxi louvres', 'taxi gare louvres', 'taxi louvres cdg', 'chauffeur privé louvres'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/taxi-louvres',
  },
}

export default function TaxiLouvres() {
  return (
    <main className="pb-24 bg-white">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Taxi Louvres', url: '/taxi-louvres' }
        ]}
      />

      {/* Hero Local */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-500 text-black font-bold text-sm mb-6">
            📍 Zone d'intervention prioritaire
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Taxi Louvres (95380) <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Disponible en 10 minutes
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Votre service de taxi local à Louvres. Liaison directe Gare RER D, Centre-ville et Aéroport CDG.
            Pas de frais d'approche pour les résidents de Louvres.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+33628532473" className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              📞 Commander à Louvres
            </a>
            <Link href="/reservation" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl text-lg transition-all border border-white/20">
              📅 Réserver en ligne
            </Link>
          </div>
        </div>
      </section>

      {/* Contenu Spécifique Louvres */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Pourquoi choisir notre service à Louvres ?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl flex-shrink-0">🚆</div>
                <div>
                  <h3 className="font-bold text-lg">Spécialiste Gare de Louvres</h3>
                  <p className="text-gray-600">Navette rapide matin et soir vers/depuis la gare RER D de Louvres. Ne ratez plus jamais votre train.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl flex-shrink-0">✈️</div>
                <div>
                  <h3 className="font-bold text-lg">Voisin de l'Aéroport</h3>
                  <p className="text-gray-600">Louvres est à 10 min de CDG. Profitez de nos tarifs forfaitaires avantageux pour vos départs en vacances.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl flex-shrink-0">🏥</div>
                <div>
                  <h3 className="font-bold text-lg">Transport Médical</h3>
                  <p className="text-gray-600">Desserte des cabinets médicaux de Louvres et hôpitaux de la région (Gonesse, Paris).</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Tarifs Estimés au départ de Louvres</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Louvres ➔ Aéroport CDG</span>
                <span className="font-bold text-green-600">~25€ - 35€</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Louvres ➔ Aéroport Orly</span>
                <span className="font-bold text-green-600">~65€ - 85€</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Louvres ➔ Gare du Nord</span>
                <span className="font-bold text-green-600">~45€ - 60€</span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-4 text-center">*Tarifs indicatifs soumis au compteur horokilométrique.</p>
          </div>
        </div>
      </section>

      {/* Maillage Interne */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Autres villes desservies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-700 font-medium transition-all">
              Taxi Goussainville
            </Link>
            <Link href="/taxi-goussainville-cdg" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-700 font-medium transition-all">
              Taxi CDG
            </Link>
            <span className="px-4 py-2 bg-yellow-100 rounded-full text-yellow-800 font-bold border border-yellow-200">
              Taxi Louvres
            </span>
            <Link href="/taxi-goussainville-paris" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-700 font-medium transition-all">
              Taxi Paris
            </Link>
          </div>
        </div>
      </section>

      <StickyCTA />
    </main>
  )
}
