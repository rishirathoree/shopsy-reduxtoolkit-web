import React, { useEffect, useRef, useState } from 'react';
import airpodmax from '../assets/airpodmax.png';

const AirpodsMax = () => {
  const [scrollValueStorage, setScrollValueStorage] = useState(null);
  const airpodsRef1 = useRef();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.2], // When more than 50% of the element is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (airpodsRef1.current) {
            airpodsRef1.current.style.opacity = 1;
            airpodsRef1.current.style.scale = 1.5;
          }
        } else {
          if (airpodsRef1.current) {
            airpodsRef1.current.style.opacity = 0;
            airpodsRef1.current.style.scale = 0.5;
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (airpodsRef1.current) {
      observer.observe(airpodsRef1.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className='h-screen bg-white rounded-2xl relative flex items-center overflow-hidden justify-center flex-col shadow-lg shadow-black/5'>
        <p className='font-bold lg:text-[12rem] md:text-[8rem] sm:text-[4rem] leading-[200px]'>AirPods Max</p>
        <p className='font-lignt text-lg'>3rd generation</p>
        <p className='font-lignt text-lg'>From ₹19900.00*</p>
        <img
          ref={airpodsRef1}
          src={airpodmax}
          className={`absolute h-[600px] -bottom-20 duration-1000`}
          alt=''
        />
      </div>
    </>
  );
};

export default AirpodsMax;
