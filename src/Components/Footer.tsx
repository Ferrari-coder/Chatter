import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='mt-12 bg-[#FFEDCC80]'>
        <div className='w-[65%] mx-auto flex justify-center iterms-center gap-52 pt-16 pb-[5rem]'>
            <h1 className='text-regal-blue font-medium text-xl'>CHATTER</h1>
            <div>
                <h3  className='text-l font-medium py-6'>Explore</h3>
                <ul className='leading-10'>
                    <li>Community</li>
                    <li>Trending blogs</li>
                    <li>Chatter for blogs</li>
                </ul>
            </div>
            <div>
                <h3  className='text-l font-medium py-6'>Support</h3>
                <ul className='leading-10'>
                    <li>Support docs</li>
                    <li>Join Slack</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h3  className='text-l font-medium py-6'>Official blog</h3>
                <ul className='leading-10'>
                    <li>Official blog</li>
                    <li>Engineering blog</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
