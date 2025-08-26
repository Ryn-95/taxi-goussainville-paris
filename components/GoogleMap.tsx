'use client'

export default function GoogleMap() {
  return (
    <div className="relative">
      {/* Map placeholder with interactive style */}
      <div className="h-96 bg-gray-200 flex items-center justify-center relative overflow-hidden">
        {/* Map background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="border border-gray-400"></div>
            ))}
          </div>
        </div>

        {/* Location markers */}
        <div className="relative z-10 text-center">
          <div className="mb-4">
            <div className="text-4xl mb-2">📍</div>
            <p className="font-bold text-taxi-black">Goussainville</p>
            <p className="text-sm text-gray-600">Zone de service principale</p>
          </div>
          
          {/* Additional markers */}
          <div className="flex justify-around items-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-2xl">✈️</div>
              <p className="text-xs text-gray-600">CDG</p>
            </div>
            <div className="text-center">
              <div className="text-2xl">✈️</div>
              <p className="text-xs text-gray-600">Orly</p>
            </div>
            <div className="text-center">
              <div className="text-2xl">🏛️</div>
              <p className="text-xs text-gray-600">Paris</p>
            </div>
          </div>
        </div>

        {/* Coverage circle overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 border-4 border-taxi-yellow/30 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Interactive overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <div className="text-center text-white">
          <div className="text-4xl mb-2">🗺️</div>
          <p className="font-bold">Cliquez pour ouvrir Google Maps</p>
          <p className="text-sm">Vue interactive complète</p>
        </div>
      </div>

      {/* Click handler for opening Google Maps */}
      <a
        href="https://maps.google.com/maps?q=Goussainville,France&zoom=12"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20"
        aria-label="Ouvrir dans Google Maps"
      >
        <span className="sr-only">Ouvrir la carte dans Google Maps</span>
      </a>

      {/* Map info overlay */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <p className="text-sm font-semibold text-taxi-black">Zone de service</p>
        <p className="text-xs text-gray-600">Rayon de 50km autour de Goussainville</p>
      </div>

      <div className="absolute bottom-4 right-4 bg-taxi-yellow/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <p className="text-sm font-bold text-taxi-black">Service 24/7</p>
        <p className="text-xs text-taxi-black/80">Toute la région</p>
      </div>
    </div>
  )
}
