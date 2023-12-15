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
import wishlist_img from "../../assets/wishlist_page/wishlist.svg";
import wishlisted_img from "../../assets/wishlist_page/wishlisted.svg";
import bag_white_img from "../../assets/wishlist_page/bag-white.svg";
import bag_black_img from "../../assets/wishlist_page/bag-blck.svg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineClose } from 'react-icons/ai';
import "./ProductPage.css";
import { useEffect, useState } from "react";
import "swiper/element/css/pagination";
import "swiper/element/css/controller";
import { useMemo, useRef } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./ProductPage.css";
import { sizes } from "../../Components/TypeConstants";
register();

function ProductDetailsPage() {
  const verticalSwiperRef = useRef();
  const horizontalSwiperRef = useRef();

  const horizontalSliderProps = useMemo(
    () =>
      innerWidth > 768
        ? {}
        : {
            "pagination-clickable": "true",
          },
    []
  );

  const measurementOfSizes = {
    S: { chest: 40.0, frontLength: 26.5, sleeveLength: 23.5 },
    M: { chest: 42.0, frontLength: 27.0, sleeveLength: 24.0 },
    L: { chest: 44.0, frontLength: 27.5, sleeveLength: 24.5 },
    XL: { chest: 46.0, frontLength: 28.0, sleeveLength: 25.0 },
    XXL: { chest: 48.0, frontLength: 28.5, sleeveLength: 25.5 },
  };

  const handlePrevClick = () => {
    horizontalSwiperRef.current.swiper?.slidePrev();
  };
  const handleNextClick = () => {
    horizontalSwiperRef.current.swiper.slideNext();
  };
  const images = [img_1, img_2, img_3, img_4, img_5, img_6];
  const [selectedSize, setSelectedSize] = useState(null);
  const [measurementShow, setMeasurementShow] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  useEffect(() => {
    if (selectedSize != null) {
      setMeasurementShow(true);
    }
  }, [selectedSize]);
  const selectedSizeHandler = (item) => {
    setSelectedSize(selectedSize === item ? null : item);
  };
  const handleClick = (e) => {
    onClose(e);
    setAddedToBag(true);
}

const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
        onClose(e);
    }
}
const [isAddedToCart,setIsAddedToCart]=useState(false);
const [openSizeModal,setOpenSizeModal]=useState(false);
 const handleAddedToBag = () => {
        // if (!authenticated) {
        //     return navigate('/login');
        // }
        // if (isAddedToCart) {
        //     navigate('/cart')
        // } else {
            if (selectedSize === null) {
                setOpenSizeModal(true);
            } 
            else {
                setAddedToBag();
            }
        // }
        setIsAddedToCart(()=>!isAddedToCart);
    }
    const handleWishlisted = () => {
      if (!authenticated) {
          return navigate('/LoginPage');
      }

  }
  const onClose = (event) => {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    setOpenSizeModal(false);
  };
  

  return (
    <>
    <div className="relative">

    
      <div className="flex justify-center">
        <div className="mt-[90px] flex gap-[2%] h-[620px]  w-85 border-[1px]  border-black solid">
          <div className="flex h-max sticky justify-center items-start w-[45%] border-[1px]  border-red-800 solid">
            <div className="flex gap-[5px] md:h-[470px] xl:h-[575px] overflow-hidden pb-2">
              <div className="md:w-1/5 hidden md:flex flex-col gap-2">
                <div
                  onClick={handlePrevClick}
                  className=" cursor-pointer flex items-center justify-center truncate"
                >
                  <SlArrowUp />
                </div>
                <swiper-container
                  ref={verticalSwiperRef}
                  class="myThumbSlider my-thumbs"
                  space-between="5"
                  slides-per-view={images.length < 3 ? images.length : 3}
                  loop="true"
                  direction="vertical"
                >
                  {images?.map((image, i) => (
                    <swiper-slide class="verticalSlide" key={i}>
                      <div className="">
                        <img
                          className="aspect-[4/5] object-contain md:object-cover object-center"
                          src={image || `/assets/images/banner/1.jpg`}
                          alt=""
                        />
                      </div>
                    </swiper-slide>
                  ))}
                </swiper-container>
                <div
                  onClick={handleNextClick}
                  className=" cursor-pointer flex items-center justify-center"
                >
                  <SlArrowDown />
                </div>
              </div>
              <div className="w-full md:w-4/5 ">
                <swiper-container
                  ref={horizontalSwiperRef}
                  controller-control=".verticalSwiper"
                  thumbs-swiper=".my-thumbs"
                  loop="true"
                  direction="horizontal"
                  slides-per-view="1"
                  {...horizontalSliderProps}
                >
                  {images?.map((image, i) => (
                    <swiper-slide class="horizontalSlide" key={i}>
                      <div className="">
                        <img
                          className="h-[558px] md:w-full !object-contain 
                                    md:object-cover object-center "
                          src={image || `/assets/images/banner/1.jpg`}
                          alt=""
                        />
                      </div>
                    </swiper-slide>
                  ))}
                </swiper-container>
              </div>
            </div>
          </div>
          <div className="w-[50%] pt-[20px] overflow-scroll no-scrollbar">
            <div className="">
              <p className="text-[#4f5362] text-lg font-[400]">Bewakoof®</p>
              <p className="text-[#737373] pt-2 font-[300] text-[16px]">
                Men's Black Deku Graphic Printed Oversized Hoodies
              </p>
            </div>
            <div className=" flex gap-[3px] border-[0.3px] border-[#949494] solid w-max py-[3px] px-[8px] bg-[#f7f7f7] mt-3 items-center">
              <AiFillStar className="text-[#ffc700]" />
              <span className="text-[14px] text-[#303030] font-[500]">4.5</span>
            </div>
            <div className="priceRow mt-3">
              <div className="priceContainer items-start flex flex-col justify-center">
                <div className="flex items-end justify-between">
                  <div className="sellingPrice mr-1 text-2xl font-semibold text-[#0f0f0f]">
                    <span className="rupee_icon text-base">₹</span>
                    999
                  </div>
                  <div className="discPrice mr-2 text-[#949494] text-sm line-through">
                    <span className="rupee_icon">₹</span>
                    3399
                  </div>
                  <div className="offerPerc text-[#00b852] font-medium">
                    <p>70% OFF</p>
                  </div>
                </div>
                <span className="text-xs my-1">inclusive of all taxes</span>
              </div>
              <div className="tags my-2 mr-4 w-max border border-[#737373]">
                <p className="uppercase text-xs px-2 py-1 text-[#737373] font-semibold">
                  100% COTTON
                </p>
              </div>
            </div>
            <div className="tribeContainer py-2 mt-1">
              <div className="h-[3px] w-[75%] bg-[#eee]"></div>
              <div className="tribeMsg py-4 text-xs font-medium cursor-pointer">
                <span className="text-[#333] font-[400]">
                  TriBe members get an extra discount of <strong>₹20</strong>{" "}
                  and FREE shipping.{" "}
                </span>
                <span className="text-[#42a2a2]">Learn more</span>
              </div>
              <div className="h-[3px] w-[75%] bg-[#eee]"></div> 
              <div className="">
              <div className="colorsDiv ml-[10px]">
            <div className="colorName text-sm font-bold text-[#333] mb-3 w-max"><label>COLOUR OPTIONS: </label></div>
            <div className={`multiColorDiv flex items-center justify-start`}>
                        <div 
                        className="testColorBlock cursor-pointer rounded-lg 
                        md:rounded-full w-10 h-10 mr-3 mb-3 border 
                        border-[#ebebeb] bg-black shadoweffect">
                        </div>

            </div>
        </div>
              </div>
              <div className="sizeName text-xs w-[75%] flex items-center justify-between font-bold text-[#333] my-2">
                <p>SELECT SIZE </p>
                <div className="font-bold cursor-pointer text-[#42a2a2]">
                  Size Guide
                </div>
              </div>
              <div className="flex">
                {sizes.map((item) => (
                  <div
                    className={`text-sm cursor-pointer rounded-md w-[46px] h-[46px] mr-3 mb-3 px-5 border-1 
      ${
        selectedSize === item
          ? "bg-black text-white border-[1px] border-[#42a2a2] solid"
          : "bg-white text-black border-[1px] border-[#000000] solid"
      } 
      solid flex items-center justify-center hover:border-[1px] hover:border-[#42a2a2] solid`}
                    onClick={() => selectedSizeHandler(item)}
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
              {measurementShow && (
                <div className="flex mt-2 w-[75%]">
                  <div className="garmentDetails text-xs flex flex-wrap font-medium">
                    <p className="w-full md:w-max">Garment: </p>
                    <div className="specification flex border-[#0000005a] md:border-r px-2">
                      <p className="specificationName text-[#878787] mr-1">
                        Chest (in Inch):
                      </p>
                      <p className="text-black">
                        {measurementOfSizes[selectedSize]?.chest.toFixed(1)}
                      </p>
                    </div>
                    <div className="specification flex border-[#0000005a] md:border-r px-2">
                      <p className="specificationName text-[#878787] mr-1">
                        Front Length (in Inch):
                      </p>
                      <p className="text-black">
                        {measurementOfSizes[selectedSize]?.frontLength.toFixed(
                          1
                        )}
                      </p>
                    </div>
                    <div className="specification flex border-[#0000005a] md:px-2">
                      <p className="specificationName text-[#878787] mr-1">
                        Sleeve Length (in Inch):
                      </p>
                      <p className="text-black">
                        {measurementOfSizes[selectedSize]?.sleeveLength.toFixed(
                          1
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
    <div
                className="addButtons fixed bottom-0 left-0 z-50 md:z-0
 h-14 w-full md:static md:mb-5 flex shadow-md md:shadow-none rotate-180 
 md:rotate-0 gap-4 p-2 pb-[10px] md:p-0 items-center justify-between font-medium"
              >
                <button
                  onClick={handleAddedToBag}
                  className="h-11 rotate-180 md:rotate-0 flex-1 bg-[#ffd84d] 
                  flex items-center md:rounded-none justify-center rounded-sm hover:shadow-md transition-all"
                >
                  {isAddedToCart ? (
                    <img className="w-5 h-5" src={bag_black_img} alt="bag" />
                  ) : (
                    <img className="w-5 h-5" src={bag_white_img} alt="bag" />
                  )}
                  <p className="text-black text-sm pl-2">
                    {isAddedToCart ? "GO" : "ADD"} TO BAG
                  </p>

                 
                </button>
                <button
                  onClick={handleWishlisted}
                  className={`h-11 hidden md:flex flex-1 items-center justify-center border rounded-sm hover:shadow-md transition-all ${
                    wishlisted ? "border-black" : ""
                  }`}
                >
                  {wishlisted ? (
                    <img className="w-6 h-6" src={wishlisted_img} alt="bag" />
                  ) : (
                    <img className="w-6 h-6" src={wishlist_img } alt="bag" />
                  )}
                  <p
                    className={`${
                      wishlisted ? "text-black" : "text-[#949494]"
                    } text-sm pl-2`}
                  >
                    {wishlisted ? "WISHLISTED" : "WISHLIST"}
                  </p>
                </button>
              </div>


            



            </div>
          </div>
        </div>
      </div>
      {openSizeModal && (
                      <div className="z-10 absolute top-[0px] flex justify-center items-center  w-full h-full left-[0px] bg-[#0000007a]">
                        <div
                          className=" top-[90px]l bg-[#0000007a] relative flex flex-col justify-end md:justify-center"
                          onClick={handleModalClose}
                        >
                      </div>
                      <div className="popup bg-white rounded-2xl md:rounded-xl md:overflow-hidden w-full mt-auto md:m-auto md:max-w-lg">
                        <div className="flex flex-col items-center p-4">
                          <div className="bar w-10 h-[2px] bg-[#4e5664] mb-3 rounded-xl"></div>
                          <div className="titleIconContainer flex items-center justify-between w-full">
                            <h1 className="popupTitle text-sm font-bold text-[#292d35]">
                              Choose your perfect fit!
                            </h1>
                            <span className="opacity-70" onClick={onClose}>
                              <AiOutlineClose className="w-6 h-6" />
                            </span>
                          </div>
                        </div>
                        <div className=" bg-[#f2f2f4] p-2 md:p-0">
                          <div className="bg-white p-4">
                          <div className="flex">
                {sizes.map((item) => (
                  <div
                    className={`text-sm cursor-pointer rounded-md w-[46px] h-[46px] mr-3 mb-3 px-5 border-1 
      ${
        selectedSize === item
          ? "bg-black text-white border-[1px] border-[#42a2a2] solid"
          : "bg-white text-black border-[1px] border-[#000000] solid"
      } 
      solid flex items-center justify-center hover:border-[1px] hover:border-[#42a2a2] solid`}
                    onClick={() => selectedSizeHandler(item)}
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
                            <button
                              disabled={selectedSize === null}
                              onClick={handleClick}
                              className={`uppercase cursor-pointer h-10 w-full font-medium 
                              border-none outline-none flex justify-center mt-2 items-center 
                              rounded-md text-white bg-[#42a2a2] hover:bg-opacity-80`}
                            >
                              DONE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
    </div>
    </>
  );
}

export default ProductDetailsPage;
