import Hero from '@/components/Hero'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[#f5f1e8]">
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif text-[#3d4f3d] mb-6">Welcome to Redwood Hogs Farm</h2>
            <p className="text-gray-700 mb-6">A family-owned farm in Musha, Rwamagana, dedicated to ethical pig farming and sustainable practices.</p>
            <Link href="/about" className="inline-block bg-[#6b7c5d] text-white px-6 py-3 rounded hover:bg-[#5a6b4d]">Discover Our Story</Link>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/images/farmers.jpg" alt="Farmers" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Our Pigs Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-serif italic text-[#3d4f3d]">Our Pigs</h2>
            <h3 className="text-3xl font-serif text-[#3d4f3d]">Healthy & Quality Livestock</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/images/breeding-piglets.jpg" alt="Breeding Piglets" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#3d4f3d] mb-2">Breeding Piglets</h4>
                <p className="text-gray-600">Strong and healthy piglets for breeding</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/images/slaughter-pigs.jpg" alt="Slaughter Pigs" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#3d4f3d] mb-2">Slaughter Pigs</h4>
                <p className="text-gray-600">Market-ready pigs for premium pork.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/images/organic-manure.jpg" alt="Organic Manure" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#3d4f3d] mb-2">Organic Manure</h4>
                <p className="text-gray-600">Natural fertilizer for your farm.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-block bg-[#6b7c5d] text-white px-8 py-3 rounded hover:bg-[#5a6b4d]">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-6 bg-[#3d4f3d] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif italic text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🌱</div>
              <h4 className="text-xl font-semibold mb-2">Breeding Stock</h4>
            </div>
            <div>
              <div className="text-5xl mb-4">🎓</div>
              <h4 className="text-xl font-semibold mb-2">Training Programs</h4>
            </div>
            <div>
              <div className="text-5xl mb-4">🐷</div>
              <h4 className="text-xl font-semibold mb-2">Slaughter Pigs</h4>
            </div>
            <div>
              <div className="text-5xl mb-4">📋</div>
              <h4 className="text-xl font-semibold mb-2">Farm Management</h4>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-block bg-[#b8824f] text-white px-8 py-3 rounded hover:bg-[#a0703f]">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-serif italic text-[#3d4f3d] mb-8">Photo Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="relative h-32 rounded overflow-hidden">
                  <Image src={`/images/gallery${i}.jpg`} alt={`Gallery ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/gallery" className="inline-block bg-[#b8824f] text-white px-8 py-3 rounded hover:bg-[#a0703f]">View Gallery →</Link>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif italic text-[#3d4f3d] mb-8">What Our Clients Say</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-gray-700 mb-4">"Mandy out joiner lorem directly dicepitatibus team ded diusgus in excelling in pent hostesses."</p>
                <p className="text-right text-gray-600">— Jonathan M.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-gray-700 mb-4">"Mandy out in lipict inquiry riggets en velludam axe rodolus at occellimop plesse herre."</p>
                <p className="text-right text-gray-600">— Grace K.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 px-6 bg-[#3d4f3d] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-serif italic">Get In Touch</h2>
            <div className="flex gap-12">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✉️</span>
                <span>info@famis.rw</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span>Musha, Rwamagana, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
