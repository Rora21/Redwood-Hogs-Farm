'use client'
import Image from 'next/image'
import { useState } from 'react'

interface BookingData {
  fullName: string
  email: string
  visitDate: string
  numberOfVisitors: string
  message: string
}

export default function BookVisit() {
  const [formData, setFormData] = useState<BookingData>({
    fullName: '',
    email: '',
    visitDate: '',
    numberOfVisitors: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ fullName: '', email: '', visitDate: '', numberOfVisitors: '', message: '' })
    }, 3000)
  }

  const inputClass = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6b7c5d] focus:ring-2 focus:ring-[#6b7c5d]/20 text-sm sm:text-base placeholder-gray-400'

  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] bg-[#3d4f3d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic mb-2 sm:mb-4">Book a Farm Visit</h1>
            <p className="text-base sm:text-lg lg:text-xl">Experience real farm life at Redwood Hogs Farm</p>
          </div>
        </div>
      </section>

      {/* Farm Visit Experience Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] mb-3 sm:mb-4">Farm Visit Experience</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Visitors from different places come to learn, explore, and experience real farm life at Redwood Hogs Farm.
            </p>
          </div>

          {/* Images Grid - Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* BIG IMAGE - Takes 2 columns on large screens */}
            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full aspect-video">
                <Image
                  src="/images/Redwoodhogs_1.jpg"
                  alt="Visitors at Redwood Hogs Farm"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
            </div>

            {/* SIDE IMAGES - Stack on mobile, column on large screens */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/Redwoodhogs_3.jpg"
                    alt="Farm visit learning"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/Redwoodhogs_5.jpg"
                    alt="Visitors interacting with pigs"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Form */}
            <div className="bg-[#f5f1e8] p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-serif italic text-[#3d4f3d] mb-2">Book a Farm Visit</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">We&apos;ll confirm your visit within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[#3d4f3d] mb-2">Booking Received!</h4>
                  <p className="text-gray-600">Thank you for your interest. We&apos;ll contact you soon to confirm your visit.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block mb-2 font-semibold text-gray-700 text-sm">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-semibold text-gray-700 text-sm">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="visitDate" className="block mb-2 font-semibold text-gray-700 text-sm">Preferred Visit Date</label>
                    <input
                      id="visitDate"
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="numberOfVisitors" className="block mb-2 font-semibold text-gray-700 text-sm">Number of Visitors</label>
                    <input
                      id="numberOfVisitors"
                      type="number"
                      name="numberOfVisitors"
                      value={formData.numberOfVisitors}
                      onChange={handleChange}
                      placeholder="How many people?"
                      min="1"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-semibold text-gray-700 text-sm">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your visit interests..."
                      className={`${inputClass} resize-none`}
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3d4f3d] text-white px-6 py-3 rounded-lg hover:bg-[#2a3a2a] transition-colors duration-200 font-semibold text-base sm:text-lg"
                  >
                    Book Visit
                  </button>
                </form>
              )}
            </div>

            {/* Info Section */}
            <div className="space-y-6 sm:space-y-8">
              {/* Visit Hours */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-[#6b7c5d]">
                <h4 className="text-xl sm:text-2xl font-semibold text-[#3d4f3d] mb-4">Farm Visit Hours</h4>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base text-gray-700"><span className="font-semibold">Monday – Friday:</span> 8:00 AM – 5:00 PM</p>
                  <p className="text-sm sm:text-base text-gray-700"><span className="font-semibold">Saturday:</span> 8:00 AM – 2:00 PM</p>
                  <p className="text-sm sm:text-base text-gray-700"><span className="font-semibold">Sunday:</span> Closed</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-4 italic">* Please schedule visits in advance</p>
              </div>

              {/* What to Expect */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-[#b8824f]">
                <h4 className="text-xl sm:text-2xl font-semibold text-[#3d4f3d] mb-4">What to Expect</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#6b7c5d] font-bold">✓</span>
                    <span className="text-sm sm:text-base text-gray-700">Guided tour of our farm facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6b7c5d] font-bold">✓</span>
                    <span className="text-sm sm:text-base text-gray-700">Learn about our pig farming practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6b7c5d] font-bold">✓</span>
                    <span className="text-sm sm:text-base text-gray-700">Interact with our animals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6b7c5d] font-bold">✓</span>
                    <span className="text-sm sm:text-base text-gray-700">Meet our experienced team</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-[#3d4f3d] text-white p-6 sm:p-8 rounded-xl shadow-md">
                <h4 className="text-xl sm:text-2xl font-semibold mb-4">Need Help?</h4>
                <p className="text-sm sm:text-base mb-4">For urgent bookings, contact us directly:</p>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base">
                    <span className="font-semibold">Email:</span> <a href="mailto:info@redwoodhogsfarm.com" className="hover:text-[#b8824f] transition-colors">info@redwoodhogsfarm.com</a>
                  </p>
                  <p className="text-sm sm:text-base">
                    <span className="font-semibold">Location:</span> Musha, Rwamagana District, Rwanda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#6b7c5d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif italic mb-3 sm:mb-4">Ready to Visit?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8">Fill out the form above and we&apos;ll confirm your visit within 24 hours!</p>
        </div>
      </section>
    </div>
  )
}
