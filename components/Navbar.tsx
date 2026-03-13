import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#3d4f3d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-[#8b6f47] p-2 rounded">
            <span className="text-2xl">🏠</span>
          </div>
          <span className="text-xl font-semibold text-[#4a4a4a]">Redwood Hogs Farm</span>
        </Link>
        <ul className="flex gap-8 items-center">
          <li><Link href="/" className="text-[#4a4a4a] hover:text-[#8b6f47]">Home</Link></li>
          <li><Link href="/about" className="text-[#4a4a4a] hover:text-[#8b6f47]">About</Link></li>
          <li><Link href="/pigs" className="text-[#4a4a4a] hover:text-[#8b6f47]">Our Pigs</Link></li>
          <li><Link href="/services" className="text-[#4a4a4a] hover:text-[#8b6f47]">Services</Link></li>
          <li><Link href="/gallery" className="text-[#4a4a4a] hover:text-[#8b6f47]">Gallery</Link></li>
          <li><Link href="/contact" className="text-[#4a4a4a] hover:text-[#8b6f47]">Contact</Link></li>
          <li><Link href="/contact" className="bg-[#b8824f] text-white px-6 py-2 rounded hover:bg-[#a0703f]">Get In Touch</Link></li>
        </ul>
      </div>
    </nav>
  )
}
