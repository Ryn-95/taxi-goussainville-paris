'use client'

import Link from 'next/link'
import { Globe } from 'lucide-react'

export default function Footer() {
  // Structure EXACTEMENT comme footer Uber.com
  const footerSections = [
    {
      title: 'Entreprise',
      links: [
        { name: 'À propos du service', href: '/a-propos' },
        { name: 'Nos chauffeurs', href: '/chauffeurs' },
        { name: 'Véhicules', href: '/vehicules' },
        { name: 'Nous contacter', href: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Course immédiate', href: '/services' },
        { name: 'Réservation à l\'avance', href: '/reservation' },
        { name: 'Transport médical', href: '/medical' },
        { name: 'Transfert aéroport', href: '/aeroport' }
      ]
    },
    {
      title: 'Zones de service',
      links: [
        { name: 'Goussainville', href: '/zones/goussainville' },
        { name: 'Sarcelles', href: '/zones/sarcelles' },
        { name: 'Villiers-le-Bel', href: '/zones/villiers' },
        { name: 'Paris et banlieue', href: '/zones/paris' }
      ]
    }
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content - EXACTEMENT style Uber */}
        <div className="py-12">
          <div className="footer-grid grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Logo Section - comme Uber */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center hover:opacity-70 transition-opacity">
                <svg width="91" height="32" viewBox="0 0 91 32" fill="none" className="text-white">
                  <path d="M15.186 12.933c0-1.8-.4-3.266-1.2-4.4-.8-1.133-2.066-1.7-3.8-1.7s-3 .567-3.8 1.7c-.8 1.134-1.2 2.6-1.2 4.4s.4 3.266 1.2 4.4c.8 1.133 2.066 1.7 3.8 1.7s3-.567 3.8-1.7c.8-1.134 1.2-2.6 1.2-4.4zm3.333 0c0 2.8-.833 5.067-2.5 6.8-1.667 1.733-3.9 2.6-6.7 2.6s-5.033-.867-6.7-2.6c-1.667-1.733-2.5-4-2.5-6.8s.833-5.067 2.5-6.8c1.667-1.733 3.9-2.6 6.7-2.6s5.033.867 6.7 2.6c1.667 1.733 2.5 4 2.5 6.8z" fill="currentColor"/>
                  <path d="M28.852 22v-8.733c0-1.134-.333-2.034-1-2.7-.667-.667-1.567-1-2.7-1s-2.033.333-2.7 1c-.667.666-1 1.566-1 2.7V22h-3.333V3.8h3.333v6.533c.533-.533 1.233-.933 2.1-1.2.867-.267 1.8-.4 2.8-.4 2.133 0 3.833.7 5.1 2.1 1.267 1.4 1.9 3.267 1.9 5.6V22h-3.5z" fill="currentColor"/>
                  <path d="M44.185 15.6c0-.934-.3-1.7-.9-2.3-.6-.6-1.366-.9-2.3-.9s-1.7.3-2.3.9c-.6.6-.9 1.366-.9 2.3v.8h6.4v-.8zm3.2 2.667h-9.6c.133 1.066.567 1.9 1.3 2.5.733.6 1.667.9 2.8.9 1.467 0 2.533-.5 3.2-1.5h2.8c-.4 1.333-1.233 2.433-2.5 3.3-1.267.867-2.8 1.3-4.6 1.3-2.267 0-4.1-.733-5.5-2.2-1.4-1.467-2.1-3.4-2.1-5.8s.7-4.333 2.1-5.8c1.4-1.467 3.233-2.2 5.5-2.2s4.1.733 5.5 2.2c1.4 1.467 2.1 3.4 2.1 5.8v1.4z" fill="currentColor"/>
                  <path d="M60.185 13.2c-.8-.533-1.733-.8-2.8-.8-1.2 0-2.133.333-2.8 1-.667.667-1 1.567-1 2.7 0 1.133.333 2.033 1 2.7.667.667 1.6 1 2.8 1 1.067 0 2-.267 2.8-.8V22h3.333V9.4h-3.333v3.8zm0 6.133c-.4.267-.867.4-1.4.4-.667 0-1.2-.233-1.6-.7-.4-.467-.6-1.067-.6-1.8s.2-1.333.6-1.8c.4-.467.933-.7 1.6-.7.533 0 1 .133 1.4.4v4.2z" fill="currentColor"/>
                  <rect x="71.185" y="9.4" width="3.333" height="12.6" fill="currentColor"/>
                  <path d="M87.852 13.2c-.8-.533-1.733-.8-2.8-.8-1.2 0-2.133.333-2.8 1-.667.667-1 1.567-1 2.7 0 1.133.333 2.033 1 2.7.667.667 1.6 1 2.8 1 1.067 0 2-.267 2.8-.8V22h3.333V3.8h-3.333v9.4zm0 6.133c-.4.267-.867.4-1.4.4-.667 0-1.2-.233-1.6-.7-.4-.467-.6-1.067-.6-1.8s.2-1.333.6-1.8c.4-.467.933-.7 1.6-.7.533 0 1 .133 1.4.4v4.2z" fill="currentColor"/>
                </svg>
              </Link>
              
              {/* Social/Language - comme Uber */}
              <div className="space-y-4">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <Globe className="h-5 w-5" />
                  <span className="text-sm">Français</span>
                </button>
              </div>
            </div>

            {/* Footer Links - EXACTEMENT structure Uber */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4 text-sm">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* App Download Section - Style Uber */}
        <div className="border-t border-gray-800 py-12">
          <h3 className="text-white font-semibold mb-6 text-lg">
            Réservez votre course
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+33628532473"
              className="flex items-center justify-center space-x-3 bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-xl">📞</span>
              <div className="text-left">
                <div className="text-xs text-gray-600">Appeler</div>
                <div className="text-sm font-bold">06 28 53 24 73</div>
              </div>
            </a>
            
            <a
              href="https://wa.me/33628532473?text=Bonjour,%20je%20souhaite%20réserver%20un%20taxi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-xl">💬</span>
              <div className="text-left">
                <div className="text-xs text-gray-600">Écrire sur</div>
                <div className="text-sm font-bold">WhatsApp</div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Section - EXACTEMENT comme Uber */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Taxi Goussainville Paris
            </div>

            {/* Legal Links - style Uber */}
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <button className="hover:text-white transition-colors">
                Confidentialité
              </button>
              <button className="hover:text-white transition-colors">
                Conditions
              </button>
              <button className="hover:text-white transition-colors">
                Accessibilité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
