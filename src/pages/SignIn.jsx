import React from 'react'
import SignUp from './SignUp'

export default function SignIn() {
  return (
    <div className='bg-sky-950 w-full min-h-screen  py-24'>
      <header className='px-60'>
      <h1 className='text-6xl font-semibold text-white text-center'>Discover Your Sentiment Instantly</h1>
      <h2 className='text-xl mt-10 text-white text-center'>
        Analyze social media posts and reviews with a single click. 
        Get quick and accurate sentiment scores to understand emotions behind the words — positive, negative, or neutral.
      </h2>
      </header>
      <div className='flex border-white mt-10 pl-52 pr-40'>
      <section className='w-3/5 bg-white rounded-xl'>
        <textarea 
          className='w-full p-4 rounded-t-lg border-t-2 h-80 resize-none align-top' 
          placeholder='Enter your text here'
          />
        <div className='flex justify-end border-t-2 py-3 pr-2'>
          <button className='bg-teal-600 text-lg text-white font-semibold rounded-2xl py-2 px-6'>
            Analyze
          </button>
        </div>
      </section>
      <SignUp />
      </div>
    </div>
  )
}