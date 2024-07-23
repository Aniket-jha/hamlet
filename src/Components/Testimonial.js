import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import ReviewOne from "../asset/reviewOne.mp4"
import ReviewTwo from "../asset/reviewTwo.mp4"
import ReviewThree from "../asset/reviewThree.mp4"
import ReviewFour from "../asset/reviewFour.MOV"
import ReviewFive from "../asset/reviewFive.mp4"
const Testimonial = () => {
  return (
    <div className='lg:mx-16 mx-4 pt-12 pb-12  '>
        <div>
        <div className='flex items-center justify-between' >
        <h3 className='font-[NeueBold] text-[1.4rem] lg:text-[2.8rem]' >Reviews</h3>
        <a target='_blank' rel='noreferrer' href='https://www.unionliving.in/#/form'> <button className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[10px] md:text-[18px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Become a Member  </button></a>
        </div>
        <Swiper
          spaceBetween={0}
          className="mt-6"
          draggable={true}
          breakpoints={{
            350: {
          width: 450,
          slidesPerView: 1.5,
        },
            450: {
          width: 450,
          slidesPerView: 1.5,
        },
        576: {
          width: 576,
          slidesPerView: 2,
        },
        780: {
          width: 780,
          slidesPerView: 3,
        },
         1200: {
          width: 1200,
          slidesPerView: 3.5,
        },
       
         1440:{
          width:1440,
          slidesPerView:4.4
        }
      }}
          autoplay={{
            delay: 2000,
            disableOnInteraction:true,
          }}
          loop={true}
          modules={[Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
         
              <SwiperSlide >
              <video className='   h-[500px] px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src={ReviewOne} type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src={ReviewTwo} type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src={ReviewThree} type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src={ReviewFour} type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src={ReviewFive} type="video/mp4" />
              </video>
              </SwiperSlide>
        </Swiper>
        </div>
        <div className='flex items-center justify-center' >
        <a target='_blank' rel='noreferrer' href='https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2FHamlet%20by%20Union%20Co-living%20Brochure.pdf?alt=media&token=6df42bcd-4d50-4d2c-baf3-14d2e0166d81' download> <button className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] mt-3 md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Download Brochure  </button></a>
        </div>
    </div>
  )
}

export default Testimonial