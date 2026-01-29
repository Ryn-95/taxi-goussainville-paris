import { Phone, MessageCircle, Mail, Clock } from 'lucide-react'

export default function QuickActions() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-taxi-black mb-6">
          🚀 Réservation Express
        </h2>
        
        <div className="space-y-4">
          {/* Phone */}
          <a
            href="tel:+33123456789"
            className="w-full bg-taxi-yellow hover:bg-yellow-500 text-taxi-black font-semibold px-6 py-4 rounded-lg flex items-center space-x-3 transition-colors duration-200 group"
          >
            <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-bold">Appeler maintenant</p>
              <p className="text-sm">01 23 45 67 89</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/33123456789?text=Bonjour,%20je%20souhaite%20réserver%20un%20taxi.%20Voici%20mes%20informations%20:%0A%0ADépart%20:%20%0ADestination%20:%20%0ADate%20et%20heure%20:%20%0ANombre%20de%20passagers%20:%20"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg flex items-center space-x-3 transition-colors duration-200 group"
          >
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-bold">WhatsApp</p>
              <p className="text-sm">Réponse immédiate</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:contact@taxigoussainville.fr?subject=Demande%20de%20réservation%20taxi&body=Bonjour,%0A%0AJe%20souhaite%20réserver%20un%20taxi%20:%0A%0ADépart%20:%20%0ADestination%20:%20%0ADate%20et%20heure%20:%20%0ANombre%20de%20passagers%20:%20%0A%0AMerci"
            className="w-full bg-taxi-black hover:bg-gray-800 text-white font-semibold px-6 py-4 rounded-lg flex items-center space-x-3 transition-colors duration-200 group"
          >
            <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-bold">Email</p>
              <p className="text-sm">contact@taxigoussainville.fr</p>
            </div>
          </a>
        </div>
      </div>

      {/* Service Hours */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-taxi-black mb-4 flex items-center">
          <Clock className="h-6 w-6 text-taxi-yellow mr-2" />
          Disponibilité
        </h3>
        <div className="space-y-2 text-gray-700">
          <p className="font-semibold text-green-600">
            🟢 Service 24h/24 - 7j/7
          </p>
          <p>• Jours de semaine : 24h/24</p>
          <p>• Week-ends : 24h/24</p>
          <p>• Jours fériés : 24h/24</p>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-taxi-yellow/10 rounded-xl p-6 border border-taxi-yellow/20">
        <h3 className="text-lg font-bold text-taxi-black mb-4">
          💡 Conseils de Réservation
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>✅ Réservez 30min à l'avance pour les aéroports</li>
          <li>✅ Précisez le nombre de bagages</li>
          <li>✅ Indiquez votre numéro de vol</li>
          <li>✅ Confirmez votre numéro de téléphone</li>
        </ul>
      </div>

      {/* Pricing Info */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-taxi-black mb-3">
          💰 Tarification
        </h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p><span className="font-semibold">Aéroports :</span> Tarifs fixes</p>
          <p><span className="font-semibold">Local :</span> Au kilomètre</p>
          <p><span className="font-semibold">Paris :</span> Forfait selon zone</p>
          <p className="text-taxi-yellow font-semibold">Devis gratuit sur demande</p>
        </div>
      </div>
    </div>
  )
}

