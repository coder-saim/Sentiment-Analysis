import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-white shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='text-xl lg:text-3xl font-bold text-[#0e073b]'>SentimentSnap</h1>
            </Link>
        </div>
    </header>
  )
}
