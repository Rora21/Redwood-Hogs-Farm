import Image from 'next/image'

export default function Gallery() {
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((img, index) => (
        <div key={index} className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
          <Image src={img} alt={`Gallery ${index + 1}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
