import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FreeMode,Navigation,Thumbs} from 'swiper/modules';
import img_1 from "../../assets/demo_img_1.webp"
import img_2 from "../../assets/demo_img_2.webp"
import img_3 from "../../assets/demo_img_3.webp"
import './ProductPage.css'
import { useState } from 'react';

function ProductDetailsPage(){

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const handlerSwiperData = (e) => {
        setThumbsSwiper(e);
    }
    return (
        <>
        <div className="flex justify-center">
        <div className="mt-[120px] flex py-[40px] w-85  border-2 border-black solid">
            {/* Product carousel */}
            <div className="flex flex-row-reverse">
                
            <Swiper
                    loop={false}
                    spaceBetween={10}
                    navigation={false}
                    thumbs={{ swiper: thumbsSwiper}}
                    modules={[FreeMode,Thumbs]}
                    className="mySwiper2 w-[600px] h-[500px]"
                >
              
                    <SwiperSlide className="flex justify-center items-center">
                        <img className="h-[500px]" src={img_1} alt="" />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={handlerSwiperData}
                    // onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    direction="vertical"
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                   
                        <SwiperSlide className="w-[100px] h-[100%]"  >                            
                            <img className="w-[200px] h-[auto]" src={img_1} alt="" />                            
                        </SwiperSlide>
                  
                        <SwiperSlide className="w-[100px] h-[100%]"  >                            
                            <img className="w-[200px] h-[auto]" src={img_2} alt="" />                            
                        </SwiperSlide>

                        <SwiperSlide className="w-[100px] h-[100%]"  >                            
                            <img className="w-[200px] h-[auto]" src={img_3} alt="" />                            
                        </SwiperSlide>

                        <SwiperSlide className="w-[100px] h-[100%]"  >                            
                            <img className="w-[200px] h-[auto]" src={img_1} alt="" />                            
                        </SwiperSlide>

                        <SwiperSlide className="w-[100px] h-[100%]"  >                            
                            <img className="w-[200px] h-[auto]" src={img_2} alt="" />                            
                        </SwiperSlide>
                </Swiper>







            </div>
            <div className=""></div>
        </div>
        </div>
        </>
    )
}
export default ProductDetailsPage;