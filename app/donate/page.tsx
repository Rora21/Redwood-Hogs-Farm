'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Donate() {
  const [selected, setSelected] = useState<number | null>(5000)
  const [custom, setCustom] = useState('')
  const [name, setName] = useState('')

  const amounts = [
    { value: 5000, label: 'Feed a Pig', desc: 'Provide nutritious feed for our pigs.' },
    { value: 10000, label: 'Support Healthcare', desc: 'Help cover veterinary care and pigs\' health' },
    { value: 25000, label: 'Expand Our Farm', desc: 'Support the growth of our facilities and operations.' },
  ]

  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative h-[350px] sm:h-[420px] bg-cover bg-center" style={{ backgroundImage: "url('/images/The Pork House87.JPG')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-3xl sm:text-5xl font-bold mb-3">
              Support Sustainable Farming 🌿
            </h1>
            <p className="text-base sm:text-lg mb-6">Help us grow Redwood Hogs Farm and empower local agriculture in Rwanda.</p>
            <a href="#donate-form" className="inline-block bg-[#b8824f] text-white px-8 py-3 rounded hover:bg-[#a0703f] font-semibold">
              Donate Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Your Support Matters */}
      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3d4f3d] mb-2">Why Your Support Matters</h2>
          <p className="text-gray-600 mb-10">Promoting eco-friendly, sustainable agriculture.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: '🌱', title: 'Sustainable Farming', desc: 'Promoting eco-friendly, sustainable agriculture.' },
              { icon: '🐷', title: 'Animal Welfare', desc: 'Ensuring healthy and well-cared-for livestock.' },
              { icon: '👷', title: 'Local Jobs', desc: 'Creating job opportunities for local farmers' },
              { icon: '🧺', title: 'Food Security', desc: 'Helping feed families and communities' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-[#3d4f3d] mb-1 text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section id="donate-form" className="py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3d4f3d] text-center mb-10">Choose Your Donation</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: Amounts + Impact */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {amounts.map((a) => (
                  <button
                    key={a.value}
                    onClick={() => { setSelected(a.value); setCustom('') }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selected === a.value
                        ? 'border-[#6b7c5d] bg-[#6b7c5d] text-white'
                        : 'border-gray-200 bg-white text-[#3d4f3d] hover:border-[#6b7c5d]'
                    }`}
                  >
                    <div className="text-xl font-bold">{a.value.toLocaleString()} <span className="text-sm font-normal">RWF</span></div>
                    <div className="font-semibold text-sm mt-1">{a.label}</div>
                    <div className={`text-xs mt-1 ${selected === a.value ? 'text-gray-200' : 'text-gray-500'}`}>{a.desc}</div>
                  </button>
                ))}
              </div>

              <div className="bg-[#f5f1e8] rounded-xl p-6">
                <h3 className="font-bold text-[#3d4f3d] mb-4">Your Donation Will Help:</h3>
                <ul className="space-y-3">
                  {[
                    { icon: '🐖', text: 'Feed and care for our pigs.' },
                    { icon: '👨‍🌾', text: 'Provide training to local farmers.' },
                    { icon: '🌳', text: 'Promote sustainable agriculture in Rwanda.' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-[#6b7c5d] font-bold">✓</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm italic text-gray-500">Every contribution, no matter how small, makes a difference.</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-[#f5f1e8] rounded-xl p-6 sm:p-8 shadow-md">
              <div className="mb-4">
                <label className="block text-sm font-semibold text-[#3d4f3d] mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6b7c5d] bg-white text-sm"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#3d4f3d] mb-2">Amount (RWF):</label>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={custom || (selected ?? '')}
                  onChange={e => { setCustom(e.target.value); setSelected(null) }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6b7c5d] bg-white text-sm"
                />
              </div>

              <button className="w-full bg-[#6b7c5d] text-white py-3 rounded-lg font-bold hover:bg-[#5a6b4d] mb-4 text-base">
                Donate Now
              </button>

              <div className="text-center mb-4">
                <p className="text-xs text-gray-400 mb-2">Powered by <span className="font-bold text-gray-600">stripe</span></p>
                <div className="flex justify-center gap-2 flex-wrap">
                  <span className="text-xs bg-white border rounded px-2 py-1 font-bold text-blue-700">VISA</span>
                  <span className="text-xs bg-white border rounded px-2 py-1 font-bold text-red-600">Mastercard</span>
                  <span className="text-xs bg-white border rounded px-2 py-1 font-bold text-blue-500">PayPal</span>
                  <span className="text-xs bg-white border rounded px-2 py-1 font-bold text-gray-700">MTN</span>
                  <span className="text-xs bg-white border rounded px-2 py-1 font-bold text-yellow-600">Airtel</span>
                </div>
              </div>

              <button className="w-full bg-[#b8824f] text-white py-3 rounded-lg font-bold hover:bg-[#a0703f] text-base flex items-center justify-center gap-2">
                <span>📱</span> Donate with Mobile Money
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">🔒 Secure payment · 100% goes to farm development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Message */}
      <section className="py-14 px-4 sm:px-6 text-center">
        <div className="flex justify-center gap-3 mb-6">
          <span className="text-3xl text-[#6b7c5d]">♥</span>
          <span className="text-3xl text-[#6b7c5d]">♥</span>
          <span className="text-3xl text-[#6b7c5d]">♥</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#3d4f3d] mb-3 max-w-2xl mx-auto">
          Your support helps feed pigs, support farmers, and grow sustainable agriculture.
        </h2>
        <p className="text-gray-500">Every donation makes a difference.</p>
      </section>
    </div>
  )
}
