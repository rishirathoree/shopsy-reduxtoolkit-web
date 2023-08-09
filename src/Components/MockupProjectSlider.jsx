import React, { useState } from 'react'
import mock1 from '../assets/mock1.png'
import mock2 from '../assets/mock2.png'
import mock3 from '../assets/mock3.png'
const MockupProjectSlider = () => {
    const [activeSlider,setActiveSlider] = useState(1)
    const features = [
        {
            heading: "Easy Ordering",
            subheading: "Order your favorite food with just a few taps. Browse through a wide range of restaurants and cuisines. Customize your order as per your preferences.",
            image: mock1, // Replace with the actual image URL or identifier
          },
          {
            heading: "Fast Delivery",
            subheading: "Get your food delivered to your doorstep quickly. Track your order in real-time. Experience speedy and efficient delivery services.",
            image: mock2, // Replace with the actual image URL or identifier
          },
          {
            heading: "Special Offers",
            subheading: "Discover exciting deals and discounts on your favorite dishes. Enjoy exclusive offers for app users. Save money while satisfying your cravings.",
            image: mock3, // Replace with the actual image URL or identifier
          },
      ];
      
      
  return (
    <>
    <div className='min-h-screen max-h-full w-full bg-slate-50/10 px-20 flex items-center justify-center'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full items-center justify-center'>
        <div className='flex items-center justify-center'>
        <div className='w-[500px] flex justify-center items-center relative overflow-hidden h-[500px] rounded-xl bg-gray-100'>
            {features.map((item,idx)=>{
                return(
                    <div className='mt-80 bounce-effect'><img src={item.image} className={`mt-40 bounce-effect select-none  ${idx === activeSlider ? 'visible static duration-200 scale-100 translate-y-0 opacity-100' : 'absolute duration-0 invisible scale-75 translate-y-8 opacity-0'}`} alt={item.heading} /></div>
                )
            })}
        </div>
        </div>
        <div className='space-y-4'>
            {features.map((item,idx)=>{
                return(
                    <div onClick={()=>{setActiveSlider(idx)}} className={`p-8 ${idx === activeSlider ? 'bg-slate-100/30 ring-black/5 ring-1' : '' }  hover:bg-slate-100/30 ring-black/5 duration-1000 cursor-pointer backdrop-blur-md rounded-lg space-y-4`}>
                        <p className='font-semibold text-md'>{item.heading}</p>
                        <p className='font-normal leading-6 text-[12px]'>{item.subheading}</p>
                    </div>
                )
            })}
        </div>
        </div>
    </div>
    </>
  )
}

export default MockupProjectSlider