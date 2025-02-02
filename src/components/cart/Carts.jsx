import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import CartTotal from './CartTotal'
import { removeItem, upDateCart } from '../../state/actions'

const Carts = () => {
    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [selectItem, setSelectItem] = useState([])



    const handleSelect = (id) => {
        setSelectItem(
            (prev) => prev.includes(id) ? prev.filter(prevId => prevId !== id) : [...prev, id]
        )
    }


    const handleSelectAllItem = () => {
        setSelectItem(
            (prev) => prev.length === cart.length ? [] : cart.map(item => item.id)
        )
    }


    const deleteItem = (id) => {
        dispatch(removeItem(id))
    }


    // const updateQuantity = (id, quantity) =>{
    //     dispatch(upDateCart(id, quantity))
    // }


    const handleIncrease = (id, quantity) => {
        // updateQuantity(id, quantity + 1)

        dispatch(upDateCart(id, quantity + 1))
    }

    const handleDecrease = (id, quantity) => {
        if (quantity > 1) {
            // updateQuantity(id, quantity -1)

            dispatch(upDateCart(id, quantity - 1))
        }
    }





    const selectedItems = cart.filter(item => selectItem.includes(item.id))

    return (
        <div>
            {cart.length === 0 ? (
                <div className="h-full min-h-[calc(100vh-260px)] flex items-center justify-center">
                    <div className='flex flex-col items-center gap-4'>
                        <h2 className="text-2xl font-semibold text-gray-500">Your cart is <span className="text-red-600">empty</span></h2>
                        <button className='p-1 px-3 border-2 border-green-500 text-green-500 text-lg font-semibold hover:bg-green-500 hover:text-white'>
                            <Link to="/product">Shop now</Link>
                        </button>
                    </div>
                </div>
            ) : (
                <div className='flex justify-around gap-6'>
                    <div className="space-y-4 md:w-2/3 w-full">
                        <div className='flex justify-between items-center gap-4 p-4 bg-white rounded-lg'>

                            <div className='flex items-center gap-2'>

                                <input type="checkbox"
                                    onChange={handleSelectAllItem}
                                    className="h-5 w-5" />
                                <span className='text-gray-500'>Select All Items ({cart.length} item)</span>
                            </div>

                            <div>
                                <button
                                    className='text-gray-500 flex items-center gap-2 hover:text-red-600'
                                    onClick={() => selectedItems.map(item => deleteItem(item.id))}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                    </svg>
                                    <span>Delete</span>
                                </button>
                            </div>

                        </div>
                        {cart.map((item) => (
                            <div key={item.id} className="flex  gap-4 p-4 bg-white rounded-lg">
                                <input
                                    type="checkbox"
                                    checked={selectItem.includes(item.id)}
                                    onChange={() => handleSelect(item.id)}
                                    className="h-5 w-5"
                                />
                                <div className="h-24 w-24 flex-shrink-0">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <p className="md:text-md text-sm">
                                        {item.title?.length > 50 ? item.title.slice(0, 50) + '...' : item.title}
                                    </p>
                                    <div className="text-xl font-bold flex justify-between sm:items-center flex-col sm:flex-row gap-4">
                                        <div className='flex items-center gap-2'>
                                            <button
                                                onClick={() => handleDecrease(item.id, item.quantity)}
                                                className="px-2 py-1 border rounded"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center">{item.quantity}</span>
                                            <button
                                                className="px-2 py-1 border rounded"
                                                onClick={() => handleIncrease(item.id, item.quantity)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="text-red-600">
                                            <span className='text-sm text-gray-500'> ${item.price} X {item.quantity} :</span>
                                            <span className='text-lg font-semibold'> ${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='md:w-1/3 w-full'>
                        <CartTotal selectedItems={selectedItems} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Carts