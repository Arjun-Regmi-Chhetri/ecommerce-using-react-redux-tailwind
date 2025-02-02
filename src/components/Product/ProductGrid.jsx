import { Rating, styled } from '@mui/material'
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import { Link } from 'react-router';

// const StyledRating = styled(Rating)({
//   '& .MuiRating-iconFilled': {
//     color: '#ff6d75',
//   },
//   '& .MuiRating-iconHover': {
//     color: '#ff3d47',
//   },
// });

const ProductGrid = ({ products }) => {

  return (
    <>
      {products.map(({ id, image, title, price, rating,category }) => (
        <Link key={id} to={`/product/${id}`} className="bg-white p-5 hover:shadow-lg">
          <div className="h-80 bg-white flex justify-center">
            <img src={image} alt={title} />
          </div>
          <div className="flex justify-between py-5">
            <div className="category text-gray-500">
              <span>{category}</span>
            </div>
            <div className="reviews flex">
            <FavoriteBorderIcon />
            <span className="pl-2"> {rating.count}</span>
            </div>
          </div>
          <div className="text-cyan-800 text-xl font-bold pb-5">
            <h1>{title?.length > 20 ? title.slice(0, 19) + '...' : title}</h1>
          </div>
          <div className="text-red-600 text-2xl font-semibold flex justify-between items-center">
            <h3>${price}</h3>
            <div className="text-yellow-500 text-xl">
              <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly />
            </div>
          </div>
        </Link>
      ))}

    </>
  )
}

export default ProductGrid
