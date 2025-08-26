'use client'

import { useState, useEffect } from 'react'

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Résidente Goussainville',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Service impeccable ! Le chauffeur était à l\'heure et très professionnel. Je recommande vivement pour les trajets vers CDG.',
      trip: 'Goussainville → CDG',
      time: 'Il y a 2 jours'
    },
    {
      name: 'Jean Martin',
      role: 'Chef d\'entreprise',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Excellent service pour mes déplacements professionnels. Toujours ponctuel et véhicules très propres.',
      trip: 'Paris 16e → Goussainville',
      time: 'Il y a 1 semaine'
    },
    {
      name: 'Sophie Laurent',
      role: 'Infirmière',
      avatar: 'https://images.unsplash.com/photo-1559209172-348b83f52e5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Service 24h/24 très appréciable pour mes gardes de nuit. Chauffeurs courtois et tarifs honnêtes.',
      trip: 'Gare du Nord → Sarcelles',
      time: 'Il y a 3 jours'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Étudiant',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Parfait pour mes trajets université. Prix étudiant très correct et service fiable même le weekend.',
      trip: 'Villiers-le-Bel → Paris 13e',
      time: 'Il y a 5 jours'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-4">
            Avis clients
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <div className="flex space-x-1 mb-6">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">⭐</span>
            ))}
          </div>
          
          <blockquote className="text-lg font-medium text-gray-900 mb-6 leading-relaxed">
            &quot;{testimonials[currentTestimonial].text}&quot;
          </blockquote>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 font-bold">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium text-black">{testimonials[currentTestimonial].name}</div>
                <div className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-900">{testimonials[currentTestimonial].trip}</div>
              <div className="text-xs text-gray-500">{testimonials[currentTestimonial].time}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}