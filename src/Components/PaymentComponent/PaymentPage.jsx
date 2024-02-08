import PaymentType from "./PaymentType";
import { useEffect, useState } from "react";
import comingSoon from "../../assets/coming-soon.webp";
import { useSelector, useDispatch } from "react-redux";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import classNames from "classnames";
import rightArrow from "../../assets/right-arrow-address.svg";
import { Link,useNavigate } from "react-router-dom";
import img_1 from "../../assets/brand_images/brnd_1.webp";
import badge_trust_img from "../../assets/badge-trust.svg";
import globe_img from "../../assets/globe.svg";
import easy_returns_img from "../../assets/easy-returns.svg";
import { getOrderList } from "../ProductComponent/Slices/FilterSlice";
function PaymentPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [portalVisibility,setPortalVisibility] = useState(false);
  const userDetails = localStorage.getItem("userInfo") && localStorage.getItem("userInfo");
  const user = JSON.parse(userDetails)?.[1]?.name;
  const [cartItems, setCartItems] = useState([]);
  let userInfo = JSON.parse(localStorage.getItem("user"));
  // console.log("user", userInfo);
  let token  = JSON.parse(localStorage.getItem("userInfo"))[0];
  // console.log("tol",token);
  let addressInfo = JSON.parse(localStorage.getItem("addressInfo"))?.[0];
  console.log("adres",addressInfo);
  let streetValue,cityValue,stateValue,zipCodeValue;
    streetValue=addressInfo?.street;
    cityValue=addressInfo?.city;
    stateValue=addressInfo?.state;
    zipCodeValue=addressInfo?.zipCode;
  console.log("value",streetValue,cityValue,stateValue,zipCodeValue);
  const [activeTab, setActiveTab] = useState(4);
  let { cartList, isLoading: LoadingCheck } = useSelector(
    (state) => state.productReducer
  );
  let cartListItems = !LoadingCheck && cartList?.data?.items;
  useEffect(() => {
    setCartItems(cartListItems);
  }, []);

  let cartListTotalPrice =
    !LoadingCheck &&
    cartListItems?.map((item) => {
      let price = item?.product.price;
      let qty = item?.quantity;
      let itemPrice = price * qty;
      return itemPrice;
    });
  let total = Array.isArray(cartListTotalPrice)
    ? cartListTotalPrice.reduce((acc, currentValue) => acc + currentValue, 0)
    : 0;

   
    function cartToOrderHandler(){
      cartListItems?.map((item)=>{
          // console.log("Id",item.product._id);
          // console.log("qty",item.quantity);
          if(addressInfo){
            dispatch(
              getOrderList({
                Id:item.product._id,
                type: "POST",
                qty:item.quantity,
                streetName:streetValue,
                cityName: cityValue,
                stateName: stateValue,
                countryName: "India",
                zipCodeName: zipCodeValue,
                userName: user,
                tokenValue: token || "",
                phoneNumber: "",
              })
            );
            navigate("/OrderSuccessPage");
          }
      })
     
    }


  // console.log("activetab", activeTab);
  // console.log("cartLizt", cartListItems);
  // console.log("Items", cartItems);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-85 mt-[120px]">
          <div className="pt-9 pb-12 bg-[#f7f7f7] lg:bg-white">
            <div className="lg:container flex lg:flex-row flex-col-reverse lg:px-4 ">
              <div className="pmt-left md:sticky md:top-28 h-max lg:flex-[2] p-4 lg:pr-4 lg:border-r border-[#d6d6d6] bg-white">
                <p className="my-3 font-bold">Choose your payment method</p>
                <div className="paymentListTabs border flex border-[#d6d6d6] w-full">
                  <PaymentType
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <div className="paymentTabDetails flex-[2] flex justify-center items-center px-4">
                    {activeTab != 4 ? (
                      <div className="flex  items-center my-2 text-sm sm:text-base ">
                        This Payment method in updation.
                      </div>
                    ) : (
                      <div className="my-3 text-sm sm:text-base">
                        <p className="text-[#4e5664] font-medium mb-4">
                          Cash handling charges of ₹ 20 are applicable
                        </p>
                        <button
                          onClick={cartToOrderHandler}
                        className="cursor-pointer h-12 text-sm font-semibold w-full border-none outline-none flex bg-[#42a2a2] hover:bg-opacity-90 justify-center items-center rounded-md text-white">
                          Pay ₹{20 + total}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ! right side ! */}
              <div className="pmt-right md:flex-1 px-4 lg:px-0 lg:pl-4 mb-4 lg:border-l bg-[#f7f7f7] lg:bg-white border-[#d6d6d6]">
                <div className="flex justify-between items-center border bg-white border-b-[#d6d6d6] px-4 py-2 rounded-md mb-4 hover:shadow-md transition-all">
                  <p>
                    Delivering Order to{" "}
                    <storng className="font-[650] text-[16px]">{user}</storng>
                  </p>
                  <Link to="/AddressPage">
                    <img src={rightArrow} alt="" className="h-5" />
                  </Link>
                </div>
                <div className="border bg-white border-[#d6d6d6] px-4 rounded-md mb-4 hover:shadow-md transition-all">
                  {/* cartcard*/}
                  <Accordion.Root
                    className=" rounded-md "
                    type="single"
                    defaultValue="item-1"
                    collapsible
                    data-state="closed"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        You are paying for these items
                      </AccordionTrigger>
                      <AccordionContent>
                        {!LoadingCheck &&
                          cartListItems?.map((item) => (
                            <div className="flex rounded-md border mt-2 border-[#d6d6d6] shadow p-2">
                              <div className=" relative h-[130px] min-w-[104px] rounded-md">
                                <img
                                  className="aspect-[10/13] w-full h-full object-cover rounded-md"
                                  src={item.product.displayImage}
                                  alt={item.product.name}
                                />
                                <div className="pQty absolute top-1 right-1">
                                  <span className="rounded-full flex items-center justify-center bg-black text-[10px] text-white h-4 w-4 text-center font-semibold shadow">
                                    {item.quantity}
                                  </span>
                                </div>
                              </div>
                              <div className=" flex flex-col gap-2 px-2">
                                <p className=" text-xs text-[#4e5664] font-medium">
                                  {item.product.name}
                                </p>
                                <p className=" font-medium text-[10px]">
                                  Delivery by{" "}
                                  <span className="font-semibold">
                                    TOMORROW!!
                                  </span>
                                </p>
                                <div className=" text-xs flex gap-1">
                                  <span className="price font-bold">
                                    ₹{item.product.price}
                                  </span>
                                  <span className="mrp line-through text-[10px]">
                                    ₹
                                    {Math.round(
                                      item.product.price * 0.5 +
                                        item.product.price
                                    )}
                                  </span>
                                </div>
                                <div className=" text-[10px] md:text-xs text-[#1d8802] font-semibold">
                                  You saved ₹
                                  {Math.round(
                                    item.product.price * 0.5 +
                                      item.product.price
                                  ) - item.product.price}
                                  !
                                </div>
                              </div>
                            </div>
                          ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion.Root>
                </div>
                <div className="summaryBorderBox md:sticky md:top-24  md:mb-8">
                  <div className="sectionHeading py-3 px-5 text-xs font-bold">
                    <h4 className="">PRICE SUMMARY</h4>
                  </div>
                  <div className="paymentBox bg-white font-medium">
                    <div className="pmtsWrap p-4">
                      <div className="flex justify-between pb-3 text-xs">
                        <p>Total MRP (Incl. of taxes)</p>
                        <p>₹{total}</p>
                      </div>
                      <div className="flex justify-between pb-3 text-xs">
                        <p>Shipping Charges</p>
                        <p className="text-[#42a2a2]">FREE</p>
                      </div>
                      <div className="justify-between pb-3 text-xs hidden">
                        <p>Discount on MRP</p>
                        <p>- ₹{total}</p>
                      </div>
                      <div className="flex border-t-2 justify-between py-3 text-sm font-semibold">
                        <p>Final amount</p>
                        <p>₹{total}</p>
                      </div>
                      <div className=" py-10 flex justify-center gap-2 text-center">
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      className="w-10 h-10 object-cover"
                      src={badge_trust_img}
                      alt=""
                    />
                    <span className="font-semibold text-[13px] text-[#8f98a9]">
                      100% SECURE PAYMENTS
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      className="w-10 h-10 object-cover"
                      src={easy_returns_img}
                      alt=""
                    />
                    <span className="font-semibold text-[13px] text-[#8f98a9]">
                      EASY RETURNS & QUICK REFUNDS
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      className="w-10 h-10 object-contain"
                      src={globe_img}
                      alt=""
                    />
                    <span className="font-semibold text-[13px] text-[#8f98a9]">
                      SHIPPING GLOBALLY
                    </span>
                  </div>
                </div>
                    </div>
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
        "focus-within:shadow-mauve12  overflow-hidden  first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-1 ",
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
        "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[12px] text-[#333]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

export default PaymentPage;
