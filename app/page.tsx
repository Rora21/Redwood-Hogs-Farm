'use client'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'

const services = [
  {
    title: 'Breeding Stock Supply',
    description: 'Strong breeding pigs for better herd quality',
  },
  {
    title: 'Piglet Sales',
    description: 'Healthy piglets for your farm',
  },
  {
    title: 'Farmer Training',
    description: 'Modern farming techniques',
  },
  {
    title: 'Farm Consultation',
    description: 'Expert advice and guidance',
  },
]

const galleryImages = [
  { src: '/images/pork-house/pork-house-111.jpg', alt: 'Pigs in the Redwood Hogs Farm facility' },
  { src: '/images/pork-house/pork-house-111b.jpg', alt: 'Farm pig housing interior' },
  { src: '/images/pork-house/pork-house-117.jpg', alt: 'Healthy pigs at Redwood Hogs Farm' },
  { src: '/images/pork-house/pork-house-119.jpg', alt: 'Pig farming operations at Redwood Hogs Farm' },
  { src: '/images/pork-house/pork-house-136.jpg', alt: 'Farm livestock and daily care' },
  { src: '/images/pork-house/pork-house-87.jpg', alt: 'Pigs in outdoor area at Redwood Hogs Farm' },
]

const pigs = [
  { name: 'Breeding Piglets', description: 'Strong and healthy piglets raised with proper nutrition and veterinary care. Ideal for farmers looking to start or improve their pig farming operations.', image: '/images/pork-house/pork-house-89.jpg' },
  { name: 'Breeding Stock', description: 'High-quality sows and boars selected for strong genetics, productivity, and farm performance.', image: '/images/pork-house/pork-house-98.jpg' },
  { name: 'Slaughter Pigs', description: 'Well-raised pigs prepared for market with proper feeding and health management.', image: '/images/pork-house/pork-house-108.jpg' },
]

export default function Home() {
  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] mb-4 sm:mb-6">Welcome to Redwood Hogs Farm</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">Redwood Hogs Farm is a growing family farm located in Musha, Rwamagana District. We are committed to ethical pig farming, high-quality breeding stock, and supporting farmers with knowledge and training.</p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">Our mission is to raise healthy pigs while promoting sustainable farming practices that benefit both farmers and communities.</p>
              <Link href="/about" className="inline-block bg-[#6b7c5d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-[#5a6b4d] transition-colors duration-200 text-base sm:text-lg">Learn More About Us</Link>
            </div>
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
              <Image src="/images/pork-house/pork-house-87.jpg" alt="Pigs at Redwood Hogs Farm" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Pigs Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] text-center mb-3 sm:mb-4">Our Pigs</h2>
          <p className="text-base sm:text-lg text-gray-700 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">At Redwood Hogs Farm, we raise pigs with care, proper nutrition, and professional farm management practices. Our focus is to ensure healthy animals and high-quality livestock for farmers and customers.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {pigs.map(pig => (
              <div key={pig.name} className="bg-[#f5f1e8] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
                <div className="relative h-48 bg-gray-100">
                  <Image src={pig.image} alt={pig.name} fill className="object-cover" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">{pig.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{pig.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/pigs" className="inline-block text-[#6b7c5d] hover:text-[#3d4f3d] font-semibold text-base sm:text-lg transition-colors duration-200">View All Pigs →</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] text-center mb-3 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-700 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">Redwood Hogs Farm offers services designed to support farmers and promote better livestock management practices.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {services.map(service => (
              <div key={service.title} className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-block text-[#6b7c5d] hover:text-[#3d4f3d] font-semibold text-base sm:text-lg transition-colors duration-200">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] text-center mb-3 sm:mb-4">Farm Gallery</h2>
          <p className="text-base sm:text-lg text-gray-700 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">Take a look inside Redwood Hogs Farm and see our pigs, farm environment, and daily farming activities.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-12">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery" className="inline-block text-[#6b7c5d] hover:text-[#3d4f3d] font-semibold text-base sm:text-lg transition-colors duration-200">View Full Gallery →</Link>
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
