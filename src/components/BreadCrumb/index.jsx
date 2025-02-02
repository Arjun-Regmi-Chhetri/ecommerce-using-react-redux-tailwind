import React from 'react'
import { Link } from 'react-router'

const index = ({ title, products }) => {
  return (
    <>

      <div className='breadcumb flex text-lg mb-8'>
        <div className='text-cyan-800 flex'>
          <Link to='/'>Home /</Link> 
          {
            products && <Link to='/product' className='ms-1'>Product /</Link>
          }
        </div>


        <span className='text-green-500 ps-1'> {title}</span>
      </div>

    </>
  )
}

export default index
