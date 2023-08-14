import React, { useEffect, useRef, useState } from 'react';
import airpod from '../assets/airpod.png';
import airpod2 from '../assets/airpod2.png';

const Airpods = () => {
  const [scrollValueStorage, setScrollValueStorage] = useState(null);
  const airpodsRef1 = useRef();
  const airpodsRef2 = useRef();
  const airpodsRef = [airpodsRef1, airpodsRef2];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.2], // When more than 50% of the element is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          airpodsRef.forEach((item) => {
            if (item.current) {
              item.current.style.opacity = 1;
              item.current.style.scale = 1.1;
            }
          });
        } else {
          airpodsRef.forEach((item) => {
            if (item.current) {
              item.current.style.opacity = 0;
              item.current.style.scale = 0.5;
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    airpodsRef.forEach((item) => {
      if (item.current) {
        observer.observe(item.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className='h-screen bg-white rounded-2xl relative flex items-center overflow-hidden justify-center flex-col shadow-lg shadow-black/5'>
        <p className='font-bold lg:text-[14rem] md:text-[10rem] sm:text-[4rem] leading-[200px]'>AirPods</p>
        <p className='font-lignt text-lg'>3rd generation</p>
        <p className='font-lignt text-lg'>From ₹19900.00*</p>
        <img
          ref={airpodsRef1}
          src={airpod}
          className={`absolute lg:h-[600px] md:h-[400px] sm:h-[400px] left-8 -bottom-20 scale-x-[-1] duration-1000`}
          alt=''
        />
        <img
          ref={airpodsRef2}
          src={airpod2}
          className={`absolute lg:h-[600px] md:h-[400px] sm:h-[200px] right-8 -bottom-20 scale-x-[-1] duration-1000`}
          alt=''
        />
      </div>
    </>
  );
};

export default Airpods;
