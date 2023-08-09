import React, { useEffect, useState } from 'react'
import banner1 from '.././assets/banner1.jpg'
import banner2 from '.././assets/banner2.webp'
const Slider = () => {
    const imageSlider = [
        {id:1,img:banner1},
        {id:2,img:banner2},
    ]
    const [imageIndex,setImageIndex] = useState(0)
    useEffect(()=>{
        const imageSlide = () => {
            setImageIndex(p=>(p + 1) % imageSlider.length)
        }
        const intervalTimer = setInterval(imageSlide,1000)
        return()=>{
            clearInterval(intervalTimer)
        }
    },[imageSlider.length])
  return (
    <>
    <div className='lg:h-screen md:h-80 sm:h-80 bg-black flex overflow-hidden overflow-x-auto'>
        {imageSlider.map((item,idx)=>{
            return(
                <div className={`w-full lg:h-screen md:h-80 sm:h-80  ${idx === imageIndex ? 'visible z-50 absolute opacity-100 duration-200' : 'duration-0 invisible z-0 absolute opacity-0'}`}><img src={item.img} className='w-full h-full object-cover' alt="" /></div>
            )
        })}
    </div>
    </>
  )
}

export default Slider