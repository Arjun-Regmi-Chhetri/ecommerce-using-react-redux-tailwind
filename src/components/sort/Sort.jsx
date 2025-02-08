import React, { useEffect } from 'react'
import { sorts } from '../../constant'
import { useDispatch, useSelector } from 'react-redux'
import { setGridView, setListView, sortProducts } from '../../state/actions'
import { filterSelector } from '../../state/filterSelector'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';

const Sort = () => {
  const filteredProducts = useSelector(filterSelector)
  const { sortProduct, gridView } = useSelector((state) => state.filter)
  const dispatch = useDispatch()




  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        dispatch(setGridView())
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dispatch])


  return (
    <div className="mb-4 flex items-center justify-between flex-wrap">
      <div className='flex gap-1 text-lg flex items-center '>
        <p className='text-gray-400 '>View: </p>
        <button onClick={() => dispatch(setGridView())} className='mx-2'>
          {
            gridView ? <DashboardIcon className='text-black grid-icon' /> : <DashboardIcon className='text-gray-400' />
          }
        </button>
        <button onClick={() => dispatch(setListView())} className="hidden sm:block">
          {
            !gridView ? <ViewListIcon className='text-black list-icon' /> : <ViewListIcon className='text-gray-400' />
          }
        </button>

      </div>
      <div className='flex gap-2 text-gray-500 text-center'>
        {filteredProducts.length} <p>{filteredProducts.length > 1 ? 'items' : 'item'} found</p>
      </div>
      <div className='line xl:w-[400px] h-[4px] lg:w-[350px] md:none bg-red-500 mx-2'>

      </div>
      <select
        name="sort"
        onClick={(e) => dispatch(sortProducts(e.target.value))}
        className="px-1 md:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {sorts.map((sort, index) => (
          <option key={index} value={sort.value}>{sort.label}</option>
        ))}
      </select>
    </div>
  )
}

export default Sort
