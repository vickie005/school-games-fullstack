

import Announcements from '../components/home/Announcements'
import Contact from '../components/home/Contact'
import Features from '../components/home/Features'
import Hero from '../components/home/Hero'

const Homepage = () => {
  return (
    <div className='w-full h-full'>
      <Hero />
      <Features />
      <Announcements />
      <Contact />
    </div>
  )
}

export default Homepage