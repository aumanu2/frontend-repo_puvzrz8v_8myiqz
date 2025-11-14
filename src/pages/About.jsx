export default function About(){
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
      <p className="mt-4 text-gray-700 leading-7">
        We build playful AI that turns open-ended vibes into concrete recommendations. Our mission is to make discovery feel delightful—powered by responsible tech, wrapped in color and motion.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="font-semibold text-gray-900">Our Approach</h3>
          <p className="text-gray-600 mt-2">Blend interaction, animation, and transparent AI to guide choices without the overwhelm.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="font-semibold text-gray-900">The Vibe</h3>
          <p className="text-gray-600 mt-2">Neon accents, soft gradients, and friendly microcopy. Yes, the robot dances.</p>
        </div>
      </div>
    </main>
  )
}
