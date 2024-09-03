import React from 'react'
import SignUp from './SignUp'

export default function SignIn() {
  return (
    <div className='bg-sky-950 w-full min-h-screen  py-24'>
      <header className='px-96'>
      <h1 className='text-6xl font-semibold text-white text-center'>Discover Your Sentiment</h1>
      <h2 className='text-xl mt-10 text-white text-center'>
        Analyze social media posts and reviews with a single click. 
        Get quick and accurate sentiment scores to understand emotions behind the words.</h2>
      </header>
      <div className='flex mt-16 pl-52 pr-40'>
      <section className='w-3/5 bg-white rounded-xl'>
        <textarea 
          className='w-full p-4 rounded-t-lg border-t-2 h-60 resize-none align-top' 
          placeholder='Enter your text here'
          />
        <div className='flex justify-end border-t-2 py-2 pr-2'>
          <button className='bg-teal-600 text-lg text-white font-semibold rounded-2xl py-2 px-6'>
            Analyze
          </button>
        </div>
      </section>
        <div>
          <h1 className='font-semibold text-3xl ml-6 text-white text-center tracking-wide'>Sentiment Score</h1>
          <SignUp />
          <h1 className='font-semibold text-3xl ml-6 mt-4 text-white text-center tracking-wide'>Sentiment : Nuetral</h1>
        </div>
      </div>
    </div>
  )
}