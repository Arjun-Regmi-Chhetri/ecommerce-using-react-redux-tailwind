import React from 'react'
import { useSelector } from 'react-redux'
import PopularProduct from '../components/Product/PopularProduct'
// import Carasoul from '../components/Hero/Carasoul'
import CarouselItem from '../components/Hero/CarouselItem'

import Service from '../components/Service/Service'
import Contact from '../components/Contact'

 const Home = () => {
  


  return (
    <>
      <div className="carousel py-5">
        
        <CarouselItem />
      </div>
      <div className="services py-5">
        <Service />
      </div>
      <div className="Popular Product py-5">
        <h1 className="text-2xl text-gray-500 font-bold pb-8">Most popular products</h1>
        <PopularProduct />
      </div>
      <div className='contact py-5'>
        <Contact />
      </div>
    </>
  )
}

export default Home