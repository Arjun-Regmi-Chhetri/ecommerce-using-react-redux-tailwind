
import React from 'react'
import { Rating } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router';

const ListProduct = ({ products }) => {
    return (
        <>
            {products.map(({ id, image, title, price, rating, category, description }) => (
                <Link key={id} to={`/product/${id}`} className=" block  p-5 hover:shadow-xl">
                    <div className='flex gap-8 items-start m-3'>

                        <div className="w-[200px] h-[200px] flex-shrink-0">
                            <img
                                className='w-full h-full object-contain'
                                src={image}
                                alt={title}
                            />
                        </div>
                        <div>
                            <div className="flex-1">
                                <div className="flex justify-between py-5">
                                    <div className="category text-gray-500">
                                        <span>{category}</span>
                                    </div>
                                    <div className="reviews flex">
                                        <FavoriteBorderIcon />
                                        <span className="pl-2"> {rating.count}</span>
                                    </div>
                                </div>
                                <div className=" pb-5">
                                    <h1 className='text-cyan-800 text-xl font-bold py-2'>{title}</h1>

                                    <p className='text-gray-500'>{description.length > 150 ? description.slice(0,150) + '...': description }</p>
                                </div>
                                <div className="text-red-600 text-2xl font-semibold flex justify-between items-center">
                                    <h3>${price}</h3>
                                    <div className="text-yellow-500 text-xl">
                                    <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly />
                                </div>
                                </div>
                   
                            </div>

                        </div>
                    </div>


                </Link>
            ))}

        </>
    )
}

export default ListProduct
