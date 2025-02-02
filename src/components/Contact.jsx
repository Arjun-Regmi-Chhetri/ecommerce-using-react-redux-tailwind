import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center max-w-[750px] mx-auto '>
      <div>
        <h1 className='text-2xl font-bold text-gray-600'>Join our newsletter and get 20% off</h1>
        <p className='py-3 text-lg text-gray-500 tracking-wide'>Shop now, pay later. You'll only pay for the items you keep. Your payment will automatically be deducted from your card after 30 days, no additional charge</p>
      </div>
      <div className='p-4'>
        <form className='flex items-center justify-center border-2 border-gray-200 rounded-lg sm:p-4 p-2 w-full'>
          <input type='email' placeholder='Enter your email address' className=' p-2 rounded-lg ' />
          <button className='bg-green-500 text-white sm:text-sm text-xs p-2 rounded-lg '>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
