import "react-multi-carousel/lib/styles.css";
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  applyFilters,
  getProductList,
  getWishListOperations,
} from "./Slices/FilterSlice";
import FilterComponent from "./FilterComponent";
function ProductListPage() {
  const location = useLocation();
  const name = location.state?.name;
  const brand = location.state?.brand;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterQuery, updateFilterQuery] = useState({});
  const [tempArr, setTempArr] = useState([]);
  const [productCategory, setProductCategory] = useState("");

  const { getProductByFilters, wishList } = useSelector(
    (state) => state.productReducer
  );

  const productListResult = useSelector(
    (state) => state.productReducer.dressList
  );

  let filteredByTagsId = [];

  const [sortContainerDisplay, setSortContainerDisplay] = useState(false);
  // const [productList, setProductList] = useState([]);
  const [isWishListClicked, setIsWishListClicked] = useState(false);

  const [isWishListAdded, setIsWishListAdded] = useState([]);
  const [loading, setLoading] = useState(false);

  const productList = productListResult?.data;
  useEffect(() => {
    console.log("isWishListAdded", isWishListAdded);
  }, [wishList]);

  function handleFilter(filter) {
    const nonEmptyArrays = Object.fromEntries(
      Object.entries(filter).filter(([key, value]) => value.length > 0)
    );
    console.log("non", nonEmptyArrays);
    updateFilterQuery(nonEmptyArrays);
  }

  let filteredProductList = [];
  function filterSet() {
    // if(filteredProducts==undefined){
    if (name === undefined && brand === undefined) {
      setProductCategory(location.pathname.split("/")[2]);
      if (subCategories.includes(location.pathname.split("/")[2])) {
        console.log("sc");
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
  }

  function wishListHandler(event, Id) {
    event.stopPropagation();
    event.preventDefault();
    if (localStorage.getItem("userInfo")) {
      if (isWishListAdded.includes(Id)) {
        dispatch(
          getWishListOperations({
            id: Id,
            type: "DELETE",
            tokenValue: JSON.parse(localStorage.getItem("userInfo"))[0],
            suffix: Id,
          })
        );
        setIsWishListClicked(true);
      } else {
        dispatch(
          getWishListOperations({
            id: Id,
            type: "PATCH",
            tokenValue: JSON.parse(localStorage.getItem("userInfo"))[0],
            suffix: Id,
          })
        );
        setIsWishListClicked(false);
      }
    } else {
      navigate("/LoginPage");
    }
  }

  useEffect(() => {
    setTempArr(getProductByFilters);
  }, [filterQuery, getProductByFilters]);

  useEffect(() => {
    filterSet();
  }, [productList, location.pathname]);
  let keyword = "Printed T-shirts";
  let keywordArray = keyword.split(" ");
  let dressType = {};
  const MenuProducts = {};
  MenuProducts["Printed T-shirt_Women"] = productList.filter(
    (item) => item.name.includes("Printed T-shirt") && item.gender === "Women"
  );
  MenuProducts["Printed T-shirt_Men"] = productList.filter(
    (item) => item.name.includes("Printed T-shirt") && item.gender === "Men"
  );
  MenuProducts["Oversized T-shirt_Men"] = productList.filter(
    (item) => item.name.includes("Oversized T-shirt") && item.gender === "Men"
  );
  MenuProducts["Oversized T-shirt_Women"] = productList.filter(
    (item) => item.name.includes("Oversized T-shirt") && item.gender === "Women"
  );
  MenuProducts["Oversized T-shirt_Women"] = productList.filter(
    (item) => item.name.includes("Oversized T-shirt") && item.gender === "Women"
  );
  MenuProducts["Full Sleeve T-Shirt_Men"] = productList.filter(
    (item) => item.name.includes("Full Sleeve T-Shirt") && item.gender === "Men"
  );
  MenuProducts["Half Sleeve T-Shirt_Men"] = productList.filter(
    (item) => item.name.includes("Half Sleeve T-Shirt") && item.gender === "Men"
  );
  
  if ("Half Sleeve T-shirt_Women" in MenuProducts && MenuProducts["Half Sleeve T-shirt_Women"].length > 0) {
    console.log("Printed T-shirt_Women is present with items.");
  } else {
    console.log("Printed T-shirt_Women is either not present or has no items.");
  }

  console.log("MenuProducts", MenuProducts);

  // console.log("temp", tempArr);
  return (
    <>
      <div className="flex justify-center">
        <div className="w-85 flex flex-col justify-left mt-[100px] ">
          {loading ? (
            <div className="mt-[30px]">
              <Loader />
            </div>
          ) : (
            <div className="">
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
                    <FilterComponent
                      filteredProducts={tempArr}
                      onFilterChange={handleFilter}
                    />
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
                            <Link
                              key={product._id}
                              to={{
                                pathname: `/ProductDetailsPage/${product._id}`,
                              }}
                            >
                              <div key={product._id} className="w-[266px]">
                                <div className="relative flex overflow-hidden">
                                  <img
                                    className="w-[266px] fog h-[330px] hover:scale-105 transition-all duration-[200ms] ease-in-out"
                                    src={product.displayImage}
                                    alt="image"
                                  />
                                  <div className="flex items-center gap-[5px] py-[1px] pl-[8px] pr-[4px] absolute bottom-5 bg-white">
                                    <FaStar className="text-[#ffc700] text-[9px]" />
                                    <p className="text-[#337ab7] text-[10px]">
                                      {product.ratings.toFixed(1)}
                                    </p>
                                  </div>
                                </div>

                                <div className="relative">
                                  <div
                                    onClick={(event) => {
                                      wishListHandler(event, product._id);
                                    }}
                                    className="absolute mt-[15px] right-[4px] text-[25px] border-[1px]"
                                  >
                                    {!isWishListClicked ? (
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
                          // <p>Loading.....</p>
                          <Loader />
                        )
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductListPage;
