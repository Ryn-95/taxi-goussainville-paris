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
          
          {/* Logo - EXACTEMENT comme Uber */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center hover:opacity-70 transition-opacity">
              <svg width="91" height="32" viewBox="0 0 91 32" fill="none" className="text-black">
                <path d="M15.186 12.933c0-1.8-.4-3.266-1.2-4.4-.8-1.133-2.066-1.7-3.8-1.7s-3 .567-3.8 1.7c-.8 1.134-1.2 2.6-1.2 4.4s.4 3.266 1.2 4.4c.8 1.133 2.066 1.7 3.8 1.7s3-.567 3.8-1.7c.8-1.134 1.2-2.6 1.2-4.4zm3.333 0c0 2.8-.833 5.067-2.5 6.8-1.667 1.733-3.9 2.6-6.7 2.6s-5.033-.867-6.7-2.6c-1.667-1.733-2.5-4-2.5-6.8s.833-5.067 2.5-6.8c1.667-1.733 3.9-2.6 6.7-2.6s5.033.867 6.7 2.6c1.667 1.733 2.5 4 2.5 6.8z" fill="currentColor"/>
                <path d="M28.852 22v-8.733c0-1.134-.333-2.034-1-2.7-.667-.667-1.567-1-2.7-1s-2.033.333-2.7 1c-.667.666-1 1.566-1 2.7V22h-3.333V3.8h3.333v6.533c.533-.533 1.233-.933 2.1-1.2.867-.267 1.8-.4 2.8-.4 2.133 0 3.833.7 5.1 2.1 1.267 1.4 1.9 3.267 1.9 5.6V22h-3.5z" fill="currentColor"/>
                <path d="M44.185 15.6c0-.934-.3-1.7-.9-2.3-.6-.6-1.366-.9-2.3-.9s-1.7.3-2.3.9c-.6.6-.9 1.366-.9 2.3v.8h6.4v-.8zm3.2 2.667h-9.6c.133 1.066.567 1.9 1.3 2.5.733.6 1.667.9 2.8.9 1.467 0 2.533-.5 3.2-1.5h2.8c-.4 1.333-1.233 2.433-2.5 3.3-1.267.867-2.8 1.3-4.6 1.3-2.267 0-4.1-.733-5.5-2.2-1.4-1.467-2.1-3.4-2.1-5.8s.7-4.333 2.1-5.8c1.4-1.467 3.233-2.2 5.5-2.2s4.1.733 5.5 2.2c1.4 1.467 2.1 3.4 2.1 5.8v1.4z" fill="currentColor"/>
                <path d="M60.185 13.2c-.8-.533-1.733-.8-2.8-.8-1.2 0-2.133.333-2.8 1-.667.667-1 1.567-1 2.7 0 1.133.333 2.033 1 2.7.667.667 1.6 1 2.8 1 1.067 0 2-.267 2.8-.8V22h3.333V9.4h-3.333v3.8zm0 6.133c-.4.267-.867.4-1.4.4-.667 0-1.2-.233-1.6-.7-.4-.467-.6-1.067-.6-1.8s.2-1.333.6-1.8c.4-.467.933-.7 1.6-.7.533 0 1 .133 1.4.4v4.2z" fill="currentColor"/>
                <rect x="71.185" y="9.4" width="3.333" height="12.6" fill="currentColor"/>
                <path d="M87.852 13.2c-.8-.533-1.733-.8-2.8-.8-1.2 0-2.133.333-2.8 1-.667.667-1 1.567-1 2.7 0 1.133.333 2.033 1 2.7.667.667 1.6 1 2.8 1 1.067 0 2-.267 2.8-.8V22h3.333V3.8h-3.333v9.4zm0 6.133c-.4.267-.867.4-1.4.4-.667 0-1.2-.233-1.6-.7-.4-.467-.6-1.067-.6-1.8s.2-1.333.6-1.8c.4-.467.933-.7 1.6-.7.533 0 1 .133 1.4.4v4.2z" fill="currentColor"/>
              </svg>
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
            <div className="px-4 py-4 space-y-4 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-900 hover:text-gray-700 font-medium text-base py-2"
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
              className="block w-full bg-black text-white font-medium px-4 py-3 rounded-md text-center text-base"
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
