import Link from 'next/link'

export default function Services() {
  const services = [
    { 
      icon: '🌱', 
      title: 'Breeding Stock Supply', 
      description: 'We provide strong breeding pigs that help farmers improve their herd quality and productivity.' 
    },
    { 
      icon: '🐷', 
      title: 'Piglet Sales', 
      description: 'Healthy piglets available for farmers starting or expanding their pig farming projects.' 
    },
    { 
      icon: '🎓', 
      title: 'Farmer Training', 
      description: 'We organize training sessions to teach modern pig farming techniques, animal care, and farm management.' 
    },
    { 
      icon: '📋', 
      title: 'Farm Consultation', 
      description: 'Advice and guidance for farmers who want to start or improve pig farming operations.' 
    },
  ]

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
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#3d4f3d] mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{service.description}</p>
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
            <div className="text-center p-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✅</div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Quality Livestock</h4>
              <p className="text-sm sm:text-base text-gray-600">Healthy pigs raised with proper care and nutrition</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📚</div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Expert Knowledge</h4>
              <p className="text-sm sm:text-base text-gray-600">Years of experience in modern pig farming</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🤝</div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">Farmer Support</h4>
              <p className="text-sm sm:text-base text-gray-600">Ongoing guidance and training for success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#3d4f3d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif italic mb-3 sm:mb-4">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 px-4">Contact us to learn more about our services and how we can help your farm grow.</p>
          <Link href="/contact" className="inline-block bg-[#b8824f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded hover:bg-[#a0703f] text-base sm:text-lg">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}
