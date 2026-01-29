import { Metadata } from 'next'
import { Phone, Calendar, Clock, MapPin, CheckCircle } from 'lucide-react'
import StickyCTA from '@/components/StickyCTA'

export const metadata: Metadata = {
  title: 'Réserver un Taxi à Goussainville | Réservation Immédiate 24/7',
  description: 'Réservez votre taxi à Goussainville en 1 clic. Disponible 24h/24 et 7j/7 pour aéroports, gares et urgences. Confirmation immédiate par téléphone.',
  keywords: ['réservation taxi goussainville', 'commander taxi', 'taxi 24/7', 'numéro taxi goussainville'],
}

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-gray-900 mb-4">
              Réserver votre <span className="text-yellow-600">Taxi</span>
            </h1>
            <p className="text-xl text-gray-600">
              Le moyen le plus rapide pour commander est de nous appeler directement.
              <br />
              <span className="font-bold text-green-600">Réponse immédiate garantie.</span>
            </p>
          </div>

          {/* Main Booking Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Left: Phone Call */}
                <div className="text-center md:text-left space-y-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Appel Direct (Recommandé)</h2>
                    <p className="text-gray-500 mb-6">Pour une prise en charge immédiate ou une réservation urgente.</p>
                    <a 
                      href="tel:+33628532473"
                      className="block w-full py-4 px-6 bg-yellow-500 hover:bg-yellow-400 text-black text-center font-black text-xl rounded-xl transition-transform transform hover:scale-105 shadow-lg"
                    >
                      📞 06 28 53 24 73
                    </a>
                    <p className="text-sm text-center text-gray-400 mt-3">Coût d'un appel local</p>
                  </div>
                </div>

                {/* Right: Info */}
                <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
                  <h3 className="font-bold text-lg mb-4">Informations à préparer :</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-gray-900">Adresse de départ</span>
                        <p className="text-sm text-gray-500">Rue, numéro, ville</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-gray-900">Heure souhaitée</span>
                        <p className="text-sm text-gray-500">Immédiat ou différé</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-gray-900">Type de véhicule</span>
                        <p className="text-sm text-gray-500">Berline ou Van (sur demande)</p>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="bg-gray-900 p-6 text-center text-white">
              <p className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-500" />
                Disponible 24h/24 et 7j/7 - Dimanches et Jours Fériés inclus
              </p>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Vous préférez envoyer un message ?</p>
            <div className="flex justify-center gap-4">
              <a 
                href="sms:+33628532473" 
                className="px-6 py-3 bg-white border border-gray-200 rounded-lg font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
              >
                💬 Envoyer un SMS
              </a>
              <a 
                href="https://wa.me/33628532473" 
                className="px-6 py-3 bg-[#25D366] text-white rounded-lg font-bold hover:bg-[#128C7E] transition-colors shadow-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
      <StickyCTA />
    </main>
  )
}
