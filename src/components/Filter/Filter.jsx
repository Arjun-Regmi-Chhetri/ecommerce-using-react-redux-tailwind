import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilters, fetchCategory, filterCategory, filterPrice } from '../../state/actions'
import Loading from '../Loading'

const Filter = () => {
  let { categories, loading } = useSelector((state) => state.categories)

  const { filters: { category: selectedCategory, maxPrice: max, minPrice: min } } = useSelector((state) => state.filter)

  const dispatch = useDispatch()

  categories = ['all', ...categories]

  const [maxPrice, setMaxPrice] = useState('')
  const [minPrice, setMinPrice] = useState('')


  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  const handleWord = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }


  const handlePriceRange = () => {

    dispatch(filterPrice(minPrice, maxPrice))

    console.log(min, max)

  }


  const handleClearFilter = () => {

    dispatch(clearFilters())
    setMaxPrice('')
    setMinPrice('')

  }


  if (loading) return <Loading />

  return (
    <div className='lg:sticky top-40'>
      <div className='category block'>
        <h3 className='text-xl font-semibold'>Categories</h3>
        <div className="p-3">
          {
            categories.map((category, index) => (
              <button
                key={index}
                className={`w-auto lg:w-full lg:p-1 m-1  p-2 text-left hover:bg-green-500 hover:text-white  ${selectedCategory === category.toLowerCase() ? 'bg-green-500 text-white ' : 'lg:bg-transparent bg-gray-300'}`}
                onClick={() => dispatch(filterCategory(category === 'All' ? '' : category))}>
                {handleWord(category)}
              </button>
            ))
          }
        </div>
      </div>


      <div className='price-range-block mb-7'>
        <h3 className='text-xl font-semibold'>Price Range</h3>
        <div className='p-3  '>
          <div className='flex gap-2 align-center justify-center'>
            <input
              type="number"
              placeholder="Min"
              className="w-full border border-gray-300 p-1"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full border border-gray-300 p-1"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
            />

          </div>


          <button className='w-full bg-green-500 text-white mt-3 hover:bg-green-600 p-1' onClick={() => handlePriceRange()} >Apply</button>

        </div>

      </div>

      <div className='my-3'>
        <button className='bg-red-500 hover:bg-red-600 text-white p-2 w-full' onClick={() => handleClearFilter()}>Clear Filters</button>
      </div>

    </div>
  )
}

export default Filter
