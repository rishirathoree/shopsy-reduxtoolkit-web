import React from 'react'
import Airpods from '../../Components/Airpods'
import AirpodsMax from '../../Components/AirpodsMax'
import Mockup from '../../Components/Mockup'
const Home = () => {
  
  return (
    <>
    <div className='space-y-4'>
      <div className={`p-20 bg-white foundationBg`}></div>
      <div className='px-8 py-4'><Airpods /></div>
      <div className='px-8 py-4'><AirpodsMax /></div>
      <div className='px-8 py-4'><Mockup /></div>
    </div>
    </>
  )
}

export default Home