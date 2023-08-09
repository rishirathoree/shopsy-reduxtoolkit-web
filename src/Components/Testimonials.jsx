import React, { useState } from 'react'

const Testimonials = () => {
    const [activeTestimonal,setActiveTetimonial] = useState(5)
    const faqs = [
      {
        question: "How do I know the right size for a clothing item?",
        answer: "Our clothing brand provides detailed sizing charts for each product. You can find them on the product page to ensure you select the right size.",
      },
      {
        question: "What materials are your clothing items made from?",
        answer: "We use a variety of high-quality materials, including cotton, polyester, and blends. You can find specific material information on each product's description.",
      },
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to many countries. You can check if your country is eligible for shipping during the checkout process.",
      },
      {
        question: "How can I return or exchange an item?",
        answer: "If you're not satisfied with your purchase, you can initiate a return or exchange within 30 days of receiving your order. Please refer to our Return Policy for detailed instructions.",
      },
      {
        question: "Can I track my order?",
        answer: "Yes, you'll receive a tracking number via email once your order is shipped. You can use this tracking number to monitor the status of your delivery.",
      },
      {
        question: "What's your refund policy?",
        answer: "We offer refunds for items returned in their original condition within 30 days of purchase. Refunds are typically processed within 7-10 business days after we receive the returned item.",
      },
      // ... Add more FAQs
    ];
    
      const toggleTestimonial = (idx) => {
        if (idx === activeTestimonal) {
            setActiveTetimonial(null);
        } else {
            setActiveTetimonial(idx);
        }
      };
    return (
    <>
    <div className='lg:p-20 md:p-12 sm:p-4 space-y-8'>
        <div className='space-y-4'>
            <p className='font-semibold text-xl'>Frequently asked questions</p>
            <p className='font-normal text-sm'>If you have anything else you want to ask, reach out to us.</p>
        </div>
        <div className='space-y-2'>
            {faqs.map((item,idx)=>{
            return(
            <div onClick={()=>{toggleTestimonial(idx)}} className={`p-8 ring-1 ring-black/5 rounded-lg`}>
            <div className='flex items-center justify-between'>
            <p className='font-semibold text-sm'>{item.question}</p>
            <i class='bx bx-chevron-down'></i>
            </div>
            <p className={`font-light bounce-effect text-[12px] ${idx === activeTestimonal ? ' opacity-100 duration-1000 max-h-80' : 'duration-0 opacity-0 max-h-0'}`}>{item.answer} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio molestiae, quidem est obcaecati ut commodi officia maiores pariatur dolores quas esse veniam eos, ipsum asperiores, aliquid sapiente officiis voluptatibus laudantium fugiat corrupti nulla vero? Itaque iste, voluptatum labore harum beatae laborum libero consectetur quas consequatur, porro odio nihil. Modi, quo.</p>
            </div>
            )
            })}
        </div>
    </div>
    </>
  )
}

export default Testimonials