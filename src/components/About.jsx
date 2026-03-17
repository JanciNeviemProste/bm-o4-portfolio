import { useEffect, useRef } from 'react'

export default function About() {
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
    <section id="o-mne" className="py-16 lg:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="fade-in grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg">
              <img
                src="https://loremflickr.com/600/600/woman,portrait,creative?random=20"
                alt="Portrét Zuzany, grafickej dizajnérky"
                loading="lazy"
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-600', 'to-purple-700')
                  e.target.parentElement.innerHTML =
                    '<span class="text-6xl flex items-center justify-center w-full h-full">👩‍🎨</span>'
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </div>

          {/* Text */}
          <div>
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">
              O mne
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Dizajn je môj jazyk,
              <br />kreativita môj motor
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Volám sa Zuzana a už viac ako 8 rokov sa venujem grafickému dizajnu.
                Začínala som ako freelancerka počas štúdia na Vysokej škole výtvarných
                umení v Bratislave a postupne som si vybudovala portfólio plné
                projektov pre malé firmy, startupy aj etablované značky.
              </p>
              <p>
                Verím, že dobrý dizajn nie je len o tom, aby niečo dobre vyzeralo —
                je o tom, aby to fungovalo. Každý vizuálny prvok musí mať svoj
                účel, rozprávať príbeh a viesť ľudí k akcii. Či už ide o logo,
                webstránku alebo kampaň na sociálnych sieťach.
              </p>
              <p>
                Keď práve netvorím, nájdeš ma v kaviarni s ceruzkou v ruke, na
                výstave súčasného umenia alebo pri experimentovaní s novými
                dizajnovými nástrojmi. Inšpiráciu čerpám z architektúry,
                prírody a každodenných detailov okolo seba.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Figma', 'Adobe Creative Suite', 'Branding', 'UI/UX', 'Typografia', 'Ilustrácia'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium bg-gray-800/80 border border-gray-700/50 text-gray-300 rounded-lg"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            <div className="mt-8">
              <a
                href="/cv-zuzana.pdf"
                className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Stiahnuť CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
