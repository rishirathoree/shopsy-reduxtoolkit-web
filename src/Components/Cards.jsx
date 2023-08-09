import React from 'react'

const Cards = () => {
    const features = [
        {
          heading: "Invest any amount",
          subheading: "Whether its $1 or $1,000,000, we can put your money to work for you.",
        },
        {
          heading: "Build a balanced portfolio",
          subheading: "Invest in different industries to find the most opportunities to win huge.",
        },
        {
          heading: "Trade in real-time",
          subheading: "Get insider tips on big stock moves and act on them within seconds.",
        },
        {
          heading: "Profit from your network",
          subheading: "Invite new insiders to get tips faster and beat even other Pocket users.",
        },
        {
          heading: "Encrypted and anonymized",
          subheading: "Cutting-edge security technology that even the NSA doesnt know about keeps you hidden.",
        },
        {
          heading: "Portfolio tracking",
          subheading: "Watch your investments grow exponentially, leaving other investors in the dust.",
        },
      ];
      1
  return (
    <>
    <div className='flex items-center justify-center lg:p-20 md:p-12 sm:p-4 gap-8'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        {features.map((item,idx)=>{
                return(
                    <div onClick={()=>{setActiveSlider(idx)}} className={`hover:bg-slate-100/40 p-8 ring-1 ring-black/5 duration-1000 cursor-pointer backdrop-blur-md rounded-2xl space-y-4`}>
                        <p className='font-semibold text-md'>{item.heading}</p>
                        <p className='font-normal leading-6 text-[12px]'>{item.subheading}</p>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Cards