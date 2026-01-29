import { Phone, MessageCircle, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-taxi-yellow to-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-taxi-black mb-6">
            Prêt à Réserver Votre Course ?
          </h2>
          <p className="text-xl text-taxi-black/80 mb-12 max-w-2xl mx-auto">
            Contactez-nous maintenant pour une réservation immédiate 
            ou planifiez votre course à l'avance. Service rapide et fiable garanti !
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <a
              href="tel:+33123456789"
              className="bg-taxi-black hover:bg-gray-800 text-white font-semibold px-8 py-6 rounded-2xl flex flex-col items-center space-y-3 transition-all duration-200 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <Phone className="h-8 w-8" />
              <div>
                <p className="text-lg font-bold">Appelez-nous</p>
                <p className="text-sm opacity-80">01 23 45 67 89</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/33123456789?text=Bonjour,%20je%20souhaite%20réserver%20un%20taxi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 rounded-2xl flex flex-col items-center space-y-3 transition-all duration-200 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <MessageCircle className="h-8 w-8" />
              <div>
                <p className="text-lg font-bold">WhatsApp</p>
                <p className="text-sm opacity-80">Réponse rapide</p>
              </div>
            </a>

            {/* Reservation Form */}
            <Link
              href="/reservation"
              className="bg-white hover:bg-gray-50 text-taxi-black font-semibold px-8 py-6 rounded-2xl flex flex-col items-center space-y-3 transition-all duration-200 transform hover:-translate-y-2 hover:shadow-xl border-2 border-taxi-black"
            >
              <Calendar className="h-8 w-8" />
              <div>
                <p className="text-lg font-bold">Réserver en ligne</p>
                <p className="text-sm opacity-60">Formulaire rapide</p>
              </div>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="bg-taxi-black/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-taxi-black">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">⚡</div>
                <p className="font-semibold">Réponse Immédiate</p>
                <p className="text-sm opacity-80">En moins de 2 minutes</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">🚗</div>
                <p className="font-semibold">Prise en Charge Rapide</p>
                <p className="text-sm opacity-80">Selon votre localisation</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">💳</div>
                <p className="font-semibold">Paiement Flexible</p>
                <p className="text-sm opacity-80">Espèces ou CB</p>
              </div>
            </div>
          </div>

          {/* Emergency Note */}
          <div className="mt-8 p-6 bg-red-100 border-l-4 border-red-500 rounded-r-xl">
            <p className="text-red-800 font-semibold">
              🚨 Urgence ou course immédiate ? Appelez directement au 01 23 45 67 89
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

