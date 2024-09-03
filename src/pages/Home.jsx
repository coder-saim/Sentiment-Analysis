import React, { useState } from 'react'
import GaugeChart from '../components/GaugeChart'

export default function Home() {

  const [language, setLanguage] = useState('English')

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <div className='bg-[#0e073b] w-full min-h-screen pt-20 pb-24'>
      <header className='px-60'>
        <h1 className='text-5xl font-semibold text-white text-center'>
          Discover Your Sentiment Instantly
        </h1>
        <h2 className='text-xl px-20 mt-10 text-white text-center'>
          Analyze social media posts and reviews with a single click. 
          Get quick and accurate sentiment scores to understand emotions behind the words—positive, negative, or neutral
        </h2>
      </header>
      <div className='flex mt-16 justify-center'>
        <section className='w-[640px] bg-white rounded-xl'>
          <div className='bg-white text-lg flex font-semibold rounded-t-lg'>
            <div className='pl-6 pr-3 py-3'>
              Language :
            </div>
            <button
              onClick={() => changeLanguage('English')}
              className={`py-3 px-3 border-b-2 ${
                language === 'English' ? 'text-teal-600 border-teal-600' : 'text-gray-500 border-white hover:border-gray-600'
              }`}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('Bengali')}
              className={`py-3 px-3 border-b-2 ${
                language === 'Bengali' ? 'text-teal-600 border-teal-600' : 'text-gray-500 border-white hover:border-gray-600'
              }`}
            >
              Bengali
            </button>
          </div>
          <textarea
            className='w-full py-4 px-6 text-lg border-t-2 h-60 resize-none align-top'
            placeholder='Enter your text here'
          />
          <div className='flex justify-end border-t-2 py-2 pr-2'>
            <button className='bg-teal-600 text-lg text-white font-semibold rounded-2xl py-1 px-6'>
              Analyze
            </button>
          </div>
        </section>
        <div className='w-[420px]'>
          <h1 className='font-semibold text-4xl ml-20 text-white text-center tracking-wide'>Sentiment Score</h1>
          <GaugeChart />
          <h1 className='font-semibold text-4xl ml-20 mt-6 text-white text-center tracking-wide'>Sentiment : Neutral</h1>
        </div>
      </div>
    </div>
  )
}