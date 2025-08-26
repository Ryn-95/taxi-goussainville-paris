export function InvisibleSEO() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quel est le numéro du taxi à Goussainville ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le numéro du taxi à Goussainville est le 06 28 53 24 73. Service disponible 24h/24, 7j/7 pour toutes vos courses."
        }
      },
      {
        "@type": "Question", 
        "name": "Combien coûte un taxi de Goussainville à CDG ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le tarif taxi Goussainville CDG est fixe et transparent. Appelez le 06 28 53 24 73 pour connaître le prix exact selon votre adresse de départ."
        }
      },
      {
        "@type": "Question",
        "name": "Y a-t-il un taxi 24h/24 à Goussainville ?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, notre service taxi Goussainville est disponible 24 heures sur 24, 7 jours sur 7, y compris les week-ends et jours fériés. Appelez le 06 28 53 24 73."
        }
      },
      {
        "@type": "Question",
        "name": "Comment réserver un taxi à Goussainville ?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Pour réserver un taxi à Goussainville, appelez directement le 06 28 53 24 73. Réservation immédiate ou à l'avance possible."
        }
      },
      {
        "@type": "Question",
        "name": "Le taxi Goussainville va-t-il à Orly ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, notre taxi Goussainville dessert l'aéroport d'Orly (Sud et Ouest). Service direct 24h/24. Réservez au 06 28 53 24 73."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le meilleur taxi à Goussainville ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Notre service taxi Goussainville 06 28 53 24 73 est noté 4.9/5 par 127 clients. Véhicule récent Skoda Superb, chauffeur professionnel."
        }
      },
      {
        "@type": "Question",
        "name": "Le taxi Goussainville est-il moins cher qu'Uber ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, notre taxi Goussainville propose des tarifs conventionnés transparents, souvent plus avantageux qu'Uber. Appelez le 06 28 53 24 73 pour comparer."
        }
      },
      {
        "@type": "Question",
        "name": "Peut-on payer par carte dans le taxi Goussainville ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le taxi Goussainville accepte les paiements par carte bancaire, espèces, chèques et factures entreprises."
        }
      }
    ]
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Taxi Goussainville",
        "item": "https://taxi-goussainville-paris.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services Taxi Goussainville",
        "item": "https://taxi-goussainville-paris.vercel.app/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact Taxi Goussainville",
        "item": "https://taxi-goussainville-paris.vercel.app/contact"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Réservation Taxi Goussainville",
        "item": "https://taxi-goussainville-paris.vercel.app/reservation"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      
      {/* Texte invisible pour SEO - caché visuellement mais lu par Google */}
      <div style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
        <h1>Taxi Goussainville 06 28 53 24 73 - Meilleur Service 24h/24</h1>
        <p>Taxi Goussainville pas cher, taxi Goussainville CDG, taxi Goussainville Orly, taxi Goussainville Paris</p>
        <p>Numéro taxi Goussainville : 06 28 53 24 73. Réservation taxi Goussainville immédiate.</p>
        <p>Comment appeler taxi Goussainville ? Où trouver taxi Goussainville ? Quel taxi Goussainville choisir ?</p>
        <p>Taxi urgence Goussainville, taxi rapide Goussainville, taxi fiable Goussainville</p>
        <p>Meilleur taxi Goussainville, premier taxi Goussainville, top taxi Goussainville</p>
        <p>Taxi disponible Goussainville, taxi libre Goussainville, taxi maintenant Goussainville</p>
        <p>Prix taxi Goussainville CDG, tarif taxi Goussainville Orly, coût taxi Goussainville Paris</p>
        <p>Avis taxi Goussainville, note taxi Goussainville, recommandation taxi Goussainville</p>
        <p>Réservation en ligne taxi Goussainville, booking taxi Goussainville, commande taxi Goussainville</p>
      </div>
    </>
  )
}
