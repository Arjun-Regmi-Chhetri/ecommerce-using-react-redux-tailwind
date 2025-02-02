import React from 'react'
import { Link } from 'react-router'
const Checkout = () => {
  return (
    <div className="h-full min-h-[calc(100vh-260px)] flex items-center justify-center">
    <div className='flex flex-col items-center gap-4'>
        <h2 className="text-2xl font-semibold text-gray-500">Thank You for <span className="text-red-600">shopping</span></h2>
        <button className='p-1 px-3 border-2 border-green-500 text-green-500 text-lg font-semibold hover:bg-green-500 hover:text-white'>
            <Link to="/product">Shop More</Link>
        </button>
    </div>
</div>
  )
}

export default Checkout
