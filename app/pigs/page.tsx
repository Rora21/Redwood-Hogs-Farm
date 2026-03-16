import PigCard from '@/components/PigCard'
import Link from 'next/link'


const pigs = [
  { name: 'Breeding Piglets', description: 'Strong and healthy piglets raised with proper nutrition and veterinary care. Ideal for farmers looking to start or improve their pig farming operations.', image: '/images/The Pork House89.JPG' },
  { name: 'Breeding Stock',   description: 'High-quality sows and boars selected for strong genetics, productivity, and farm performance.', image: '/images/The Pork House98.JPG' },
  { name: 'Slaughter Pigs',  description: 'Well-raised pigs prepared for market with proper feeding and health management.', image: '/images/The Pork House108.JPG' },
]

export default function Pigs() {
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
              <PigCard key={pig.name} {...pig} />
            ))}
          </div>
        </div>
      </section>

      {/* Farm Practices Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] text-center mb-8 sm:mb-12">Our Farm Practices</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Proper Nutrition */}
            <div className="text-center p-4">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-16 h-16 bg-[#e8f0e8] rounded-full flex items-center justify-center text-[#3d4f3d]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Proper Nutrition</h4>
              <p className="text-sm sm:text-base text-gray-600">Balanced feed and clean water for healthy growth</p>
            </div>

            {/* Clean Environment */}
            <div className="text-center p-4">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-16 h-16 bg-[#e8f0e8] rounded-full flex items-center justify-center text-[#3d4f3d]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Clean Environment</h4>
              <p className="text-sm sm:text-base text-gray-600">Well-maintained housing and sanitation</p>
            </div>

            {/* Veterinary Care */}
            <div className="text-center p-4">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-16 h-16 bg-[#fdecea] rounded-full flex items-center justify-center text-[#b8824f]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 3h2v3h3v2h-3v3h-2v-3H8v-2h3V6z"/>
                  </svg>
                </div>
              </div>
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
          <Link href="/contact" className="inline-block bg-[#b8824f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded hover:bg-[#a0703f] transition-colors duration-200 text-base sm:text-lg">Get In Touch</Link>
        </div>
      </section>
    </div>
  )
}
