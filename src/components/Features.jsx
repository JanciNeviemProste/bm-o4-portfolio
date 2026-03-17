import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Branding a vizuálna identita',
    description:
      'Vytvorím pre teba ucelenú vizuálnu identitu — od loga cez farebnú paletu až po typografiu. Každá značka si zaslúži príbeh, ktorý sa odráža v každom detaile, od vizitky po sociálne siete. Spoločne nájdeme vizuálny jazyk, ktorý ťa odlíši od konkurencie.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: 'Webový a UI dizajn',
    description:
      'Navrhujem moderné a intuitívne rozhrania webových stránok a aplikácií. Dbám na to, aby každý pixel slúžil svojmu účelu — od prehľadnej navigácie po jasné výzvy k akcii. Výsledkom je dizajn, ktorý nielen dobre vyzerá, ale aj efektívne konvertuje.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Grafika pre sociálne siete',
    description:
      'Pripravím vizuálny obsah pre tvoje sociálne siete, ktorý zaujme a zastaví palec pri scrollovaní. Od príspevkov na Instagram po bannery na Facebook — každý vizuál bude v súlade s tvojou značkou a osloví tvoju cieľovú skupinu.',
  },
]

function useScrollReveal() {
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
  return ref
}

function ServiceCard({ icon, title, description, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 150)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className="fade-in group bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 hover:scale-[1.02] hover:border-blue-500/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-base text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}

export default function Features() {
  const headingRef = useScrollReveal()

  return (
    <section id="sluzby" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="fade-in text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Čo pre teba môžem urobiť
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Každý projekt je pre mňa jedinečný. Ponúkam komplexné dizajnové služby,
            ktoré pomôžu tvojej značke rásť a oslovovať správnych ľudí.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
