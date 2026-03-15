import Hero from '@/components/Hero'
import PigCard from '@/components/PigCard'
import Link from 'next/link'
import Image from 'next/image'

const pigs = [
  {
    name: 'Breeding Piglets',
    description: 'Strong and healthy piglets raised with proper nutrition and veterinary care. Ideal for farmers looking to start or improve their pig farming operations.',
    image: '/images/The Pork House89.JPG',
  },
  {
    name: 'Breeding Stock',
    description: 'High-quality sows and boars selected for strong genetics, productivity, and farm performance.',
    image: '/images/The Pork House98.JPG',
  },
  {
    name: 'Slaughter Pigs',
    description: 'Well-raised pigs prepared for market with proper feeding and health management.',
    image: '/images/The Pork House108.JPG',
  },
]

const services = [
  {
    title: 'Breeding Stock Supply',
    description: 'Strong breeding pigs for better herd quality',
    icon: (
      // Leaf / nature
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.1A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10 0-3.1-1.41-5.86-3.63-7.73L17 8zm-5 12c-3.31 0-6-2.69-6-6l1.5 1.5C8 17.42 9.89 19 12 19c1.2 0 2.27-.45 3.09-1.18L17.5 20A7.94 7.94 0 0112 20z"/>
      </svg>
    ),
  },
  {
    title: 'Piglet Sales',
    description: 'Healthy piglets for your farm',
    icon: (
      // Price tag / label
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
      </svg>
    ),
  },
  {
    title: 'Farmer Training',
    description: 'Modern farming techniques',
    icon: (
      // Graduation cap / school
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
    ),
  },
  {
    title: 'Farm Consultation',
    description: 'Expert advice and guidance',
    icon: (
      // Clipboard / assignment
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
  },
]

const galleryPreview = [
  { src: '/images/The Pork House111.JPG',     alt: 'Pigs in the Redwood Hogs Farm facility' },
  { src: '/images/The Pork House111 (1).JPG', alt: 'Farm pig housing interior' },
  { src: '/images/The Pork House117.JPG',     alt: 'Healthy pigs at Redwood Hogs Farm' },
  { src: '/images/The Pork House119.JPG',     alt: 'Pig farming operations at Redwood Hogs Farm' },
  { src: '/images/The Pork House136.JPG',     alt: 'Farm livestock and daily care' },
  { src: '/images/The Pork House87.JPG',      alt: 'Pigs in outdoor area at Redwood Hogs Farm' },
]

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
            <Link href="/about" className="inline-block bg-[#6b7c5d] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-[#5a6b4d] transition-colors duration-200 text-sm sm:text-base">Learn More About Us</Link>
          </div>
          <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image src="/images/The Pork House87.JPG" alt="Pigs at Redwood Hogs Farm" fill className="object-cover" />
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
            {pigs.map((pig) => (
              <PigCard key={pig.name} {...pig} />
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link href="/pigs" className="inline-block bg-[#6b7c5d] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-[#5a6b4d] transition-colors duration-200 text-sm sm:text-base">View All Pigs →</Link>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#3d4f3d] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif italic text-center mb-3 sm:mb-4">Our Services</h2>
          <p className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">Redwood Hogs Farm offers services designed to support farmers and promote better livestock management practices.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {services.map(({ title, description, icon }) => (
              <div key={title} className="p-4">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center text-white">
                    {icon}
                  </div>
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">{title}</h4>
                <p className="text-xs sm:text-sm text-gray-300 hidden sm:block">{description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link href="/services" className="inline-block bg-[#b8824f] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-[#a0703f] transition-colors duration-200 text-sm sm:text-base">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] mb-3 sm:mb-4">Farm Gallery</h2>
            <p className="text-gray-700 max-w-3xl mx-auto px-4">Take a look inside Redwood Hogs Farm and see our pigs, farm environment, and daily farming activities.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {galleryPreview.map(({ src, alt }) => (
              <div key={src} className="relative h-32 sm:h-40 md:h-48 rounded overflow-hidden">
                <Image src={src} alt={alt} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/gallery" className="inline-block bg-[#b8824f] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-[#a0703f] transition-colors duration-200 text-sm sm:text-base">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#3d4f3d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif italic mb-3 sm:mb-4">Ready to Start Your Pig Farming Journey?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 px-4">Contact us today to learn more about our pigs, services, and training programs.</p>
          <Link href="/contact" className="inline-block bg-[#b8824f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded hover:bg-[#a0703f] transition-colors duration-200 text-base sm:text-lg">Get In Touch</Link>
        </div>
      </section>
    </div>
  )
}
