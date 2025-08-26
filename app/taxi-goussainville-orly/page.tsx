import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '🚖 TAXI GOUSSAINVILLE ORLY 06 28 53 24 73 ⭐ TRANSFERT AÉROPORT 24H/24',
  description: '🚖 TAXI GOUSSAINVILLE ORLY 06 28 53 24 73 ⭐ TRANSFERT AÉROPORT ORLY SUD OUEST 24H/24 ✈️ Navette Goussainville Orly Terminal 1 2 3 4 🏆 MEILLEUR SERVICE PROFESSIONNEL',
  keywords: [
    'taxi Goussainville Orly', 'TAXI GOUSSAINVILLE ORLY',
    'navette Goussainville Orly', 'NAVETTE GOUSSAINVILLE ORLY',
    'transfert Goussainville Orly', 'TRANSFERT GOUSSAINVILLE ORLY',
    'taxi Goussainville aéroport Orly', 'TAXI GOUSSAINVILLE AÉROPORT ORLY',
    'transport Goussainville Orly', 'TRANSPORT GOUSSAINVILLE ORLY',
    'taxi Orly Goussainville', 'TAXI ORLY GOUSSAINVILLE',
    'shuttle Goussainville Orly', 'SHUTTLE GOUSSAINVILLE ORLY'
  ],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/taxi-goussainville-orly'
  }
}

export default function TaxiGoussainvilleOrlyPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-black text-black mb-6">
            🚖 TAXI GOUSSAINVILLE ORLY
          </h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            ⭐ TRANSFERT AÉROPORT ORLY SUD OUEST 24H/24
          </h2>
          <div className="inline-flex items-center space-x-3 bg-black text-white rounded-xl px-8 py-4 shadow-lg">
            <span className="text-xl">📞</span>
            <a href="tel:+33628532473" className="text-xl font-bold">
              06 28 53 24 73
            </a>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-2xl font-bold mb-4">🚖 Meilleur Service Taxi Goussainville Orly</h3>
          <p className="text-lg mb-6">
            <strong>TAXI GOUSSAINVILLE ORLY 06 28 53 24 73</strong> - Service professionnel de transfert entre Goussainville et l'aéroport d'Orly. Transport direct vers Orly Sud et Orly Ouest 24h/24.
          </p>

          <h3 className="text-2xl font-bold mb-4">✈️ Transferts Orly Tous Terminaux</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Terminal Orly Sud (1, 2, 3)</strong> - Accès direct depuis Goussainville</li>
            <li><strong>Terminal Orly Ouest (4)</strong> - Liaison rapide</li>
            <li><strong>Orlyval connecté</strong> - Métro et RER accessible</li>
            <li><strong>Surveillance des vols</strong> - Suivi en temps réel</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">🏆 Pourquoi Choisir Notre Taxi Goussainville Orly ?</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Trajet optimisé</strong> - Route directe A86 / N7 vers Orly</li>
            <li><strong>Chauffeur expérimenté</strong> - Connaissance parfaite Orly Sud/Ouest</li>
            <li><strong>Service 24h/24</strong> - Vols de nuit et tôt le matin</li>
            <li><strong>Véhicule confortable</strong> - Skoda Superb spacieuse</li>
            <li><strong>Tarif transparent</strong> - Prix fixe sans suppléments</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">📞 Réservation Taxi Goussainville Orly</h3>
          <p className="text-lg mb-6">
            <strong>Téléphone :</strong> <a href="tel:+33628532473" className="text-blue-600 font-bold">06 28 53 24 73</a><br/>
            <strong>WhatsApp :</strong> <a href="https://wa.me/33628532473" className="text-green-600 font-bold">Message direct</a><br/>
            <strong>Disponibilité :</strong> 24 heures sur 24, 7 jours sur 7
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-blue-800 mb-2">⚡ Réservation Immédiate</h4>
            <p className="text-blue-700">
              Appelez le <strong>06 28 53 24 73</strong> pour une prise en charge immédiate ou programmée vers Orly depuis Goussainville.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">🗺️ Zones Desservies</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Goussainville Centre</strong> - Prise en charge sous 5 minutes</li>
            <li><strong>Goussainville Gare RER</strong> - Accès rapide</li>
            <li><strong>Quartiers résidentiels</strong> - Tout Goussainville couvert</li>
            <li><strong>Retour Orly</strong> - Prise en charge aéroport vers Goussainville</li>
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
