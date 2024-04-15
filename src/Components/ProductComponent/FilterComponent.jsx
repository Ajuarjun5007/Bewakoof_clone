import {
  genders,
  sizes,
  subCategories,
  brands,
  colorMappings,
  Ratings,
} from "../TypeConstants";
import classNames from "classnames";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductPage.css";
function FilterComponent({onFilterChange,filteredProducts}) {

    let filteredItems=[];
    const [filteredSubCategories,setFilteredSubCategories]=useState([]);
    const [filteredBrands,setFilteredBrands]=useState([]);
    const [filteredColors,setFilteredColors]=useState([]);
    const [filteredSizes,setFilteredSizes]=useState([]);
    
  useEffect(()=>{
filteredItems = [...filteredProducts];
setFilteredSubCategories([
    ...new Set(filteredProducts?.map((item) => item.subCategory)),
  ]);
  setFilteredBrands([
    ...new Set(filteredItems?.map((item) => item.brand)),
  ]);
  setFilteredColors([
    ...new Set(filteredItems?.map((item) => item.color)),
  ]);
  setFilteredSizes([
    ...new Set(filteredItems?.flatMap((item) => item.size)),
  ]);
},[])
  const [activeFilters, setActiveFilters] = useState({
    size: false,
    subCategory: false,
    color: false,
    brand: false,
    ratings: false,
  });

  const [sizeFilter, setSizeFilter] = useState([]);
  const [subCategoryFilter, setSubCategoryFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [updatedValues, setUpdatedValues] = useState({});

  function updateFilters(filterType,value){
    switch (filterType) {
      case "size":
        setSizeFilter((prev) => {
          // console.log("value",value);
          const updatedSizes = prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value];
            setUpdatedValues((prevValues) => ({ ...prevValues, [filterType]: updatedSizes }));
              onFilterChange(updatedValues);
          return [...new Set(updatedSizes)]; 
        });
        break;
      case "subCategory":
        setSubCategoryFilter((prev) => {
          const updatedSubCategories = prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value];
            setUpdatedValues((prevValues) => ({ ...prevValues, [filterType]: updatedSubCategories }));
          return [...new Set(updatedSubCategories)]; 
        });
        break;
      case "color":
        setColorFilter((prev) => {
          const updatedColors = prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value];
            setUpdatedValues((prevValues) => ({ ...prevValues, [filterType]: updatedColors }));
          return [...new Set(updatedColors)]; 
        });
        break;
      case "brand":
        setBrandFilter((prev) => {
          const updatedBrands = prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value];
            setUpdatedValues((prevValues) => ({ ...prevValues, [filterType]: updatedBrands }));
          return [...new Set(updatedBrands)]; 
        });
        break;
    
      default:
        break;
    }
  }

  useEffect(()=>{
    onFilterChange(updatedValues);
  },[updatedValues])

  // console.log("filtered",filteredBrands,filteredColors,filteredSizes,filteredSubCategories);
  // console.log("updatedvalues",updatedValues);

  return (
    <>
      <Accordion.Root className=" rounded-md " type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>sub Category</AccordionTrigger>
          <AccordionContent>
            <div className="pl-[10px]">
              {filteredSubCategories?.map((item, index) => (
                <p
                  key={index}
                  className={`py-[5px] text-[rgba(45,45,45,.7] hover:bg-slate-100  text-[12px] hover:text-[black] transition 300 
                  ${updatedValues['subCategory']?.includes(item)?'bg-slate-100 text-[#3d9999]':''}`}
                   onClick={() => updateFilters("subCategory",item)}    
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
            {filteredSizes?.map((item, index) => (
              <div
                key={index}
                className={`pl-[30px] text-[rgba(45,45,45,.7)] text-[12px] hover:text-[black] transition 300 
                          hover:bg-slate-100 
                          `}
                // onClick={() => updateFilters("size",item)}
              >
                <p
                  key={index}
                  className={`py-[5px] text-[rgba(45,45,45,.7] hover:bg-slate-100  text-[12px] hover:text-[black] transition 300 
                    ${updatedValues['size']?.includes(item)?'bg-slate-100 text-[#3d9999]':''}`}
                  onClick={() => updateFilters("size",item)}
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
            {filteredBrands?.map((item, index) => (
              <div
                key={index}
                className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px] hover:text-[black] transition 300 hover:bg-slate-100"
              >
                <p key={index} 
              className={`py-[5px] text-[rgba(45,45,45,.7] hover:bg-slate-100  text-[12px] hover:text-[black] transition 300 
                ${updatedValues['brand']?.includes(item)?'bg-slate-100 text-[#3d9999]':''}`}
                onClick={() => updateFilters("brand",item)}
                >
                  {item?.charAt(0).toUpperCase() + item?.slice(1)}
                </p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>color</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-left gap-2 flex-wrap ">
              {filteredColors?.map((item, index) => (
                <div
                 
                  key={index}
                  style={{ backgroundColor: colorMappings[item] }}
                  className={`border-[1px] rounded-[4px] border-[#e6e6e6] solid w-[30px] h-[30px]
                  ${updatedValues['color']?.includes(item)?' border-[2px] scale-125 border-[#3d9999] solid':''}
                  `}
                  onClick={() => updateFilters("color",item)}    
                ></div>
              ))}
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
