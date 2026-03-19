'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About' },
  { href: '/pigs',    label: 'Our Pigs' },
  { href: '/services',label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/visit',   label: 'Visit' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const linkClass = (href: string) =>
    `font-medium transition-colors duration-200 ${
      pathname === href
        ? 'text-[#b8824f]'
        : 'text-[#3d4f3d] hover:text-[#8b6f47]'
    }`

  return (
    <nav className="bg-[#f5f1e8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <Image src="/images/croped.png" alt="Redwood Hogs Farm logo" fill className="object-contain" />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-[#3d4f3d]">Redwood Hogs Farm</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-4 xl:gap-6 items-center text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={linkClass(href)}>{label}</Link>
              </li>
            ))}
            <li>
              <Link href="/donate" className="bg-[#6b7c5d] text-white px-4 xl:px-5 py-2 rounded hover:bg-[#5a6b4d] transition-colors duration-200 font-medium whitespace-nowrap">Donate</Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-[#b8824f] text-white px-4 xl:px-5 py-2 rounded hover:bg-[#a0703f] transition-colors duration-200 font-medium whitespace-nowrap"
              >
                Get In Touch
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="lg:hidden text-[#3d4f3d] p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 ${linkClass(href)}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/donate" onClick={() => setIsOpen(false)} className="block bg-[#6b7c5d] text-white px-4 py-2 rounded hover:bg-[#5a6b4d] transition-colors duration-200 font-medium text-center">Donate</Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block bg-[#b8824f] text-white px-4 py-2 rounded hover:bg-[#a0703f] transition-colors duration-200 font-medium text-center"
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}
