'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { apiFetch } from '@/lib/admin/api'

interface Stats {
  pigs: number
  services: number
  gallery: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    Promise.all([
      apiFetch<unknown[]>('/api/pigs'),
      apiFetch<unknown[]>('/api/services'),
      apiFetch<unknown[]>('/api/gallery'),
    ]).then(([pigs, services, gallery]) => {
      setStats({ pigs: pigs.length, services: services.length, gallery: gallery.length })
    }).catch(() => {})
  }, [])

  const cards = [
    { label: 'Pig Listings', value: stats?.pigs, href: '/admin/pigs', color: 'bg-[#3d4f3d]' },
    { label: 'Services', value: stats?.services, href: '/admin/services', color: 'bg-[#6b7c5d]' },
    { label: 'Gallery Images', value: stats?.gallery, href: '/admin/gallery', color: 'bg-[#b8824f]' },
  ]

  const quickLinks = [
    { href: '/admin/pigs/new', label: 'Add Pig' },
    { href: '/admin/services/new', label: 'Add Service' },
    { href: '/admin/gallery/new', label: 'Upload Image' },
    { href: '/admin/farm-info', label: 'Edit Farm Info' },
    { href: '/admin/about', label: 'Edit About Page' },
  ]

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map(({ label, value, href, color }) => (
          <Link key={label} href={href} className="block">
            <div className={`${color} text-white rounded-xl p-6 hover:opacity-90 transition-opacity`}>
              <p className="text-sm font-medium opacity-80">{label}</p>
              <p className="text-4xl font-bold mt-1">
                {value === undefined ? '—' : value}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick links */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {quickLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
