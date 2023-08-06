import React from 'react'

const FeedPost: React.FC = () => {
  return (
    <main className='bg-[#EDF2F7] h-[100]'>
        <div className='flex gap-8 '>
            <button>Latest</button>
            <button>For you</button>
            <button>Top</button>
        </div>
    </main>
  )
}

export default FeedPost;
