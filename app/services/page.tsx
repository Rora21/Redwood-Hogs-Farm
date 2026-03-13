export default function Services() {
  const services = [
    { title: 'Breeding', description: 'Quality breeding programs for healthy livestock' },
    { title: 'Sales', description: 'Purchase pigs for your farm or business' },
    { title: 'Consultation', description: 'Expert advice on pig farming and care' },
  ]

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
