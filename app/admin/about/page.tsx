'use client'
import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/admin/api'
import { AboutContent } from '@/lib/admin/types'
import ImageUpload from '@/components/admin/ImageUpload'
import Toast from '@/components/admin/Toast'

const emptyForm: Omit<AboutContent, 'id' | 'updated_at'> = {
  story_heading: '',
  story_text_1: '',
  story_text_2: '',
  story_text_3: '',
  story_image_url: '',
  mission_text: '',
  vision_text: '',
}

export default function AboutPage() {
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  useEffect(() => {
    apiFetch<AboutContent>('/api/about')
      .then((data) => {
        if (data.id) {
          setForm({
            story_heading: data.story_heading,
            story_text_1: data.story_text_1,
            story_text_2: data.story_text_2,
            story_text_3: data.story_text_3,
            story_image_url: data.story_image_url,
            mission_text: data.mission_text,
            vision_text: data.vision_text,
          })
        }
      })
      .catch(() => setToast({ message: 'Failed to load about content', type: 'error' }))
      .finally(() => setLoading(false))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await apiFetch('/api/about', { method: 'PUT', body: JSON.stringify(form) })
      setToast({ message: 'About content saved', type: 'success' })
    } catch (err) {
      setToast({ message: err instanceof Error ? err.message : 'Save failed', type: 'error' })
    } finally {
      setSaving(false)
    }
  }

  const inputClass = 'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#3d4f3d] focus:ring-1 focus:ring-[#3d4f3d]'
  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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

          {/* Story Section */}
          <div className="border-b border-gray-100 pb-5">
            <p className="text-sm font-semibold text-gray-700 mb-4">Our Story</p>

            <div className="space-y-4">
              <div>
                <label htmlFor="story_heading" className="block text-sm font-medium text-gray-700 mb-1">
                  Story Heading
                </label>
                <input
                  id="story_heading"
                  type="text"
                  value={form.story_heading}
                  onChange={set('story_heading')}
                  className={inputClass}
                  placeholder="e.g. Our Story"
                />
              </div>

              <div>
                <label htmlFor="story_text_1" className="block text-sm font-medium text-gray-700 mb-1">
                  Story Paragraph 1
                </label>
                <textarea
                  id="story_text_1"
                  value={form.story_text_1}
                  onChange={set('story_text_1')}
                  rows={3}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="story_text_2" className="block text-sm font-medium text-gray-700 mb-1">
                  Story Paragraph 2
                </label>
                <textarea
                  id="story_text_2"
                  value={form.story_text_2}
                  onChange={set('story_text_2')}
                  rows={3}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="story_text_3" className="block text-sm font-medium text-gray-700 mb-1">
                  Story Paragraph 3
                </label>
                <textarea
                  id="story_text_3"
                  value={form.story_text_3}
                  onChange={set('story_text_3')}
                  rows={3}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Story Image</label>
                <ImageUpload
                  value={form.story_image_url}
                  onChange={(url) => setForm({ ...form, story_image_url: url })}
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-4">Mission &amp; Vision</p>

            <div className="space-y-4">
              <div>
                <label htmlFor="mission_text" className="block text-sm font-medium text-gray-700 mb-1">
                  Mission Statement
                </label>
                <textarea
                  id="mission_text"
                  value={form.mission_text}
                  onChange={set('mission_text')}
                  rows={3}
                  className={inputClass}
                  placeholder="Describe the farm's mission…"
                />
              </div>

              <div>
                <label htmlFor="vision_text" className="block text-sm font-medium text-gray-700 mb-1">
                  Vision Statement
                </label>
                <textarea
                  id="vision_text"
                  value={form.vision_text}
                  onChange={set('vision_text')}
                  rows={3}
                  className={inputClass}
                  placeholder="Describe the farm's vision…"
                />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2 bg-[#3d4f3d] text-white text-sm rounded-lg hover:bg-[#2d3f2d] disabled:opacity-50 transition-colors"
            >
              {saving ? 'Saving…' : 'Save About Content'}
            </button>
          </div>
        </form>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}
