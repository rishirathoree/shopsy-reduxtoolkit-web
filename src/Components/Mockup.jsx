import React, { useRef } from 'react';
import mockup from '../assets/mockup1.png'
const Mockup = () => {
  const typesOfCards = [
    'Personalised Spatial Audio',
    'Audio Sharing',
    'Automatic switching',
    'Siri',
    'Personalised Spatial Audio',
    'Audio Sharing',
    'Automatic switching',
    'Siri'
  ];

  const scrollCardsBox = useRef();

  const scrollLeft = () => {
    if (scrollCardsBox.current) {
      scrollCardsBox.current.scrollTo({
        left: scrollCardsBox.current.scrollLeft - 400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRightSide = () => {
    if (scrollCardsBox.current) {
      scrollCardsBox.current.scrollTo({
        left: scrollCardsBox.current.scrollLeft + 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className='space-y-2'>
        <div ref={scrollCardsBox} className='overflow-hidden p-2 flex items-center space-x-4'>
          {typesOfCards.map((item, idx) => (
            <div key={idx} className=' relative flex items-start justify-center min-w-[350px] rounded-lg h-[400px] bg-white'>
                <img src={mockup} className='opacity-80' alt="" />
            </div>
          ))}
        </div>
        <div className='flex items-center space-x-2'>
          <i onClick={scrollLeft} className='bx p-1 rounded-full border-black/50 border-[1px] bx-chevron-left'></i>
          <i onClick={scrollRightSide} className='bx p-1 rounded-full border-black/50 border-[1px] bx-chevron-right'></i>
        </div>
      </div>
    </>
  );
};

export default Mockup;
