import React, { useEffect } from 'react'
import { services } from '../../constant'



const Service = () => {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {
        services.map((service , index)=>
          <div key={index} className='text-green-500 border-2 border-green-500 p-5 rounded-lg'>
            <div className='text-4xl'>
             <service.icon />
            </div>
            <div className='pt-5 '>
              <h2 className='text-lg font-bold pb-2 text-cyan-800'>{service.title}</h2>
              <p className='text-gray-500'>{service.paragraph}</p>
            </div>
          </div>
        )
    }
    </div>
  )
}

export default Service
