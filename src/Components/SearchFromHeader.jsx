import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterSearchInput } from '../Store/Slices/Products'
import { useNavigate } from 'react-router-dom'
import noitemgif from '.././assets/noitemgif.webp'
const SearchFromHeader = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const products = useSelector(state=>state.product)
    console.log(products)
  return (
    <>
    <div className='relative lg:block md:block sm:hidden'>
        <input onChange={(e)=>{dispatch(filterSearchInput(e.target.value))}} type="text" placeholder='Search By ID' className='peer w-80 outline-none focus:outline-none text-sm p-1 text-[12px] rounded bg-gray-50 ring-1 ring-black/5' />
        <div className={`absolute overflow-y-auto h-80 noscroll shadow top-8 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible duration-500 rounded overflow-hidden bg-white w-full`}>
            {products.filterProductBySearch.length > 0 ? 
            <>
            {products.filterProductBySearch.map((item,idx)=>{
                return(
            <div onClick={()=>{navigate(`/product/${item.id}`)}} className='p-4 cursor-pointer flex items-center justify-between'>
                <p className='font-normal text-[12px]'>{item.title.slice(0,20)}</p>
                <i className='bx bx-x'></i>
            </div>
                )
            })}
            </>
            :
            <>
            <div className='flex items-center justify-center'>
                <img className='scale-75' src={noitemgif} alt="" />
            </div>
            </>}
        </div>
    </div>
    </>
  )
}

export default SearchFromHeader