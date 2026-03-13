import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: "url('/images/hero-pigs.jpg')"}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-6xl font-serif italic mb-4">Farming with Heart</h1>
          <p className="text-xl mb-8 italic">Sustainable · Ethical · Trusted</p>
          <div className="flex gap-4">
            <Link href="/about" className="bg-[#b8824f] text-white px-8 py-3 rounded hover:bg-[#a0703f]">Learn More</Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white/10">Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
