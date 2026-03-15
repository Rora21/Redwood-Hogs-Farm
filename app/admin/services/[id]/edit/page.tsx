'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { apiFetch } from '@/lib/admin/api'
import { Service } from '@/lib/admin/types'
import Toast from '@/components/admin/Toast'

interface Props { params: { id: string } }

export default function EditServicePage({ params }: Props) {
  const router = useRouter()
  const [form, setForm] = useState({ title: '', description: '', icon_svg: '', sort_order: 0, is_active: true })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    apiFetch<Service>(`/api/services/${params.id}`)
      .then((svc) => setForm({ title: svc.title, description: svc.description, icon_svg: svc.icon_svg, sort_order: svc.sort_order, is_active: svc.is_active }))
      .catch(() => setToast({ message: 'Failed to load service', type: 'error' }))
      .finally(() => setLoading(false))
  }, [params.id])

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.title.trim()) e.title = 'Title is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSaving(true)
    try {
      await apiFetch(`/api/services/${params.id}`, { method: 'PATCH', body: JSON.stringify(form) })
      setToast({ message: 'Saved successfully', type: 'success' })
    } catch (err) {
      setToast({ message: err instanceof Error ? err.message : 'Save failed', type: 'error' })
    } finally {
      setSaving(false)
    }
  }

  const inputClass = 'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#3d4f3d] focus:ring-1 focus:ring-[#3d4f3d]'

  if (loading) return (
    <div className="flex justify-center py-20">
      <div className="w-8 h-8 border-2 border-[#3d4f3d] border-t-transparent rounded-full animate-spin" />
    </div>
  )

  return (
    <div className="max-w-2xl">
      <Link href="/admin/services" className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-flex items-center gap-1">← Back to Services</Link>
      <div className="bg-white rounded-xl border border-gray-200 p-6 mt-4">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
            <input id="title" type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={inputClass} />
            {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title}</p>}
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea id="description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className={inputClass} />
          </div>
          <div>
            <label htmlFor="icon_svg" className="block text-sm font-medium text-gray-700 mb-1">Icon SVG <span className="text-gray-400 font-normal">(optional)</span></label>
            <textarea id="icon_svg" value={form.icon_svg} onChange={(e) => setForm({ ...form, icon_svg: e.target.value })} rows={4} className={`${inputClass} font-mono text-xs`} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="sort_order" className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
              <input id="sort_order" type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} className={inputClass} />
            </div>
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.is_active} onChange={(e) => setForm({ ...form, is_active: e.target.checked })} className="w-4 h-4 accent-[#3d4f3d]" />
                <span className="text-sm text-gray-700">Active (visible on site)</span>
              </label>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="submit" disabled={saving} className="px-5 py-2 bg-[#3d4f3d] text-white text-sm rounded-lg hover:bg-[#2d3f2d] disabled:opacity-50 transition-colors">
              {saving ? 'Saving…' : 'Save Changes'}
            </button>
            <button type="button" onClick={() => router.push('/admin/services')} className="px-5 py-2 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">Cancel</button>
          </div>
        </form>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}
