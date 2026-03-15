import Image from 'next/image'

interface PigCardProps {
  name: string
  description: string
  image: string
}

export default function PigCard({ name, description, image }: PigCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
      <div className="relative h-48 bg-gray-100">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-[#3d4f3d] mb-2">{name}</h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
    </div>
  )
}
