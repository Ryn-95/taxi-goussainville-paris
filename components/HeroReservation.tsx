'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroReservation() {
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
  const calculateEstimate = (from, to) => {
    if (!from || !to) return

    // Estimation temps de trajet uniquement
    const distances = {
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
    }, 300) // Debounce de 300ms
    
    return () => clearTimeout(timeoutId)
  }, [pickup, destination, selectedDate, selectedTime])

  // Fonction pour obtenir la géolocalisation
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Simulation d'une adresse basée sur les coordonnées
          const addresses = [
            'Votre position actuelle (Goussainville)',
            'Position GPS - Goussainville Centre',
            'Localisation automatique - Rue de Paris, Goussainville'
          ]
          setPickup(addresses[0])
        },
        (error) => {
          alert('⚠️ Impossible d\'obtenir votre position. Veuillez saisir votre adresse manuellement.')
        }
      )
    } else {
      alert('❌ La géolocalisation n\'est pas supportée par votre navigateur.')
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
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* CTA en haut - Plus compact et visible */}
        <div className="text-center mb-8">
          <a 
            href="tel:+33628532473"
            className="inline-flex items-center space-x-3 bg-white border-2 border-black text-black rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold text-lg"
          >
            <span>📞</span>
            <div className="text-left">
              <div className="text-sm opacity-75">Appelez maintenant</div>
              <div className="font-black">06 28 53 24 73</div>
            </div>
          </a>
        </div>

        {/* Title EXACTEMENT comme Uber Reserve - amélioré */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6 animate-fade-in">
            Réservez votre taxi professionnel
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
            Formulaire de réservation en ligne - Service 24h/7 à Goussainville et Paris
          </p>
        </div>

        {/* Form horizontal ULTRA PROFESSIONNEL */}
        <div id="booking" className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 max-w-7xl mx-auto hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-1">
          
          {/* Barre de progression */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progression</span>
              <span className="text-sm font-bold text-gray-900">{formProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${
                  formProgress === 100 ? 'bg-green-500' : 'bg-blue-500'
                }`}
                style={{ width: `${formProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Indicateur de statut */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isFormValid ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
              <span className={`text-sm font-medium ${isFormValid ? 'text-green-700' : 'text-gray-500'}`}>
                {isFormValid ? 'Formulaire validé ✅' : 'Remplissez les champs requis'}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500">
                📱 Dernier envoi: {lastReservation ? new Date(lastReservation).toLocaleTimeString('fr-FR') : 'Aucun'}
              </span>
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                {showAdvanced ? '👆 Masquer options' : '⚙️ Options avancées'}
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-end gap-4">
            
            {/* From - Avec géolocalisation */}
            <div className="flex-1 min-w-0 group">
              <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center justify-between">
                <span>Lieu de prise en charge *</span>
                <button
                  onClick={getCurrentLocation}
                  className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md hover:bg-blue-100 transition-colors flex items-center space-x-1"
                >
                  <span>📍</span>
                  <span>Ma position</span>
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
                  className="flex-1 outline-none text-base bg-transparent font-medium"
                  minLength={3}
                />
                {pickup && (
                  <button 
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

            {/* Flèche animée */}
            <div className="flex justify-center lg:px-2">
              <div className="w-8 h-8 flex items-center justify-center text-gray-400 text-xl animate-bounce">
                →
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
                  className="flex-1 outline-none text-base bg-transparent font-medium"
                  minLength={3}
                />
                {destination && (
                  <button 
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
                  <option value="Autre date">📅 Autre date</option>
                </select>
                <select 
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="p-3 border-2 border-gray-200 rounded-xl bg-gray-50 cursor-pointer hover:bg-white hover:border-blue-300 transition-all duration-300 text-center text-sm font-medium"
                >
                  <option value="Maintenant">⚡ Maintenant</option>
                  <option value="Dans 1h">🕐 Dans 1h</option>
                  <option value="Dans 2h">🕐 Dans 2h</option>
                  <option value="Autre heure">🕐 Autre heure</option>
                </select>
              </div>
            </div>

          </div>

          {/* Options avancées */}
          {showAdvanced && (
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-200 animate-fade-in">
              <h4 className="font-bold text-lg mb-4 text-gray-900">Options avancées</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Date/heure personnalisées */}
                {(selectedDate === 'Autre date' || selectedTime === 'Autre heure') && (
                  <div className="md:col-span-2 grid grid-cols-2 gap-4">
                    {selectedDate === 'Autre date' && (
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Date personnalisée</label>
                        <input
                          type="date"
                          value={customDate}
                          onChange={(e) => setCustomDate(e.target.value)}
                          className="w-full p-3 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 transition-colors"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    )}
                    {selectedTime === 'Autre heure' && (
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Heure personnalisée</label>
                        <input
                          type="time"
                          value={customTime}
                          onChange={(e) => setCustomTime(e.target.value)}
                          className="w-full p-3 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 transition-colors"
                        />
                      </div>
                    )}
                  </div>
                )}
                
                {/* Nombre de passagers */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Nombre de passagers</label>
                  <select
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 transition-colors"
                  >
                    <option value="1">1 passager</option>
                    <option value="2">2 passagers</option>
                    <option value="3">3 passagers</option>
                    <option value="4">4 passagers</option>
                    <option value="5+">5+ passagers</option>
                  </select>
                </div>
                
                {/* Demandes spéciales */}
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Demandes spéciales (optionnel)</label>
                  <textarea
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Ex: Véhicule spacieux, siège bébé, arrêt intermédiaire..."
                    className="w-full p-3 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 transition-colors resize-none"
                    rows={3}
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

          {/* Button principal - Ultra professionnel */}
          <div className="mt-8 text-center">
            <button 
              onClick={handleReservation}
              disabled={!isFormValid || isLoading}
              className={`inline-flex items-center space-x-3 px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform min-w-[280px] ${
                isFormValid && !isLoading
                  ? 'bg-black text-white hover:bg-gray-800 hover:scale-105 shadow-xl hover:shadow-2xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <span>🚖</span>
                  <span>RÉSERVER MAINTENANT</span>
                </>
              )}
            </button>
          </div>

          {/* Statut en bas */}
          <div className="mt-6 text-center">
            <p className={`text-sm font-medium ${isFormValid ? 'text-green-600' : 'text-gray-500'}`}>
              {isFormValid ? (
                <>
                  <span>📱</span>
                  <span className="ml-2">✅ Formulaire validé • Prêt à envoyer</span>
                </>
              ) : (
                <>
                  <span>⚠️</span>
                  <span className="ml-2">Veuillez remplir tous les champs obligatoires</span>
                </>
              )}
            </p>
          </div>

        </div>

        {/* Destinations populaires par catégorie - Version étendue */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-black mb-8">Destinations populaires par catégorie :</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {popularDestinations.map((dest, index) => (
              <button
                key={index}
                onClick={() => setDestination(dest.name)}
                className="group bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {dest.emoji}
                </div>
                <div className="text-sm font-medium text-gray-900 leading-tight">
                  {dest.name}
                </div>
                <div className="text-xs text-gray-500 mt-1 capitalize">
                  {dest.type}
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
