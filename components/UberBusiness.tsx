'use client'

import Image from 'next/image'

export default function UberBusiness() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight">
              Le taxi que vous connaissez, repensé pour les entreprises
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Taxi Business est une plateforme dédiée aux entreprises de toutes tailles, conçue pour gérer leurs déplacements et repas à travers le monde, ainsi que leurs livraisons au niveau local.
            </p>

            <div className="space-x-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Commencez
              </button>
              
              <button className="text-black underline hover:no-underline">
                Découvrez nos solutions
              </button>
            </div>
          </div>

          {/* Right - Vraie image moderne comme Uber */}
          <div className="relative">
            <div className="rounded-3xl h-96 relative overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ville moderne et business"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-yellow-500/20 to-orange-500/30"></div>
              
              {/* Business elements overlay */}
              <div className="absolute top-8 left-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-semibold text-blue-600">🏢 Business</span>
                </div>
              </div>

              <div className="absolute bottom-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-semibold text-green-600">✈️ Global</span>
                </div>
              </div>

              <div className="absolute top-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-semibold text-orange-600">🚗 Mobilité</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
