

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FreeMode,Navigation,Thumbs} from 'swiper/modules';

const [thumbsSwiper, setThumbsSwiper] = useState(null);

const handlerSwiperData = (e) => {
    setThumbsSwiper(e);
}




<Swiper
loop={false}
spaceBetween={10}
navigation={false}
thumbs={{ swiper: thumbsSwiper}}
modules={[FreeMode,Thumbs,Navigation]}
className="mySwiper2 w-[600px] h-[500px]"
>

<SwiperSlide className="flex justify-center items-center">
    <img className="h-[500px]" src={img_1} alt="" />
</SwiperSlide>
</Swiper>
<Swiper
onSwiper={handlerSwiperData}
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
