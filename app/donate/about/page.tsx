import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] bg-[#3d4f3d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic mb-2 sm:mb-4">About Redwood Hogs Farm</h1>
            <p className="text-base sm:text-lg lg:text-xl">Our story, mission, and vision for sustainable pig farming</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
              <Image src="/images/The Pork House87.JPG" alt="Pigs at Redwood Hogs Farm" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#3d4f3d] mb-4 sm:mb-6">Our Story</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Redwood Hogs Farm began as a family dream to build a sustainable and responsible pig farming business. The idea started in 2019 when the founders began learning modern pig farming practices and researching ways to improve livestock production in Rwanda.</p>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">After years of preparation and learning, the farm officially began operations with a small number of pigs and a big vision for the future.</p>
              <p className="text-sm sm:text-base text-gray-700">Today, Redwood Hogs Farm focuses on raising healthy pigs, providing high-quality breeding stock, and sharing knowledge with farmers who want to grow in livestock farming.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-700 text-center">We believe that farming should combine innovation, responsibility, and care for animals, people, and the environment.</p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-[#3d4f3d] text-white p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base">Our mission is to promote sustainable pig farming while providing high-quality livestock and empowering farmers through training and support.</p>
            </div>
            <div className="bg-[#6b7c5d] text-white p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base">Our vision is to contribute to the growth of modern and sustainable pig farming in Rwanda and across Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] text-center mb-8 sm:mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Sustainability */}
            <div className="text-center p-4">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-16 h-16 bg-[#e8f0e8] rounded-full flex items-center justify-center text-[#3d4f3d]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17 8C8 10 5.9 16.17 3.82 19.1A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10 0-3.1-1.41-5.86-3.63-7.73L17 8zm-5 12c-3.31 0-6-2.69-6-6l1.5 1.5C8 17.42 9.89 19 12 19c1.2 0 2.27-.45 3.09-1.18L17.5 20A7.94 7.94 0 0112 20z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Sustainability</h4>
              <p className="text-sm sm:text-base text-gray-600">Farming practices that protect the environment and support long-term growth</p>
            </div>

            {/* Animal Care */}
            <div className="text-center p-4">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-16 h-16 bg-[#fdecea] rounded-full flex items-center justify-center text-[#b8824f]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Animal Care</h4>
              <p className="text-sm sm:text-base text-gray-600">Treating our pigs with respect, proper nutrition, and veterinary attention</p>
            </div>

            {/* Farmer Support */}
            <div className="text-center p-4">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-16 h-16 bg-[#e8f0e8] rounded-full flex items-center justify-center text-[#3d4f3d]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Farmer Support</h4>
              <p className="text-sm sm:text-base text-gray-600">Sharing knowledge and helping farmers succeed in livestock farming</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#3d4f3d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif italic mb-3 sm:mb-4">Want to Learn More?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 px-4">Visit our farm or contact us to see how we&apos;re making a difference in pig farming.</p>
          <Link href="/contact" className="inline-block bg-[#b8824f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded hover:bg-[#a0703f] transition-colors duration-200 text-base sm:text-lg">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}
