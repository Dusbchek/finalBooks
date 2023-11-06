'use client'
import CheckoutWizard from '@/components/CheckoutWizard'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { addToCart, removeFromCart } from '@/redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'



export default function PlaceOrderScreen() {
  const dispatch = useDispatch()


  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const {
    cartItems,
    itemsPrice,
    shippingPrice,
    totalPrice,
    taxPrice,
    shippingAddress,
    paymentMethod,
    loading,
  } = useSelector((state) => state.cart)
  const router = useRouter()

  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment')
    }
  }, [paymentMethod, router])

  return (
    <div>
      <CheckoutWizard activeStep={3} />
      {loading ? (
        <div>Loading</div>
      ) : cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <div className=" border-2 border-gray-400 rounded-lg p-5 mb-3 bg-gray-200 ">
              <h2 className="mb-2 text-lg font-medium">Shipping Address</h2>
              <div>
                {shippingAddress.fullName}, {shippingAddress.address},{' '}
                {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                {shippingAddress.country}
              </div>
              <div>
                <Link className="py-1 px-3 inline-block border-2 border-gray-400 rounded-full text-sm mt-3 bg-yellow-200 transition duration-500 hover:scale-105 hover:bg-yellow-250" href="/shipping">
                  Edit ✏️
                </Link>
              </div>
            </div>
           
            <div className=" border-2 border-gray-400 rounded-lg p-1 md:p-5 mb-3 bg-gray-200 overflow-auto no-scrollbar">
              <table className="min-w-full">
                <thead className="border-1 border-gray-400 rounded-lg">
                  <tr>
                    <th className="px-5 text-left">Books 📚</th>
                    <th className="    px-5 text-right">Quantity</th>
                    <th className="  px-5 text-right">Price</th>
                    <th className="px-5 text-right">Subtotal</th>

                  </tr>
                
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b ">
                      <td>
                        <div
                          
                          className="flex items-center"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            style={{
                              maxWidth: '100%',
                              height: 'auto',
                            }}
                            className="p-1 rounded-lg ml-4 transition duration-500 hover:scale-105 "
                          ></Image>
               
               <div className='hidden md:block ml-6 mr-[-250px] '>
                {item.name}
                          </div>
                        </div>
                        <button
              onClick={() => removeFromCartHandler(item.id)}
            type="button" className="ml-5 transition duration-500 hover:scale-105 bg-red-200 text-red-800 ml-2 text-[10px]  font-medium mr-2 px-2 py-0.5 rounded-full  border border-red-400">
              Remove 🗑️
            </button>
                      </td>
                      <td className=" p-5 text-right">{item.qty}</td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-right">  ${item.qty * item.price} </td>
           
                   
                    </tr>
                    
                  ))}
                  
                </tbody>
              </table>
              <div>
             
              </div>
            </div>
          </div>
          <div>
            <div className=" border-2 border-gray-400 rounded-lg p-5 mb-3 bg-gray-200 overflow-auto">
              <h2 className="mb-2 text-lg">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <div>${itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>IVA</div>
                    <div>${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div>${shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div>${totalPrice}</div>
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => alert('Not implemented')}
                    className="primary-button w-full"
                  >
                    Place Order
                  </button>
                </li>
              </ul>
            </div>
            <div className=" border-2 border-gray-400 rounded-lg p-4 mb-3 bg-gray-200 ">
              <h2 className="mb-2 text-md font-semibold">Payment Method</h2>
              
              <div className='flex flex-row '>
              <div className='my-auto'>
              <span class="bg-blue-100 text-blue-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-full border-[1.5px] border-blue-500">{paymentMethod}</span>

              </div>
                <Link className="bg-yellow-200  text-sm inline-block font-medium mr-2 px-2.5 py-0.5 rounded-full border-[1.5px] border-gray-400 hover:scale-105 hover:bg-yellow-300" href="/payment">
                  Edit ✏️
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
