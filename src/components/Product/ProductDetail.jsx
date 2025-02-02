import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addToCart, fetchSingleProduct } from '../../state/actions'
import { Rating } from '@mui/material'
import Loading from '../Loading'

const ProductDetail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { product, loading, error } = useSelector((state) => state.singleProduct)

    const[quantity, setQuantity] = useState(1)



    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [dispatch])


    const addQuanity = () =>{
        setQuantity((prev)=>prev + 1)
    }

    
    const substractQuantity = () =>{
        setQuantity((prev)=>prev === 1 ? prev  : prev -1)
    }


    const { image, title, price, description, category, rating = {} } = product



    const addProduct = () =>{
        dispatch(addToCart(product, quantity))
        alert('Product added to cart')
    }


    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <h1>{error}</h1>
            ) : product ? (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='flex items-center justify-center col-span-1'>
                        <div className=' h-80 w-80 flex-shrink-0 '>
                            <img className='w-full h-full object-contain' src={image} alt={title} />
                        </div>
                    </div>
                    <div className='flex flex-col col-span-2 gap-4'>
                        <div className='text-2xl font-bold text-gray-500'>
                            <h3>{title}</h3>
                        </div>
                        <div className='flex '>
                            <div className="text-yellow-500 text-xl">
                                <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly />
                            </div>
                        </div>

                        <div className='text-green-500 text-xl flex flex-col gap-4'>
                            <p >Price : <span className='text-red-500'> $.{price} </span></p>
                            <p>Category: <span className='text-gray-500'>{category}</span></p>
                        </div>

                        <div className='text-gray-500 text-xl'>
                            <p>{description}</p>
                        </div>

                        <div className='cart flex gap-5 flex-col mt-1'>
                            <div className='text-4xl flex gap-4 items-center'>
                                <button className='text-red-500' onClick={substractQuantity}>-</button>
                                <span className='itemCount'>{quantity}</span>
                                <button className='text-green-500' onClick={addQuanity}>+</button>
                            </div>

                            <button className='bg-green-500 text-white w-1/4 px-4 py-2 rounded-full' onClick={addProduct} >Add to Cart</button>

                        </div>

                    </div>
                </div>
            ) : (
                <h1>Product not found</h1>
            )}
        </>
    )
}

export default ProductDetail