'use client'

import { addToCart, removeFromCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import DataVer from "../data4"

export default function CartPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }))
  }

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-1">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
             
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} >
                    <div className="mt-2 ">
    
    <div className="flex flex-row  py-3 mx-auto md:ml-10 px-3 rounded-md bg-gray-200  border-2 border-gray-300 mb-2 w-[90%] overflow-auto no-scrollbar">
      <img
        src={item.image}

        alt=""
        className="w-[80px] h-[120px] md:w-[100px] md:h-[160px] ml-0.5 md:ml-4 rounded-lg transition duration-500 hover:scale-105"
      />
      <div className="flex flex-col">
        <h1 className="text-[12px] md:text-[14px]  font-bold tracking-[2px] ml-2 md:ml-5 mt-1 md:mt-4 overflow-y-auto">
          {item.name}
        </h1>
        <div className="mt-[-4px] md:mt-1">
          <span className="ml-2 md:ml-5 bg-green-100 text-green-800 text-[8px] md:text-[10px] font-medium mr-2 px-2.5 py-0.5 rounded border border-green-400 ">
           ${item.price}
          </span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[9px]  mt-1 ml-2 md:mt-2 md:ml-5 w-[90%] h-[39px] overflow-hidden">
            {item.description}
          </h1>
          <div className=" mt-3 flex flex-row my-auto">
            <div>
              <span className=" md:ml-5 mt-1 ml-2 bg-gray-100 text-gray-800 text-[8px] md:text-[10px] font-bold mr-2 px-2.5 py-0.5 rounded  border border-gray-400">
                Quantity: {item.qty}
              </span>
            </div>
            <div>
            
            <button
              onClick={() => removeFromCartHandler(item.id)}
            type="button" className="transition duration-500 hover:scale-105 bg-red-200 text-red-800 ml-2 text-[10px]  font-medium mr-2 px-2 py-0.5 rounded-full  border border-red-400">
              Remove 🗑️
            </button>
            </div>
            
          </div>
         
        </div>
      </div>
    </div>
  

</div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="h-32 bg-gray-200 w-[90%] rounded-lg border-2 border-gray-300 mt-2 mx-auto">
              <ul>
                <li>
                  <div className="pb-3 text-md text-center mt-3 ">
                    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}) 
                    <h1>${itemsPrice} </h1>
                  </div>
                </li>
                <li className='text-center'>
                  <button
                    onClick={() => router.push('/shipping')}
                    className="bg-yellow-200 border-2 border-yellow-300 text-center text-sm rounded-full py-1 px-2 font-md "
                  >
                    Proceed to checkout
                  </button>
                </li>
              </ul>
            </div>
            <div className='hidden md:block'>
            <DataVer categ="Web"/>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
