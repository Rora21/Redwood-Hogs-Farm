'use client'
import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/admin/api'
import { FarmInfo } from '@/lib/admin/types'
import Toast from '@/components/admin/Toast'

const emptyForm: Omit<FarmInfo, 'id' | 'updated_at'> = {
  farm_name: '',
  location: '',
  email: '',
  phone: '',
  hours_weekday: '',
  hours_saturday: '',
  hours_sunday: '',
}

export default function FarmInfoPage() {
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  useEffect(() => {
    apiFetch<FarmInfo>('/api/farm-info')
      .then((data) => {
        if (data.id) {
          setForm({
            farm_name: data.farm_name,
            location: data.location,
            email: data.email,
            phone: data.phone,
            hours_weekday: data.hours_weekday,
            hours_saturday: data.hours_saturday,
            hours_sunday: data.hours_sunday,
          })
        }
      })
      .catch(() => setToast({ message: 'Failed to load farm info', type: 'error' }))
      .finally(() => setLoading(false))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await apiFetch('/api/farm-info', { method: 'PUT', body: JSON.stringify(form) })
      setToast({ message: 'Farm info saved', type: 'success' })
    } catch (err) {
      setToast({ message: err instanceof Error ? err.message : 'Save failed', type: 'error' })
    } finally {
      setSaving(false)
    }
  }

  const inputClass = 'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#3d4f3d] focus:ring-1 focus:ring-[#3d4f3d]'
  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [key]: e.target.value })

  if (loading) return (
    <div className="flex justify-center py-20">
      <div className="w-8 h-8 border-2 border-[#3d4f3d] border-t-transparent rounded-full animate-spin" />
    </div>
  )

  return (
    <div className="max-w-2xl">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label htmlFor="farm_name" className="block text-sm font-medium text-gray-700 mb-1">Farm Name</label>
            <input id="farm_name" type="text" value={form.farm_name} onChange={set('farm_name')} className={inputClass} />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location / Address</label>
            <input id="location" type="text" value={form.location} onChange={set('location')} className={inputClass} placeholder="e.g. Musha, Rwamagana District, Rwanda" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input id="email" type="email" value={form.email} onChange={set('email')} className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input id="phone" type="tel" value={form.phone} onChange={set('phone')} className={inputClass} placeholder="+250 XXX XXX XXX" />
            </div>
          </div>

          <div className="border-t border-gray-100 pt-5">
            <p className="text-sm font-semibold text-gray-700 mb-3">Business Hours</p>
            <div className="space-y-3">
              <div>
                <label htmlFor="hours_weekday" className="block text-xs text-gray-500 mb-1">Monday – Friday</label>
                <input id="hours_weekday" type="text" value={form.hours_weekday} onChange={set('hours_weekday')} className={inputClass} placeholder="8:00 AM – 5:00 PM" />
              </div>
              <div>
                <label htmlFor="hours_saturday" className="block text-xs text-gray-500 mb-1">Saturday</label>
                <input id="hours_saturday" type="text" value={form.hours_saturday} onChange={set('hours_saturday')} className={inputClass} placeholder="8:00 AM – 2:00 PM" />
              </div>
              <div>
                <label htmlFor="hours_sunday" className="block text-xs text-gray-500 mb-1">Sunday</label>
                <input id="hours_sunday" type="text" value={form.hours_sunday} onChange={set('hours_sunday')} className={inputClass} placeholder="Closed" />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button type="submit" disabled={saving}
              className="px-5 py-2 bg-[#3d4f3d] text-white text-sm rounded-lg hover:bg-[#2d3f2d] disabled:opacity-50 transition-colors">
              {saving ? 'Saving…' : 'Save Farm Info'}
            </button>
          </div>
        </form>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}
