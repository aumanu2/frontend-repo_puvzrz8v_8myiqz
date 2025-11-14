import Hero from '../components/Hero'
import Recommendations from '../components/Recommendations'
import Newsletter from '../components/Newsletter'

export default function Home(){
  return (
    <div className="bg-white">
      <Hero/>
      <Recommendations/>
      <Newsletter/>
    </div>
  )
}
