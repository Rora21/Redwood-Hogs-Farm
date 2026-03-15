import Image from 'next/image'

const images = [
  { src: '/images/The Pork House111.JPG',     alt: 'Pigs in the Redwood Hogs Farm facility' },
  { src: '/images/The Pork House111 (1).JPG', alt: 'Farm pig housing interior at Redwood Hogs Farm' },
  { src: '/images/The Pork House117.JPG',     alt: 'Healthy pigs raised at Redwood Hogs Farm' },
  { src: '/images/The Pork House119.JPG',     alt: 'Pig farming operations at Redwood Hogs Farm' },
  { src: '/images/The Pork House136.JPG',     alt: 'Farm livestock and daily care at Redwood Hogs Farm' },
  { src: '/images/The Pork House87.JPG',      alt: 'Pigs in outdoor area at Redwood Hogs Farm' },
  { src: '/images/The Pork House89.JPG',      alt: 'Breeding piglets at Redwood Hogs Farm' },
  { src: '/images/The Pork House98.JPG',      alt: 'Breeding stock pigs at Redwood Hogs Farm' },
  { src: '/images/The Pork House108.JPG',     alt: 'Well-fed pigs at Redwood Hogs Farm' },
]

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <div key={index} className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
