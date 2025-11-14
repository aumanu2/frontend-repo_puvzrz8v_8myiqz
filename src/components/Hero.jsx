import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Playful AI Recommendations
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="mt-4 text-lg text-gray-600">
            Discover products and services across every category, guided by a friendly robot vibe. Interactive, futuristic, and a little bit cheeky.
          </motion.p>
          <motion.form initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} onSubmit={(e)=>e.preventDefault()} className="mt-8 flex gap-3">
            <input name="q" placeholder="What are you looking for?" className="flex-1 rounded-xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            <button className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 shadow">Search</button>
          </motion.form>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="mt-6 flex flex-wrap gap-2">
            {['technology','fashion','health','travel','food','education','finance','entertainment','home','sports','services'].map(c=>
              <span key={c} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">{c}</span>
            )}
          </motion.div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
