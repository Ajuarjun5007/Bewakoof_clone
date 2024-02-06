import PaymentType from "./PaymentType";
import { useState } from "react";
import comingSoon from "../../assets/coming-soon.webp";
import { useSelector, useDispatch } from "react-redux";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import classNames from "classnames";
import rightArrow from "../../assets/right-arrow-address.svg";
import { Link } from "react-router-dom";

function PaymentPage() {
  const userDetails =
    localStorage.getItem("userInfo") && localStorage.getItem("userInfo");
    const user = JSON.parse(userDetails)?.[1]?.name;
  const [activeTab, setActiveTab] = useState(4);
  let { cartList, isLoading: LoadingCheck } = useSelector(
    (state) => state.productReducer
  );

  let cartListItems = !LoadingCheck && cartList?.data?.items;

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
  
  console.log("activetab", activeTab);
  
  console.log("user", user);
  let userInfo = JSON.parse(localStorage.getItem("user"));
  console.log("userInfo",userInfo);
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
                        <button className="cursor-pointer h-12 text-sm font-semibold w-full border-none outline-none flex bg-[#42a2a2] hover:bg-opacity-90 justify-center items-center rounded-md text-white">
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
                    <div className="flex rounded-md border border-[#d6d6d6] shadow p-2">
            <div className="cardImageContainer relative h-[130px] min-w-[104px] rounded-md">
                <img className="aspect-[10/13] w-full h-full object-cover rounded-md" src={displayImage || "/assets/images/others/product.webp"} alt={name} />
                <div className="pQty absolute top-1 right-1"><span className="rounded-full flex items-center justify-center bg-black text-[10px] text-white h-4 w-4 text-center font-semibold shadow">{quantity}</span></div>
            </div>
            <div className="cardDetailsContainer flex flex-col gap-2 px-2">
                {brand && <h3 className="brand text-black text-sm font-semibold">{brand}</h3>}
                <p className="productName text-xs text-[#4e5664] font-medium">{name}</p>
                <p className="arrivalTime font-medium text-[10px]">Delivery by <span className="font-semibold">03 Nov 2023</span></p>
                <div className="priceWrap text-xs flex gap-1">
                    <span className="price font-bold">₹{price}</span>
                    <span className="mrp line-through text-[10px]">₹{discountPrice}</span>
                </div>
                <div className="infoMsg text-[10px] md:text-xs text-[#1d8802] font-semibold">You saved ₹{discountPrice - price}!</div>
            </div>
        </div>
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

export default PaymentPage;
