import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
const RoomCard = ({image,title,content,subContent}) => {
  return (
    <div className='shadow-md bg-[#ebe3d67b] hover:shadow-xl rounded-lg my-3 lg:my-0' >
        <div className='px-3 py-3' >
            <img className='rounded-lg' src={image} />
        </div>
        <div className='my-0 flex items-center px-3 lg:px-3 justify-center flex-col text-center' >
            <h4 className='font-[NeueMedium] text-[2rem]' >{title}</h4>
            <p className="font-[NeueMedium] h-[20px] text-[#FC7451]" >{subContent} </p>
            <p className='font-[NeueRegular] mt-1 ' >{content}</p>
            <div className='my-6' >
            {/* <a target='_blank' rel='noreferrer' href='https://www.unionliving.in/#/form'> <button className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[10px] md:text-[18px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[6px] px-[24px] md:py-[8px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Book Now  </button></a> */}
            </div>
        </div>
    </div>
  )
}

export default RoomCard