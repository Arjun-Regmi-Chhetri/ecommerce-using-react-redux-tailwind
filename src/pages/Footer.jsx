import React from 'react'

const Footer = () => {

    const date = new Date()
  return (
    <div className='bg-green-700 text-white text-center p-5 absolute   w-full footer'>
      @ {date.getFullYear()} by Arjun Regmi, All rights reserved.
    </div>
  )
}

export default Footer
