import "react-multi-carousel/lib/styles.css";
import "../ProductComponent/ProductPage.css"
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import {
  genders,
  sizes,
  subCategories,
  brands,
  colorMappings,
} from "../TypeConstants";
import empty_heart from "../../assets/wishlist_page/wishlist.svg";
import red_heart from "../../assets/wishlist_page/wishlisted.svg";
import { FaStar } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import Loader from "../Loader";

import { useSelector, useDispatch } from "react-redux";
import {
  applyFilters,
  getProductList,
  getWishListOperations,
} from "./Slices/FilterSlice";
import FilterComponent from "./FilterComponent";
import ComingSoon from "../ComingSoon";
import { useScreenSize } from "../MobileComponent/useScreenSize";
import MobileFilter from "../MobileComponent/MobileFilter";
function ProductListPage() {
  
  const location = useLocation();
  // const history = useHistory();
  const screenSize = useScreenSize();
    const {state} =  location;
    console.log("loca",location);
  // const { state } = location;
  const { name, brand, MenuContent, searchResults } = state || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tempArr, setTempArr] = useState([]);
  const [productCategory, setProductCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeSortTag, setActiveSortTag] = useState("");
  const [sortContainerDisplay, setSortContainerDisplay] = useState(false);
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    window.scrollTo(0,0);
  },[])
  const productListResult = useSelector(
    (state) => state.productReducer.dressList
  );
  const searchValueResult = useSelector(
    (state) => state?.productReducer?.searchValueList
  );
  const [selectedFilters, setSelectedFilters] = useState({
    size: null,
    subCategory: null,
    color: null,
    brand: null,
    ratings: null,
  });

  function sortByFilterChange(filterTag) {
    // console.log("filtettag",filterTag);
    let filteredProducts;
    switch (filterTag) {
      case "top rated":
        filteredProducts = tempArr.filter((item) => item.sellerTag === filterTag);
        break;
      case "new arrival":
        filteredProducts = tempArr.filter((item) => item.sellerTag === filterTag);
        break;
      case "price:low to high":
        filteredProducts = [...tempArr].sort((item1, item2) => item1.price - item2.price);
        break;
      case "price:high to low":
        filteredProducts = [...tempArr].sort((item1, item2) => item2.price - item1.price);
        break;
      default:
        filteredProducts = tempArr;
        break;
    }
    console.log("setAray");
    setTempArr(filteredProducts);
    setActiveSortTag(filterTag);
  }
  const productList = productListResult?.data;
   console.log("prod",productList);
  const handleFilterChange = (updatedValues) => {
    setSelectedFilters((prevFilters) => ({
      size: updatedValues.size || prevFilters.size,
      subCategory: updatedValues.subCategory || prevFilters.subCategory,
      color: updatedValues.color || prevFilters.color,
      brand: updatedValues.brand || prevFilters.brand,
      ratings: updatedValues.ratings || prevFilters.ratings,
    }));
  };

  let filteredProductList = [];
  function filterSet() {
    if (
      name === undefined &&
      brand === undefined &&
      MenuContent === undefined &&
      searchResults === undefined
    ) {
      setProductCategory(decodeURIComponent(location.pathname.split("/")[2]));
      if (subCategories.includes(location.pathname.split("/")[2])) {
        filteredProductList = productList?.filter(
          (product) => product.subCategory === location.pathname.split("/")[2]
        );
        setTempArr(filteredProductList);
      } else if (genders.includes(location.pathname.split("/")[2])) {
        filteredProductList = productList?.filter(
          (product) => product.gender === location.pathname.split("/")[2]
        );
        setTempArr(filteredProductList);
      }
    } else if (brand !== undefined) {
      setProductCategory(decodeURIComponent(location.pathname.split("/")[2]));
      filteredProductList = productList?.filter(
        (product) =>
          product.brand == brand.split("/")[1] &&
          product.gender === brand.split("/")[0]
      );
      setTempArr(filteredProductList);
      // console.log("brand Clicked");
    } else if (name !== undefined) {
      setProductCategory(decodeURIComponent(location.pathname.split("/")[2]));
      filteredProductList = productList?.filter(
        (product) =>
          product.subCategory == name.split("/")[1] &&
          product.gender === name.split("/")[0]
      );
      setTempArr(filteredProductList);
      // console.log("subcategory Clicked");
    } else if (MenuContent !== undefined) {
      filteredProductList = productList?.filter(
        (product) =>
          (product.name.includes(MenuContent.split("/")[1]) ||
            product.description.includes(MenuContent.split("/")[1])) &&
          product.gender === MenuContent.split("/")[0]
      );
      setTempArr(filteredProductList);
      setProductCategory(MenuContent.split("/")[1]);
      console.log("Menu_Type", MenuContent.split("/")[1]);
    } else if (searchResults !== undefined) {
      setTempArr(searchValueResult?.data);
      // console.log("searchvlaie");
    }
  }

  let wishListResult = useSelector((state) =>
    state.productReducer.wishList?.data?.items?.map(
      (item) => item?.products._id || item?.products
    )
  );

  function wishListHandler(event, Id) {
    event.stopPropagation();
    event.preventDefault();
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

  useEffect(() => {
    filterSet();
  }, [productList, location.pathname]);

  useEffect(() => {
    if (selectedFilters["size"]) {
      const resultByFilter = tempArr?.filter((item) => {
        return selectedFilters["size"].every((element) =>
          item?.size.includes(element)
        );
      });
      setTempArr(resultByFilter);
      console.log("filter", resultByFilter);
    }
    if (selectedFilters["subCategory"]) {
      const resultByFilter = tempArr?.filter((item) => {
        return selectedFilters["subCategory"].every((element) =>
          item?.subCategory.includes(element)
        );
      });
      setTempArr(resultByFilter);
      console.log("filter", resultByFilter);
    }
    if (selectedFilters["color"]) {
      const resultByFilter = tempArr?.filter((item) => {
        return selectedFilters["color"].every((element) =>
          item?.color.includes(element)
        );
      });
      setTempArr(resultByFilter);
      console.log("filter", resultByFilter);
    }
    if (selectedFilters["brand"]) {
      const resultByFilter = tempArr?.filter((item) => {
        return selectedFilters["brand"].every((element) =>
          item?.brand.includes(element)
        );
      });
      setTempArr(resultByFilter);
      // console.log("filter", resultByFilter);
    }
  }, [selectedFilters]);
  let wishListResultdemo = useSelector(
    (state) => state.productReducer.wishList?.data
  );

  // console.log("wishListResult", wishListResult);
  // console.log("wishListResultdemo", wishListResultdemo);
  console.log("Pc", productCategory);
  let isMobile = screenSize < 768;
  // console.log("ismob",isMobile);
  console.log("tempArr",tempArr);
  return (
    <>
      <div className="flex justify-center">
        <div className="w-85 flex flex-col justify-left mt-[70px] max-[768px]:w-full">
          {loading ? (
            <div className="mt-[30px]">
              <Loader />
            </div>
          ) : (
            <div className="">
              <div className="my-[30px] pl-[10px] flex flex-col justify-left max-[768px]:pl-0 max-[768px]:justify-center max-[768px]:items-center max-[768px]:no-scrollbar">
                {/* heading wrapper */}

                <div className="text-[24px]  w-full text-[#2d2d2d] flex font-[900] max-[768px]:justify-center">
                  <p className="underline w-10/12 decoration-[#fdd835] justify-center items-center decoration-[2px] underline-offset-[12px]">
                    {productCategory.toUpperCase()}
                  
                  </p>
                </div>

                {/* accordion and prouduct card */}
                <div className="flex mt-[40px] justify-center ">
                  {!isMobile && tempArr?.length > 0 && (
                    <div className="w-[25%] ">
                      <p className="text-[rgba(45,45,45,.5)] text-[12px] font-[900] pl-[20px] py-[10px]">
                        FILTERS
                      </p>
                      <FilterComponent
                        filteredProducts={tempArr}
                        onFilterChange={handleFilterChange}
                      />
                    </div>
                  )}
                  <div className="relative pl-[5px] w-[80%]  flex flex-col  max-[768px]:p-0 max-[768px]:items-center max-[768px]:justify-center max-[768px]:w-full">
                    {!isMobile && tempArr?.length > 0 && (
                      <div className="  flex w-[89%] pb-[15px] pr-[10px] ml-[20px]  flex-row-reverse">
                        <div className="sort-container-parent">
                        <div
                          className=" flex flex-row-reverse gap-[5px] "
                      
                        >
                          <IoChevronDown />
                          <p className="text-[#2d2d2d] text-[12px] pl-[8px] font-[300]">
                            Popular
                          </p>
                          <p className="text-[rgba(45,45,45,.5)] font-[900] text-[12px]">
                            SORT BY
                          </p>

                            <div
                              className="sort-container-child absolute min-w-[145px] z-[1] py-[17px] border-[1px] border-[#ccc] solid
                 top-[25px] right-[75px] shadow-[0_4px_8px_0_rgba(0,0,0,.2)] bg-white pl-[10px]
                  text-[rgba(45,45,45,.7)] text-[12px]"
                            >
                              <p
                                className={`my-[5px] hover:text-[black]  transition 300 
                          hover:bg-[#f7f7f7] ${
                            activeSortTag == "top rated"
                              ? "text-[rgb(81,204,204)]"
                              : ""
                          }`}
                                onClick={() => sortByFilterChange("Top Rated")}
                              >
                                Top Rated
                              </p>
                              <p
                                className={`my-[5px] hover:text-[black]  transition 300 
                              hover:bg-[#f7f7f7] ${
                                activeSortTag == "new arrival"
                                  ? "text-[rgb(81,204,204)]"
                                  : ""
                              }`}
                                onClick={() =>
                                  sortByFilterChange("new arrival")
                                }
                              >
                                New Arrival
                              </p>
                              <p
                                className={`my-[5px] hover:text-[black]  transition 300 
                                 hover:bg-[#f7f7f7] ${
                                   activeSortTag == "price:high to low"
                                     ? "text-[rgb(81,204,204)]"
                                     : ""
                                 }`}
                                onClick={() =>
                                  sortByFilterChange("price:high to low")
                                }
                              >
                                Price : High to Low
                              </p>
                              <p
                                className={`my-[5px] hover:text-[black]  transition 300 
                                hover:bg-[#f7f7f7] ${
                                  activeSortTag == "price:low to high"
                                    ? "text-[rgb(81,204,204)]"
                                    : ""
                                }`}
                                onClick={() =>
                                  sortByFilterChange("price:low to high")
                                }
                              >
                                Price : Low to High
                              </p>
                            </div>
                 
                        </div>
                        </div>
                      </div>
                    )}
                    {/* product card */}

                    <div className="flex flex-wrap justify-center gap-[10px]  max-[768px]:gap-0 max-[768px]:justify-center min-[768px]:bg-black">
                      {Array.isArray(tempArr) ? (
                        tempArr?.length > 0 ? (
                          tempArr ? (
                            tempArr.map((product) => (
                              <Link
                                key={product._id}
                                to={{
                                  pathname: `/ProductDetailsPage/${product._id}`,
                                }}
                              >
                                <div
                                  key={product?._id}
                                  className="w-[266px] max-[768px]:w-full max-[768px]:py-1"
                                >
                                  <div className="relative flex overflow-hidden">
                                    <img
                                      className="w-[266px] fog h-[330px] max-[768px]:w-full max-[768px]:h-[full] hover:scale-105 transition-all duration-[200ms] ease-in-out"
                                      src={product?.displayImage}
                                      alt="image"
                                    />
                                    <div className="flex items-center gap-[5px] py-[1px] pl-[8px] pr-[4px] absolute bottom-5 bg-white">
                                      <FaStar className="text-[#ffc700] text-[9px]" />
                                      <p className="text-[#337ab7] text-[10px]">
                                        {product?.ratings?.toFixed(1)}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="relative border-[1px]">
                                    <div
                                      onClick={(event) => {
                                        wishListHandler(event, product._id);
                                      }}
                                      className="absolute mt-[15px] right-[4px] text-[25px] "
                                    >
                                      {!wishListResult?.includes(
                                        product._id
                                      ) ? (
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
                                      <p>
                                        ₹<strong>{product.price}</strong>
                                      </p>
                                      <p className="line-through text-[#949494] text-[12px]">
                                        {Math.round(
                                          product.price * 0.5 + product.price
                                        )}
                                      </p>
                        <p className="pl-2 text-[#00b852] text-[10px] md:text-xs whitespace-nowrap"> {Math.round(
                          ((product.price * 0.5 +
                            product.price -
                            product.price) /
                            (product.price * 0.5 + product.price)) *
                            100
                        )}% OFF</p>
                                    </div>
                                    <p className="text-[#525252] mt-[8px] text-[10px] px-[8px] py-[2px]">
                                      ₹
                                      {Math.round(
                                        product.price - product.price * 0.1
                                      )}{" "}
                                      for triBE Members
                                    </p>
                                    <p className="w-max border-[1px] border-[rgb(115,115,115)] my-[12px] solid text-[rgb(115,115,115)] p-[1px] text-[10px]">
                                      {product.sellerTag}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))
                          ) : (
                            <Loader />
                          )
                        ) : (
                          <ComingSoon />
                        )
                      ) : (
                        <Loader />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {isMobile &&
          <MobileFilter
          filteredProducts={tempArr}
          onFilterChange={handleFilterChange}
          onSortChange={sortByFilterChange}
          />
          } 
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductListPage;
{
  /* {isMobile &&
          <MobileFilter/>
          } */
}
