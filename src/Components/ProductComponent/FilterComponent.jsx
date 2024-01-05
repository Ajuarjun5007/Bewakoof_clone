import {
  genders,
  sizes,
  subCategories,
  brands,
  colorMappings,
} from "../TypeConstants";
import classNames from "classnames";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { IoChevronDown } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { applyFilters, selectProductsByFilter } from "./Slices/FilterSlice";
import "./ProductPage.css";
function FilterComponent({ onFilterChange, filteredProducts }) {
  console.log(filteredProducts);
  // const filteredSubCategories,filteredColors,filteredSizes,filteredBrand,filteredRatings=[];
  let filteredSubCategories = [
    ...new Set(filteredProducts.map((item) => item.subCategory)),
  ];
  let filteredSizes = [filteredProducts.map((item) => [...new Set(item.size)])];
  let filteredBrands = [...new Set(filteredProducts.map((item) => item.brand))];
  let filteredColors = [...new Set(filteredProducts.map((item) => item.color))];

  console.log("filteredsubcategories", filteredSubCategories);
  console.log("filteredsubcategories", filteredColors);

  const dispatch = useDispatch();
  const [activeFilters, setActiveFilters] = useState({
    size: false,
    subCategory: false,
    color: false,
    brand: false,
    ratings: false,
  });
  const [filterTags, setFilterTags] = useState({
    size: [],
    subCategory: [],
    color: [],
    brand: [],
    ratings: [],
  });

  let activeTags = [];

  function updateFilters(filterType, value) {
    setFilterTags((prev) => {
      if (!prev[filterType].includes(value)) {
        return {
          ...prev,
          [filterType]: [...prev[filterType], value],
        };
      }
      return prev;
    });
  }

  return (
    <>
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
              {filteredSubCategories.map((item, index) => (
                <p
                  key={index}
                  className="py-[5px] text-[rgba(45,45,45,.7] hover:bg-slate-100  text-[12px] hover:text-[black] transition 300 
                          "
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
                className={`pl-[30px] text-[rgba(45,45,45,.7)] text-[12px] hover:text-[black] transition 300 
                          hover:bg-slate-100 
                          `}
                onClick={() => updateFilters("size", item, index)}
              >
                <p
                  key={index}
                  className={`my-[5px]   ${
                    filterTags.size.includes(item)
                      ? "bg-red-400"
                      : "bg-yellow-400"
                  }`}
                  onClick={() => updateFilters("size", item, index)}
                >
                  {item}
                </p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            {filteredBrands.map((item, index) => (
              <div
                key={index}
                className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px] hover:text-[black] transition 300 
                          hover:bg-slate-100"
              >
                <p key={index} className="my-[5px]">
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
              {filteredColors.map((item, index) => (
                <div
                  // onClick={() => updateFilters("color", name)}
                  key={index}
                  style={{ backgroundColor: colorMappings[item] }}
                  className="border-[1px] rounded-[4px] border-[#e6e6e6] solid w-[30px] h-[30px]"
                ></div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Ratings</AccordionTrigger>
          <AccordionContent>
            <div className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px]">
              <p
                className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-slate-100"
              >
                4.5 and above
              </p>
              <p
                className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-slate-100"
              >
                4 and above
              </p>
              <p
                className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-slate-100"
              >
                3.5 and above
              </p>{" "}
              <p
                className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-slate-100"
              >
                3 and above
              </p>
              <p
                className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-slate-100"
              >
                2.5 and above
              </p>
              <p
                className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-slate-100"
              >
                2 and above
              </p>
              <p
                className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-slate-100"
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
                          hover:bg-slate-100"
              >
                Popular
              </p>
              <p
                className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-slate-100"
              >
                New
              </p>
              <p
                className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-slate-100"
              >
                Price : High to Low
              </p>
              <p
                className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-slate-100"
              >
                Price : Low to High
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
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
export default FilterComponent;
