'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] bg-[#3d4f3d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic mb-2 sm:mb-4">Get in Touch</h1>
            <p className="text-base sm:text-lg lg:text-xl">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-700 px-4">Have questions or interested in visiting our farm? We would love to hear from you. Contact us for inquiries about pigs, training programs, or farm visits.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#3d4f3d] mb-6 sm:mb-8">Contact Information</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-4xl sm:text-5xl text-[#6b7c5d]">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3d4f3d] mb-1 text-sm sm:text-base">Location</h3>
                  <p className="text-sm sm:text-base text-gray-700">Musha, Rwamagana District, Rwanda</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-4xl sm:text-5xl text-[#b8824f]">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3d4f3d] mb-1 text-sm sm:text-base">Email</h3>
                  <p className="text-sm sm:text-base text-gray-700">info@redwoodhogsfarm.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-4xl sm:text-5xl text-[#6b7c5d]">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3d4f3d] mb-1 text-sm sm:text-base">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-700">+250 XXX XXX XXX</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-3 sm:mb-4">Farm Visit Hours</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-sm sm:text-base text-gray-700 mb-2">Saturday: 8:00 AM - 2:00 PM</p>
              <p className="text-sm sm:text-base text-gray-700">Sunday: Closed</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">*Please schedule visits in advance</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#3d4f3d] mb-5 sm:mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 border border-gray-300 rounded focus:outline-none focus:border-[#6b7c5d] text-sm sm:text-base" 
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 border border-gray-300 rounded focus:outline-none focus:border-[#6b7c5d] text-sm sm:text-base" 
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 border border-gray-300 rounded focus:outline-none focus:border-[#6b7c5d] text-sm sm:text-base" 
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 border border-gray-300 rounded focus:outline-none focus:border-[#6b7c5d] text-sm sm:text-base" 
                  rows={5}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#6b7c5d] text-white px-6 py-2.5 sm:py-3 rounded hover:bg-[#5a6b4d] font-semibold text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
