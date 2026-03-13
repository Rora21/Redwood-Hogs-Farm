import Hero from '@/components/Hero'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[#f5f1e8]">
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#3d4f3d] mb-4 sm:mb-6">Welcome to Redwood Hogs Farm</h2>
            <p className="text-gray-700 mb-3 sm:mb-4">Redwood Hogs Farm is a growing family farm located in Musha, Rwamagana District. We are committed to ethical pig farming, high-quality breeding stock, and supporting farmers with knowledge and training.</p>
            <p className="text-gray-700 mb-4 sm:mb-6">Our mission is to raise healthy pigs while promoting sustainable farming practices that benefit both farmers and communities.</p>
            <Link href="/about" className="inline-block bg-[#6b7c5d] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-[#5a6b4d] text-sm sm:text-base">Learn More About Us</Link>
          </div>
          <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image src="/images/The Pork House87.JPG" alt="Farm" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Our Pigs Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] mb-3 sm:mb-4">Our Pigs</h2>
            <p className="text-gray-700 max-w-3xl mx-auto px-4">At Redwood Hogs Farm, we raise pigs with care, proper nutrition, and professional farm management practices. Our focus is to ensure healthy animals and high-quality livestock for farmers and customers.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/images/The Pork House89.JPG" alt="Breeding Piglets" fill className="object-cover" />
              </div>
              <div className="p-5 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Breeding Piglets</h4>
                <p className="text-sm sm:text-base text-gray-600">Strong and healthy piglets raised with proper nutrition and veterinary care. Ideal for farmers looking to start or improve their pig farming operations.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/images/The Pork House98.JPG" alt="Breeding Stock" fill className="object-cover" />
              </div>
              <div className="p-5 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Breeding Stock</h4>
                <p className="text-sm sm:text-base text-gray-600">High-quality sows and boars selected for strong genetics, productivity, and farm performance.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/images/The Pork House108.JPG" alt="Slaughter Pigs" fill className="object-cover" />
              </div>
              <div className="p-5 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Slaughter Pigs</h4>
                <p className="text-sm sm:text-base text-gray-600">Well-raised pigs prepared for market with proper feeding and health management.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link href="/pigs" className="inline-block bg-[#6b7c5d] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-[#5a6b4d] text-sm sm:text-base">View All Pigs →</Link>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#3d4f3d] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif italic text-center mb-3 sm:mb-4">Our Services</h2>
          <p className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">Redwood Hogs Farm offers services designed to support farmers and promote better livestock management practices.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🌱</div>
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">Breeding Stock Supply</h4>
              <p className="text-xs sm:text-sm text-gray-300 hidden sm:block">Strong breeding pigs for better herd quality</p>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🐷</div>
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">Piglet Sales</h4>
              <p className="text-xs sm:text-sm text-gray-300 hidden sm:block">Healthy piglets for your farm</p>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎓</div>
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">Farmer Training</h4>
              <p className="text-xs sm:text-sm text-gray-300 hidden sm:block">Modern farming techniques</p>
            </div>
            <div className="p-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📋</div>
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">Farm Consultation</h4>
              <p className="text-xs sm:text-sm text-gray-300 hidden sm:block">Expert advice and guidance</p>
            </div>
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link href="/services" className="inline-block bg-[#b8824f] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-[#a0703f] text-sm sm:text-base">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] mb-3 sm:mb-4">Farm Gallery</h2>
            <p className="text-gray-700 max-w-3xl mx-auto px-4">Take a look inside Redwood Hogs Farm and see our pigs, farm environment, and daily farming activities. Our gallery shows the care and dedication that goes into raising healthy livestock.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="relative h-32 sm:h-40 md:h-48 rounded overflow-hidden">
              <Image src="/images/The Pork House111.JPG" alt="Gallery 1" fill className="object-cover" />
            </div>
            <div className="relative h-32 sm:h-40 md:h-48 rounded overflow-hidden">
              <Image src="/images/The Pork House111 (1).JPG" alt="Gallery 2" fill className="object-cover" />
            </div>
            <div className="relative h-32 sm:h-40 md:h-48 rounded overflow-hidden">
              <Image src="/images/The Pork House117.JPG" alt="Gallery 3" fill className="object-cover" />
            </div>
            <div className="relative h-32 sm:h-40 md:h-48 rounded overflow-hidden">
              <Image src="/images/The Pork House119.JPG" alt="Gallery 4" fill className="object-cover" />
            </div>
            <div className="relative h-32 sm:h-40 md:h-48 rounded overflow-hidden">
              <Image src="/images/The Pork House136.JPG" alt="Gallery 5" fill className="object-cover" />
            </div>
            <div className="relative h-32 sm:h-40 md:h-48 rounded overflow-hidden">
              <Image src="/images/The Pork House87.JPG" alt="Gallery 6" fill className="object-cover" />
            </div>
          </div>
          <div className="text-center">
            <Link href="/gallery" className="inline-block bg-[#b8824f] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-[#a0703f] text-sm sm:text-base">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#3d4f3d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif italic mb-3 sm:mb-4">Ready to Start Your Pig Farming Journey?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 px-4">Contact us today to learn more about our pigs, services, and training programs.</p>
          <Link href="/contact" className="inline-block bg-[#b8824f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded hover:bg-[#a0703f] text-base sm:text-lg">Get In Touch</Link>
        </div>
      </section>
    </div>
  )
}
