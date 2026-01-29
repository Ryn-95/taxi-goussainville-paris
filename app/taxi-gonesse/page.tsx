import { Metadata } from 'next'
import Link from 'next/link'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Taxi Gonesse 95500 - Transport Médical Hôpital & Gare | Taxi Goussainville',
  description: 'Taxi Gonesse (95500) disponible 24/7. Spécialiste transport Hôpital de Gonesse et Gare RER. Chauffeur conventionné et service toutes distances.',
  keywords: ['taxi gonesse', 'taxi hopital gonesse', 'taxi gare gonesse arnouville', 'taxi 95500'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/taxi-gonesse',
  },
}

export default function TaxiGonesse() {
  return (
    <main className="pb-24 bg-white">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Taxi Gonesse', url: '/taxi-gonesse' }
        ]}
      />

      {/* Hero Local */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-900 to-black z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-green-500 text-white font-bold text-sm mb-6">
            🏥 Desserte Hôpital & Gare
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Taxi Gonesse (95500) <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">
              Service Rapide 24/7
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Votre taxi à Gonesse pour vos rendez-vous médicaux et transferts gares/aéroports.
            Disponible immédiatement au départ de Gonesse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+33628532473" className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-black rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              📞 Commander un Taxi
            </a>
            <Link href="/reservation" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl text-lg transition-all border border-white/20">
              📅 Réserver à l'avance
            </Link>
          </div>
        </div>
      </section>

      {/* Contenu Spécifique Gonesse */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Taxi à Gonesse : Nos Services</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl flex-shrink-0">🏥</div>
                <div>
                  <h3 className="font-bold text-lg">Hôpital de Gonesse</h3>
                  <p className="text-gray-600">Desserte prioritaire du Centre Hospitalier de Gonesse. Nous vous accompagnons jusqu'à l'entrée du service.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl flex-shrink-0">🚉</div>
                <div>
                  <h3 className="font-bold text-lg">Gare de Villiers-le-Bel - Gonesse</h3>
                  <p className="text-gray-600">Connexion rapide avec le RER D. Évitez l'attente du bus, prenez un taxi direct.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl flex-shrink-0">🛫</div>
                <div>
                  <h3 className="font-bold text-lg">Proximité Aéroport du Bourget</h3>
                  <p className="text-gray-600">Idéal pour rejoindre l'aéroport d'affaires du Bourget ou le Musée de l'Air et de l'Espace.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Tarifs Moyens Gonesse</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Gonesse ➔ Hôpital</span>
                <span className="font-bold text-green-600">~15€</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Gonesse ➔ Aéroport CDG</span>
                <span className="font-bold text-green-600">~25€ - 30€</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Gonesse ➔ Paris</span>
                <span className="font-bold text-green-600">~40€ - 50€</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maillage Interne */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Zones proches</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-700 font-medium transition-all">
              Taxi Goussainville
            </Link>
            <span className="px-4 py-2 bg-green-100 rounded-full text-green-800 font-bold border border-green-200">
              Taxi Gonesse
            </span>
            <Link href="/taxi-goussainville-orly" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-700 font-medium transition-all">
              Taxi Orly
            </Link>
          </div>
        </div>
      </section>

      <StickyCTA />
    </main>
  )
}
