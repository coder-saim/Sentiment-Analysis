import React from 'react'
import Card from './Card'

export default function Benefits() {
  return (
    <div className='w-full relative justify-center overflow-hidden mt-20 mb-28'>
        <h1 className='text-3xl text-slate-700 font-bold text-center'>
            Leverage Sentiment Analysis to Prevent Extortion   
        </h1>
        <div className='flex justify-center mt-16'>
            <Card text='Analyze social media posts to identify complaints about unfair pricing and unethical practices.' />
            <Card text='Detect patterns of price manipulation and extortion hidden within dissatisfied customer reviews.' />
            <Card text='Safeguard consumers by flagging potential extortion attempts for swift action and intervention.' />
        </div>
    </div>
  )
}
