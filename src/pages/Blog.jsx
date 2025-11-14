import { useEffect, useState } from 'react'

export default function Blog(){
  const [posts, setPosts] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${baseUrl}/blog`)
      const data = await res.json()
      setPosts(data)
    })()
  },[])

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p=> (
          <a key={p._id} href={`/blog/${p.slug}`} className="block rounded-2xl border border-gray-200 p-5 hover:shadow-lg bg-white">
            <div className="aspect-video rounded-xl bg-gray-100 mb-4" />
            <h3 className="font-semibold text-gray-900">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  )
}
