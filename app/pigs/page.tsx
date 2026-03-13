import PigCard from '@/components/PigCard'

export default function Pigs() {
  const pigs = [
    { id: 1, name: 'Duroc', description: 'Known for excellent meat quality', image: '/images/pig1.jpg' },
    { id: 2, name: 'Yorkshire', description: 'Large white breed, great for breeding', image: '/images/pig2.jpg' },
    { id: 3, name: 'Hampshire', description: 'Black with white belt, lean meat', image: '/images/pig3.jpg' },
  ]

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Pigs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pigs.map(pig => (
            <PigCard key={pig.id} {...pig} />
          ))}
        </div>
      </div>
    </div>
  )
}
