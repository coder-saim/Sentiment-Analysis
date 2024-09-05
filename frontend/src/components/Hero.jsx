import React from 'react'
import background from '../assets/Background.png'

export default function Hero() {
  return (
    <div className='w-full relative flex justify-center overflow-hidden'>
      <header className='absolute top-0 left-0 w-full flex justify-between items-center py-6 bg-transparent px-60'>
        <h1 className='text-white text-2xl font-bold'>SentiScan</h1>
        <nav className='flex space-x-8 text-white'>
          <a href='#get-started' className='text-lg font-semibold border-2 p-3 w-32 text-center rounded-2xl hover:font-bold'>Get Started</a>
        </nav>
      </header>
      <img 
        src={background} 
        alt='hero' 
        className='w-[2688px] max-w-none h-[420px] object-cover object-center'
      />
      <h1 className='absolute top-48 transform -translate-y-1/2 text-white text-5xl font-bold'>
        Discover Your Sentiment
      </h1>
      <h2 className='px-80 text-center absolute top-[300px] transform -translate-y-1/2 text-white text-xl font-semibold'>
      Analyze social media posts and reviews with a single click. 
      Get quick and accurate sentiment scores to understand emotions behind the words —positive, negative, or neutral.
      </h2>      
    </div>
  )
}
