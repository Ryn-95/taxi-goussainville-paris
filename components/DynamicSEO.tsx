'use client'

import { useEffect } from 'react'

export function DynamicSEO() {
  useEffect(() => {
    // Ajouter du contenu SEO dynamique basé sur l'heure
    const hour = new Date().getHours()
    const day = new Date().getDay()
    
    let timeContent = ''
    let dayContent = ''
    
    // Contenu basé sur l'heure
    if (hour >= 6 && hour < 12) {
      timeContent = 'Taxi Goussainville matin, service petit-déjeuner, courses matinales, transport travail'
    } else if (hour >= 12 && hour < 18) {
      timeContent = 'Taxi Goussainville après-midi, courses shopping, rendez-vous médicaux, transport retour'
    } else if (hour >= 18 && hour < 22) {
      timeContent = 'Taxi Goussainville soirée, sorties restaurants, événements, retour travail'
    } else {
      timeContent = 'Taxi Goussainville nuit, service nocturne 24h, urgences, aéroports nuit, sorties tardives'
    }
    
    // Contenu basé sur le jour
    if (day === 0) { // Dimanche
      dayContent = 'Taxi Goussainville dimanche, service weekend, famille, loisirs, aéroports dimanche'
    } else if (day === 6) { // Samedi
      dayContent = 'Taxi Goussainville samedi, weekend, sorties, shopping, événements samedi'
    } else {
      dayContent = 'Taxi Goussainville semaine, travail, business, rendez-vous professionnels'
    }
    
    // Ajouter les meta tags dynamiques
    const timeKeywords = document.createElement('meta')
    timeKeywords.name = 'dynamic.time.keywords'
    timeKeywords.content = timeContent
    document.head.appendChild(timeKeywords)
    
    const dayKeywords = document.createElement('meta')
    dayKeywords.name = 'dynamic.day.keywords'
    dayKeywords.content = dayContent
    document.head.appendChild(dayKeywords)
    
    // Ajouter du contenu invisible géolocalisé
    const geoContent = document.createElement('div')
    geoContent.style.position = 'absolute'
    geoContent.style.left = '-10000px'
    geoContent.style.top = 'auto'
    geoContent.style.width = '1px'
    geoContent.style.height = '1px'
    geoContent.style.overflow = 'hidden'
    
    const streets = [
      'Avenue Charles de Gaulle Goussainville',
      'Rue de la République Goussainville',
      'Boulevard Jean Jaurès Goussainville',
      'Place de la Mairie Goussainville',
      'Rue Victor Hugo Goussainville',
      'Avenue du Général Leclerc Goussainville',
      'Rue des Écoles Goussainville',
      'Place du Marché Goussainville',
      'Rue de la Gare Goussainville',
      'Avenue de la Paix Goussainville'
    ]
    
    let streetContent = 'Taxi disponible dans toutes les rues de Goussainville : '
    streets.forEach(street => {
      streetContent += `Taxi ${street}, prise en charge ${street}, transport depuis ${street}. `
    })
    
    geoContent.innerHTML = `
      <p>${streetContent}</p>
      <p>Taxi Goussainville 95190, transport Val d'Oise, navette Île-de-France</p>
      <p>Service taxi professionnel Goussainville, chauffeur expérimenté Goussainville</p>
      <p>Réservation taxi Goussainville 06 28 53 24 73, contact taxi Goussainville</p>
      <p>Meilleur taxi Goussainville avis clients, taxi Goussainville recommandé</p>
    `
    
    document.body.appendChild(geoContent)
    
    // Cleanup function
    return () => {
      if (timeKeywords.parentNode) timeKeywords.parentNode.removeChild(timeKeywords)
      if (dayKeywords.parentNode) dayKeywords.parentNode.removeChild(dayKeywords)
      if (geoContent.parentNode) geoContent.parentNode.removeChild(geoContent)
    }
  }, [])

  // Schema pour les horaires en temps réel
  const openingHoursSchema = {
    "@context": "https://schema.org",
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59",
    "validFrom": "2024-01-01",
    "validThrough": "2024-12-31"
  }

  // Schema pour la disponibilité en temps réel
  const availabilitySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Taxi Goussainville Service 24h/24",
    "description": `Taxi Goussainville disponible maintenant - ${new Date().toLocaleString('fr-FR')}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Taxi Goussainville 06 28 53 24 73",
      "telephone": "+33628532473"
    },
    "availability": "InStock",
    "availableAtOrFrom": {
      "@type": "Place",
      "name": "Goussainville",
      "address": "Goussainville, 95190, France"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(openingHoursSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(availabilitySchema),
        }}
      />
    </>
  )
}
