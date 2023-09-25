import React from 'react'
import Logo from '../images/Logo.svg'
import {BiLogoFacebook, BiLogoTelegram, BiLogoInstagram, BiLogoTwitter }from 'react-icons/bi'
const Footer = () => {
  return (
<div className="md:bottom-0 sm:bottom-0 grid md:grid-cols-5  sm:grid-cols-1 py-5 bg-gray-100  drop-shadow-2xl gap-2">
{/* <div className=' bg-gray-100 drop-shadow-2xl  max-w-[1151px]
    mx-auto grid  md:grid-cols-5 absolute md:inset-x-0 
    md:bottom-0 sm:bottom-0 max-[780]:grid-cols-6    justify-between  py-2 md:py-3
    ap-4 '> */}

<div className=' px-[200px] col-span-2'>
  <img src={Logo} className="h-[60px]  " alt=""/>
  <h2 className='md:text-[55px] font-normal font-pacifico mt-2'>mn lbla</h2>
  <h3 className='py-2 text-[#6D737A]'>try new recipes from all<br></br> over the world with us </h3>
</div>
<div>
  <h3 className='text-[20px] font-bold font-pacifico hover:text-orange-600'>mn lbla</h3>
  <ul className='py-6 text-[#6D737A]'>
    <li className='py-2 hover:underline hover:text-orange-600'>About Us</li>
    <li className='py-2 hover:underline hover:text-orange-600'>Careers</li>
    <li className='py-2 hover:underline hover:text-orange-600'>Contact Us</li>
    <li className='py-2 hover:underline hover:text-orange-600'>Feedback</li>
  </ul>
</div>

<div>
  <h3 className=' text-[20px] font-bold font-pacifico hover:text-orange-600'>Legal</h3>
  <ul className='py-6 text-[#6D737A]'>
    <li className='py-2 hover:underline hover:text-orange-600'>Terms</li>
    <li className='py-2 hover:underline hover:text-orange-600'>Condition</li>
    <li className='py-2 hover:underline hover:text-orange-600'>Cookies</li>
    <li className='py-2 hover:underline hover:text-orange-600'>Copyright</li>
  </ul>
</div>
<div>
  <h3 className='text-[20px] font-bold font-pacifico  hover:text-orange-600'>Follow</h3>
  <ul className='py-6 text-[#6D737A]'>
    <li className='py-2 hover:underline hover:text-orange-600'>Facebook</li>
    <li className='py-2 hover:underline hover:text-orange-600'>Telegram</li>
    <li className='py-2 hover:underline hover:text-orange-600'>Instagram</li>
    <li className='py-2 hover:underline hover:text-orange-600'>Twitter</li>
  </ul>

  <div className='justify-between inline-flex bottom-0 gap-[40px]'>
<div className=' rounded-xl '><BiLogoFacebook size={23} style={{color:'#1877F2'}} /></div>
<div className=' rounded-xl '><BiLogoTelegram size={23} style={{color:'#000000'}}/></div>
<div className=' rounded-xl '><BiLogoInstagram size={23} style={{color:'#833AB4'}}/></div>
<div className=' rounded-xl'><BiLogoTwitter size={23} style={{color:'1da1f2'}}/> </div>  
  </div>
  </div>
  </div>
  )
}
export default Footer
