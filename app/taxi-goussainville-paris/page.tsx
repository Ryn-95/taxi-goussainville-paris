import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '🚖 TAXI GOUSSAINVILLE PARIS 06 28 53 24 73 ⭐ TRANSPORT PARIS CENTRE 24H/24',
  description: '🚖 TAXI GOUSSAINVILLE PARIS 06 28 53 24 73 ⭐ TRANSPORT TOUS ARRONDISSEMENTS PARIS 24H/24 🏛️ Course Goussainville Paris Centre Tour Eiffel Champs Elysées 🏆 MEILLEUR SERVICE',
  keywords: [
    'taxi Goussainville Paris', 'TAXI GOUSSAINVILLE PARIS',
    'transport Goussainville Paris', 'TRANSPORT GOUSSAINVILLE PARIS',
    'course Goussainville Paris', 'COURSE GOUSSAINVILLE PARIS',
    'taxi Goussainville centre Paris', 'TAXI GOUSSAINVILLE CENTRE PARIS',
    'navette Goussainville Paris', 'NAVETTE GOUSSAINVILLE PARIS',
    'taxi Paris Goussainville', 'TAXI PARIS GOUSSAINVILLE',
    'trajet Goussainville Paris', 'TRAJET GOUSSAINVILLE PARIS'
  ],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/taxi-goussainville-paris'
  }
}

export default function TaxiGoussainvilleParisPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-black text-black mb-6">
            🚖 TAXI GOUSSAINVILLE PARIS
          </h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            ⭐ TRANSPORT TOUS ARRONDISSEMENTS PARIS 24H/24
          </h2>
          <div className="inline-flex items-center space-x-3 bg-black text-white rounded-xl px-8 py-4 shadow-lg">
            <span className="text-xl">📞</span>
            <a href="tel:+33628532473" className="text-xl font-bold">
              06 28 53 24 73
            </a>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-2xl font-bold mb-4">🚖 Meilleur Service Taxi Goussainville Paris</h3>
          <p className="text-lg mb-6">
            <strong>TAXI GOUSSAINVILLE PARIS 06 28 53 24 73</strong> - Service professionnel de transport entre Goussainville et Paris. Desserte de tous les arrondissements parisiens 24h/24.
          </p>

          <h3 className="text-2xl font-bold mb-4">🏛️ Paris Tous Arrondissements Couverts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-bold mb-2">🌟 Paris Centre (1er-4e)</h4>
              <ul className="list-disc pl-6">
                <li>Châtelet, Louvre, Notre-Dame</li>
                <li>Marais, Île Saint-Louis</li>
                <li>Palais Royal, Place Vendôme</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">🗼 Paris Ouest (7e-8e-16e)</h4>
              <ul className="list-disc pl-6">
                <li>Tour Eiffel, Trocadéro</li>
                <li>Champs-Élysées, Arc de Triomphe</li>
                <li>Bois de Boulogne</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">🏛️ Paris Est (11e-12e-20e)</h4>
              <ul className="list-disc pl-6">
                <li>Bastille, République</li>
                <li>Père Lachaise, Belleville</li>
                <li>Nation, Vincennes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">🎨 Paris Nord (9e-10e-18e)</h4>
              <ul className="list-disc pl-6">
                <li>Montmartre, Sacré-Cœur</li>
                <li>Pigalle, Opéra</li>
                <li>Gare du Nord, Gare de l'Est</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">🏆 Pourquoi Choisir Notre Taxi Goussainville Paris ?</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Accès direct A1/A86</strong> - Route rapide vers Paris</li>
            <li><strong>Connaissance parfaite</strong> - Tous arrondissements et boulevards</li>
            <li><strong>Évitement embouteillages</strong> - Itinéraires optimisés</li>
            <li><strong>Service jour/nuit</strong> - Transport Paris 24h/24</li>
            <li><strong>Tarifs compétitifs</strong> - Prix transparents</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">📞 Réservation Taxi Goussainville Paris</h3>
          <p className="text-lg mb-6">
            <strong>Téléphone :</strong> <a href="tel:+33628532473" className="text-blue-600 font-bold">06 28 53 24 73</a><br/>
            <strong>WhatsApp :</strong> <a href="https://wa.me/33628532473" className="text-green-600 font-bold">Message direct</a><br/>
            <strong>Disponibilité :</strong> 24 heures sur 24, 7 jours sur 7
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-red-800 mb-2">⚡ Réservation Immédiate</h4>
            <p className="text-red-700">
              Appelez le <strong>06 28 53 24 73</strong> pour une prise en charge immédiate vers Paris depuis Goussainville.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">🗺️ Destinations Populaires</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Gares parisiennes</strong> - Gare du Nord, Gare de Lyon, Saint-Lazare</li>
            <li><strong>Monuments</strong> - Tour Eiffel, Arc de Triomphe, Notre-Dame</li>
            <li><strong>Quartiers d'affaires</strong> - La Défense, Opéra, République</li>
            <li><strong>Hôpitaux parisiens</strong> - AP-HP, cliniques privées</li>
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
