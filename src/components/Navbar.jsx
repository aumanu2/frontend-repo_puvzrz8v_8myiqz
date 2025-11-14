import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={()=>setOpen(false)}
      className={({isActive})=>`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive? 'text-white bg-gray-900':'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
    >{label}</NavLink>
  )
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 grid place-items-center text-white shadow">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold text-gray-900">Playful AI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/blog', 'Blog')}
            {navItem('/about', 'About')}
            {navItem('/contact', 'Contact')}
            {navItem('/auth', 'Auth')}
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={()=>setOpen(o=>!o)}>
            {open? <X/> : <Menu/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 px-4 pb-4 flex flex-col gap-2">
          {navItem('/', 'Home')}
          {navItem('/blog', 'Blog')}
          {navItem('/about', 'About')}
          {navItem('/contact', 'Contact')}
          {navItem('/auth', 'Auth')}
        </div>
      )}
    </header>
  )
}
