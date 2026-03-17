'use client'
import { useState } from 'react'

export default function Donate() {
  const [selected, setSelected] = useState<number | null>(5000)
  const [custom, setCustom] = useState('')
  const [name, setName] = useState('')

  const amounts = [5000, 10000, 25000]

  return (
    <div className="bg-[#f5f1e8] min-h-screen">

      {/* Header */}
      <section className="pt-16 pb-6 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3d4f3d] mb-4">
          Make a Difference 🌿
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
          Support Redwood Hogs Farm and help us grow sustainable agriculture in Rwanda.
        </p>
      </section>

      {/* Donation Card */}
      <section className="px-4 pb-10">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-bold text-[#3d4f3d] text-center mb-6">Choose an amount</h2>

          {/* Amount Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            {amounts.map(a => (
              <button
                key={a}
                onClick={() => { setSelected(a); setCustom('') }}
                className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold text-base transition-all ${
                  selected === a
                    ? 'border-[#6b7c5d] bg-white text-[#3d4f3d]'
                    : 'border-gray-200 bg-white text-[#3d4f3d] hover:border-[#6b7c5d]'
                }`}
              >
                <span className="font-bold">{a.toLocaleString()}</span>{' '}
                <span className="text-sm font-normal text-gray-500">RWF</span>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <input
            type="number"
            placeholder="Enter custom amount"
            value={custom}
            onChange={e => { setCustom(e.target.value); setSelected(null) }}
            className="w-full p-3 border border-gray-200 rounded-lg mb-3 focus:outline-none focus:border-[#6b7c5d] text-sm bg-[#fafafa]"
          />

          {/* Name */}
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg mb-5 focus:outline-none focus:border-[#6b7c5d] text-sm bg-[#fafafa]"
          />

          {/* Donate with Card */}
          <button className="w-full bg-[#6b7c5d] text-white py-3.5 rounded-lg font-bold text-base hover:bg-[#5a6b4d] mb-3">
            Donate with Card
          </button>

          {/* Payment Icons */}
          <div className="flex justify-center items-center gap-3 flex-wrap mb-4">
            <span className="text-xs font-bold text-blue-700 border rounded px-2 py-1 bg-white">VISA</span>
            <span className="text-xs font-bold text-red-600 border rounded px-2 py-1 bg-white">Mastercard</span>
            <span className="text-xs font-bold text-gray-800 border rounded px-2 py-1 bg-white">Apple Pay</span>
            <span className="text-xs font-bold text-yellow-600 border rounded px-2 py-1 bg-white">MTN</span>
            <span className="text-xs font-bold text-red-500 border rounded px-2 py-1 bg-white">Airtel</span>
          </div>

          {/* Donate with Mobile Money */}
          <button className="w-full bg-[#b8824f] text-white py-3.5 rounded-lg font-bold text-base hover:bg-[#a0703f] flex items-center justify-center gap-2 mb-5">
            <span>📱</span> Donate with Mobile Money
          </button>

          {/* Secure */}
          <p className="text-center text-xs text-gray-400">
            🔒 Secure payment · <strong>100% goes to farm development</strong>
          </p>
        </div>
      </section>

      {/* Bottom Message */}
      <section className="py-10 px-4 text-center">
        <div className="flex justify-center gap-2 mb-5">
          <span className="text-2xl text-[#6b7c5d]">♥</span>
          <span className="text-2xl text-[#6b7c5d]">♥</span>
          <span className="text-2xl text-[#6b7c5d]">♥</span>
        </div>
        <p className="text-xl sm:text-2xl font-semibold text-[#3d4f3d] max-w-2xl mx-auto mb-3">
          Your support helps feed pigs, support farmers, and grow sustainable agriculture.
        </p>
        <p className="text-gray-500 text-sm sm:text-base">Every donation makes a difference.</p>
      </section>

    </div>
  )
}
