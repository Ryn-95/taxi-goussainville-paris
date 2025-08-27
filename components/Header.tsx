'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Navigation exactement comme Uber.com
  const navigation = [
    { name: 'Réservation', href: '/reservation' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          
          {/* Logo - Propre et simple */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center hover:opacity-70 transition-opacity">
              <div className="flex items-center space-x-3">
                <div className="bg-black text-white p-2 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.9 8.1c0 4.2-7.4 11.4-7.4 11.4S4.1 12.3 4.1 8.1C4.1 4.2 7.6.7 11.5.7s7.4 3.5 7.4 7.4z"/>
                    <circle cx="11.5" cy="8.1" r="2.8"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-black">TAXI</span>
                  <span className="text-sm font-medium text-gray-600">Goussainville</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Desktop - EXACTEMENT comme Uber */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-gray-700 font-medium text-sm transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - EXACTEMENT comme Uber */}
          <div className="flex items-center space-x-4">
            
            {/* Language/Globe - comme Uber */}
            <button className="hidden md:flex items-center space-x-1 text-gray-900 hover:text-gray-700 transition-colors duration-200">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">FR</span>
            </button>

                    {/* Phone prominent - style Uber */}
        <a 
          href="tel:+33628532473"
          className="hidden md:flex items-center space-x-2 bg-green-50 border border-green-200 text-green-800 font-bold text-sm px-4 py-2 rounded-lg hover:bg-green-100 transition-colors duration-200"
        >
          <span>📞</span>
          <span>06 28 53 24 73</span>
        </a>

            {/* Sign up Button - EXACTEMENT style Uber */}
            <a
              href="tel:+33628532473"
              className="bg-black hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-md text-sm transition-all duration-200"
            >
              Réserver
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - style Uber */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="mobile-menu px-4 py-4 space-y-4 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="mobile-menu-item touch-optimized block text-gray-900 hover:text-gray-700 font-medium text-base py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                            <a
              href="tel:+33628532473"
              className="block w-full text-left text-gray-900 font-medium text-base py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              📞 06 28 53 24 73
            </a>
            <a
              href="tel:+33628532473"
              className="btn-responsive touch-optimized block w-full bg-black text-white font-medium px-4 py-3 rounded-md text-center text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Réserver un taxi
            </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
