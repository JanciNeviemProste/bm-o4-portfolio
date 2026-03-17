export default function Footer() {
  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Zuzana. Všetky práva vyhradené.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#domov"
              className="text-sm text-gray-500 hover:text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              Späť nahor
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
