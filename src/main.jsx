import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import './index.css'

function Shell({ children }){
  return children
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Shell><App /><Blog /></Shell>} />
        <Route path="/blog/:slug" element={<Shell><App /><BlogPost /></Shell>} />
        <Route path="/about" element={<Shell><App /><About /></Shell>} />
        <Route path="/contact" element={<Shell><App /><Contact /></Shell>} />
        <Route path="/auth" element={<Shell><App /><Auth /></Shell>} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
