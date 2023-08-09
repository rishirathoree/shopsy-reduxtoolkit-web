import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty, increaseQty, removeCartItem } from '../../Store/Slices/Cart'
import nocartitemgif from '../../assets/noitemgif.webp'
const Cart = () => {
    const CartItems = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const totalAmountCalculatingQtyWithNumberOfItems = CartItems.reduce((totalPrice, item) => totalPrice + (item.price * item.qty), 0);
    console.log(totalAmountCalculatingQtyWithNumberOfItems)
  return (
    <>
    <div className='mt-[64px]'>
        {CartItems.length > 0 ? 
        <>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
            <div className='p-4 overflow-hidden overflow-y-auto noscroll space-y-6'>
                <p className='font-semibold text-sm'>Cart</p>
                <div className='grid grid-cols-2 gap-4'>
                    {CartItems.map((item,idx)=>{
                        return(
                            <div className='ring-1 ring-black/5 flex items-center space-x-2 justify-between rounded-lg p-4  '>
                                <div className='w-20 h-20 rounded-lg overflow-hidden items-center flex justify-center bg-gray-100'>
                                    <img src={item.image} className='w-12 h-12 object-contain mix-blend-multiply' alt="" />
                                </div>
                                <div className='space-y-2 flex-1'>
                                        <p className='font-normal text-[12px]'>{item.title.slice(0,20)}</p>
                                        <div className='flex items-center justify-between'>
                                        <p className='font-normal text-[12px]'>${item.price}</p>
                                        <div className='ring-1 ring-black/5 rounded flex items-center space-x-1 justify-between'>
                                            <i onClick={()=>{dispatch(decreaseQty(item.id))}} className='p-1 bx bx-minus'></i>
                                            <p className='p-1  font-normal text-[12px]'>{item.qty}</p>
                                            <i onClick={()=>{dispatch(increaseQty(item.id))}} className='p-1 bx bx-plus'></i>
                                        </div>
                                        </div>
                                        <p onClick={()=>{dispatch(removeCartItem(item.id))}} className='p-1 cursor-pointer underline font-normal text-[10px]'>Remove From Cart</p>
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='p-4 overflow-hidden overflow-y-auto noscroll space-y-6'>
                <div className='ring-1  pb-4 border-b-[1px] border-black/5 ring-black/5 p-4 rounded-md'>
                    <div className='flex items-center justify-between pb-4 border-b-[1px] border-black/5'>
                    <div>
                    <p className='p-2  font-normal text-[12px]'>Subtotal</p>
                    <p className='p-2  font-normal text-[12px]'>Delivery Charges*</p>
                    </div>

                    <div>
                    <p className='p-2  font-normal text-[12px]'>$ {Number(totalAmountCalculatingQtyWithNumberOfItems).toFixed(2)}</p>
                    <p className='p-2  font-normal text-[12px]'>$ {Math.floor(CartItems.length * 5).toFixed(2)}</p>
                    </div>
                    </div>

                    <div className='flex items-center justify-between'>
                    <p className='p-2  font-normal text-[12px]'>Total</p>
                    <p className='p-2  font-normal text-[12px]'>$ {(CartItems.length * 5) + Number(totalAmountCalculatingQtyWithNumberOfItems)}</p>
                    </div>

                </div>

                <div className='ring-1 flex border-b-[1px] border-black/5 gap-2 ring-black/5 p-4 rounded-md'>
                    <button className='p-2 w-full rounded bg-black text-white text-[12px] font-normal'>Make Purchase</button>
                    <button className='p-2 w-full rounded bg-black text-white text-[12px] font-normal'>Back to shop</button>
                </div>
                
            </div>

            
        </div></>
        :
        <>
        <div className='flex flex-col h-calc items-center justify-center'>
            <img src={nocartitemgif} className='w-80 h-60' alt="" />
        <p className='font-semibold text-[12px] text-gray-400 select-none'>Cart Empty</p>
        </div>
        </>
        }
    </div>
    </>
  )
}

export default Cart