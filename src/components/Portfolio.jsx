import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    title: 'Bloom — kvetinárstvo',
    category: 'Branding',
    description:
      'Kompletná vizuálna identita pre lokálne kvetinárstvo. Logo, vizitky, obalový dizajn a šablóny pre sociálne siete v jemnej prírodnej farebnosti.',
    image: 'https://loremflickr.com/800/600/branding,logo,design?random=10',
  },
  {
    title: 'FitLife aplikácia',
    category: 'UI/UX dizajn',
    description:
      'Návrh používateľského rozhrania fitness aplikácie s dôrazom na jednoduchosť a motivujúci vizuál. Vrátane prototypov a dizajnového systému.',
    image: 'https://loremflickr.com/800/600/mobile,app,design?random=11',
  },
  {
    title: 'Kaviarňa Zrnko',
    category: 'Branding',
    description:
      'Identita pre mestskú kaviareň — od loga cez menu dizajn až po interiérové grafické prvky. Teplá farebná paleta s moderným nádychom.',
    image: 'https://loremflickr.com/800/600/coffee,branding,cafe?random=12',
  },
  {
    title: 'TechSummit 2025',
    category: 'Grafika pre udalosti',
    description:
      'Vizuálna komunikácia pre technologickú konferenciu — plagáty, digitálne bannery, prezentačné šablóny a merch dizajn pre 500+ účastníkov.',
    image: 'https://loremflickr.com/800/600/conference,event,poster?random=13',
  },
  {
    title: 'Zelená záhrada e-shop',
    category: 'Webový dizajn',
    description:
      'Dizajn e-shopu pre záhradné centrum s prehľadnou navigáciou, produktovými kartami a optimalizovaným nákupným procesom.',
    image: 'https://loremflickr.com/800/600/garden,ecommerce,web?random=14',
  },
  {
    title: 'Startup Starter kit',
    category: 'Sociálne siete',
    description:
      'Balík šablón pre sociálne siete pre začínajúce firmy — 30 vizuálov pre Instagram a Facebook v jednotnom štýle.',
    image: 'https://loremflickr.com/800/600/social,media,template?random=15',
  },
]

function handleImageError(e) {
  e.target.onerror = null
  e.target.style.display = 'none'
  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-600', 'to-purple-700')
  e.target.parentElement.innerHTML =
    '<span class="text-4xl flex items-center justify-center w-full h-full">📷</span>'
}

function ProjectCard({ title, category, description, image, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 100)
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
      className="fade-in group bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden hover:scale-[1.02] hover:border-blue-500/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
          onError={handleImageError}
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-white mt-2 mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const headingRef = useRef(null)

  useEffect(() => {
    const el = headingRef.current
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
    <section id="portfolio" className="py-16 lg:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="fade-in text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Vybrané projekty
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Každá práca nesie kus môjho srdca. Tu sú projekty, na ktoré som
            najviac hrdá a ktoré najlepšie ukazujú môj prístup k dizajnu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Máš záujem o spoluprácu?
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
