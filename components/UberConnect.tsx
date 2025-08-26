'use client'

import Image from 'next/image'

export default function UberConnect() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge statut */}
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700">Service disponible 24h/24</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight">
                Contactez-nous pour réserver
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Appelez-nous directement ou envoyez un SMS pour réserver votre taxi. Service rapide et professionnel.
              </p>

              {/* Moyens de contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {[
                  { icon: '📞', text: 'Appel direct' },
                  { icon: '💬', text: 'SMS de réservation' },
                  { icon: '📧', text: 'Email de contact' },
                  { icon: '🏠', text: 'Prise en charge à domicile' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </span>
                    <span className="text-gray-700 group-hover:text-black transition-colors font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+33628532473"
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg text-center"
              >
                📞 Appeler maintenant
              </a>
              <a 
                href="https://wa.me/33628532473?text=Bonjour, je souhaite réserver un taxi."
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:no-underline hover:text-gray-600 transition-colors font-medium px-4 py-4 text-center"
              >
                💬 Envoyer un message WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Image taxi + info contact */}
          <div className="space-y-8">
            {/* Image taxi professionnel */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <Image 
                src="/images/contact.jpg"
                alt="Service de réservation taxi - contactez-nous facilement"
                width={800}
                height={500}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-bold text-black mb-2">Réservation facile</h3>
                <p className="text-sm text-gray-600">Appelez et nous arrivons rapidement</p>
              </div>
            </div>

            {/* Carte d'informations compacte */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-black">Contact direct</h3>
              </div>

              <div className="space-y-3">
                <a 
                  href="tel:+33628532473"
                  className="w-full bg-black text-white py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>📞</span>
                  <span>06 28 53 24 73</span>
                </a>
                <a 
                  href="https://wa.me/33628532473?text=Bonjour, je souhaite réserver un taxi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-medium text-sm hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
