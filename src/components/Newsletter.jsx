import { useState } from 'react'

export default function Newsletter(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try{
      const res = await fetch(`${baseUrl}/subscribe`,{
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email })
      })
      const data = await res.json()
      setStatus(data.status)
      setEmail('')
    }catch(err){ setStatus('error') }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Subscribe to our newsletter</h3>
        <p className="text-gray-600 mt-1">Fresh picks, no spam. Unsubscribe anytime.</p>
        <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="w-full sm:w-96 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          <button className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 shadow">Subscribe</button>
        </form>
        {status && (
          <p className="mt-3 text-sm text-gray-700">{status === 'already' ? 'You are already subscribed.' : status === 'subscribed' ? 'Welcome aboard!' : 'Something went wrong.'}</p>
        )}
      </div>
    </section>
  )
}
