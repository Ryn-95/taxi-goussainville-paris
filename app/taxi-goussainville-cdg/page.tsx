import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '🚖 TAXI GOUSSAINVILLE CDG 06 28 53 24 73 ⭐ TRANSFERT AÉROPORT ROISSY 24H/24',
  description: '🚖 TAXI GOUSSAINVILLE CDG 06 28 53 24 73 ⭐ TRANSFERT AÉROPORT ROISSY CHARLES DE GAULLE 24H/24 ✈️ Navette Goussainville CDG Terminal 1 2 🏆 MEILLEUR SERVICE PROFESSIONNEL',
  keywords: [
    'taxi Goussainville CDG', 'TAXI GOUSSAINVILLE CDG',
    'navette Goussainville CDG', 'NAVETTE GOUSSAINVILLE CDG',
    'transfert Goussainville CDG', 'TRANSFERT GOUSSAINVILLE CDG',
    'taxi Goussainville Roissy', 'TAXI GOUSSAINVILLE ROISSY',
    'taxi Goussainville aéroport', 'TAXI GOUSSAINVILLE AÉROPORT',
    'transport Goussainville CDG', 'TRANSPORT GOUSSAINVILLE CDG',
    'taxi CDG Goussainville', 'TAXI CDG GOUSSAINVILLE',
    'shuttle Goussainville CDG', 'SHUTTLE GOUSSAINVILLE CDG'
  ],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/taxi-goussainville-cdg'
  }
}

export default function TaxiGoussainvilleCDGPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-black text-black mb-6">
            🚖 TAXI GOUSSAINVILLE CDG
          </h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            ⭐ TRANSFERT AÉROPORT ROISSY CHARLES DE GAULLE 24H/24
          </h2>
          <div className="inline-flex items-center space-x-3 bg-black text-white rounded-xl px-8 py-4 shadow-lg">
            <span className="text-xl">📞</span>
            <a href="tel:+33628532473" className="text-xl font-bold">
              06 28 53 24 73
            </a>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-2xl font-bold mb-4">🚖 Meilleur Service Taxi Goussainville CDG</h3>
          <p className="text-lg mb-6">
            <strong>TAXI GOUSSAINVILLE CDG 06 28 53 24 73</strong> - Service professionnel de transfert entre Goussainville et l'aéroport Charles de Gaulle (CDG/Roissy). Transport direct, rapide et fiable 24h/24.
          </p>

          <h3 className="text-2xl font-bold mb-4">✈️ Transferts CDG Tous Terminaux</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Terminal 1 CDG</strong> - Accès direct depuis Goussainville</li>
            <li><strong>Terminal 2A, 2B, 2C, 2D, 2E, 2F, 2G</strong> - Tous terminaux couverts</li>
            <li><strong>Terminal 3 CDG</strong> - Navette Roissybus connectée</li>
            <li><strong>Surveillance des vols</strong> - Suivi en temps réel</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">🏆 Pourquoi Choisir Notre Taxi Goussainville CDG ?</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Distance optimale</strong> - Goussainville proche de CDG (15 minutes)</li>
            <li><strong>Chauffeur local</strong> - Connaissance parfaite des accès aéroport</li>
            <li><strong>Service 24h/24</strong> - Départs et arrivées toutes heures</li>
            <li><strong>Véhicule récent</strong> - Skoda Superb climatisée</li>
            <li><strong>Tarif fixe</strong> - Pas de surprises, prix transparent</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">📞 Réservation Taxi Goussainville CDG</h3>
          <p className="text-lg mb-6">
            <strong>Téléphone :</strong> <a href="tel:+33628532473" className="text-blue-600 font-bold">06 28 53 24 73</a><br/>
            <strong>WhatsApp :</strong> <a href="https://wa.me/33628532473" className="text-green-600 font-bold">Message direct</a><br/>
            <strong>Disponibilité :</strong> 24 heures sur 24, 7 jours sur 7
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-green-800 mb-2">⚡ Réservation Immédiate</h4>
            <p className="text-green-700">
              Appelez le <strong>06 28 53 24 73</strong> pour une prise en charge immédiate ou programmée vers CDG depuis Goussainville.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">🗺️ Zones Desservies</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Goussainville Centre</strong> - Prise en charge sous 5 minutes</li>
            <li><strong>Goussainville Gare RER</strong> - Accès rapide</li>
            <li><strong>Quartiers résidentiels</strong> - Tout Goussainville couvert</li>
            <li><strong>Retour CDG</strong> - Prise en charge aéroport vers Goussainville</li>
          </ul>

          <div className="text-center mt-12">
            <Link 
              href="/"
              className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              🏠 Retour Accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
