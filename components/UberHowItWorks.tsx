'use client'

export default function UberHowItWorks() {
  const steps = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="6" width="24" height="28" rx="4" fill="white" stroke="white" strokeWidth="2"/>
          <rect x="10" y="10" width="20" height="12" rx="2" fill="#f3f4f6"/>
          <circle cx="20" cy="28" r="1.5" fill="#374151"/>
        </svg>
      ),
      title: 'Demandez',
      description: 'Entrez votre destination et demandez une course.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="15" fill="white" stroke="white" strokeWidth="2"/>
          <path d="M15 20L18 23L25 16" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Montez à bord',
      description: 'Vous êtes mis en relation avec votre chauffeur.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M8 15h24c2 0 4 2 4 4v8c0 2-2 4-4 4H8c-2 0-4-2-4-4v-8c0-2 2-4 4-4z" fill="white" stroke="white" strokeWidth="2"/>
          <path d="M8 20h24" stroke="#374151" strokeWidth="2"/>
          <circle cx="28" cy="25" r="2" fill="#374151"/>
        </svg>
      ),
      title: 'Détendez-vous',
      description: 'Votre course est terminée, le paiement s\'effectue automatiquement.'
    }
  ]

  return (
    <section className="bg-gray-50 py-24 lg:py-32" style={{ fontFamily: 'UberMoveText, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header EXACTEMENT comme Uber */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-8 tracking-tight leading-none">
            Il n'a jamais été aussi simple de se déplacer
          </h2>
        </div>

        {/* Steps Grid EXACTEMENT layout Uber */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <div key={index} className="text-left space-y-8">
              
              {/* Icon EXACTEMENT style Uber */}
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                {step.icon}
              </div>

              {/* Content EXACTEMENT comme Uber */}
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-black leading-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-normal max-w-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section EXACTEMENT style Uber */}
        <div className="mt-24 text-center">
          <div className="max-w-md mx-auto">
            <a
              href="tel:+33123456789"
              className="block w-full bg-black hover:bg-gray-800 text-white font-semibold py-5 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
            >
              Commencer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
