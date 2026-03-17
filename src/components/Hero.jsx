import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="domov"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950" />
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div
        ref={ref}
        className="fade-in relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24"
      >
        <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-6">
          Grafická dizajnérka &amp; kreatívna duša
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Vytváram vizuálne príbehy,
          <br />
          <span className="text-blue-400">ktoré predávajú</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Som Zuzana — grafická dizajnérka s vášňou pre čistý dizajn, silné značky
          a vizuálnu komunikáciu, ktorá zanechá dojem. Pomôžem ti vyniknúť
          v digitálnom svete.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Pozri si moje práce
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-400 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Napísať mi
          </a>
        </div>
      </div>
    </section>
  )
}
