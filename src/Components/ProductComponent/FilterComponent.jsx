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
import { useSelector, useDispatch } from 'react-redux'
import { applyFilters, selectProductsByFilter } from "./Slices/FilterSlice";
import "./ProductPage.css"
function FilterComponent({onFilterChange}){

    const dispatch = useDispatch();
    const [activeFilter,setActiveFilter] = useState(false);
    const [filterTags,setFilterTags] = useState({
         size:[],
        subCategory:[],
        color:[],
        brand:[],
        ratings:[],
    })
    const status = useSelector((state) =>
    selectProductsByFilter(state, {})
  )
  
    // useEffect(()=>{
    //     onFilterChange(filterTags);
    // },[filterTags])

  function updateFilters(filterType,value){
    let tempFilterTags = filterTags;
    const existingValue = tempFilterTags[filterType];
    const valueLocation  = existingValue.indexOf(value)
        if(valueLocation!==-1){
            existingValue.splice(valueLocation,1);
     setActiveFilter(false);
        }else{
            existingValue.push(value);
     setActiveFilter(true);
          console.log("added")
        }
        tempFilterTags[filterType]=existingValue
     setFilterTags({...tempFilterTags})
        onFilterChange({...tempFilterTags})
  }


  console.log("filtertags",filterTags);
  console.log("filterstyle",activeFilter);
    return(
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
                        {subCategories.map((item) => (
                          <p key={item._id}
                            className="py-[5px]  text-[rgba(45,45,45,.7] hover:bg-slate-100  text-[12px] hover:text-[black] transition 300 
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
                        onClick={()=>updateFilters("size",item)}
                          key={index}
                          className={`pl-[30px] text-[rgba(45,45,45,.7)] text-[12px] hover:text-[black] transition 300 
                          hover:bg-slate-100 `}
                        >
                          <p
                          key={item._id}
                           className={`my-[5px]${activeFilter ?'activeStyle':''}`}>
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
                          hover:bg-slate-100"
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
                          ([name, code], index) => 
                           {
                          return    (<div
                        onClick={()=>updateFilters("color",name)}
                              key={index}
                              style={{backgroundColor:`${code}`}}
                              className="border-[1px] rounded-[4px] border-[#e6e6e6] solid w-[30px] h-[30px]"
                            ></div>)}
                          
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
    )
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