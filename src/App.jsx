import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { Navbar } from './components/Navbar'


import Footer from './pages/Footer'

const Home = React.lazy(() => import('./pages/Home'))
const Product = React.lazy(() => import('./pages/Product'))
const SingleProduct = React.lazy(() => import('./pages/SingleProduct'))
const Cart = React.lazy(() => import('./pages/Cart'))
const Checkout = React.lazy(() => import('./pages/Checkout'))

import Loading from './components/Loading'

function App() {

  return (
    <>

      <Navbar />
      <div className='wrapper relative'>
   
        <div className='max-w-[1280px]  mx-auto xl:px-0 px-5 sm:px-10 py-8 '>
        <React.Suspense fallback={<Loading />}>
            <Routes>
            
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Navigate to="/" />} />
               
            </Routes>
            </React.Suspense>
        </div>
      
      </div>

      <Footer />


    </>
  )
}

export default App
