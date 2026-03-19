import Image from 'next/image'

export default function Visit() {
  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] bg-[#3d4f3d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic mb-2 sm:mb-4">Farm Visits</h1>
            <p className="text-base sm:text-lg lg:text-xl">Experience real farm life at Redwood Hogs Farm</p>
          </div>
        </div>
      </section>

      {/* Farm Visits Experience */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-3xl sm:text-4xl font-serif italic text-[#3d4f3d] mb-3">
        Farm Visit Experience
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Visitors from different places come to learn, explore, and experience real farm life at Redwood Hogs Farm.
      </p>
    </div>

    {/* Images */}
    <div className="grid md:grid-cols-3 gap-4 sm:gap-6">

      {/* BIG IMAGE */}
      <div className="md:col-span-2 relative h-64 sm:h-80 rounded-xl overflow-hidden group">
        <Image
          src="/images/Redwoodhogs_1.jpg"
          alt="Visitors at Redwood Hogs Farm"
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* SIDE IMAGES */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">

        <div className="relative h-32 sm:h-40 rounded-xl overflow-hidden group">
          <Image
            src="/images/Redwoodhogs_3.jpg"
            alt="Farm visit learning"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="relative h-32 sm:h-40 rounded-xl overflow-hidden group">
          <Image
            src="/images/Redwoodhogs_5.jpg"
            alt="Visitors interacting with pigs"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </div>

  </div>
</section>
    </div>
  )
}