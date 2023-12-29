import "react-multi-carousel/lib/styles.css";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import classNames from "classnames";
import {
  genders,
  sizes,
  subCategories,
  brands,
  colorMappings,
} from "../TypeConstants";
import img_1 from "../../assets/bw-demo-1.webp";
import img_2 from "../../assets/bw-demo-2.webp";
import img_3 from "../../assets/bw-demo-3.webp";
import { CiHeart } from "react-icons/ci";
import empty_heart from "../../assets/wishlist_page/wishlist.svg"
import red_heart from "../../assets/wishlist_page/wishlisted.svg"
import { FaStar } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import SuggestionCarousel from "./SuggestionCarousel";
import Loader from "../Loader";
import { dressList } from "../ApiFetch";
// import { useAppDispatch } from '../../Store'
import { useSelector, useDispatch } from 'react-redux'
import { applyFilters, selectProductsByFilter } from "./Slices/FilterSlice";
import FilterComponent from "./FilterComponent";

function ProductListPage() {
  const location = useLocation();
  const name = location.state?.name;
  const brand = location.state?.brand;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterQuery,updateFilterQuery] = useState({})
  const [counter,setCounter] = useState(1);
  const [tempArr, setTempArr] = useState([]);
  const [productCategory,setProductCategory]=useState('');
  // const filteredProducts = useSelector((state) => selectProductsByFilter(state, {}))
  
  const {getProductByFilters} = useSelector((state) => state.productFilter);

console.log("fil",getProductByFilters);

let filteredByTagsId = [];

  const [sortContainerDisplay, setSortContainerDisplay] = useState(false);
  const [productList, setProductList] = useState([]);
  const [isWishListClicked,setIsWishListClicked] = useState(false);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dressList();
        setProductList(data.data);
        if (localStorage.getItem("userInfo")) {
          // setUserLoggedIn(true);
          const storedValue = JSON.parse(localStorage.getItem("user"));
          // setUserName(storedValue.name);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setLoading(true);
    fetchData();
  }, []);  


  // useEffect(()=>{
  //   if(counter!=1){
  //     dispatch(applyFilters(filterQuery));
  //   }
   
  // },[filterQuery])

 

  function handleFilter(filter){
    const nonEmptyArrays = Object.fromEntries(
      Object.entries(filter).filter(([key, value]) => value.length > 0)
    );

    dispatch(applyFilters(nonEmptyArrays));
    updateFilterQuery(nonEmptyArrays);
    setCounter(2);
  }


  let filteredProductList = [];
  function filterSet() {
    // if(filteredProducts==undefined){
      if (name === undefined && brand === undefined){
        setProductCategory(location.pathname.split("/")[2]);
        if (subCategories.includes(location.pathname.split("/")[2])) {
          filteredProductList = productList.filter(
            (product) => product.subCategory === location.pathname.split("/")[2] 
          );
          setTempArr(filteredProductList);
        } else if (genders.includes(location.pathname.split("/")[2])) {
          filteredProductList = productList.filter(
            (product) => product.gender === location.pathname.split("/")[2] 
          );
          setTempArr(filteredProductList);
        }
      } else if (brand !== undefined) {
        filteredProductList = productList.filter(
          (product) =>
            product.brand == brand.split("/")[1] &&
            product.gender === brand.split("/")[0] 
        );
        setTempArr(filteredProductList);
      } else if (name !== undefined) {
        filteredProductList = productList.filter(
          (product) =>
            product.subCategory == name.split("/")[1] &&
            product.gender === name.split("/")[0] 
        );
        setTempArr(filteredProductList);
      }
    // }

  }
  
  function wishListHandler(event){
    event.preventDefault();
   event.stopPropagation();
      if(localStorage.getItem("userInfo")){
        setIsWishListClicked((prevIsWatchListClicked)=>!prevIsWatchListClicked);
      }else{
          navigate("/LoginPage");
      }
  }
  
  useEffect(()=> {
    filteredByTagsId.length=0;
    setTempArr(getProductByFilters);
  }, [filterQuery, getProductByFilters])

  useEffect(()=> {
    filterSet();
  }, [productList,location.pathname])


  // console.log("wishlist",isWishListClicked);
  console.log("tempArray",tempArr);

    // useEffect(()=>{
      
    //   setTimeout(() => {
    //     if (filteredProducts !== undefined) {
    //       setTempArr(filteredProducts);
    //       console.log("filterquerychanged");
    //     } else {
    //       setTempArr(filteredProductList);
    //     }
    //   }, 1000)

    // },[filteredProducts])

  return (
    <>
   
    
      <div className="flex justify-center">
        <div className="w-85 flex flex-col justify-left mt-[100px] ">
      
      { 
      loading?(
        <div className="mt-[30px]">
          <Loader/>
        </div>
      ):(
        <div className="">
           {/* <div className="gap-2 flex pl-[10px] text-[#333] font-[300] text-[12px]">
            <p className="">Home</p>
            <p className="">/</p>
            <p className=""> {productCategory}</p>
          </div> */}

          <div className="my-[30px] pl-[10px]  flex flex-col justify-left ">
            {/* heading wrapper */}
            <div className="text-[24px] text-[#2d2d2d] font-[900]">
              <p className="underline w-10/12 decoration-[#fdd835] decoration-[2px] underline-offset-[12px]">
                {productCategory.toUpperCase()} 
                {/* ssss */}
              </p>
            </div>

            {/* accordion and prouduct card */}
            <div className="flex mt-[40px] ">
              <div className="w-[25%] ">
                <p className="text-[rgba(45,45,45,.5)] text-[12px] font-[900] pl-[20px] py-[10px]">
                  FILTERS
                </p>
             <FilterComponent onFilterChange={handleFilter}/>
              </div>
              <div className="relative pl-[5px] w-[80%] pt-[10px] flex flex-col items-center ">
                <div className=" flex w-[89%] pb-[15px] pr-[10px] ml-[20px]  flex-row-reverse">
                 
                  <div
                    className="flex flex-row-reverse gap-[5px]"
                    onMouseEnter={() => setSortContainerDisplay(true)}
                    onMouseLeave={() => setSortContainerDisplay(false)}
                  >
                    <IoChevronDown />
                    <p className="text-[#2d2d2d] text-[12px] pl-[8px] font-[300]">
                      Popular
                    </p>
                    <p className="text-[rgba(45,45,45,.5)] font-[900] text-[12px]">
                      SORT BY
                    </p>
                  {sortContainerDisplay && (
                  <div
                    className="absolute min-w-[145px] z-30 py-[17px] border-[1px] border-[#ccc] solid
                 top-[45px] right-[40px] shadow-[0_4px_8px_0_rgba(0,0,0,.2)] bg-white pl-[10px]
                  text-[rgba(45,45,45,.7)] text-[12px]"
                  >
                    <p
                      className="my-[5px] text-[rgb(81,204,204)] transition 300 
                          hover:bg-[#f7f7f7]"
                    >
                      Popular
                    </p>
                    <p
                      className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                    >
                      New
                    </p>
                    <p
                      className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                    >
                      Price : High to Low
                    </p>
                    <p
                      className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                    >
                      Price : Low to High
                    </p>
                  </div>
                )}
                  </div>
                  </div>
              {/* product card */}
              
                <div className="flex flex-wrap justify-center gap-[10px]">
                {Array.isArray(tempArr) ? (         
                  tempArr.length > 0 ? (
                    tempArr.map((product) => (
                      <Link key={product._id} to={{ pathname: `/ProductDetailsPage/${product._id}` }}>
                        <div key={product._id} className="w-[266px]">
                          <div className="relative flex overflow-hidden">
                            <img
                              className="w-[266px] fog h-[330px] hover:scale-105 transition-all duration-[200ms] ease-in-out"
                              src={product.displayImage}
                              alt="image"
                            />
                            <div className="flex items-center gap-[5px] py-[1px] pl-[8px] pr-[4px] absolute bottom-5 bg-white">
                              <FaStar className="text-[#ffc700] text-[9px]" />
                              <p className="text-[#337ab7] text-[10px]">{product.ratings.toFixed(1)}</p>
                            </div>
                          </div>

                          <div className="relative">
                            <div className="absolute mt-[15px] right-[4px] text-[25px]">
                              {(!isWishListClicked) ? (
                                <img src={empty_heart} alt="" />
                              ) : (
                                <img src={red_heart} alt="" />
                              )}
                            </div>
                            <p className="mt-[5px] text-[#4f5362] text-[12px] leading-[15px] font-[550]">
                              {product.brand}
                            </p>
                            <p className="mt-[5px] w-[85%] truncate text-[#737373] text-[10px] leading-[12px] font-[550]">
                              {product.name}
                            </p>
                            <div className="flex gap-[5px] mt-[5px] items-center text-[16px] leading-[14px]">
                              <p>₹<strong>{product.price}</strong></p>
                              <p className="line-through text-[#949494] text-[12px]">
                                {Math.round(product.price * 0.5 + product.price)}
                              </p>
                            </div>
                            <p className="text-[#525252] mt-[8px] text-[10px] px-[8px] py-[2px]">
                              ₹{Math.round(product.price - product.price * 0.1)} for triBE Members
                            </p>
                            <p className="w-max border-[1px] border-[rgb(115,115,115)] my-[12px] solid text-[rgb(115,115,115)] p-[1px] text-[10px]">
                              {product.sellerTag}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p>Loading.....</p>
                  )
                ) : null}

                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }  

          {/* <div className="">
          <SuggestionCarousel productList={productList}/>
          </div> */}
        </div>
      </div>
      
    </>
  );
}

export default ProductListPage;
