import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Store/Slices/Cart'
import { fetchProducts } from '../../Store/Slices/Products'
import { useNavigate } from 'react-router-dom'
import Slider from '../../Components/Slider'

const Home = () => {
  const Navigation = useNavigate()
  const products = useSelector(state=>state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const dummyLngth = Array(10).fill(1)

    return (
        <>
        <div className='mt-[64px] space-y-12 '>
        <Slider />
         <div className='flex items-center justify-center p-12'>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4'>
         {products.loading
         ?
        <>
        {dummyLngth.map((item,idx)=>{
          return(
            <div key={idx} className='w-80 h-80 animate-pulse bg-gray-100 rounded-lg'></div>
          )
        })}
        </>
        :
        <>
        {products.data.map((item,idx)=>{
          return(
          <div key={item.id}  className='space-y-2 ring-1 ring-black/5 p-8 rounded-lg'>
          <div onClick={() => Navigation(`/product/${item.id}`)} className='lg:w-60 cursor-pointer md:w-32 sm:w-32 lg:h-60 md:h-32 sm:h-32 rounded-lg bg-teal-50/10 flex items-center justify-center'><i class='bx bxs-t-shirt bx-lg'></i></div>
          <div className='flex items-center justify-between'>
          <p className='font-semibold text-[10px]'>{item.title.slice(0,25)}</p>
          <i onClick={()=>{dispatch(addToCart(item))}} className='bx bx-package'></i>
          </div>
          </div>
            )
          })}
        </>
        }
         </div>
         </div>
        </div>
        </>
  )
}

export default Home
