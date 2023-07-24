import React from 'react'
import Heroimg from '/images/heroimg.png'

const Hero: React.FC = () => {
  return (
    <div className='relative'>
    <img src={Heroimg} className='w-[100%] h-[80vh] object-cover' />
      <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-[100%] h-[80vh] bg-black opacity-50'>
        <h2 className='text-[40px] font-bold text-white '>Welcome to Chatter: A Haven for Text-Based Content</h2>
        <p>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
        <button>Get started</button>
      </div>
    </div>
  )
}

export default Hero
