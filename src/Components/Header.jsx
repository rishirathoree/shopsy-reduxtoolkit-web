import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo1.png'
import { NavLink, useLocation } from 'react-router-dom'
import Cart from './Cart'
import SearchFromHeader from './SearchFromHeader'

const Header = () => {
    const navs = ['Cart','About','FAQ']
    // const divRef = useRef()
    // useEffect(()=>{console.log(divRef.current.offsetHeight)},[])

  return (
    <>
    <div className='px-20 z-[100] shadow-sm bg-white fixed top-0 right-0 w-full py-4 flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
            <NavLink to="/"><span><img src={logo} className='w-8 h-8' alt="" /></span></NavLink>
        </div>
        <SearchFromHeader />
        <div className='flex items-center space-x-4'>
        <Cart />
        <nav>
            <ul className='flex items-center space-x-4'>
                {navs.map((item,idx)=>{
                    return(
                        <NavLink to={`/${item}`}><li><p className='cursor-pointer peer peer-hover:before:block before:content-[""] font-semibold text-gray-800 relative text-[10px] before:hidden  before:w-full before::hover:block before:-bottom-1 before:h-[2px] before:absolute before:bg-black'>{item}</p></li></NavLink>
                    )
                })}
            </ul>
        </nav>
        </div>
        
    </div>
    </>
  )
}

export default Header

// header height is 64

