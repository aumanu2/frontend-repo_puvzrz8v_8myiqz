import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost(){
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${baseUrl}/blog/${slug}`)
      if(res.ok){ setPost(await res.json()) }
    })()
  },[slug])

  if(!post){
    return <main className="max-w-3xl mx-auto px-6 py-12"><p>Loading...</p></main>
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
      <p className="text-gray-600 mt-2">{post.excerpt}</p>
      <article className="prose max-w-none mt-8" dangerouslySetInnerHTML={{__html: post.content}} />
    </main>
  )
}
