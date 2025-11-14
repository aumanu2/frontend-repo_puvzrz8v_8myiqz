import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    const res = await fetch(`${baseUrl}/contact`,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
    const data = await res.json()
    setStatus(data.status)
    setForm({ name:'', email:'', subject:'', message:'' })
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="text-gray-600 mt-2">We love hearing from you. Tell us what you want to discover.</p>
      <form onSubmit={submit} className="mt-8 grid gap-4">
        <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name" className="rounded-xl border border-gray-200 px-4 py-3" required />
        <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="rounded-xl border border-gray-200 px-4 py-3" required />
        <input value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} placeholder="Subject" className="rounded-xl border border-gray-200 px-4 py-3" required />
        <textarea rows="5" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Message" className="rounded-xl border border-gray-200 px-4 py-3" required />
        <button className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3">Send</button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-700">{status === 'received' ? 'Thanks! We received your message.' : 'Something went wrong.'}</p>}
    </main>
  )
}
