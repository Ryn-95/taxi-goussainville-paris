'use client'

import Image from 'next/image'

export default function UberDriver() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Vraie photo d'intérieur comme Uber */}
          <div className="relative">
            <div className="rounded-3xl h-96 relative overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Intérieur de voiture moderne"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20"></div>
              
              {/* Dashboard overlay elements */}
              <div className="absolute bottom-8 left-8 space-y-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-semibold text-green-600">En ligne</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-semibold text-blue-600">GPS actif</span>
                </div>
              </div>

              {/* Earnings indicator */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-semibold text-black">€25/h</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight">
              Conduisez quand vous voulez, générez des revenus sur mesure
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Générez des revenus selon votre propre emploi du temps en effectuant des livraisons, des courses, ou même les deux. Vous pouvez utiliser votre propre véhicule ou choisir une voiture de location via Taxi Goussainville.
            </p>

            <div className="space-y-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Commencez
              </button>
              
              <p className="text-gray-600">
                Vous avez déjà un compte ? <button className="text-black underline hover:no-underline">Connectez-vous</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
