import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../Store/Slices/Cart';
import nocartitemgif from '.././assets/noitemgif.webp'

const Cart = () => {
        const [toggleCartSidebar,setToggleCartSidebar] = useState(false)
        const dispatch = useDispatch()
        const refBackgroundSidebarCart = useRef()
        const toggleCartSidebarByClickingOverlay = (e) => {
            if (e.target === refBackgroundSidebarCart.current) {
              setToggleCartSidebar(false);
            }
          };
          const cart = useSelector(state=>state.cart)
        //   useEffect(()=>{setToggleCartSidebar(p=>!p)},[cart.length + 1])
    return (
        <>
        <div className='relative'>
            <i onClick={()=>{setToggleCartSidebar(p=>!p)}} className='bx bx-cart'></i>
            <div className={`w-2 ring-2 ring-white bounce-effect h-2 duration-700 rounded-full bg-red-500 absolute top-0 -right-1 ${cart.length > 0 ? 'visible scale-100 opacity-100' : 'invisible opacity-0 scale-50'}`}></div>
            <div ref={refBackgroundSidebarCart} onClick={toggleCartSidebarByClickingOverlay} className={`bg-overlay fixed w-full top-0 right-0 z-50 h-screen bg-black/10 ${toggleCartSidebar ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <div className={`lg:w-1/4 md:w-3/4 overflow-y-auto noscroll sm:w-3/4 bounce-effect h-full bg-white float-right ${toggleCartSidebar ? 'skew-x-0 opacity-100 visible translate-x-0' : 'translate-x-full invisible opacity-0 skew-x-12'}`}>
                <div>
                <p className='p-5 shadow-sm text-md font-semibold sticky top-0 right-0 bg-white'>Cart</p>
                <div className='grid grid-cols-1  p-4 gap-4'>
                  {cart.length > 0
                  ?
                  <>
                  {cart.map((item,idx)=>{
            return(
          <div className='space-y-2 ring-1 ring-black/5 p-4 flex items-center justify-between rounded-lg'>
            <div className='flex items-center space-x-2'>
            <i class='bx bxs-t-shirt'></i>
            <p className='font-semibold text-sm'>{item.title.slice(0,20)}</p>
            </div>
            <div>
                <i onClick={()=>{dispatch(removeCartItem(item.id))}} className='bx bx-x'></i>
            </div>
          </div>
            )
          })}
          </>
                  :
                  <>
                  <div className='flex flex-col h-calc items-center justify-center'>
            <img src={nocartitemgif} className='w-80 h-60' alt="" />
        <p className='font-semibold text-[12px] text-gray-400 select-none'>Cart Empty</p>
        </div>
        </>
                  }
         
         </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
    }

    export default Cart