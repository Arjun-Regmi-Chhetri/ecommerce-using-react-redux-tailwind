import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../state/actions'

import ProductGrid from './ProductGrid'
import { filterSelector } from '../../state/filterSelector'
import ListProduct from './ListProduct'
import Loading from '../Loading'

const Products = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.products)
  const filteredProducts = useSelector(filterSelector)

  const { gridView } = useSelector((state) => state.filter)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])



  if (loading) {
    return <Loading />
  }

  if (error) {
    return <h1>{error}</h1>
  }



  if (filteredProducts.length === 0) {
    return (
      <div className="flex items-center flex-col justify-center h-[calc(100vh-260px)]">
        <h1 className="text-2xl font-bold text-red-500">
          No products found
        </h1>
        <p className='text-gray-500'>You might spell wrong, try using different keyword</p>
      </div>
    )
  }



  if (gridView === true) {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">

      <ProductGrid products={filteredProducts} />

    </div>
  } else {
    return <div>
      <ListProduct products={filteredProducts} />
    </div>
  }






}

export default Products