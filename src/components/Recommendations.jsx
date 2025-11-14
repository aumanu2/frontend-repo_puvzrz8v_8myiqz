import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Recommendations(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('trendy gadgets')
  const [category, setCategory] = useState('technology')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchRecs = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${baseUrl}/recommend`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ query, category, limit: 8 })
      })
      const data = await res.json()
      setItems(data.results || [])
    } catch (e){
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{ fetchRecs() // initial
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Recommended for you</h2>
            <p className="text-gray-600">Hand-picked by our AI based on your vibe.</p>
          </div>
          <div className="flex gap-2">
            <input value={query} onChange={e=>setQuery(e.target.value)} className="rounded-lg border border-gray-200 px-3 py-2" placeholder="Describe your vibe" />
            <select value={category} onChange={e=>setCategory(e.target.value)} className="rounded-lg border border-gray-200 px-3 py-2">
              {['technology','fashion','health','travel','food','education','finance','entertainment','home','sports','services','other'].map(c=> <option key={c} value={c}>{c}</option>)}
            </select>
            <button onClick={fetchRecs} className="rounded-lg bg-gray-900 text-white px-4 py-2">Refresh</button>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {items.map((item, idx)=> (
              <motion.a
                key={item.title+idx}
                href={item.url || '#'}
                target="_blank"
                rel="noreferrer"
                initial={{opacity:0, y:10}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-10}}
                className="group rounded-2xl border border-gray-200 p-4 hover:shadow-lg transition bg-white"
              >
                <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 mb-3" />
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600">{item.title}</h3>
                  {item.rating && (
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">★ {item.rating}</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                {item.price !== null && item.price !== undefined && (
                  <p className="mt-3 text-gray-900 font-semibold">{item.price === 0 ? 'Free' : `$${item.price}`}</p>
                )}
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
