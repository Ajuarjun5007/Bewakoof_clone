import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  Link
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
import { Link } from 'react-router-dom';

function SuggestionCarousel(props){
    const {productList}  = props;
    console.log("carproduct",productList);
    return(
        <>
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={3}
      navigation
      pagination={{ enabled: false }}
      // onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      {productList &&
                    productList.length > 0 &&
                    productList.slice(-1.-32).map((product) => (
                      <SwiperSlide className='slider'>
                      <Link key={product._id} to="/ProductDetailsPage">
                        <div key={product._id} className="w-[266px]">
                          <div className="relative flex overflow-hidden">
                            <img
                              className="w-[266px] fog h-[330px] hover:scale-105 transition-all duration-[200ms] ease-in-out"
                              src={product.displayImage}
                              alt="image"
                            />
                            <div className="flex items-center gap-[5px] px-[4px] rounded-md py-[1px] ml-[8px] pr-[4px] absolute bottom-5 bg-white">
                              <FaStar className="text-[#ffc700] text-[9px]" />
                              <p className="text-[#337ab7] text-[10px]">
                                {product.ratings.toFixed(1)}
                              </p>
                            </div>
                          </div>

                          <div className="relative">
                            <div className="absolute mt-[5px] right-[4px] text-[20px]">
                              <CiHeart className="text-[#4f5362]" />
                            </div>
                            <p className="mt-[5px] text-[#4f5362] text-[12px] leading-[15px] font-[550]">
                              {product.brand}
                            </p>
                            <p className="mt-[5px] w-[85%] truncate text-[#737373] text-[10px] leading-[12px] font-[550]">
                              {product.description}
                            </p>
                            <div className="flex gap-[5px] mt-[5px] items-center text-[16px] leading-[14px]">
                              <p>
                                ₹<strong>
                                {product.price}
                                </strong>
                              </p>
                              <p className="line-through text-[#949494] text-[12px]">
                                {Math.round(product.price*(.5)+product.price)}
                              </p>
                            </div>
                            <p className="text-[#525252] mt-[8px] text-[10px] px-[8px] py-[2px]">
                            ₹{Math.round(product.price-product.price*(.1))}  for triBE Members
                            </p>
                            <p className="w-max border-[1px] border-[rgb(115,115,115)] my-[12px] solid text-[rgb(115,115,115)] p-[1px] text-[10px]">
                              LUXE SOFT;LIGHTWEIGHT
                            </p>
                          </div>
                        </div>
                      </Link>
      </SwiperSlide>

                    ))}



      {/* <div className="w-[266px] ">
                  <div className="relative flex overflow-hidden">
                    <img className="w-[266px] fog h-[330px] hover:scale-105
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
                </div> */}
     
    </Swiper>

        </>
    )
}
export default SuggestionCarousel;