import { Metadata } from 'next'
import Link from 'next/link'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Taxi Roissy-en-France - Navette Hôtels & Aéroport CDG | Taxi Goussainville',
  description: 'Taxi local à Roissy-en-France (95700). Service spécial Hôtels et Aéroport Charles de Gaulle. Navette inter-hôtels et transfert gare. 06 28 53 24 73',
  keywords: ['taxi roissy en france', 'taxi hotel roissy', 'navette roissy cdg', 'taxi 95700'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/taxi-roissy-en-france',
  },
}

export default function TaxiRoissy() {
  return (
    <main className="pb-24 bg-white">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Taxi Roissy-en-France', url: '/taxi-roissy-en-france' }
        ]}
      />

      {/* Hero Local */}
      <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-black z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-500 text-white font-bold text-sm mb-6">
            🏨 Zone Hôtelière & Aéroport
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Taxi Roissy-en-France <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Navette Hôtels & CDG
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Le service premium pour les résidents et visiteurs de Roissy village.
            Liaison immédiate vers tous les terminaux CDG et le parc hôtelier.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+33628532473" className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              📞 Taxi Immédiat
            </a>
            <Link href="/reservation" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl text-lg transition-all border border-white/20">
              📅 Réservation Transfert
            </Link>
          </div>
        </div>
      </section>

      {/* Contenu Spécifique Roissy */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Expert de la zone Roissy</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl flex-shrink-0">🏨</div>
                <div>
                  <h3 className="font-bold text-lg">Desserte de tous les Hôtels</h3>
                  <p className="text-gray-600">Marriott, Hyatt, Ibis, Novotel, Golden Tulip... Nous connaissons chaque entrée et chaque réception.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl flex-shrink-0">🛍️</div>
                <div>
                  <h3 className="font-bold text-lg">Aéroville & Shopping</h3>
                  <p className="text-gray-600">Besoin d'aller au centre commercial Aéroville ? Nous vous déposons devant la porte. Pas de parking à payer.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl flex-shrink-0">🛫</div>
                <div>
                  <h3 className="font-bold text-lg">Accès Prioritaire CDG</h3>
                  <p className="text-gray-600">En tant que taxi officiel, nous vous déposons au plus près des portes d'embarquement (Dépose-minute Pro).</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Liaisons Fréquentes</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Roissy Village ➔ Terminal 2E/2F</span>
                <span className="font-bold text-purple-600">~15€ - 20€</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Roissy ➔ Parc des Expositions (Villepinte)</span>
                <span className="font-bold text-purple-600">~20€ - 25€</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Roissy ➔ Paris Centre</span>
                <span className="font-bold text-purple-600">~50€ - 60€</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maillage Interne */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Navigation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-700 font-medium transition-all">
              Taxi Goussainville
            </Link>
            <span className="px-4 py-2 bg-purple-100 rounded-full text-purple-800 font-bold border border-purple-200">
              Taxi Roissy-en-France
            </span>
            <Link href="/taxi-louvres" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-700 font-medium transition-all">
              Taxi Louvres
            </Link>
          </div>
        </div>
      </section>

      <StickyCTA />
    </main>
  )
}
