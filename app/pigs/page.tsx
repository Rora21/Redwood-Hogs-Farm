import PigCard from '@/components/PigCard'
import Image from 'next/image'
import Link from 'next/link'

export default function Pigs() {
  const pigs = [
    { id: 1, name: 'Breeding Piglets', description: 'Strong and healthy piglets raised with proper nutrition and veterinary care. Ideal for farmers looking to start or improve their pig farming operations.', image: '/images/The Pork House89.JPG' },
    { id: 2, name: 'Breeding Stock', description: 'High-quality sows and boars selected for strong genetics, productivity, and farm performance.', image: '/images/The Pork House98.JPG' },
    { id: 3, name: 'Slaughter Pigs', description: 'Well-raised pigs prepared for market with proper feeding and health management.', image: '/images/The Pork House108.JPG' },
  ]

  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] bg-[#3d4f3d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic mb-2 sm:mb-4">Our Pigs</h1>
            <p className="text-base sm:text-lg lg:text-xl">Healthy livestock raised with care and professional management</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-700 px-4">At Redwood Hogs Farm, we raise pigs with care, proper nutrition, and professional farm management practices. Our focus is to ensure healthy animals and high-quality livestock for farmers and customers.</p>
        </div>
      </section>

      {/* Pigs Grid */}
      <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pigs.map(pig => (
              <PigCard key={pig.id} {...pig} />
            ))}
          </div>
        </div>
      </section>

      {/* Farm Practices Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] text-center mb-8 sm:mb-12">Our Farm Practices</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🥗</div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Proper Nutrition</h4>
              <p className="text-sm sm:text-base text-gray-600">Balanced feed and clean water for healthy growth</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🏥</div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Clean Environment</h4>
              <p className="text-sm sm:text-base text-gray-600">Well-maintained housing and sanitation</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💉</div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Veterinary Care</h4>
              <p className="text-sm sm:text-base text-gray-600">Regular health checks and vaccinations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#3d4f3d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif italic mb-3 sm:mb-4">Interested in Our Pigs?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 px-4">Contact us to learn more about availability, pricing, and farm visits.</p>
          <Link href="/contact" className="inline-block bg-[#b8824f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded hover:bg-[#a0703f] text-base sm:text-lg">Get In Touch</Link>
        </div>
      </section>
    </div>
  )
}
