import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import StickyCTA from '@/components/StickyCTA'

export const metadata: Metadata = {
  title: 'Contactez Taxi Goussainville | Devis & Renseignements',
  description: 'Besoin d\'un devis ou d\'une information ? Contactez notre service client. Réponse rapide garantie. Téléphone, Email ou Formulaire.',
  keywords: ['contact taxi goussainville', 'téléphone taxi', 'email taxi', 'devis taxi'],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Une question ? Une demande de devis spécifique ? Nous sommes à votre écoute 24h/24.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Nos Coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0 mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-1">Téléphone</h3>
                    <p className="text-gray-600 mb-2">Ligne prioritaire 24/7</p>
                    <a href="tel:+33628532473" className="text-2xl font-black text-yellow-600 hover:text-yellow-700">
                      06 28 53 24 73
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">Pour les devis professionnels</p>
                    <a href="mailto:contact@taxi-goussainville.fr" className="text-lg font-medium text-gray-900 underline">
                      contact@taxi-goussainville.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-1">Zone de Stationnement</h3>
                    <p className="text-gray-600">
                      Goussainville, Val-d'Oise (95)<br />
                      Île-de-France
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-1">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Dimanche : 24h/24<br />
                      <span className="text-green-600 font-bold">Ouvert actuellement</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder or Area */}
            <div className="bg-gray-100 rounded-2xl h-64 w-full flex items-center justify-center border border-gray-200">
              <p className="text-gray-500 font-medium">Zone d'intervention : Toute l'Île-de-France</p>
            </div>
          </div>

          {/* Form (Visual only for now, acts as CTA) */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Envoyer un message</h2>
            <form className="space-y-6" action="mailto:contact@taxi-goussainville.fr" method="post" encType="text/plain">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nom</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all" placeholder="Votre numéro" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all" placeholder="votre@email.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all" placeholder="Bonjour, je souhaiterais un devis pour..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg text-lg">
                Envoyer ma demande
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                En cliquant sur envoyer, vous acceptez d'être recontacté pour votre demande.
              </p>
            </form>
          </div>

        </div>
      </section>
      <StickyCTA />
    </main>
  )
}
