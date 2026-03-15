import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-[#f5f1e8] min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center">
        <p className="text-8xl sm:text-9xl font-serif font-bold text-[#3d4f3d] mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-serif text-[#3d4f3d] mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#b8824f] text-white px-8 py-3 rounded hover:bg-[#a0703f] transition-colors duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-[#3d4f3d] text-[#3d4f3d] px-8 py-3 rounded hover:bg-[#3d4f3d] hover:text-white transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
