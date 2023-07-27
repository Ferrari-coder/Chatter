import React from 'react'
import Aboutimg from "/images/Aboutimg.png";

const About: React.FC = () => {
  return (
    <section>
      <div className='flex justify-center items-center w-[1200px] mx-auto my-[24px] px-[24px] gap-[30px]'>
        <div>
            <h2 className='text-[48px] font-medium '>About Chatter</h2>
            <p className='my-[30px] text-[18px] leading-7 w-[70%]'>Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive </p>
        </div>
        <div>
            <img src={Aboutimg} className='object-cover w-[100%]' />
        </div>
      </div>
    </section>
  )
}

export default About
 