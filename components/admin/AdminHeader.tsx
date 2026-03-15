'use client'
import { usePathname } from 'next/navigation'
import { logout } from '@/lib/admin/auth'

const titles: Record<string, string> = {
  '/admin/dashboard': 'Dashboard',
  '/admin/pigs': 'Pigs',
  '/admin/pigs/new': 'Add New Pig',
  '/admin/services': 'Services',
  '/admin/services/new': 'Add New Service',
  '/admin/gallery': 'Gallery',
  '/admin/gallery/new': 'Upload Image',
  '/admin/farm-info': 'Farm Info',
  '/admin/about': 'About Page',
}

function getTitle(pathname: string): string {
  if (titles[pathname]) return titles[pathname]
  if (pathname.includes('/pigs/') && pathname.endsWith('/edit')) return 'Edit Pig'
  if (pathname.includes('/services/') && pathname.endsWith('/edit')) return 'Edit Service'
  return 'Admin'
}

export default function AdminHeader() {
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
      <h1 className="text-lg font-semibold text-gray-800">{getTitle(pathname)}</h1>
      <button
        onClick={logout}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors duration-150"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
        </svg>
        Logout
      </button>
    </header>
  )
}
