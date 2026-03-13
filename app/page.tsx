import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Welcome to Redwood Hogs Farm</h2>
          <p className="text-center text-lg">Quality pig farming with care and dedication</p>
        </div>
      </section>
    </div>
  )
}
