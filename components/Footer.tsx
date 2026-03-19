import Link from 'next/link'

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/pigs',     label: 'Our Pigs' },
  { href: '/services', label: 'Services' },
  { href: '/gallery',  label: 'Gallery' },
  { href: '/visit',    label: 'Visit' },
  { href: '/contact',  label: 'Contact' },
  { href: '/donate',   label: 'Donate' },
]

export default function Footer() {
  return (
    <footer className="bg-[#2a3a2a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Redwood Hogs Farm</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Sustainable pig farming focused on quality livestock, responsible practices, and supporting farmers in Rwanda.
            </p>
            <p className="text-sm text-gray-400">
              Musha, Rwamagana District, Rwanda
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-5">
              <li>
                <a href="mailto:info@redwoodhogsfarm.com" className="hover:text-white transition-colors duration-200">
                  info@redwoodhogsfarm.com
                </a>
              </li>
            </ul>
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Farm Visit Hours</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Mon – Fri: 8:00 AM – 5:00 PM</li>
              <li>Saturday: 8:00 AM – 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center">
          <p className="text-xs text-gray-500">© 2026 Redwood Hogs Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
