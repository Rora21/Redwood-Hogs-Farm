'use client'
import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { apiFetch } from '@/lib/admin/api'
import { GalleryImage } from '@/lib/admin/types'
import ConfirmDialog from '@/components/admin/ConfirmDialog'
import Toast from '@/components/admin/Toast'

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteTarget, setDeleteTarget] = useState<GalleryImage | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const fetchImages = useCallback(async () => {
    try {
      const data = await apiFetch<GalleryImage[]>('/api/gallery')
      setImages(data)
    } catch {
      setToast({ message: 'Failed to load gallery', type: 'error' })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchImages() }, [fetchImages])

  const handleDelete = async () => {
    if (!deleteTarget) return
    setDeleting(true)
    try {
      await apiFetch(`/api/gallery/${deleteTarget.id}`, { method: 'DELETE' })
      setImages((prev) => prev.filter((img) => img.id !== deleteTarget.id))
      setToast({ message: 'Image deleted', type: 'success' })
    } catch {
      setToast({ message: 'Delete failed', type: 'error' })
    } finally {
      setDeleting(false)
      setDeleteTarget(null)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">{images.length} image{images.length !== 1 ? 's' : ''}</p>
        <Link
          href="/admin/gallery/new"
          className="px-4 py-2 bg-[#3d4f3d] text-white text-sm rounded-lg hover:bg-[#2d3f2d] transition-colors"
        >
          + Upload Image
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-[#3d4f3d] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : images.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-400">
          <p className="text-lg font-medium mb-2">No images yet</p>
          <Link href="/admin/gallery/new" className="text-sm text-[#3d4f3d] hover:underline">
            Upload your first image →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
              <div className="relative h-40">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-150 flex items-center justify-center">
                  <button
                    onClick={() => setDeleteTarget(img)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-red-600 text-white text-xs rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="px-3 py-2">
                <p className="text-xs text-gray-500 truncate">{img.alt || '(no alt text)'}</p>
                <span className={`text-xs ${img.is_active ? 'text-green-600' : 'text-gray-400'}`}>
                  {img.is_active ? 'Active' : 'Hidden'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <ConfirmDialog
        isOpen={!!deleteTarget}
        message="Delete this image? This will remove it from the gallery permanently."
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
        loading={deleting}
      />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}
