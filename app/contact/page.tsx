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
                <div className="text-2xl sm:text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold text-[#3d4f3d] mb-1 text-sm sm:text-base">Location</h3>
                  <p className="text-sm sm:text-base text-gray-700">Musha, Rwamagana District, Rwanda</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl">✉️</div>
                <div>
                  <h3 className="font-semibold text-[#3d4f3d] mb-1 text-sm sm:text-base">Email</h3>
                  <p className="text-sm sm:text-base text-gray-700">info@redwoodhogsfarm.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl">📞</div>
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
