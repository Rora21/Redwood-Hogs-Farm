export default function Contact() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea className="w-full p-2 border rounded" rows={5}></textarea>
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
