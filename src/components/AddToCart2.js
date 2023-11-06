'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/redux/slices/cartSlice'

export default function AddToCart({
  product,
  showQty = true,
  redirect = false,
  increasePerClick = false,
}) {

  const countInStock=(999)
  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)
  const router = useRouter()
  const [qty, setQty] = useState(1)

  const addToCartHandler = () => {
    let newQty = qty
    if (increasePerClick) {
      const existItem = cartItems.find((x) => x.id === product.id)
      if (existItem) {
        if (existItem.qty + 1 <= countInStock) {
          newQty = existItem.qty + 1
        } else {
          return alert('No more product exist')
        }
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }))

    if (redirect) router.push('/cart')
  }

  return (
    <>
      {countInStock > 0 && showQty && (
        <div className=" ml-2 flex flex-row">
          
          <div
          className=" ml-2 flex flex-row">
          
          <button
                    onClick={() => {
                      qty < 1 ? setQty(0) : setQty(qty - 1);
                    }}
                    type="button"
                    class=" mt-3 text-white text-sm bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-3 font-bold dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    -
                  </button>
                  <h1 className="mt-4 ml-3">{qty}</h1>
                  <button
                    onClick={() => {
                      setQty(qty + 1);
                    }}
                    type="button"
                    class="mt-3 ml-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    +
                  </button>
          </div>
        </div>
      )}
      <div>
        {countInStock > 0 ? (
          <button class="mt-1 ml-2 text-black bg-yellow-200 border-2 border-yellow-300
            font-medium rounded-full text-[8px] px-2 py-1 text-center transition duration-500 group-hover:scale-105"
          onClick={addToCartHandler}>
            Add to cart 🛒
          </button>
        ) : (
          <button disabled>Out of stock</button>
        )}
      </div>
    </>
  )
}
