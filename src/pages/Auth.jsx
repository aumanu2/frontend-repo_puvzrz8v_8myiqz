import { useState } from 'react'

export default function Auth(){
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ name:'', email:'', password:'' })
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    const path = isLogin ? '/auth/login' : '/auth/signup'
    const payload = isLogin ? { email: form.email, password: form.password } : { ...form }
    const res = await fetch(`${baseUrl}${path}`,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    if(res.ok){
      const data = await res.json()
      setToken(data.access_token)
      localStorage.setItem('token', data.access_token)
    }
  }

  const logout = () => { setToken(''); localStorage.removeItem('token') }

  if(token){
    return (
      <main className="max-w-xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900">You are logged in</h1>
        <p className="text-gray-600 mt-2">Your token is stored locally for creating posts.</p>
        <button onClick={logout} className="mt-6 rounded-xl bg-gray-900 text-white px-6 py-3">Logout</button>
      </main>
    )
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">{isLogin ? 'Log in' : 'Create account'}</h1>
        <button onClick={()=>setIsLogin(s=>!s)} className="text-emerald-600 hover:underline">{isLogin ? 'New here? Sign up' : 'Have an account? Log in'}</button>
      </div>
      <form onSubmit={submit} className="mt-8 grid gap-4">
        {!isLogin && (
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name" className="rounded-xl border border-gray-200 px-4 py-3" required />
        )}
        <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="rounded-xl border border-gray-200 px-4 py-3" required />
        <input type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} placeholder="Password" className="rounded-xl border border-gray-200 px-4 py-3" required />
        <button className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3">{isLogin ? 'Log in' : 'Sign up'}</button>
      </form>
    </main>
  )
}
