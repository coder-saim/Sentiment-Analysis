import React from 'react'
import background from '../assets/Background.png'
import logo from '../assets/logo.png'
import ThemeToggle from './ThemeToggle'

export default function Hero() {
  return (
    <div className='w-full relative flex justify-center overflow-hidden'>
      <header className='absolute top-0 left-0 w-full flex justify-between items-center py-4 md:py-6 bg-transparent px-4 md:px-8 lg:px-60 z-10'>
        <div className='flex items-center space-x-2 md:space-x-3'>
          <img src={logo} alt='logo' className='w-12 h-12 md:w-16 md:h-16 object-cover object-center' />
          <h1 className='text-white text-lg md:text-2xl font-bold'>SentiScan</h1>
        </div>
        <nav className='flex items-center space-x-4 md:space-x-8 text-white'>
          <ThemeToggle />
          <a href='#get-started' className='text-sm md:text-lg font-semibold border-2 p-2 md:p-3 w-24 md:w-32 text-center rounded-2xl hover:font-bold transition-all duration-200'>Get Started</a>
        </nav>
      </header>
      <img 
        src={background} 
        alt='hero' 
        className='w-full min-w-[800px] md:w-[2688px] md:max-w-none h-[300px] md:h-[420px] object-cover object-center'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
        <h1 className='text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6'>
          AI-Driven Sentiment Analysis
        </h1>
        <h2 className='text-white text-sm md:text-lg lg:text-xl font-semibold max-w-xs md:max-w-2xl lg:max-w-4xl leading-relaxed'>
          Harness the power of AI to analyze social media posts and reviews instantly. 
          Get accurate sentiment insights—positive, negative, or neutral—with just a single click.
        </h2>
      </div>
    </div>
  )
}
