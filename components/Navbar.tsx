import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Redwood Hogs Farm</Link>
        <ul className="flex gap-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/pigs" className="hover:underline">Pigs</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
