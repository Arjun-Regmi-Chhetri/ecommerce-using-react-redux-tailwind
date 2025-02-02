import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../state/actions'
import ProductGrid from './ProductGrid'

const PopularProduct = () => {
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

   

const product = products.filter((product) => product.rating.rate > 4.5).sort((a,b) =>b.rating.rate-a.rating.rate).slice(0, 3)
  return (
    <>
        {
            loading ?
            <h1>Loading...</h1> :
            error ?
            <h1>{error}</h1> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               <ProductGrid products={product} />
            </div>
        }

    </>
  )
}

export default PopularProduct
