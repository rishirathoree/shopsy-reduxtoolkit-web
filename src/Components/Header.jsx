import React, { useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Cart from './Cart'

const Header = () => {
    const navs = ['Shop','Support']
    // const divRef = useRef()
    // useEffect(()=>{console.log(divRef.current.offsetHeight)},[])

  return (
    <>
    <div className='flex items-center space-x-8 justify-evenly p-2'>
        <Link to="/"><span><i className='bx bxl-apple'></i></span></Link>
        {/* <ul className='flex items-center space-x-8'>
            {navs.map((item,idx)=>{
                return(
                    <Link to={item}><li><p className='font-[300] text-[12px]'>{item}</p></li></Link>
                )
            })}
        </ul>
        <div className='flex items-center space-x-4'>
        <Link to='/cart'><li className='list-none'><p className='font-[300] text-[12px]'>Cart</p></li></Link>
        <Cart />
        </div> */}
    </div>
    </>
  )
}

export default Header

// header height is 64

