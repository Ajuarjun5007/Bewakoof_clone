import "swiper/element/css/autoplay";
import "swiper/element/css/thumbs";
import "swiper/element/css/navigation";
import { register } from "swiper/element/bundle";
import React from "react";
import classNames from "classnames";
import img_1 from "../../assets/bw-demo-1.webp";
import img_2 from "../../assets/bw-demo-2.webp";
import img_3 from "../../assets/bw-demo-3.webp";
import img_4 from "../../assets/bw-demo-1.webp";
import img_5 from "../../assets/bw-demo-2.webp";
import img_6 from "../../assets/bw-demo-3.webp";
import { colorMappings } from "../../Components/TypeConstants";
import * as Accordion from "@radix-ui/react-accordion";
import location_img from "../../assets/location.svg";
import wishlist_img from "../../assets/wishlist_page/wishlist.svg";
import wishlisted_img from "../../assets/wishlist_page/wishlisted.svg";
import bag_white_img from "../../assets/wishlist_page/bag-white.svg";
import bag_black_img from "../../assets/wishlist_page/bag-blck.svg";
import rupee_img from "../../assets/rupee_icon.webp";
import globe_img from "../../assets/globe.svg";
import easy_returns_img from "../../assets/easy-returns.svg";
import badge_trust_img from "../../assets/badge-trust.svg";
import { AiFillStar } from "react-icons/ai";
import list_img from "../../assets/list-accordion.svg";
import tofro_img from "../../assets/tofro-accordion.svg";
import { AiOutlineClose } from "react-icons/ai";
import "./ProductPage.css";
import { useEffect, useState } from "react";
import "swiper/element/css/pagination";
import "swiper/element/css/controller";
import { useMemo, useRef } from "react";
import { productDetail } from "./ProductService";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./ProductPage.css";
import { sizes } from "../../Components/TypeConstants";
import { useParams, useNavigate, Link } from "react-router-dom";
import Loader from "../Loader";
import ReviewWrapper from "./ReviewComponent/ReviewWrapper";
import { useScreenSize } from "../../Components/MobileComponent/useScreenSize";
register();
import { useSelector, useDispatch } from "react-redux";
import {
  applyFilters,
  getProductList,
  getWishListOperations,
  getCartOperations,
} from "./Slices/FilterSlice";
function ProductDetailsPage() {
  const verticalSwiperRef = useRef();
  const horizontalSwiperRef = useRef();
  const params = useParams();
  const dispatch = useDispatch();

  let Id = params?.id;
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const horizontalSliderProps = useMemo(
    () =>
      innerWidth > 767
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
  const demoimages = [img_1, img_2, img_3, img_4, img_5, img_6];
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQty, setSelectedQty] = useState(1);
  const [measurementShow, setMeasurementShow] = useState(false);
  const [productInfo, setProductInfo] = useState([]);
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
    // setAddedToBag(true);
  };
  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [wishListed, setWishListed] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState();

  const [pincodeDetails, setPincodeDetails] = useState(null);

  const validateZip = (zip) => {
    return !isNaN(zip) && zip.length === 6;
  };

  let {cartList, isLoading: LoadingCheck} = useSelector((state) => state.productReducer);

  let cartListItems =  !LoadingCheck && cartList?.data?.items?.map((item)=>{
        return item;
  })
  let cartListId = !LoadingCheck && cartListItems?.map((item)=>{
     return  item.product._id;
  }) 

console.log("cartListId",cartListId);
console.log("cartListItems",cartListItems);
const screenSize = useScreenSize();
  const onClose = (event) => {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    setOpenSizeModal(false);
  };

  const getPincodeDetails = (e) => {
    e?.preventDefault && e.preventDefault();
    if (!validateZip(value)) return;
    fetch(`https://api.postalpincode.in/pincode/${value}`)
      .then((res) => res.json())
      .then((data) => {
        const postDetails = data?.[0]?.PostOffice?.[0];
        if (!postDetails) {
          setError("Enter a valid pincode");
        } else {
          setError("");
          setPincodeDetails(postDetails);
          window.localStorage.setItem(
            "bewakoof_pincode_details",
            JSON.stringify(postDetails)
          );
        }
      });
  };

  const checkErrors = (e) => {
    const { value } = e.target;
    setError(() => (validateZip(value) ? "" : "Enter a valid pincode"));
  };

  const resetError = () => {
    setError("");
  };

  const resetPincodeDetails = () => {
    setPincodeDetails(null);
    window.localStorage.setItem("bewakoof_pincode_details", null);
  };

  const ProductDescription = ({ description }) => {
    return <div dangerouslySetInnerHTML={{ __html: description }} />;
  };

  let wishListResult = useSelector((state) =>
    state.productReducer.wishList?.data?.items?.map(
      (item) => item?.products._id || item?.products
    )
  );


  function wishListHandler(event, Id) {
    event.stopPropagation();
    event.preventDefault();
    console.log("ID", Id);
    if (localStorage.getItem("userInfo")) {
      if (wishListResult?.includes(Id)) {
        dispatch(
          getWishListOperations({
            id: Id,
            type: "DELETE",
            tokenValue: JSON.parse(localStorage.getItem("userInfo"))[0],
            suffix: Id,
          })
        );
      } else {
        dispatch(
          getWishListOperations({
            id: Id,
            type: "PATCH",
            tokenValue: JSON.parse(localStorage.getItem("userInfo"))[0],
            suffix: Id,
          })
        );
      }
    } else {
      navigate("/LoginPage");
    }
  }
  function cartListHandler(event, Id, selectedSize) {
    // event.stopPropagation();
    // event.preventDefault();

    if (localStorage.getItem("userInfo")) {
      if (cartListId && !cartListId?.includes(Id)) {
        dispatch(
          getCartOperations({
            id: Id,
            size: selectedSize,
            type: "PATCH",
            tokenValue: JSON.parse(localStorage.getItem("userInfo"))[0],
            suffix: Id,
            qty:1,
          })
        );
      }else{
        // navigate("/CartPage")
      } 
    } else {
      navigate("/LoginPage");
    }
  }
  const handleAddedToBag = (Id, event, selectedSize) => {

    if (!localStorage.getItem("userInfo")) {
      navigate("/LoginPage");
    }
    if (selectedSize === null) {
      setOpenSizeModal(true);
    } else {
      console.log("dddq");
      cartListHandler(event, Id, selectedSize);
    }

    // if (isAddedToCart) {
    //   navigate("/CartPage");
    // }
  };


  useEffect(() => {
    const pincodeDetails = JSON.parse(
      window.localStorage.getItem("bewakoof_pincode_details")
    );
    setPincodeDetails(pincodeDetails);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (Id !== undefined) {
      productDetail(Id).then((res) => {
        setProductInfo(res?.data);
        console.log("mag",res?.data?.images);
        setImages(res?.data?.images);
        setIsLoading(false);
      });
    }
  }, [params]);
  let isMobile = screenSize < 767;
  return (
    <>
      <div className="relative">
        <div className="flex justify-center">
          <div className="mt-[90px] flex gap-[2%] h-[620px]  w-85 max-[767px]:w-[90%] max-[767px]:h-full max-[767px]:flex-col">
            <div className="flex h-max sticky  items-start w-[45%]  max-[767px]:w-[100%] ">
              {!isLoading ? (
                <div className="flex gap-[5px] md:border-2 md:border-yellow-200 justify-start h-[575px] overflow-hidden pb-2 ">
                  {
                    !isMobile && 
                  <div className="w-[200px] overflow-hidden  md:flex flex-col gap-2">
                    <div
                      onClick={() => handlePrevClick()}
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
                      {images?.slice(0,5).map((image, i) => (
                        <swiper-slide class="verticalSlide" key={i}>
                          <div className="">
                            <img
                              className="  object-contain md:object-cover object-center"
                              src={image}
                              alt=""
                            />
                          </div>
                        </swiper-slide>
                      ))}
                    </swiper-container>
                    <div
                      onClick={() => handleNextClick()}
                      className=" cursor-pointer flex items-center justify-center"
                    >
                      <SlArrowDown />
                    </div>
                  </div>
                  }
                  <div className="mainSlider">
                    <swiper-container
                      ref={horizontalSwiperRef}
                      controller-control=".verticalSwiper"
                      thumbs-swiper=".my-thumbs"
                      loop="true"
                      direction="horizontal"
                      slides-per-view="1"
                      {...horizontalSliderProps}
                    >
                      {images?.slice(0,5).map((image, i) => (
                        <swiper-slide class="horizontalSlide" key={i}>
                          <div className="">
                            <img
                              className="h-[558px] md:w-full 
                                   object-cover object-center"
                              src={image}
                              alt=""
                            />
                          </div>
                        </swiper-slide>
                      ))}
                    </swiper-container>
                  </div>
                </div>
              ) : (
                <Loader />
              )}
            </div>
            <div className="w-[50%] max-[768px]:w-[100%] pt-[20px] overflow-scroll max-[768px]:overflow-scroll no-scrollbar">
              {/* <div className=""> */}
              <div className="flex justify-between items-center">
                <p className="text-[#4f5362] text-lg font-[400]">
                  {productInfo.brand}
                </p>
                  {/* <img
                  className="h-10"
                   src={wishlist_img} alt="" /> */}
                   <button 
                   className=""
                   onClick={(event) => {
                    wishListHandler(event, Id);
                  }}
                   >
                      {wishListResult?.includes(Id) ? (
                      <img className="h-10" src={wishlisted_img} alt="bag" />
                    ) : (
                      <img className="h-10" src={wishlist_img} alt="bag" />
                    )}
                   </button>
                </div>
                <p className="text-[#737373] pt-2 font-[300] text-[16px]">
                  {productInfo.name}
                </p>
                
              {/* </div> */}
              <div className=" flex gap-[3px] border-[0.3px] border-[#949494] solid w-max py-[3px] px-[8px] bg-[#f7f7f7] mt-3 items-center">
                <AiFillStar className="text-[#ffc700]" />
                <span className="text-[14px] text-[#303030] font-[500]">
                  {productInfo.ratings?.toFixed(1)}
                </span>
              </div>
              <div className="priceRow mt-3">
                <div className="priceContainer items-start flex flex-col justify-center">
                  <div className="flex items-end justify-between">
                    <div className="sellingPrice mr-1 text-2xl font-semibold text-[#0f0f0f]">
                      <span className="rupee_icon text-base">₹</span>
                      {productInfo.price}
                    </div>
                    <div className="discPrice mr-2 text-[#949494] text-sm line-through">
                      <span className="rupee_icon">₹</span>
                      {Math.round(productInfo.price * 0.5 + productInfo.price)}
                    </div>
                    <div className="offerPerc text-[#00b852] font-medium">
                      <p>
                        {Math.round(
                          ((productInfo.price * 0.5 +
                            productInfo.price -
                            productInfo.price) /
                            (productInfo.price * 0.5 + productInfo.price)) *
                            100
                        )}
                        % OFF
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] my-1">
                    inclusive of all taxes
                  </span>
                </div>
                <div className="tags my-2 mr-4 w-max border border-[#737373]">
                  <p className="uppercase text-[11px] px-2 py-1 text-[#737373] font-semibold">
                    100% COTTON
                  </p>
                </div>
              </div>
              <div className="tribeContainer py-2 mt-1">
                <div className="h-[3px] w-[75%] max-[767px]:w-[100%] bg-[#eee]"></div>
                <div className="tribeMsg py-4 text-[11px] font-medium cursor-pointer">
                  <span className="text-[#333] font-[400]">
                    TriBe members get an extra discount of <strong>₹20</strong>{" "}
                    and FREE shipping.{" "}
                  </span>
                  <span className="text-[#42a2a2]">Learn more</span>
                </div>
                <div className="h-[3px] w-[75%] max-[767px]:w-[100%] bg-[#eee]"></div>
                <div className="">
                  <div className="colorsDiv ml-[10px]">
                    <div className="colorName text-sm font-bold text-[#333] mb-3 w-max">
                      <label>COLOUR OPTIONS: </label>
                    </div>
                    <div
                      className={`multiColorDiv flex items-center justify-start`}
                    >
                      <div
                        style={{
                          backgroundColor: colorMappings[productInfo.color],
                        }}
                        className="testColorBlock cursor-pointer rounded-lg  md:rounded-full w-[35px] h-[35px] 
  mr-3 mb-3 border border-[#ebebeb]  shadoweffect"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="sizeName text-[11px] w-[75%] max-[767px]:w-[100%] flex items-center justify-between font-bold text-[#333] my-2">
                  <p>SELECT SIZE </p>
                  <div className="font-bold cursor-pointer  text-[#42a2a2]">
                    Size Guide
                  </div>
                </div>
                <div className="flex">
                  {productInfo.size?.map((item) => (
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
                    <div className="garmentDetails text-[11px] flex flex-wrap font-medium">
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
                          {measurementOfSizes[
                            selectedSize
                          ]?.frontLength.toFixed(1)}
                        </p>
                      </div>
                      <div className="specification flex border-[#0000005a] md:px-2">
                        <p className="specificationName text-[#878787] mr-1">
                          Sleeve Length (in Inch):
                        </p>
                        <p className="text-black">
                          {measurementOfSizes[
                            selectedSize
                          ]?.sleeveLength.toFixed(1)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <div
                  className="buttonsContainer"  
                >
                  <button
                    onClick={(event) =>
                      handleAddedToBag(Id, event, selectedSize)
                    }
                    className="cartButton border rounded-sm  transition-all"
                  >
                    {!LoadingCheck && cartListId?.includes(Id) ? (
                      <Link to="/CartPage">
                        <img
                          className="w-5 h-5"
                          src={bag_black_img}
                          alt="bag"
                        />
                      </Link>
                    ) : (
                      <img className="w-5 h-5" src={bag_white_img} alt="bag" />
                    )}
                    
                      {!LoadingCheck && cartListId?.includes(Id)?(
                          <Link to="/CartPage">
                        <p className="text-black font-[400] text-sm pl-2">
                        GO TO BAG
                        </p>
                        </Link>
                      ):(
                        <p className="text-black font-[400] text-sm pl-2">
                        ADD TO BAG
                        </p>
                      )
                    }
                  </button>

                  {/* wishlist */}

                  <button
                    onClick={(event) => {
                      wishListHandler(event, Id);
                    }}
                    className="wishListBtn border hover:shadow-md transition-all rounded-sm"
                  
                  >
                    {wishListResult?.includes(Id) ? (
                      <img className="w-6 h-6" src={wishlisted_img} alt="bag" />
                    ) : (
                      <img className="w-6 h-6" src={wishlist_img} alt="bag" />
                    )}
                    <p
                      className={`${
                        wishListResult?.includes(Id)
                          ? "text-black"
                          : "text-[#949494]"
                      } text-sm pl-2`}
                    >
                      {wishListResult?.includes(Id) ? "WISHLISTED" : "WISHLIST"}
                    </p>
                  </button>
                </div>
                <div className="h-[3px] w-[75%] max-[767px]:w-[100%] bg-[#eee]"></div>
                <div className=" w-[75%] ">
                  <div className="checkPincode mt-1 mb-4">
                    <div className="checkPincodeHeader text-[#2d2d2d] text-[11px] p-2 pl-0 flex items-center gap-1">
                      <img
                        className="w-6 h-6 object-cover"
                        src={location_img}
                        alt=""
                      />
                      <span className="font-bold">
                        CHECK FOR DELIVERY DETAILS
                      </span>
                    </div>

                    {/* <PincodeCheckForm /> */}
                    <div className="flex flex-col-reverse sm:flex-row justify-between">
                      <div className=" font-bold py-2 text-[11px] flex flex-wrap items-center mb-2">
                        <span>Delivering in</span>
                        <span className="text-[#207bb4] px-1">
                          {" "}
                          {pincodeDetails
                            ? `${pincodeDetails?.Name}, ${pincodeDetails?.District} ${pincodeDetails?.Pincode}`
                            : "India"}
                        </span>
                        <img
                          className="w-4 h-4 m-1 mt-0 rounded-full object-cover"
                          src="/assets/icons/india-flag.png"
                          alt=""
                        />
                      </div>
                      {pincodeDetails && (
                        <button
                          onClick={resetPincodeDetails}
                          className=" text-[#207bb4] text-[11px] font-bold sm:px-3 my-2 self-end sm:self-start"
                        >
                          CHANGE
                        </button>
                      )}
                    </div>
                    {pincodeDetails ? (
                      <div className="flex items-center gap-2">
                        <img
                          className="w-5 h-5 object-contain"
                          src={rupee_img}
                          alt=""
                        />
                        <p className="text-[11px] font-bold">
                          Cash on Delivery is{" "}
                          {pincodeDetails?.DeliveryStatus === "Non-Delivery"
                            ? "not "
                            : ""}{" "}
                          available.
                        </p>
                      </div>
                    ) : (
                      <form
                        onSubmit={getPincodeDetails}
                        className={`flex items-center rounded-md 
                    p-[2px] border focus-within:border-[#fdd835] 
                    border-[#0000005a] ${
                      error ? "border border-[#db3236]" : ""
                    }`}
                      >
                        <input
                          type="text"
                          value={value}
                          onBlur={checkErrors}
                          onFocus={resetError}
                          placeholder="Enter Pincode"
                          onChange={(e) => setValue(e.target.value)}
                          className={`flex-1 p-2 border-none outline-none text-[11px] font-semibold`}
                        />
                        <button className=" text-[#207bb4] text-[11px] font-semibold px-3">
                          CHECK
                        </button>
                      </form>
                    )}
                    {error && (
                      <p className="error text-[11px] py-2 text-[#db3236]">
                        {error}
                      </p>
                    )}
                  </div>
                </div>
                <div className="h-[3px] w-[75%] max-[767px]:w-[100%]  bg-[#eee]"></div>
                <div className="productDescription">
                  <Accordion.Root
                    className=" rounded-md flex flex-col max-[281px]:gap-4"
                    type="single"
                    collapsible
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="">
                        <div className="flex gap-2 max-[281px]:gap-4 ">
                          <img src={list_img} alt="" />
                          <div className=" flex flex-col items-start justify-left">
                            <p className="font-bold text-sm max-[281px]:text-[12px]">
                              Product Description
                            </p>
                            <p className="text-[11px] text-[#878787]">
                              Manufacture, Care and Fit
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      {/* {productInfo?.description} */}

                      <AccordionContent classNames="data-set=[closed]">
                        <div className=" py-[10px]">
                          <ProductDescription
                            description={productInfo?.description}
                          />
                          <strong> Country of Origin - </strong> India
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        <div className="flex gap-2">
                          <img src={tofro_img} alt="" />
                          <div className="flex flex-col items-start justify-left">
                            <p className="font-bold text-sm max-[281px]:text-[12px]">
                              15 Days Returns & Exchange
                            </p>
                            <p className="text-[11px] text-[#878787] max-[281px]:text-[9px]">
                              Know about return & exchange policy
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent classNames="data-set=[closed]">
                        Easy returns upto 15 days of delivery. Exchange
                        available on select pincodes
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion.Root>
                </div>
                <div className=" py-10 flex gap-2 text-center">
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      className="w-[35px] h-[35px] object-cover"
                      src={badge_trust_img}
                      alt=""
                    />
                    <span className="font-semibold text-[11px] text-[#8f98a9]">
                      100% SECURE PAYMENTS
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      className="w-[35px] h-[35px] object-cover"
                      src={easy_returns_img}
                      alt=""
                    />
                    <span className="font-semibold text-[11px] text-[#8f98a9]">
                      EASY RETURNS & QUICK REFUNDS
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      className="w-[35px] h-[35px] object-contain"
                      src={globe_img}
                      alt=""
                    />
                    <span className="font-semibold text-[11px] text-[#8f98a9]">
                      SHIPPING GLOBALLY
                    </span>
                  </div>
                </div>
                <div className="">
                  <ReviewWrapper productId={Id} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {openSizeModal && (
          <div className="z-50 absolute top-[0px]  flex justify-center 
          items-center  w-full h-full left-[0px] bg-[#0000007a]">
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
                    {productInfo.size.map((item) => (
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

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "focus-within:shadow-mauve12 w-[75%] max-[768px]:w-[100%] border-b-[2px] border-[#eee] solid overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-1 ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "AccordionTrigger text-[#333]  font-[500] shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between  px-5 text-sm leading-none  outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}

        <div className="icons"></div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        " data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp  overflow-hidden text-[12px] text-[#333]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

export default ProductDetailsPage;
