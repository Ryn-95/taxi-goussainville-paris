'use client'

import { useState } from 'react'
import { Calendar, MapPin, Users, Phone, User, Clock } from 'lucide-react'

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    departure: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    service: 'course-locale',
    comments: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format WhatsApp message
    const message = `🚕 NOUVELLE RÉSERVATION
    
👤 Nom : ${formData.name}
📞 Téléphone : ${formData.phone}
📧 Email : ${formData.email}

📍 Départ : ${formData.departure}
🎯 Destination : ${formData.destination}
📅 Date : ${formData.date}
🕐 Heure : ${formData.time}
👥 Passagers : ${formData.passengers}
🚗 Service : ${formData.service}

💬 Commentaires : ${formData.comments || 'Aucun'}

Merci de confirmer la réservation !`

    // Open WhatsApp with formatted message
    window.open(`https://wa.me/33123456789?text=${encodeURIComponent(message)}`, '_blank')
    
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg text-center">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Demande Envoyée !
        </h2>
        <p className="text-gray-700 mb-6">
          Votre demande de réservation a été transmise via WhatsApp. 
          Nous vous confirmerons votre course dans les plus brefs délais.
        </p>
        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            Vous pouvez aussi nous appeler directement :
          </p>
          <a
            href="tel:+33123456789"
            className="inline-block bg-taxi-yellow hover:bg-yellow-500 text-taxi-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            📞 01 23 45 67 89
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-taxi-black mb-2">
          📝 Formulaire de Réservation
        </h2>
        <p className="text-gray-600">
          Remplissez ce formulaire et nous vous contacterons rapidement pour confirmer votre course.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <User className="inline h-4 w-4 mr-1" />
              Nom complet *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent"
              placeholder="Votre nom et prénom"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Phone className="inline h-4 w-4 mr-1" />
              Téléphone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent"
              placeholder="06 12 34 56 78"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email (optionnel)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent"
            placeholder="votre@email.com"
          />
        </div>

        {/* Trip Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Adresse de départ *
            </label>
            <input
              type="text"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent"
              placeholder="Ex: 123 Rue de la Paix, Goussainville"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Destination *
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent"
              placeholder="Ex: Aéroport CDG Terminal 2E"
            />
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Clock className="inline h-4 w-4 mr-1" />
              Heure *
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Users className="inline h-4 w-4 mr-1" />
              Passagers
            </label>
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent"
            >
              <option value="1">1 passager</option>
              <option value="2">2 passagers</option>
              <option value="3">3 passagers</option>
              <option value="4">4 passagers</option>
              <option value="5">5+ passagers</option>
            </select>
          </div>
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Type de service
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent"
          >
            <option value="course-locale">Course locale</option>
            <option value="aeroport-cdg">Transfert aéroport CDG</option>
            <option value="aeroport-orly">Transfert aéroport Orly</option>
            <option value="aeroport-beauvais">Transfert aéroport Beauvais</option>
            <option value="paris">Transport vers Paris</option>
            <option value="personnalise">Service personnalisé</option>
          </select>
        </div>

        {/* Comments */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Commentaires ou informations spéciales
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent"
            placeholder="Ex: Numéro de vol, bagages nombreux, attente nécessaire..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-taxi-yellow hover:bg-yellow-500 text-taxi-black font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>Envoyer la demande via WhatsApp</span>
            <span>📱</span>
          </button>
          
          <p className="text-sm text-gray-600 mt-3 text-center">
            En cliquant sur ce bouton, vous serez redirigé vers WhatsApp avec votre demande pré-remplie.
          </p>
        </div>
      </form>
    </div>
  )
}
