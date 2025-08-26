"use client"

import Link from 'next/link'

export default function StickyCTA() {
  return (
    <>
      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4">
          <div className="rounded-2xl bg-black text-white shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <div className="hidden sm:block">
                <p className="text-sm sm:text-base text-white/80">
                  Prêt à réserver ? Obtenez une estimation instantanée.
                </p>
              </div>
              <div className="flex w-full sm:w-auto items-center gap-3">
                <button
                  onClick={() => {
                    const el = document.getElementById('booking')
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    } else {
                      window.location.hash = '#booking'
                    }
                  }}
                  className="flex-1 sm:flex-none rounded-xl bg-white text-black px-5 py-3 text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors"
                >
                  Voir les prix
                </button>
                <Link
                  href="tel:+33628532473"
                  className="hidden sm:inline-flex rounded-xl bg-white/10 text-white px-5 py-3 text-sm font-semibold hover:bg-white/15 transition-colors"
                >
                  Appeler
                </Link>
                <Link
                  href="https://wa.me/33628532473"
                  target="_blank"
                  className="inline-flex sm:hidden rounded-xl bg-white/10 text-white px-5 py-3 text-sm font-semibold hover:bg-white/15 transition-colors"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating call button - extra visible sur mobile */}
      <Link
        href="tel:+33628532473"
        className="fixed bottom-28 right-4 md:bottom-32 md:right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 z-50 animate-pulse border-4 border-white"
      >
        <span className="text-2xl">📞</span>
      </Link>
    </>
  )
}
