import { Metadata } from 'next'
import HeroReservation from '@/components/HeroReservation'

export const metadata: Metadata = {
  title: '🚖 RÉSERVATION TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ FORMULAIRE EN LIGNE 24H/24',
  description: '🚖 RÉSERVATION TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ FORMULAIRE PROFESSIONNEL EN LIGNE 📝 Réservez taxi Goussainville Paris CDG Orly 24h/24 🏆 CONFIRMATION IMMÉDIATE WhatsApp SMS',
  keywords: [
    'réservation taxi Goussainville', 'RÉSERVATION TAXI GOUSSAINVILLE',
    'réserver taxi Goussainville', 'RÉSERVER TAXI GOUSSAINVILLE',
    'formulaire taxi Goussainville', 'FORMULAIRE TAXI GOUSSAINVILLE',
    'réservation en ligne taxi Goussainville', 'RÉSERVATION EN LIGNE TAXI GOUSSAINVILLE',
    'réservation taxi CDG Goussainville', 'RÉSERVATION TAXI CDG GOUSSAINVILLE',
    'réservation taxi Orly Goussainville', 'RÉSERVATION TAXI ORLY GOUSSAINVILLE',
    'réservation taxi Paris Goussainville', 'RÉSERVATION TAXI PARIS GOUSSAINVILLE',
    'réserver taxi 24h Goussainville', 'RÉSERVER TAXI 24H GOUSSAINVILLE',
    'réservation taxi professionnel Goussainville', 'RÉSERVATION TAXI PROFESSIONNEL GOUSSAINVILLE',
    'taxi Goussainville réservation en ligne', 'TAXI GOUSSAINVILLE RÉSERVATION EN LIGNE'
  ],
  openGraph: {
    title: '🚖 RÉSERVATION TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ FORMULAIRE EN LIGNE 24H/24',
    description: '🚖 RÉSERVATION TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ FORMULAIRE PROFESSIONNEL EN LIGNE 📝 Réservez taxi Goussainville',
    url: 'https://taxi-goussainville-paris.vercel.app/reservation',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚖 RÉSERVATION TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ FORMULAIRE EN LIGNE 24H/24',
    description: '🚖 RÉSERVATION TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ FORMULAIRE PROFESSIONNEL EN LIGNE 📝 Réservez taxi Goussainville'
  },
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/reservation',
  },
}

export default function ReservationPage() {
  return (
    <main className="min-h-screen">
      <HeroReservation />
      
      {/* Section informations complémentaires */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Avantages de la réservation en ligne */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">
              Pourquoi réserver en ligne ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Rapide et efficace</h3>
                <p className="text-gray-600 text-sm">
                  Formulaire intelligent avec validation automatique et suggestions personnalisées
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Confirmation immédiate</h3>
                <p className="text-gray-600 text-sm">
                  Recevoir une confirmation directe via WhatsApp ou appel téléphonique
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Service professionnel</h3>
                <p className="text-gray-600 text-sm">
                  Chauffeur expérimenté, véhicule récent et tarifs transparents
                </p>
              </div>
              
            </div>
          </div>

          {/* Informations pratiques */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-bold text-xl mb-6 text-center">Informations pratiques</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                  <span>🚖</span>
                  <span>Types de services</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Course immédiate (sous 5 minutes)</li>
                  <li>• Réservation à l'avance</li>
                  <li>• Transport médical spécialisé</li>
                  <li>• Transferts aéroports (CDG, Orly, Beauvais)</li>
                  <li>• Courses longue distance</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                  <span>⏰</span>
                  <span>Disponibilité</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Service 24 heures sur 24</li>
                  <li>• 7 jours sur 7, même les jours fériés</li>
                  <li>• Temps de réponse moyen : 5 minutes</li>
                  <li>• Confirmation sous 2 minutes</li>
                  <li>• Suivi en temps réel</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                  <span>💳</span>
                  <span>Paiement</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Espèces</li>
                  <li>• Carte bancaire</li>
                  <li>• Chèques</li>
                  <li>• Factures entreprises</li>
                  <li>• Paiement sécurisé</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                  <span>📍</span>
                  <span>Zones desservies</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Goussainville et environs</li>
                  <li>• Sarcelles, Villiers-le-Bel</li>
                  <li>• Paris tous arrondissements</li>
                  <li>• Petite et grande couronne</li>
                  <li>• Aéroports franciliens</li>
                </ul>
              </div>
              
            </div>
          </div>

          {/* Contact direct */}
          <div className="text-center mt-12">
            <div className="bg-black text-white rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Besoin d'aide ?</h3>
              <p className="text-gray-300 mb-6">
                Notre équipe est disponible 24h/7 pour vous accompagner
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+33628532473"
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  📞 06 28 53 24 73
                </a>
                <a 
                  href="https://wa.me/33628532473?text=Bonjour, j'ai besoin d'aide pour ma réservation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  )
}