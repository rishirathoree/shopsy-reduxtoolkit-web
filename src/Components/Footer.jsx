import React from 'react'

const Footer = () => {
    const footerMenus = [
        {
          title: 'Shop and Learn',
          submenus: [
            'Store',
            'Mac',
            'iPad',
            'iPhone',
            'Watch',
            'AirPods',
            'TV & Home',
            'AirTag',
            'Accessories',
            'Gift Cards',
          ],
        },
        {
          title: 'Apple Wallet',
          submenus: [
            'Wallet',
            'Account',
            'Manage Your Apple ID',
            'Apple Store Account',
            'iCloud.com',
          ],
        },
        {
          title: 'Entertainment',
          submenus: [
            'Apple One',
            'Apple TV+',
            'Apple Music',
            'Apple Arcade',
            'Apple Podcasts',
            'Apple Books',
            'App Store',
          ],
        },
        {
          title: 'Apple Store',
          submenus: [
            'Find a Store',
            'Genius Bar',
            'Today at Apple',
            'Apple Camp',
            'Apple Trade In',
            'Ways to Buy',
            'Recycling Programme',
            'Order Status',
            'Shopping Help',
          ],
        },
        {
          title: 'For Business',
          submenus: [
            'Apple and Business',
            'Shop for Business',
          ],
        },
        {
          title: 'For Education',
          submenus: [
            'Apple and Education',
            'Shop for Education',
            'Shop for University',
          ],
        },
        {
          title: 'For Healthcare',
          submenus: [
            'Apple in Healthcare',
            'Health on Apple Watch',
          ],
        },
        {
          title: 'Apple Values',
          submenus: [
            'Accessibility',
            'Education',
            'Environment',
            'Privacy',
            'Supplier Responsibility',
          ],
        },
        {
          title: 'About Apple',
          submenus: [
            'Newsroom',
            'Apple Leadership',
            'Career Opportunities',
            'Investors',
            'Ethics & Compliance',
            'Events',
            'Contact Apple',
          ],
        },
      ];
      
      
  return (
    <>
    <div className='px-8 py-4 '>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 w-full py-4 lg:px-20 md:px-12 sm:px-6 rounded-2xl items-start justify-center'>
            {footerMenus.map((items,idx)=>{
                return(
                    <div>
                        <p className='font-semibold text-[14px]'>{items.title}</p>
                        <ul>
                            {items.submenus.map((item,idx)=>{
                                return(
                                    <li><p className='font-normal hover:underline cursor-pointer text-[12px]'>{item}</p></li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Footer