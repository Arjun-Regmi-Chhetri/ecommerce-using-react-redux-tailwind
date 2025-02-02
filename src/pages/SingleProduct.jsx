import React from 'react'
import ProductDetail from '../components/Product/ProductDetail'
import Breadcrumb from '../components/BreadCrumb'
import { useSelector } from 'react-redux'

const SingleProduct = () => {
    const { product } = useSelector((state) => state.singleProduct)
    const { title } = product
    return (
        <div>
            <Breadcrumb title={title?.length > 15 ? title.slice(0, 15) + '...' : title} products />

            <div className='productdetail p-10'>
                <ProductDetail />
            </div>

        </div>
    )
}

export default SingleProduct
