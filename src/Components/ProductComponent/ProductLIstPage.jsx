import "react-multi-carousel/lib/styles.css";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import classNames from "classnames";
import {genders,sizes, subCategories, brands, colorMappings } from "../TypeConstants";
import img_1 from "../../assets/bw-demo-1.webp";
import img_2 from "../../assets/bw-demo-2.webp";
import img_3 from "../../assets/bw-demo-3.webp";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SuggestionCarousel from "./SuggestionCarousel";
function ProductListPage() {
  const location = useLocation();
  const productList = location.state.data;
  const name = location.state.name;
  let filteredProductList = [];

  let productCategory='';

  console.log("loc",location);
  

    if(name===undefined){
      productCategory=location.pathname.split("/")[2]
      if(subCategories.includes(productCategory)){
        console.log("pc",productCategory)
       filteredProductList = productList.filter(
          (product) => product.subCategory === productCategory
        );
      } else if(genders.includes(productCategory)){
        console.log("pc",productCategory)
        filteredProductList = productList.filter(
           (product) => product.gender === productCategory
         );
      }
    }else{
      filteredProductList = productList.filter(
        (product) => product.subCategory ==name.split('/')[1] && product.gender===name.split('/')[0]
        // (product) => product.subCategory =='tshirt' && product.gender==='Women'

      );
      console.log("name", name.split('/')[0] , name.split('/')[1]);
    }


  const [sortContainerDisplay, setSortContainerDisplay] = useState(false);

  console.log("productList", productList);
  
  console.log("filteredproductList", filteredProductList);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-85 flex flex-col justify-left mt-[100px] ">
          <div className="gap-2 flex pl-[10px] text-[#333] font-[300] text-[12px]">
            <p className="">Home</p>
            <p className="">/</p>
            <p className=""> {productCategory} clothing</p>
          </div>

          <div className="my-[30px] pl-[10px]  flex flex-col justify-left ">
            {/* heading wrapper */}
            <div className="text-[24px] text-[#2d2d2d] font-[900]">
              <p className="underline w-10/12 decoration-[#fdd835] decoration-[2px] underline-offset-[12px]">
              {productCategory} Clothing
              </p>
            </div>

            {/* accordion and prouduct card */}
            <div className="flex mt-[40px] ">
              <div className="w-[25%] ">
                <p className="text-[rgba(45,45,45,.5)] text-[12px] font-[900] pl-[20px] py-[10px]">
                  FILTERS
                </p>
                <Accordion.Root
                  className=" rounded-md "
                  type="single"
                  //   defaultValue="item-1"
                  collapsible
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>sub Category</AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-[10px]">
                        {subCategories.map((item) => (
                          <p
                            className="py-[5px] text-[rgba(45,45,45,.7] text-[12px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Size</AccordionTrigger>
                    <AccordionContent>
                      {sizes.map((item, index) => (
                        <div
                          key={index}
                          className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                        >
                          <p className="my-[5px]">
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                          </p>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Brand</AccordionTrigger>
                    <AccordionContent>
                      {brands.map((item, index) => (
                        <div
                          key={index}
                          className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                        >
                          <p className="my-[5px]">
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                          </p>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>color</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex justify-left gap-2 flex-wrap ">
                        {Object.entries(colorMappings).map(
                          ([name, code], index) => (
                            <div
                              key={index}
                              className={`border-[1px] rounded-[4px] border-[#e6e6e6] solid w-[30px] h-[30px] bg-[${code}]`}
                            ></div>
                          )
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Ratings</AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px]">
                        <p
                          className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                        >
                          4.5 and above
                        </p>
                        <p
                          className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                        >
                          4 and above
                        </p>
                        <p
                          className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                        >
                          3.5 and above
                        </p>{" "}
                        <p
                          className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                        >
                          3 and above
                        </p>
                        <p
                          className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                        >
                          2.5 and above
                        </p>
                        <p
                          className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                        >
                          2 and above
                        </p>
                        <p
                          className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]"
                        >
                          1.5 and above
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Sort By</AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px]">
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion.Root>
              </div>
              {/* product card */}
              <div className="relative pl-[5px] w-[80%] pt-[10px] flex flex-col items-center ">
                <div className=" flex w-[89%] pb-[15px] pr-[10px] ml-[20px]  flex-row-reverse">
                  <div
                    className="flex flex-row-reverse gap-[5px]"
                    onMouseOver={()=>setSortContainerDisplay(true)}
                    onMouseLeave={()=>setSortContainerDisplay(false)}
                  >
                    <IoChevronDown />
                    <p className="text-[#2d2d2d] text-[12px] pl-[8px] font-[300]">
                      Popular
                    </p>
                    <p className="text-[rgba(45,45,45,.5)] font-[900] text-[12px]">
                      SORT BY
                    </p>
                  </div>
                  <div className=""></div>
                </div>
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
                <div className="flex flex-wrap justify-center gap-[10px]">
                  {filteredProductList &&
                    filteredProductList.length > 0 &&
                    filteredProductList.slice(0,51).map((product) => (
                      <Link key={product._id} to="/ProductDetailsPage">
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
                            <div className="absolute mt-[15px] right-[4px] text-[25px]">
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
                              {product.sellerTag}
                                                
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="">

          <SuggestionCarousel productList={productList}/>
          </div> */}
        </div>
      </div>
    </>
  );
}

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "focus-within:shadow-mauve12  border-b-[1px] border-b-[#e6e6e6]   overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-1 ",
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
          "text-[#333]  font-[500] shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between  px-5 text-[12px] leading-none  outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-violet10  ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        " data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[12px] text-[#333]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

export default ProductListPage;
