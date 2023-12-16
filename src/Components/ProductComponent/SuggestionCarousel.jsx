import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import img_1 from  "../../assets/bw-demo-3.webp";
import "./ProductPage.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
function SuggestionCarousel(){

    return(
        <>
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={3}
      navigation
      pagination={{ enabled: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
      <SwiperSlide className='slider'>
      <div className="w-[266px] ">
                  <div className="relative flex overflow-hidden">
                    <img className="w-[266px] h-[330px] hover:scale-105
                     transition-all duration-[200ms] ease-in-out" src={img_1} alt="" />
                    <div className="flex items-center gap-[5px] py-[1px] pl-[8px] pr-[4px] absolute bottom-5 bg-white">
                    <FaStar className="text-[#ffc700] text-[9px]"/>
                      <p className="text-[#337ab7] text-[10px]">4.5</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute mt-[5px] right-[4px] text-[20px]">
                      <CiHeart className="text-[#4f5362]"/>
                    </div>
                    <p className="mt-[5px] text-[#4f5362] text-[12px] leading-[15px] font-[550]">Bewakoof X HarryPotter</p>
                    <p className="mt-[5px] w-[85%] truncate text-[#737373] text-[10px] leading-[12px] font-[550]">Men's Grey Back to Hogwarts Graphic PrintMen's 
                    Grey Back to Hogwarts Graphic Print</p>
                    <div className="flex gap-[5px] mt-[5px] items-center text-[16px] leading-[14px]">
                  <p>₹<strong>999</strong></p>
                    <p className="line-through text-[#949494] text-[12px]">₹3399</p>
                    </div>
                    <p className="text-[#525252] mt-[8px] text-[10px] px-[8px] py-[2px]">₹929 for triBE Members</p>
                    <p className="w-max border-[1px] border-[rgb(115,115,115)] my-[12px] solid text-[rgb(115,115,115)] p-[1px] text-[10px]">
                      LUXE SOFT;LIGHTWEIGHT
                    </p>
                  </div>
                </div>
      </SwiperSlide>
      <SwiperSlide className='slider'>
      <div className="  w-[266px]">
                  <div className="relative flex overflow-hidden">
                    <img className="w-[266px] h-[330px] hover:scale-105
                     transition-all duration-[200ms] ease-in-out" src={img_1} alt="" />
                    <div className="flex items-center gap-[5px] py-[1px] pl-[8px] pr-[4px] absolute bottom-5 bg-white">
                    <FaStar className="text-[#ffc700] text-[9px]"/>
                      <p className="text-[#337ab7] text-[10px]">4.5</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute mt-[5px] right-[4px] text-[20px]">
                      <CiHeart className="text-[#4f5362]"/>
                    </div>
                    <p className="mt-[5px] text-[#4f5362] text-[12px] leading-[15px] font-[550]">Bewakoof X HarryPotter</p>
                    <p className="mt-[5px] w-[85%] truncate text-[#737373] text-[10px] leading-[12px] font-[550]">Men's Grey Back to Hogwarts Graphic PrintMen's 
                    Grey Back to Hogwarts Graphic Print</p>
                    <div className="flex gap-[5px] mt-[5px] items-center text-[16px] leading-[14px]">
                  <p>₹<strong>999</strong></p>
                    <p className="line-through text-[#949494] text-[12px]">₹3399</p>
                    </div>
                    <p className="text-[#525252] mt-[8px] text-[10px] px-[8px] py-[2px]">₹929 for triBE Members</p>
                    <p className="w-max border-[1px] border-[rgb(115,115,115)] my-[12px] solid text-[rgb(115,115,115)] p-[1px] text-[10px]">
                      LUXE SOFT;LIGHTWEIGHT
                    </p>
                  </div>
                </div>
      </SwiperSlide>
      <SwiperSlide className='slider'>
      <div className="  w-[266px]">
                  <div className="relative flex overflow-hidden">
                    <img className="w-[266px] h-[330px] hover:scale-105
                     transition-all duration-[200ms] ease-in-out" src={img_1} alt="" />
                    <div className="flex items-center gap-[5px] py-[1px] pl-[8px] pr-[4px] absolute bottom-5 bg-white">
                    <FaStar className="text-[#ffc700] text-[9px]"/>
                      <p className="text-[#337ab7] text-[10px]">4.5</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute mt-[5px] right-[4px] text-[20px]">
                      <CiHeart className="text-[#4f5362]"/>
                    </div>
                    <p className="mt-[5px] text-[#4f5362] text-[12px] leading-[15px] font-[550]">Bewakoof X HarryPotter</p>
                    <p className="mt-[5px] w-[85%] truncate text-[#737373] text-[10px] leading-[12px] font-[550]">Men's Grey Back to Hogwarts Graphic PrintMen's 
                    Grey Back to Hogwarts Graphic Print</p>
                    <div className="flex gap-[5px] mt-[5px] items-center text-[16px] leading-[14px]">
                  <p>₹<strong>999</strong></p>
                    <p className="line-through text-[#949494] text-[12px]">₹3399</p>
                    </div>
                    <p className="text-[#525252] mt-[8px] text-[10px] px-[8px] py-[2px]">₹929 for triBE Members</p>
                    <p className="w-max border-[1px] border-[rgb(115,115,115)] my-[12px] solid text-[rgb(115,115,115)] p-[1px] text-[10px]">
                      LUXE SOFT;LIGHTWEIGHT
                    </p>
                  </div>
                </div>
      </SwiperSlide>
      <SwiperSlide className='slider'>
      <div className="  w-[266px]">
                  <div className="relative flex overflow-hidden">
                    <img className="w-[266px] h-[330px] hover:scale-105
                     transition-all duration-[200ms] ease-in-out" src={img_1} alt="" />
                    <div className="flex items-center gap-[5px] py-[1px] pl-[8px] pr-[4px] absolute bottom-5 bg-white">
                    <FaStar className="text-[#ffc700] text-[9px]"/>
                      <p className="text-[#337ab7] text-[10px]">4.5</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute mt-[5px] right-[4px] text-[20px]">
                      <CiHeart className="text-[#4f5362]"/>
                    </div>
                    <p className="mt-[5px] text-[#4f5362] text-[12px] leading-[15px] font-[550]">Bewakoof X HarryPotter</p>
                    <p className="mt-[5px] w-[85%] truncate text-[#737373] text-[10px] leading-[12px] font-[550]">Men's Grey Back to Hogwarts Graphic PrintMen's 
                    Grey Back to Hogwarts Graphic Print</p>
                    <div className="flex gap-[5px] mt-[5px] items-center text-[16px] leading-[14px]">
                  <p>₹<strong>999</strong></p>
                    <p className="line-through text-[#949494] text-[12px]">₹3399</p>
                    </div>
                    <p className="text-[#525252] mt-[8px] text-[10px] px-[8px] py-[2px]">₹929 for triBE Members</p>
                    <p className="w-max border-[1px] border-[rgb(115,115,115)] my-[12px] solid text-[rgb(115,115,115)] p-[1px] text-[10px]">
                      LUXE SOFT;LIGHTWEIGHT
                    </p>
                  </div>
                </div>
      </SwiperSlide>
      <SwiperSlide className='slider'>
      <div className="  w-[266px]">
                  <div className="relative flex overflow-hidden">
                    <img className="w-[266px] h-[330px] hover:scale-105
                     transition-all duration-[200ms] ease-in-out" src={img_1} alt="" />
                    <div className="flex items-center gap-[5px] py-[1px] pl-[8px] pr-[4px] absolute bottom-5 bg-white">
                    <FaStar className="text-[#ffc700] text-[9px]"/>
                      <p className="text-[#337ab7] text-[10px]">4.5</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute mt-[5px] right-[4px] text-[20px]">
                      <CiHeart className="text-[#4f5362]"/>
                    </div>
                    <p className="mt-[5px] text-[#4f5362] text-[12px] leading-[15px] font-[550]">Bewakoof X HarryPotter</p>
                    <p className="mt-[5px] w-[85%] truncate text-[#737373] text-[10px] leading-[12px] font-[550]">Men's Grey Back to Hogwarts Graphic PrintMen's 
                    Grey Back to Hogwarts Graphic Print</p>
                    <div className="flex gap-[5px] mt-[5px] items-center text-[16px] leading-[14px]">
                  <p>₹<strong>999</strong></p>
                    <p className="line-through text-[#949494] text-[12px]">₹3399</p>
                    </div>
                    <p className="text-[#525252] mt-[8px] text-[10px] px-[8px] py-[2px]">₹929 for triBE Members</p>
                    <p className="w-max border-[1px] border-[rgb(115,115,115)] my-[12px] solid text-[rgb(115,115,115)] p-[1px] text-[10px]">
                      LUXE SOFT;LIGHTWEIGHT
                    </p>
                  </div>
                </div>
      </SwiperSlide>
      <SwiperSlide className='slider'>
      <div className="  w-[266px]">
                  <div className="relative flex overflow-hidden">
                    <img className="w-[266px] h-[330px] hover:scale-105
                     transition-all duration-[200ms] ease-in-out" src={img_1} alt="" />
                    <div className="flex items-center gap-[5px] py-[1px] pl-[8px] pr-[4px] absolute bottom-5 bg-white">
                    <FaStar className="text-[#ffc700] text-[9px]"/>
                      <p className="text-[#337ab7] text-[10px]">4.5</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute mt-[5px] right-[4px] text-[20px]">
                      <CiHeart className="text-[#4f5362]"/>
                    </div>
                    <p className="mt-[5px] text-[#4f5362] text-[12px] leading-[15px] font-[550]">Bewakoof X HarryPotter</p>
                    <p className="mt-[5px] w-[85%] truncate text-[#737373] text-[10px] leading-[12px] font-[550]">Men's Grey Back to Hogwarts Graphic PrintMen's 
                    Grey Back to Hogwarts Graphic Print</p>
                    <div className="flex gap-[5px] mt-[5px] items-center text-[16px] leading-[14px]">
                  <p>₹<strong>999</strong></p>
                    <p className="line-through text-[#949494] text-[12px]">₹3399</p>
                    </div>
                    <p className="text-[#525252] mt-[8px] text-[10px] px-[8px] py-[2px]">₹929 for triBE Members</p>
                    <p className="w-max border-[1px] border-[rgb(115,115,115)] my-[12px] solid text-[rgb(115,115,115)] p-[1px] text-[10px]">
                      LUXE SOFT;LIGHTWEIGHT
                    </p>
                  </div>
                </div>
      </SwiperSlide>
    </Swiper>

        </>
    )
}
export default SuggestionCarousel;