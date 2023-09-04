import React from 'react'
import {BiTrendingUp} from "react-icons/bi"
import HeroPic from "../Image/hero.jpg"
const Hero = () => {
  return (
    <div className=' w-11/12 mx-auto mt-10'>
      <div className="flex w-full sm:w-10/12 mx-auto lg:w-full lg:flex-row flex-col justify-center ">
        <div className="w-full  lg:w-3/5 ">
          <img className="rounded-l-md w-full h-full"src={HeroPic} alt="" />
        </div>
        <div className="w-full rounded-r-md bg-Secondary-Blue-100 lg:w-2/5 ">
          <div className="flex flex-col lg:items-center gap-4 lg:gap-7 pb-10  pt-10 lg:pt-20  px-5 sm:px-7  md:px-12 lg:px-10 justify-center">
              
            <div className="flex lg:items-center flex-col-reverse lg:flex-col gap-3 lg:gap-5">
            <h1 className="font-pacifico text-xl sm:text-3xl md:text-4xl xl:text-5xl lg:text-center w-full xl:w-3/4">Lovely Soft Chocolate Cake </h1>
            <div className="flex  text-Tertiary-Black-200  gap-1 ">
              <BiTrendingUp size={20}  />
              <p className="font font-poppins capitalize text-xs">85% Would make this again.</p>
</div>
            </div>
            <p className="font-poppins text-sm sm:text-lg lg:text-center ">Indulge in the ultimate chocolate experience with The Most Amazing Chocolate Cake. Moist, rich, and made in a single bowl. Satisfy your chocolate cravings with the chocolate cake of your dreams.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
