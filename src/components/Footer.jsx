export default function Footer(){
  return (
    <footer className="border-t border-gray-100 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Playful AI. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/about" className="hover:text-gray-900">About</a>
          <a href="/contact" className="hover:text-gray-900">Contact</a>
          <a href="/blog" className="hover:text-gray-900">Blog</a>
        </div>
      </div>
    </footer>
  )
}
