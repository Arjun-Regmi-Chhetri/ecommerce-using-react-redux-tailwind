import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { shopCart } from '../../state/actions'
import { useNavigate } from 'react-router'
const CartTotal = ({ selectedItems }) => {


    const [alert, setAlert] = useState('')

    const subtotal = selectedItems.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const checkOut = () => {
        if (selectedItems.length === 0) {
            setAlert('Please select items to checkout')
            return
        }

        dispatch(shopCart(selectedItems.map(item => item.id)))
        navigate('/checkout')
    }

    useEffect(() => {
        if (selectedItems.length > 0) {
            setAlert('')
        }
    }, [selectedItems])

    const [tipPercentage, setTipPercentage] = useState(15)

    const tipAmount = subtotal * (tipPercentage / 100)

    return (
        <div className="sticky top-0 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2">
                <div className='space-y-2'>
                    <label htmlFor="tip-amount" className='text-sm text-gray-500'>How much would you like to tip?</label>
                    <br />
                    <select
                        id="tip-amount"
                        className="w-full bg-transparent border p-2 border-black tip-amount"

                        onChange={(e) => setTipPercentage(e.target.value)}
                    >
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                        <option value="25">25%</option>
                    </select>
                </div>
                <div className="flex justify-between mb-2">
                    <span className='text-gray-500'>Subtotal ( {selectedItems.length} items )</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className='text-gray-500'>Tip Amount </span>
                    <span> {tipAmount.toFixed(2)}</span>
                </div>

                <div className='pt-3'>
                    <hr />
                </div>
                <div className="flex justify-between">
                    <span>Total </span>
                    <span className='text-red-500'>{(subtotal - tipAmount).toFixed(2)}</span>
                </div>
                {/* Add other calculations as needed */}
            </div>

            {alert && <div className='text-red-500 text-sm mt-2'>{alert}</div>}


                <button
                    className={'w-full mt-4 py-2 rounded my-3 bg-green-500 text-white hover:bg-green-600 '}
                    onClick={checkOut}
                >
                    Proceed to Checkout
                </button>


        </div>
    )
}

export default CartTotal