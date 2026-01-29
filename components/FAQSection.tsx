'use client'

import React, { useState } from 'react'

const faqs = [
  {
    question: "Combien coûte un taxi de Goussainville à l'aéroport CDG ?",
    answer: "Le tarif est réglementé. Pour un trajet de jour (7h-19h), comptez environ 25€-35€. De nuit (19h-7h) ou le dimanche, le tarif est d'environ 35€-45€. Nous sommes situés à seulement 15 minutes des terminaux, ce qui garantit un prix très compétitif par rapport aux VTC parisiens."
  },
  {
    question: "Acceptez-vous la carte bancaire à bord ?",
    answer: "Oui, absolument. Tous nos véhicules sont équipés de terminaux de paiement électronique (TPE) acceptant les cartes Visa, Mastercard et American Express. Le paiement sans contact est également disponible."
  },
  {
    question: "Comment réserver un taxi pour un départ tôt le matin ?",
    answer: "C'est notre spécialité. Vous pouvez réserver votre taxi la veille (ou plusieurs jours avant) en nous appelant au 06 28 53 24 73 ou via notre formulaire en ligne. Votre chauffeur sera devant chez vous 5 minutes avant l'heure prévue."
  },
  {
    question: "Faites-vous du transport médical assis (conventionné CPAM) ?",
    answer: "Oui, nous sommes habilités pour le transport de malades assis. Si vous avez une prescription médicale de transport (bon de transport), nous pouvons assurer vos déplacements vers les hôpitaux et cliniques avec prise en charge (tiers payant possible selon cas)."
  },
  {
    question: "Quelle est la différence avec Uber ou Bolt ?",
    answer: "Contrairement aux VTC, nous avons accès aux couloirs de bus et aux zones réservées dans les aéroports, ce qui nous permet d'éviter les bouchons. De plus, nos tarifs ne subissent pas de majoration x2 ou x3 quand il pleut ou qu'il y a des grèves."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">Questions Fréquentes</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Tout ce que vous devez savoir pour votre déplacement en taxi à Goussainville et ses environs.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-black transition-colors duration-300"
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-lg pr-8" itemProp="name">{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-2xl ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                itemScope 
                itemProp="acceptedAnswer" 
                itemType="https://schema.org/Answer"
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
                  <span itemProp="text">{faq.answer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
