'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [selectedDate, setSelectedDate] = useState('Aujourd\'hui')
  const [selectedTime, setSelectedTime] = useState('Maintenant')
  const [customDate, setCustomDate] = useState('')
  const [customTime, setCustomTime] = useState('')
  const [passengerCount, setPassengerCount] = useState('1')
  const [specialRequests, setSpecialRequests] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [estimatedTime, setEstimatedTime] = useState('')
  const [formProgress, setFormProgress] = useState(0)
  const [lastReservation, setLastReservation] = useState<any>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  // Suggestions intelligentes basées sur la localisation
  const popularDestinations = [
    { name: 'CDG Airport', emoji: '✈️', type: 'aéroport' },
    { name: 'Orly Airport', emoji: '✈️', type: 'aéroport' },
    { name: 'Gare du Nord', emoji: '🚂', type: 'transport' },
    { name: 'Châtelet-Les Halles', emoji: '🚇', type: 'transport' },
    { name: 'Hôpital Bichat', emoji: '🏥', type: 'médical' },
    { name: 'Paris Centre', emoji: '🏛️', type: 'centre-ville' },
    { name: 'La Défense', emoji: '🏢', type: 'business' },
    { name: 'Disneyland Paris', emoji: '🎢', type: 'loisirs' }
  ]

  // Estimation intelligente du temps uniquement (pro)
  const calculateEstimate = (from: string, to: string) => {
    if (!from || !to) return

    // Estimation temps de trajet uniquement
    const distances: Record<string, { time: string }> = {
      'CDG Airport': { time: '35-45 min' },
      'Orly Airport': { time: '45-60 min' },
      'Gare du Nord': { time: '25-35 min' },
      'Paris Centre': { time: '20-30 min' },
      'Hôpital': { time: '15-20 min' },
      'Disneyland Paris': { time: '45-60 min' },
      'La Défense': { time: '30-40 min' }
    }

    const estimate = distances[to] || { time: '15-45 min' }
    setEstimatedTime(estimate.time)
  }

  // Calculer le progrès du formulaire
  const calculateProgress = () => {
    let progress = 0
    if (pickup.length >= 3) progress += 40
    if (destination.length >= 3) progress += 40
    if (selectedDate && selectedTime) progress += 20
    setFormProgress(progress)
  }

  // Vérifier si le formulaire est valide avec validation avancée
  const checkFormValidity = () => {
    const pickupValid = pickup.trim().length >= 3
    const destinationValid = destination.trim().length >= 3
    const valid = pickupValid && destinationValid
    setIsFormValid(valid)

    // Calculer progrès et estimation
    calculateProgress()
    if (valid) {
      calculateEstimate(pickup, destination)
    }
  }

  // Mettre à jour la validité quand les champs changent
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      checkFormValidity()
    }, 500) // Debounce pour éviter trop d'appels

    return () => clearTimeout(timeoutId)
  }, [pickup, destination])

  // Fonction géolocalisation
  const getCurrentLocation = () => {
    setIsLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Simulation de géocodage inverse
          setPickup('Votre position actuelle (Goussainville)')
          setIsLoading(false)
        },
        (error) => {
          alert('Impossible d\'obtenir votre position. Veuillez saisir manuellement.')
          setIsLoading(false)
        }
      )
    } else {
      alert('Géolocalisation non supportée par votre navigateur')
      setIsLoading(false)
    }
  }

  // Fonction pour traiter la réservation - ULTRA PROFESSIONNELLE
  const handleReservation = async () => {
    if (!isFormValid) {
      alert('⚠️ Veuillez remplir correctement tous les champs obligatoires')
      return
    }

    setIsLoading(true)

    // Préparer les informations complètes
    const currentDateTime = new Date().toLocaleString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    const finalDate = selectedDate === 'Autre date' ? customDate : selectedDate
    const finalTime = selectedTime === 'Autre heure' ? customTime : selectedTime

    // Message ultra professionnel structuré
    const professionalMessage = `🚖 DEMANDE DE RÉSERVATION TAXI

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 DÉTAILS DU TRAJET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 POINT DE DÉPART
${pickup}

📍 DESTINATION  
${destination}

📅 DATE DE RÉSERVATION
${finalDate}

🕒 HEURE SOUHAITÉE
${finalTime}

👥 NOMBRE DE PASSAGERS
${passengerCount} personne(s)

${specialRequests ? `📝 DEMANDES SPÉCIALES\n${specialRequests}\n\n` : ''}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 INFORMATIONS TRAJET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${estimatedTime ? `⏱️ Durée estimée: ${estimatedTime}` : ''}
💰 Tarif: Communiqué lors de la confirmation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 ENVOYÉ LE: ${currentDateTime}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Merci de confirmer la disponibilité et le tarif exact.

Cordialement,
Client Taxi Goussainville`

    // Dialogue de confirmation professionnel
    const confirmationDialog = `✅ RÉCAPITULATIF DE VOTRE DEMANDE

📍 ${pickup}
     ↓
📍 ${destination}

📅 ${finalDate} à ${finalTime}
👥 ${passengerCount} passager(s)
${estimatedTime ? `⏱️ Durée: ${estimatedTime}` : ''}

───────────────────────────────

Choisissez votre méthode de contact:

✅ OK = Envoyer via WhatsApp
❌ Annuler = Appeler directement`

    const userChoice = confirm(confirmationDialog)

    if (userChoice) {
      // WhatsApp avec message professionnel
      const whatsappUrl = `https://wa.me/33628532473?text=${encodeURIComponent(professionalMessage)}`
      window.open(whatsappUrl, '_blank')
      
      // Feedback professionnel avec animation
      setTimeout(() => {
        setIsLoading(false)
        alert(`✅ DEMANDE ENVOYÉE AVEC SUCCÈS !

📱 Votre demande a été transmise via WhatsApp
⏰ Réponse sous 5 minutes en moyenne
📞 En cas d'urgence: 06 28 53 24 73

Merci de votre confiance !`)
        
        // Sauvegarder la réservation
        setLastReservation(Date.now())
        
        // Reset progressif du formulaire
        setTimeout(() => {
          setPickup('')
          setDestination('')
          setSelectedDate('Aujourd\'hui')
          setSelectedTime('Maintenant')
          setPassengerCount('1')
          setSpecialRequests('')
          setEstimatedTime('')
          setShowAdvanced(false)
          setFormProgress(0)
        }, 3000)
      }, 1500)
    } else {
      // Appel direct avec confirmation
      setIsLoading(false)
      const callConfirm = confirm(`📞 APPEL DIRECT

Vous allez être redirigé vers:
06 28 53 24 73

💡 Conseil: Ayez vos informations prêtes:
• Point de départ: ${pickup}
• Destination: ${destination}  
• Date/Heure: ${finalDate} à ${finalTime}

Confirmer l'appel ?`)
      
      if (callConfirm) {
        window.location.href = 'tel:+33628532473'
      }
    }
  }

  return (
    <section className="relative bg-gray-50 pt-20 pb-16 min-h-screen ios-vh-fix" style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 hero-container">
        
        {/* Header compact avec titre et CTA */}
        <div className="text-center mb-12 my-responsive">
          
          {/* Preuve Sociale - SEO Trust Signal */}
          <div className="flex items-center justify-center space-x-2 mb-4 animate-fade-in-up">
            <div className="flex text-yellow-400 text-lg">★★★★★</div>
            <span className="text-sm font-bold text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
              4.9/5 sur Google (127 avis)
            </span>
          </div>

          <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight mb-4">
            Taxi Goussainville 24/7 <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">
              Réservation & Transfert Aéroport
            </span>
          </h1>
          <p className="hero-subtitle text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Votre chauffeur privé local. Arrivée en <span className="font-bold text-black">10 minutes</span>. 
            Liaison directe <Link href="/taxi-goussainville-cdg" className="text-black font-bold hover:underline decoration-yellow-500 underline-offset-2">CDG</Link>, <Link href="/taxi-goussainville-orly" className="text-black font-bold hover:underline decoration-yellow-500 underline-offset-2">Orly</Link> et <Link href="/taxi-goussainville-paris" className="text-black font-bold hover:underline decoration-yellow-500 underline-offset-2">Gares Parisiennes</Link>.
          </p>
          
          {/* CTA intégré dans le header */}
          <div className="hero-cta-compact inline-flex items-center space-x-3 bg-white border-2 border-black text-black rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 touch-optimized">
            <div className="text-lg animate-pulse">📞</div>
            <div>
              <div className="font-bold text-sm">Appelez maintenant</div>
              <a href="tel:+33628532473" className="text-lg font-black hover:underline transition-all duration-200">
                06 28 53 24 73
              </a>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Form simplifié pour la page d'accueil */}
        <div id="booking" className="booking-form card-responsive bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 max-w-4xl mx-auto hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-1">

          <div className="form-grid flex flex-col lg:flex-row items-stretch lg:items-end gap-4">
            
            {/* From - Avec géolocalisation */}
            <div className="flex-1 min-w-0 group">
              <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center justify-between">
                <span>Lieu de prise en charge *</span>
                <button
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors flex items-center space-x-1"
                >
                  <span>📍</span>
                  <span>{isLoading ? 'Localisation...' : 'Ma position'}</span>
                </button>
              </label>
              <div className={`flex items-center space-x-3 p-4 border-2 rounded-xl transition-all duration-300 ${
                pickup ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'
              } focus-within:border-black focus-within:bg-white hover:border-gray-400 group-hover:shadow-md`}>
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 animate-pulse"></div>
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Votre adresse exacte ou lieu de départ"
                  className="form-input flex-1 outline-none text-base bg-transparent font-medium"
                  minLength={3}
                />
                {pickup && (
                  <button 
                    type="button"
                    aria-label="Effacer le lieu de départ"
                    onClick={() => setPickup('')}
                    className="text-gray-400 hover:text-red-500 transition-colors text-lg"
                  >
                    ✕
                  </button>
                )}
              </div>
              {pickup && pickup.length < 3 && (
                <p className="text-xs text-amber-600 mt-1">Minimum 3 caractères requis</p>
              )}
            </div>

            {/* Arrow animé */}
            <div className="hidden lg:flex items-center justify-center px-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-black to-gray-800 text-white flex items-center justify-center font-bold hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-110 shadow-lg">
                <span className="animate-pulse">→</span>
              </div>
            </div>

            {/* To - Avec suggestions intelligentes */}
            <div className="flex-1 min-w-0 group">
              <label className="text-sm font-medium text-gray-700 mb-2 block">Destination *</label>
              <div className={`flex items-center space-x-3 p-4 border-2 rounded-xl transition-all duration-300 ${
                destination ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'
              } focus-within:border-black focus-within:bg-white hover:border-gray-400 group-hover:shadow-md`}>
                <div className="w-3 h-3 border-2 border-red-500 rounded-full flex-shrink-0"></div>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Où souhaitez-vous aller ?"
                  className="form-input flex-1 outline-none text-base bg-transparent font-medium"
                  minLength={3}
                />
                {destination && (
                  <button 
                    type="button"
                    aria-label="Effacer la destination"
                    onClick={() => setDestination('')}
                    className="text-gray-400 hover:text-red-500 transition-colors text-lg"
                  >
                    ✕
                  </button>
                )}
              </div>
              {destination && destination.length < 3 && (
                <p className="text-xs text-amber-600 mt-1">Minimum 3 caractères requis</p>
              )}
            </div>

            {/* Date & Time - Améliorés */}
            <div className="lg:w-56">
              <label className="text-sm font-medium text-gray-700 mb-2 block">Quand ?</label>
              <div className="grid grid-cols-2 gap-2">
                <select 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="p-3 border-2 border-gray-200 rounded-xl bg-gray-50 cursor-pointer hover:bg-white hover:border-blue-300 transition-all duration-300 text-center text-sm font-medium"
                >
                  <option value="Aujourd'hui">📅 Aujourd'hui</option>
                  <option value="Demain">📅 Demain</option>
                  <option value="Autre date">📅 Choisir...</option>
                </select>
                <select 
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="p-3 border-2 border-gray-200 rounded-xl bg-gray-50 cursor-pointer hover:bg-white hover:border-blue-300 transition-all duration-300 text-center text-sm font-medium"
                >
                  <option value="Maintenant">⚡ Maintenant</option>
                  <option value="Dans 15 min">🕐 Dans 15 min</option>
                  <option value="Dans 30 min">🕐 Dans 30 min</option>
                  <option value="Dans 1h">🕐 Dans 1h</option>
                  <option value="Autre heure">🕐 Choisir...</option>
                </select>
              </div>
            </div>
          </div>

          {/* Options avancées */}
          {showAdvanced && (
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-200 animate-fade-in">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span>⚙️</span>
                <span>Options avancées</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Date/Heure custom */}
                {selectedDate === 'Autre date' && (
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Date précise</label>
                    <input
                      type="date"
                      value={customDate}
                      onChange={(e) => setCustomDate(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                )}
                
                {selectedTime === 'Autre heure' && (
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Heure précise</label>
                    <input
                      type="time"
                      value={customTime}
                      onChange={(e) => setCustomTime(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                )}
                
                {/* Nombre de passagers */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Nombre de passagers</label>
                  <select
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  >
                    <option value="1">👤 1 personne</option>
                    <option value="2">👥 2 personnes</option>
                    <option value="3">👥 3 personnes</option>
                    <option value="4">👥 4 personnes</option>
                    <option value="5+">👥 5+ personnes</option>
                  </select>
                </div>
                
                {/* Demandes spéciales */}
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Demandes spéciales (optionnel)</label>
                  <textarea
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Ex: Siège enfant, transport de bagages, arrêt intermédiaire..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                    rows={2}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Information trajet */}
          {isFormValid && estimatedTime && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl animate-fade-in">
              <h4 className="font-bold text-green-900 mb-2 flex items-center space-x-2">
                <span>✅</span>
                <span>Trajet validé</span>
              </h4>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <span>⏱️</span>
                  <span className="font-medium">Durée estimée: {estimatedTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>💰</span>
                  <span className="font-medium">Tarif communiqué à la réservation</span>
                </div>
              </div>
            </div>
          )}

          {/* Button principal - Simplifié pour page d'accueil */}
          <div className="mt-8 text-center">
            <a 
              href="/reservation"
              className="form-button btn-responsive touch-optimized inline-flex items-center space-x-3 px-12 py-4 bg-black text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span>🚖</span>
              <span>RÉSERVER MAINTENANT</span>
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Formulaire complet de réservation professionnel
            </p>
          </div>
          
          {/* Suggestions intelligentes améliorées */}
          <div className="mt-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-sm text-gray-500 font-medium">Destinations populaires par catégorie :</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {popularDestinations.map((dest, index) => (
                <button
                  key={index}
                  onClick={() => setDestination(dest.name)}
                  className="group flex items-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                >
                  <span className="text-lg group-hover:scale-125 transition-transform">{dest.emoji}</span>
                  <span className="group-hover:font-bold transition-all">{dest.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Status de validation */}
          {!isFormValid && (pickup || destination) && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <span className="text-amber-600">⚠️</span>
                <span className="text-sm text-amber-700 font-medium">
                  Complétez les champs obligatoires pour voir l'estimation
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Section certifications sans image */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4 text-sm font-medium">Service de taxi professionnel et conventionné</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Licencié VTC</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Assurance professionnelle</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Véhicules contrôlés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}