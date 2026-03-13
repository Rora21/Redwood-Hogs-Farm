'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#f5f1e8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="bg-[#8b6f47] p-1.5 sm:p-2 rounded">
              <span className="text-xl sm:text-2xl">🏠</span>
            </div>
            <span className="text-lg sm:text-xl font-semibold text-[#3d4f3d]">Redwood Hogs Farm</span>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-4 xl:gap-6 items-center text-sm">
            <li><Link href="/" className="text-[#3d4f3d] hover:text-[#8b6f47] font-medium">Home</Link></li>
            <li><Link href="/about" className="text-[#3d4f3d] hover:text-[#8b6f47] font-medium">About</Link></li>
            <li><Link href="/pigs" className="text-[#3d4f3d] hover:text-[#8b6f47] font-medium">Our Pigs</Link></li>
            <li><Link href="/services" className="text-[#3d4f3d] hover:text-[#8b6f47] font-medium">Services</Link></li>
            <li><Link href="/gallery" className="text-[#3d4f3d] hover:text-[#8b6f47] font-medium">Gallery</Link></li>
            <li><Link href="/contact" className="text-[#3d4f3d] hover:text-[#8b6f47] font-medium">Contact</Link></li>
            <li><Link href="/contact" className="bg-[#b8824f] text-white px-4 xl:px-5 py-2 rounded hover:bg-[#a0703f] font-medium whitespace-nowrap">Get In Touch</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#3d4f3d] p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden mt-4 space-y-2 pb-4">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-[#3d4f3d] hover:text-[#8b6f47] font-medium">Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-[#3d4f3d] hover:text-[#8b6f47] font-medium">About</Link></li>
            <li><Link href="/pigs" onClick={() => setIsOpen(false)} className="block py-2 text-[#3d4f3d] hover:text-[#8b6f47] font-medium">Our Pigs</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)} className="block py-2 text-[#3d4f3d] hover:text-[#8b6f47] font-medium">Services</Link></li>
            <li><Link href="/gallery" onClick={() => setIsOpen(false)} className="block py-2 text-[#3d4f3d] hover:text-[#8b6f47] font-medium">Gallery</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-[#3d4f3d] hover:text-[#8b6f47] font-medium">Contact</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="block bg-[#b8824f] text-white px-4 py-2 rounded hover:bg-[#a0703f] font-medium text-center">Get In Touch</Link></li>
          </ul>
        )}
      </div>
    </nav>
  )
}
