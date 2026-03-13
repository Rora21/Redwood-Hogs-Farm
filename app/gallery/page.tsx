import Gallery from '@/components/Gallery'
import Link from 'next/link'

export default function GalleryPage() {
  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] bg-[#3d4f3d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic mb-2 sm:mb-4">Farm Gallery</h1>
            <p className="text-base sm:text-lg lg:text-xl">A glimpse into our daily farm life and operations</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-700 px-4">Take a look inside Redwood Hogs Farm and see our pigs, farm environment, and daily farming activities. Our gallery shows the care and dedication that goes into raising healthy livestock.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Gallery />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#3d4f3d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif italic mb-3 sm:mb-4">Want to Visit Our Farm?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 px-4">Schedule a farm visit to see our operations in person and meet our team.</p>
          <Link href="/contact" className="inline-block bg-[#b8824f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded hover:bg-[#a0703f] text-base sm:text-lg">Schedule a Visit</Link>
        </div>
      </section>
    </div>
  )
}
