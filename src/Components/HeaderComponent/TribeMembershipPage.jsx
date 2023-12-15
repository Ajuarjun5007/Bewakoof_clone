import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import classNames from "classnames";
import tribe_logo from "../../assets/tribe_membership_page/tribe-page-logo.webp";
import small_icon_1 from "../../assets/tribe_membership_page/small_icon_1.webp";
import small_icon_2 from "../../assets/tribe_membership_page/small_icon_2.webp";
import small_icon_3 from "../../assets/tribe_membership_page/small_icon_3.webp";
import small_icon_4 from "../../assets/tribe_membership_page/small_icon_4.webp";
import small_icon_5 from "../../assets/tribe_membership_page/small_icon_5.webp";
import small_icon_6 from "../../assets/tribe_membership_page/small_icon_6.webp";
import tribe_carousel_img_1 from "../../assets/tribe_membership_page/tribe_carousel_img_1.webp";
import tribe_carousel_img_2 from "../../assets/tribe_membership_page/tribe_carousel_img_2.webp";
import tribe_carousel_img_3 from "../../assets/tribe_membership_page/tribe_carousel_img_3.webp";
import tribe_carousel_img_4 from "../../assets/tribe_membership_page/tribe_carousel_img_4.webp";
import tribe_carousel_img_5 from "../../assets/tribe_membership_page/tribe_carousel_img_5.webp";
import tribe_carousel_img_6 from "../../assets/tribe_membership_page/tribe_carousel_img_6.webp";
import tribe_carousel_img_7 from "../../assets/tribe_membership_page/tribe_carousel_img_7.webp";
import tribe_carousel_img_8 from "../../assets/tribe_membership_page/tribe_carousel_img_8.jpg";

function TribeMembershipPage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="">
        {/* top content */}
        <div className="mt-[80px] flex py-[20px]">
          <div className="px-[180px] py-[100px] w-[50%] bg-[rgb(255,216,53)]">
            <img className=" w-[270px] h-[135px]" src={tribe_logo} alt="" />
            <span>Stay Trendy & Never Pay Full Price</span>
          </div>
          <div className="bg-[#f8f8f8] w-[50%] p-[40px] ">
            <div className=" flex flex-wrap ">
              <div className="p-[40px] ">
                <img className="w-[40pcx] h-[40px]" src={small_icon_1} alt="" />
                <p className="py-[5px] font-[500] text-[18px]">
                  Guaranteed Savings
                </p>
                <p className=" text-[rgba(0,0,0,.5)] py-[4px] font-[400] text-[12px]">
                  On Every Order
                </p>
              </div>
              <div className="p-[40px] ">
                <img className="w-[40pcx] h-[40px]" src={small_icon_2} alt="" />
                <p className="py-[5px] font-[500] text-[18px]">
                  Exclusive Perks
                </p>
                <p className="text-[rgba(0,0,0,.5)] py-[5px] font-[400] text-[12px]">
                  Offers, Cashback etc.
                </p>
              </div>
              <div className="px-[49px] py-[46px] ">
                <img className="w-[40pcx] h-[40px]" src={small_icon_3} alt="" />
                <p className="pt-[6px] pb-[10px] font-[500] text-[18px]">
                  Early Access
                </p>
                <p className="text-[rgba(0,0,0,.5)]  font-[400] text-[12px]">
                  to Sales & Collections
                </p>
              </div>
              <div className="ml-[20px] p-[47px] ">
                <img className="w-[40pcx] h-[40px]" src={small_icon_4} alt="" />
                <p className="py-[5px] font-[500] text-[18px]">
                  Exclusive Experiences
                </p>
                <p className="text-[rgba(0,0,0,.5)] py-[5px] font-[400] text-[12px]">
                  Contests, Newsletters
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* button wrapper */}
        <div className="flex justify-center  flex-col items-center ">
          <button className="bg-[rgba(255,199,0,.9)] flex flex-col items-center rounded-[5px] w-[455px] py-[10px]">
            <p className="text-[16px] font-[500] text-[#303030]">
              BUY BEWAKOOF TRIBE
            </p>
            <div className="text-[14px] text-[#303030]">
              at
              <span className="line-through">₹299 </span>
              <strong>₹129 </strong>
              for 3 months
            </div>
          </button>
          <p className="text-[15px] text-[#333] pt-[10px] pb-[30px]">
            <strong> 5,832</strong> users have joined Tribe last week
          </p>
        </div>
        {/* five reasons wrapper */}
        <div className="bg-[#f8f8f8] my-[30px] flex justify-center py-[40px]">
          <div className=" w-[80%] ">
            <p className="text-[20px]">
              <strong>Five Reasons</strong> Why You Should Join
            </p>
            <div className="flex  py-[20px]">
              {/* discnt 1 */}
              <div className="flex  solid ">
                <img className="w-[30px] h-[30px]" src={small_icon_5} alt="" />
                <div className="w-[160px]  items-center justify-center pl-[5px] py-[5px]">
                  <p className="text-[12px] font-[600]">Guaranteed Discounts</p>
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">
                    On all products. On every order.
                  </p>
                </div>
              </div>
              {/* discnt 2 */}
              <div className="flex solid w-max">
                <img className="w-[30px] h-[30px]" src={small_icon_4} alt="" />
                <div className="w-[160px] items-center justify-center pl-[5px] py-[5px]">
                  <p className="text-[12px] font-[600]">Free Shipping</p>
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">
                    On Everything you shop. No minimum purchase required.
                  </p>
                </div>
              </div>
              {/* discnt 3 */}
              <div className="flex solid w-max">
                <img className="w-[30px] h-[30px]" src={small_icon_2} alt="" />
                <div className="w-[160px] items-center justify-center pl-[5px] py-[5px]">
                  <p className="text-[12px] font-[600]">Exclusive Perks</p>
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">
                    Tribe only Offers, Cashbacks, Products & Collections
                  </p>
                </div>
              </div>
              {/* discnt 4 */}
              <div className="flex  solid w-max">
                <img className="w-[30px] h-[30px]" src={small_icon_3} alt="" />
                <div className="w-[160px] items-center justify-center pl-[5px] py-[5px]">
                  <p className="text-[12px] font-[600]">Early Access</p>
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">
                    VIP early access to all Sales & Events.
                  </p>
                </div>
              </div>
              {/* discnt 5 */}
              <div className="flex  w-max">
                <img className="w-[30px] h-[30px]" src={small_icon_3} alt="" />
                <div className="w-[160px] items-center justify-center pl-[5px] py-[5px]">
                  <p className="text-[12px] font-[600]">Early Access</p>
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">
                    VIP early access to all Sales & Events.
                  </p>
                </div>
              </div>
              {/* discnt  6*/}
              <div className="flex  solid w-max">
                <img className="w-[30px] h-[30px]" src={small_icon_6} alt="" />
                <div className="w-[160px] items-center justify-center pl-[5px] py-[5px]">
                  <p className="text-[12px] font-[600]">
                    Exclusive Experiences
                  </p>
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">
                    Tribe only Contests, Newsletters, Giveaways & more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tribe carousel */}
        <div className="flex  border-2 border-red-400 solid">
          <div className="flex w-[80%]">
            <p>
              {" "}
              <strong>Exclusive Savings</strong> Only for our TriBees
            </p>
            <div className=" relative top-[140px] py-2 ">
              <Carousel responsive={responsive}>
                <div className="w-max-content">
                  <img
                    className="solid object-cover px-1"
                    src={tribe_carousel_img_1}
                    alt=""
                  />
                </div>
                <div className="w-max-content">
                  <img
                    className="solid object-cover px-1"
                    src={tribe_carousel_img_2}
                    alt=""
                  />
                </div>
                <div className="w-max-content">
                  <img
                    className="solid object-cover px-1"
                    src={tribe_carousel_img_3}
                    alt=""
                  />
                </div>
                <div className="w-max-content">
                  <img
                    className="solid object-cover px-1"
                    src={tribe_carousel_img_4}
                    alt=""
                  />
                </div>
                <div className="w-max-content">
                  <img
                    className="solid object-cover px-1"
                    src={tribe_carousel_img_5}
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        {/* tribe accordion */}
        <div className=" bg-[#f8f8f8] flex justify-center">
          <div className="w-[80%]">
            <div className="py-[40px]">
              <p className="text-[30px]">
                <strong> FAQs</strong>
              </p>
              <p>All Your Questions Answered</p>
            </div>
            <div className="pb-[50px]">
              <Accordion.Root
                className=" rounded-md "
                type="single"
                defaultValue="item-1"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I become a TriBe member?</AccordionTrigger>
                  <AccordionContent>
                  Joining the TriBe is simple. Follow the link given below and simply add your TriBe membership plan to your cart. Proceed to make your payment online. Your TriBe membership will be activated once your payment is successful. You will receive a welcome email confirming your membership.

                    <p className="text-[#23527c] py-[10px]">Join the TriBe</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I upgrade my TriBe Membership plan?</AccordionTrigger>
                  <AccordionContent>
                  Currently we do not have an upgrade option but you can simply renew your TriBe membership for a longer term at the time of renewal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I cancel my TriBe membership?</AccordionTrigger>
                  <AccordionContent>
                  You can opt out of the TriBe any time. However, please note that we do not offer any refunds on the TriBe membership itself.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do I need to save my card details with Bewakoof® to become a TriBe member?</AccordionTrigger>
                  <AccordionContent>
                  No, you do not need to save a card with us to become a TriBe member. However, please note that you will have to pay online while purchasing the TriBe membership itself. Subsequent orders can be paid online or as COD.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Will my TriBe membership auto renew?</AccordionTrigger>
                  <AccordionContent>
                  No, currently we do not have an auto renew option for our TriBe memberships.
                  </AccordionContent>
                </AccordionItem>
              </Accordion.Root>
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
        "focus-within:shadow-mauve12  border-[1px] border-b-[#e6e6e6]   overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-1 ",
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
        {
          
        <ChevronDownIcon
          className="text-violet10  ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 
          group-data-[state=open]:rotate-180"
          aria-hidden
        />
        }
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

export default TribeMembershipPage;
