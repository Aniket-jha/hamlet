import React from 'react'
import Checklist from "../asset/checklist.png"
import { HiArrowLongRight } from "react-icons/hi2";
const WhatSection = () => {
  return (
    <div className='lg:mx-16 mx-4 pt-12 pb-12  '>
        <div className='lg:grid grid-cols-2 items-center justify-center grid-flow-col ' >
        <div>
        <h4 className='font-[NeueBold] leading-[2.4rem] lg:leading-[3.5rem] text-[2rem] lg:text-[3rem]' >What’s missing is you, <br /> Everything else is ready.</h4>
        <p className='font-[NeueRegular] mt-3 mb-6 text-[1rem] lg:text-[1.3rem]' >Settling in can be overwhelming. With big & little things <br className='hidden lg:block' /> already taken care of,  you will be at ease throughout.</p>
        <a target='_blank' rel='noreferrer' href='https://www.unionliving.in/#/form'> <button className="uppercase mt-6 flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[10px] md:text-[14px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[6px] px-[24px] md:py-[6px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Book Now <HiArrowLongRight className="text-[34px]" /> </button></a>
        </div>
        <div className='lg:flex mt-6 lg:mt-0 items-center justify-end' >
            <img className='lg:w-[500px]' src={Checklist} />
        </div>
        </div>
    </div>
  )
}

export default WhatSection