import Link from 'next/link'

const services = [
  {
    title: 'Breeding Stock Supply',
    description: 'We provide strong breeding pigs that help farmers improve their herd quality and productivity.',
    icon: (
      // Leaf / nature
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.1A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10 0-3.1-1.41-5.86-3.63-7.73L17 8zm-5 12c-3.31 0-6-2.69-6-6l1.5 1.5C8 17.42 9.89 19 12 19c1.2 0 2.27-.45 3.09-1.18L17.5 20A7.94 7.94 0 0112 20z"/>
      </svg>
    ),
  },
  {
    title: 'Piglet Sales',
    description: 'Healthy piglets available for farmers starting or expanding their pig farming projects.',
    icon: (
      // Price tag / label
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
      </svg>
    ),
  },
  {
    title: 'Farmer Training',
    description: 'We organize training sessions to teach modern pig farming techniques, animal care, and farm management.',
    icon: (
      // Graduation cap
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
    ),
  },
  {
    title: 'Farm Consultation',
    description: 'Advice and guidance for farmers who want to start or improve pig farming operations.',
    icon: (
      // Clipboard / assignment
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
  },
]

const whyChooseUs = [
  {
    title: 'Quality Livestock',
    description: 'Healthy pigs raised with proper care and nutrition',
    icon: (
      // Shield with checkmark
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
  },
  {
    title: 'Expert Knowledge',
    description: 'Years of experience in modern pig farming',
    icon: (
      // Open book
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
      </svg>
    ),
  },
  {
    title: 'Farmer Support',
    description: 'Ongoing guidance and training for success',
    icon: (
      // People / group
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] bg-[#3d4f3d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic mb-2 sm:mb-4">Our Services</h1>
            <p className="text-base sm:text-lg lg:text-xl">Supporting farmers with quality livestock and expert guidance</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-700 px-4">Redwood Hogs Farm offers services designed to support farmers and promote better livestock management practices.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map(({ title, description, icon }) => (
              <div key={title} className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
                <div className="w-14 h-14 bg-[#e8f0e8] rounded-full flex items-center justify-center text-[#3d4f3d] mb-4">
                  {icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#3d4f3d] mb-2 sm:mb-3">{title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] text-center mb-8 sm:mb-12">Why Choose Redwood Hogs Farm?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map(({ title, description, icon }) => (
              <div key={title} className="text-center p-4">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-16 h-16 bg-[#e8f0e8] rounded-full flex items-center justify-center text-[#3d4f3d]">
                    {icon}
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">{title}</h4>
                <p className="text-sm sm:text-base text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#3d4f3d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif italic mb-3 sm:mb-4">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 px-4">Contact us to learn more about our services and how we can help your farm grow.</p>
          <Link href="/contact" className="inline-block bg-[#b8824f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded hover:bg-[#a0703f] transition-colors duration-200 text-base sm:text-lg">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}
