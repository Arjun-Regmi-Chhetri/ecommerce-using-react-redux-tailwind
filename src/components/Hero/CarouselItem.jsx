import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carasoul from './Carasoul'

const CarouselItem = () => {
  
    const {items, loading, error} = useSelector((state)=>state.carousel)
    

  return (
    <>

    {
        loading ? ( <h1>Loading...</h1>)
         : error ? (<h1>{error}</h1>)
         :
         <Carasoul items={items} />
    }
      
    </>
  )
}

export default CarouselItem
