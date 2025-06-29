import React from 'react'
import Card from './Card'

export default function Benefits() {
  return (
    <div className='w-full relative justify-center overflow-hidden mt-12 md:mt-20 mb-16 md:mb-28 px-4'>
        <h1 className='text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-bold text-center transition-colors duration-300'>
            Leverage Sentiment Analysis to Prevent Extortion   
        </h1>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-stretch mt-8 md:mt-16 space-y-6 md:space-y-0'>
            <Card text='Analyze social media posts to identify complaints about unfair pricing and unethical practices.' />
            <Card text='Detect patterns of price manipulation and extortion hidden within dissatisfied customer reviews.' />
            <Card text='Safeguard consumers by flagging potential extortion attempts for swift action and intervention.' />
        </div>
    </div>
  )
}
