import "react-multi-carousel/lib/styles.css";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import classNames from "classnames";
import { sizes, subCategories, brands, colorMappings } from "../TypeConstants";
import img_1 from "../../assets/bw-demo-1.webp"
import img_2 from "../../assets/bw-demo-2.webp"
import img_3 from "../../assets/bw-demo-3.webp"
import { CiHeart } from "react-icons/ci";


function ProductListPage() {
 

  return (
    <>
      <div className="flex justify-center">
        <div className="w-85 flex flex-col justify-left mt-[100px] ">
          <div className="gap-2 flex pl-[10px] text-[#333] font-[300] text-[12px]">
            <p className="">Home</p>
            <p className="">/</p>
            <p className="">Men clothing</p>
          </div>

          <div className="my-[50px] pl-[10px]  flex flex-col justify-left ">
            {/* heading wrapper */}
            <div className="text-[24px] text-[#2d2d2d] font-[900]">
              <p className="underline decoration-[#fdd835] decoration-[2px] underline-offset-[12px]">
                Men Clothing
              </p>
            </div>

            {/* accordion and prouduct card */}
            <div className="flex mt-[40px]">
              <div className="w-[25%]">
                <p className="text-[rgba(45,45,45,.5)] text-[12px] font-[900] pl-[20px] py-[20px]">
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
                          <p className="py-[5px] text-[rgba(45,45,45,.7] text-[12px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]">
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
                        <div
                          className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px]"
                        >
                          <p className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]">
                          4.5 and above
                          </p>
                          <p className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]">
                          4 and above
                          </p>
                          <p className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]">
                          3.5 and above
                          </p>   <p className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]">
                          3 and above
                          </p>
                          <p className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]">
                          2.5 and above
                          </p>
                          <p className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]">
                          2 and above
                          </p>
                          <p className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]">
                          1.5 and above
                          </p>
                        </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Sort By</AccordionTrigger>
                    <AccordionContent>
                        <div
                          className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px]"
                        >
                          <p className="my-[5px] text-[rgb(81,204,204)] transition 300 
                          hover:bg-[#f7f7f7]">
                         Popular
                          </p>
                          <p className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]">
                            New
                          </p>
                          <p className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]">
                            Price : High to Low
                          </p> 
                          <p className="my-[5px] hover:text-[black] transition 300 
                          hover:bg-[#f7f7f7]">
                            Price : Low to High
                          </p> 
                        </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion.Root>
              </div>
              {/* product card */}
              <div className="flex flex-wrap m-[20px] w-[80%] gap-[10px]">
                {/* item-1 */}
                <div className="  w-[266px]">
                  <div className="flex justify-center items-center">
                    <img className="w-[266px] h-[330px] " src={img_1} alt="" />
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
                </div>
                   {/* item-1 */}
                   <div className="  w-[266px]">
                  <div className="flex justify-center items-center">
                    <img className="w-[266px] h-[330px] " src={img_1} alt="" />
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
                </div>
                   {/* item-1 */}
                   <div className="  w-[266px]">
                  <div className="flex justify-center items-center">
                    <img className="w-[266px] h-[330px] " src={img_1} alt="" />
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
                </div>
                   {/* item-1 */}
                   <div className="  w-[266px]">
                  <div className="flex justify-center items-center">
                    <img className="w-[266px] h-[330px] " src={img_1} alt="" />
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
                </div>
                   {/* item-1 */}
                   <div className="  w-[266px]">
                  <div className="flex justify-center items-center">
                    <img className="w-[266px] h-[330px] " src={img_1} alt="" />
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
                </div>
                   {/* item-1 */}
                   <div className="  w-[266px]">
                  <div className="flex justify-center items-center">
                    <img className="w-[266px] h-[330px] " src={img_1} alt="" />
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
                </div>
                   {/* item-1 */}
                   <div className="  w-[266px]">
                  <div className="flex justify-center items-center">
                    <img className="w-[266px] h-[330px] " src={img_1} alt="" />
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
                </div>
                   {/* item-1 */}
                   <div className="  w-[266px]">
                  <div className="flex justify-center items-center">
                    <img className="w-[266px] h-[330px] " src={img_1} alt="" />
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
                </div>
                   {/* item-1 */}
                   <div className="  w-[266px]">
                  <div className="flex justify-center items-center">
                    <img className="w-[266px] h-[330px] " src={img_1} alt="" />
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
                </div>
              </div>
            </div>
          </div>
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
