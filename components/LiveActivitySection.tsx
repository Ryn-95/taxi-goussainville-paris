'use client'

import { useState, useEffect } from 'react'

export default function LiveActivitySection() {
  const [isAvailable, setIsAvailable] = useState(true)
  const [completedRides, setCompletedRides] = useState(127)
  const [currentTime, setCurrentTime] = useState(new Date())

  const recentRides = [
    { from: 'Goussainville Centre', to: 'CDG Terminal 2', duration: '35 min', status: 'completed', time: '14:23' },
    { from: 'Paris 16e', to: 'Goussainville', duration: '42 min', status: 'completed', time: '13:58' },
    { from: 'Villiers-le-Bel', to: 'Orly', duration: '55 min', status: 'completed', time: '13:12' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      if (Math.random() > 0.9) {
        setCompletedRides(prev => prev + 1)
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-4">
            Service disponible
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Chauffeur info */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl">
                🚖
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Votre chauffeur</h3>
                <p className="text-gray-600">Service professionnel à Goussainville</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-3 h-3 rounded-full ${isAvailable ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="font-medium text-gray-900">
                {isAvailable ? 'Disponible maintenant' : 'En course'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{completedRides}</div>
                <div className="text-sm text-gray-600">Courses réalisées</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
              </div>
            </div>
          </div>

          {/* Courses récentes */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="font-bold text-gray-900 mb-6">Courses récentes</h3>
            
            <div className="space-y-4">
              {recentRides.map((ride, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium text-gray-900">
                      {ride.from} → {ride.to}
                    </div>
                    <div className="text-xs text-gray-500">{ride.time}</div>
                  </div>
                  <div className="text-xs text-gray-500">{ride.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-black text-white rounded-2xl px-8 py-4">
            <div className="text-2xl">🕐</div>
            <div>
              <div className="font-bold text-lg">
                {currentTime.toLocaleTimeString('fr-FR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
              <div className="text-sm text-gray-300">Service disponible 24h/24</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}