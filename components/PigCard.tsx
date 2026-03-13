import Image from 'next/image'

interface PigCardProps {
  name: string
  description: string
  image: string
}

export default function PigCard({ name, description, image }: PigCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48 bg-gray-200">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
