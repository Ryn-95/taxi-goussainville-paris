'use client'

import React, { useState, useEffect } from 'react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <a
        href="tel:+33628532473"
        className="flex items-center justify-center w-full bg-black text-white font-bold py-4 rounded-xl shadow-2xl animate-pulse"
      >
        <span className="mr-2 text-2xl">📞</span>
        APPELER LE TAXI
      </a>
    </div>
  )
}
