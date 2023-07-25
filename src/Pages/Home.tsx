import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import About from '../Components/About'

const Home: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
    </main>
  )
}

export default Home
