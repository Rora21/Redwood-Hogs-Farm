import Image from 'next/image'

export default function Gallery() {
  const images = [
    '/images/The Pork House111.JPG',
    '/images/The Pork House111 (1).JPG',
    '/images/The Pork House117.JPG',
    '/images/The Pork House119.JPG',
    '/images/The Pork House136.JPG',
    '/images/The Pork House87.JPG',
    '/images/The Pork House89.JPG',
    '/images/The Pork House98.JPG',
    '/images/The Pork House108.JPG',
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <div key={index} className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <Image src={img} alt={`Gallery ${index + 1}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
