import { Metadata } from 'next'
import Link from 'next/link'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Navette Hôtels Roissy CDG - Taxi Goussainville | Tarif Fixe',
  description: 'Navette privée entre Goussainville/Louvres et tous les hôtels de Roissy CDG (Marriott, Ibis, Novotel). Moins cher que Uber. Réservation immédiate.',
  keywords: ['navette hotel roissy', 'taxi hotel cdg', 'transport personnel navigant roissy', 'navette goussainville roissy'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/navette-hotel-roissy',
  },
}

export default function NavetteHotelRoissy() {
  return (
    <main className="pb-24 bg-white">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Navette Hôtels Roissy', url: '/navette-hotel-roissy' }
        ]}
      />

      {/* Hero Service */}
      <section className="relative pt-32 pb-20 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white text-blue-900 font-bold text-sm mb-6">
            🏨 Service Hôtelier & Équipages
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Navette Hôtels Roissy CDG <br />
            <span className="text-blue-300">
              Liaison Goussainville ↔ Zone Hôtelière
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Le moyen le plus rapide et confortable pour rejoindre votre hôtel à Roissy depuis Goussainville ou la Gare.
            Tarifs fixes et facturation entreprise disponible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+33628532473" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-black rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              📞 Commander la Navette
            </a>
          </div>
        </div>
      </section>

      {/* Liste des Hôtels */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nous desservons TOUS les hôtels de la zone aéroportuaire</h2>
          <p className="text-gray-600">Dépose minute devant la réception. Pas de marche avec les valises.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Marriott CDG', 'Hilton Roissy', 'Novotel Convention', 'Ibis Styles',
            'Golden Tulip', 'Hyatt Regency', 'Sheraton CDG', 'Moxy Hotel',
            'CitizenM', 'Pullman Roissy', 'Mercure CDG', 'Holiday Inn'
          ].map((hotel) => (
            <div key={hotel} className="bg-gray-50 p-4 rounded-xl text-center font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default border border-gray-100">
              {hotel}
            </div>
          ))}
        </div>
      </section>

      {/* Avantages vs Navette Bus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Pourquoi préférer notre Taxi Privé aux navettes bus ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-red-500">❌ Navette Bus / Hôtels</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Horaires fixes (souvent toutes les 30 min)</li>
                <li>• Arrêts multiples (tournée des hôtels interminable)</li>
                <li>• Bondé aux heures de pointe</li>
                <li>• Pas de place pour les gros bagages</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-500 relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-xl font-bold text-xs uppercase">Recommandé</div>
              <h3 className="text-xl font-bold mb-4 text-blue-600">✅ Notre Taxi Privé</h3>
              <ul className="space-y-3 text-gray-800 font-medium">
                <li>• Départ immédiat à VOTRE heure</li>
                <li>• Direct sans arrêt (10-15 min max)</li>
                <li>• Véhicule privatisé et confortable</li>
                <li>• Aide au port des bagages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StickyCTA />
    </main>
  )
}
