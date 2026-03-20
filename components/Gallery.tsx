import Image from 'next/image'

const images = [
  { src: '/images/pork-house/pork-house-111.jpg',  alt: 'Pigs in the Redwood Hogs Farm facility' },
  { src: '/images/pork-house/pork-house-111b.jpg', alt: 'Farm pig housing interior at Redwood Hogs Farm' },
  { src: '/images/pork-house/pork-house-117.jpg',  alt: 'Healthy pigs raised at Redwood Hogs Farm' },
  { src: '/images/pork-house/pork-house-119.jpg',  alt: 'Pig farming operations at Redwood Hogs Farm' },
  { src: '/images/pork-house/pork-house-136.jpg',  alt: 'Farm livestock and daily care at Redwood Hogs Farm' },
  { src: '/images/pork-house/pork-house-87.jpg',   alt: 'Pigs in outdoor area at Redwood Hogs Farm' },
  { src: '/images/pork-house/pork-house-89.jpg',   alt: 'Breeding piglets at Redwood Hogs Farm' },
  { src: '/images/pork-house/pork-house-98.jpg',   alt: 'Breeding stock pigs at Redwood Hogs Farm' },
  { src: '/images/pork-house/pork-house-108.jpg',  alt: 'Well-fed pigs at Redwood Hogs Farm' },
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
