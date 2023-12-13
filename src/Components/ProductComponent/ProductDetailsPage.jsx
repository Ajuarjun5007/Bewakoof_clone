import "swiper/element/css/autoplay";
import "swiper/element/css/thumbs";
import "swiper/element/css/navigation";
import { register } from "swiper/element/bundle";
import img_1 from "../../assets/demo_img_1.webp";
import img_2 from "../../assets/demo_img_2.webp";
import img_3 from "../../assets/demo_img_3.webp";
import img_4 from "../../assets/bw-demo-1.webp";
import img_5 from "../../assets/bw-demo-2.webp";
import img_6 from "../../assets/bw-demo-3.webp";
import "./ProductPage.css";
import { useState } from "react";
import "swiper/element/css/pagination";
import "swiper/element/css/controller";
import { useMemo, useRef } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./ProductPage.css";
register();

function ProductDetailsPage() {
  const verticalSwiperRef = useRef();
  const horizontalSwiperRef = useRef();

  const horizontalSliderProps = useMemo(() => innerWidth > 768 ? ({}) : ({
      'pagination-clickable': 'true'
  }), [])

  const handlePrevClick = () => {
      horizontalSwiperRef.current.swiper?.slidePrev();
  }
  const handleNextClick = () => {
      horizontalSwiperRef.current.swiper.slideNext();
  }
  const images=[img_1,img_2,img_3,img_4,img_5,img_6];

  



    

  return (
    <>
       <div className="flex justify-center">
    <div className="mt-[100px] flex gap-[2%] h-[620px]  w-85 border-[1px]  border-black solid">
      <div className="flex h-max sticky justify-center items-start w-[45%] border-[1px]  border-red-800 solid">
         <div className='flex gap-[5px] md:h-[470px] xl:h-[575px] overflow-hidden pb-2'>
            <div className="md:w-1/5 hidden md:flex flex-col gap-2">
                <div onClick={handlePrevClick} className=" cursor-pointer flex items-center justify-center truncate"><SlArrowUp /></div>
                <swiper-container
                    ref={verticalSwiperRef}
                    class='myThumbSlider my-thumbs'
                    space-between='5'
                    slides-per-view={images.length < 3 ? images.length : 3}
                    loop='true'
                    direction='vertical'
                >
                    {
                        images?.map((image, i) => (
                            <swiper-slide class='verticalSlide' key={i} >
                                <div className=''>
                                    <img className='aspect-[4/5] object-contain md:object-cover object-center' src={image || `/assets/images/banner/1.jpg`} alt="" />
                                </div>
                            </swiper-slide>
                        ))
                    }

                </swiper-container>
                <div onClick={handleNextClick} className=" cursor-pointer flex items-center justify-center"><SlArrowDown /></div>
            </div>
            <div className="w-full md:w-4/5 ">
                <swiper-container
                    ref={horizontalSwiperRef}
                    controller-control=".verticalSwiper"
                    thumbs-swiper=".my-thumbs"
                    loop='true'
                    direction="horizontal"
                    slides-per-view="1"
                    {...horizontalSliderProps}
                >
                    {
                      images?.map((image, i) => (
                            <swiper-slide class='horizontalSlide' key={i} >
                                <div className=''>
                                    <img className='h-[558px] md:w-full !object-contain 
                                    md:object-cover object-center ' src={image || `/assets/images/banner/1.jpg`} alt="" />
                                </div>
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            </div>
        </div>
      </div>
      <div className="w-[50%] pt-[20px] overflow-scroll no-scrollbar">
          <div className="">
            <p className="text-[#4f5362] text-lg font-[400]">Bewakoof®</p>
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
      </div>
    </div>
    </div>
    </>
  );
}

export default ProductDetailsPage;
