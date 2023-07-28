import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Cta from '../Components/Cta'
import Footer from '../Components/Footer'

const Home: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Cta />
      <Footer />
    </main>
  )
}

export default Home
