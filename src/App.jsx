import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
