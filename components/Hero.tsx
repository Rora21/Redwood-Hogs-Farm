import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center" style={{backgroundImage: "url('/images/hero section.jpg.png')"}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic mb-3 sm:mb-4">Farming with Heart</h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">Sustainable pig farming focused on quality livestock, responsible practices, and supporting farmers in Rwanda.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/about" className="bg-[#b8824f] text-white px-6 sm:px-8 py-3 rounded hover:bg-[#a0703f] transition-colors duration-200 text-center">Explore Our Farm</Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded hover:bg-white/10 transition-colors duration-200 text-center">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
