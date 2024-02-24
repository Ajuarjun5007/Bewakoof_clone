import truck_img from "../../assets/red-truck.webp";
import Cartcard from "./CartCard";
import tribe_yellow_img from "../../assets/tribe-yellow.svg";
import arrow_img from "../../assets/coupon-arrow.webp";
import globe_img from "../../assets/globe.svg";
import easy_returns_img from "../../assets/easy-returns.svg";
import badge_trust_img from "../../assets/badge-trust.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img_1 from "../../assets/bw-demo-3.webp";
import SuggestionCarousel from "../ProductComponent/SuggestionCarousel";
import payment_img from "../../assets/footerImage/secure-payments-image.webp";
import { useSelector, useDispatch } from "react-redux";
import WishListCard from "../WishListComponent/WishListCard";
import { Link } from "react-router-dom";

const CartPagePresent = () => {
  let wishListResult = useSelector((state) =>
    state.productReducer.wishList?.data?.items?.map(
      (item) => item?.products._id || item?.products
    )
  );

  let { cartList, isLoading: LoadingCheck } = useSelector(
    (state) => state.productReducer
  );

  let cartListItems = !LoadingCheck && cartList?.data?.items;
  let cartListSize =
    !LoadingCheck &&
    cartList?.data?.items?.map((item) => {
      return item.size;
    });

  let cartListTotalPrice =
    !LoadingCheck &&
    cartListItems?.map((item) => {
      let price = item?.product.price;
      let qty = item?.quantity;
      let itemPrice = price * qty;
      return itemPrice;
    });
  let total = cartListTotalPrice?.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
 
 
  console.log("cartaList",cartListItems);
  let userAddress = JSON.parse(localStorage.getItem("addressInfo")?.length>0);
   console.log("userAddreess",userAddress);

  return (
    <>
      <div className="mt-[120px] flex flex-col items-center justify-center">
        <div className="  w-85 max-[768px]:w-full">
          <div className="px-4 pb-10 flex justify-start">
            <p className="">
              <strong>My Bag </strong>
              {cartListItems.length} item(s)
            </p>
          </div>
          <div className="pt-9 flex  max-[768px]:flex-col ">
            {/* left section */}
            <div className="w-[55%] max-[768px]:w-full">
              <div
                className="flex items-center h-12 relative bg-[#fcffee] overflow-hidden 
            rounded mb-5"
              >
                <img className="ml-5 w-5 h-3" src={truck_img} alt="" />
                <p className="ml-2 text-xs font-medium">
                  Yay! You get FREE delivery on this order
                </p>
              </div>
              {!LoadingCheck &&
                cartListItems?.map((item, index) => (
                  <Cartcard
                    key={index}
                    Id={item.product._id}
                    name={item.product.name}
                    price={item.product.price}
                    quantity={item.quantity}
                    size={item.size}
                    image={item.product.displayImage}
                  />
                ))}
              <div className="flex-wrap">
                {wishListResult?.length > 0 && (
                  <p className="flex px-4 items-center font-semibold text-[15px]">
                    My wishlist
                  </p>
                )}
                <div className="flex flex-wrap">
                  {wishListResult?.length > 0 &&
                    wishListResult?.map((Id) => (
                      <WishListCard key={Id} Id={Id} />
                    ))}
                </div>
              </div>
            </div>
            {/* right section */}
            <div className="w-[45%] max-[768px]:flex max-[768px]:flex-col items-center justify-center max-[768px]:w-full ">
              <div className="relative w-[100%] max-[768px]:w-[90%] justify-center rounded-md px-4 mb-4 h-12 flex items-center bg-[#fdd835]">
                <span className="text-[15px] text-[#333] pr-10 flex  gap-1 font-[400] leading-4">
                  save extra <strong>₹ 450</strong> with
                </span>
                <img
                  className="absolute ml-[145px] pb-[2px]"
                  src={tribe_yellow_img}
                  alt=""
                />
              </div>
              <div className="rounded-md px-4 py-1 mb-4 border text-sm">
                <p>
                  Whistles! Get extra 15% cashback on prepaid orders above
                  Rs.699. Coupon code - HAPPY15
                </p>
              </div>
              <div className="rounded-md px-4 py-1 mb-4 border text-sm">
                <p>
                  Get Rs.200 instant discount on your First Purchase above
                  Rs.999. Coupon code -NEW200
                </p>
              </div>
              <div className="p-2 border text-xs">
                <div
                  className="rounded-md p-2 bg-[rgba(66,162,161,.1)] text-[#42a2a2] flex items-center 
                justify-between"
                >
                  <span>Apply Coupon / Gift Card / Referral</span>
                  <span className="font-bold flex items-center gap-1">
                    Redeem
                    <img src={arrow_img} alt="" />
                  </span>
                </div>
              </div>
              <div className="md:sticky md:top-24 border bg-[rgba(0,0,0,.04)]  mb-8 pb-8">
                <p className="py-3 px-5 text-[12px] text-[#333] tracking-wider bg-[#0000000a] font-bold ">
                  PRICE SUMMARY
                </p>
                <div className="bg-white font-medium max-[768px]:flex max-[768px]:flex-col">
                  <div className="px-4 pt-5 ">
                    <div className="flex justify-between pb-3 text-[13px] text-[#333]">
                      <p className="font-[400]">Total MRP (Incl. of taxes)</p>
                      <p className="font-[500]">₹ {total}</p>
                    </div>
                  </div>
                  <div className="px-4 py-0 max-[768px]:flex max-[768px]:flex-col">
                    <div className="flex justify-between pb-3 text-[13px] text-[#333]">
                      <p className="font-[400]">Shipping Charges</p>
                      <p className="font-[500] text-[#42a2a2]">FREE</p>
                    </div>
                  </div>
                  <div className="px-4 pb-12 border-b">
                    <div className="flex justify-between pb-3 text-[13px] text-[#333]">
                      <p className="font-bold text-[15px] tracking-wider">
                        Subtotal
                      </p>
                      <p className="font-bold text-[15px]">₹ {total}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between max-[767px]:fixed bg-white bottom-0 max-[768px]:justify-center max-[768px]:flex-col max-[768px]:w-full">
                    <div className="p-4 text-[18px] flex items-center gap-2 ">
                      <span className="font-[450]  text-[#333]">Total</span>
                      <div className="font-bold text-[#333]">
                        <span>₹</span>
                        <p className="text-base inline">{total}</p>
                      </div>
                    </div>
                    {
                    userAddress ? (
                      <Link to="/PaymentPage">
                        <button
                          className="cursor-pointer  h-10 w-[260px] sticky z-50 font-medium 
border-none outline-none flex justify-center items-center rounded-md text-white bg-[#42a2a2] hover:bg-opacity-80"
                        >
                          CONTINUE
                        </button>
                      </Link>
                    ) : (
                      <Link to="/AddressPage">
                        <button
                          className="cursor-pointer mr-4 h-10 w-72 font-medium 
        border-none outline-none flex justify-center items-center rounded-md text-white bg-[#42a2a2] hover:bg-opacity-80"
                        >
                          ADD ADDRESS
                        </button>
                      </Link>
                     )
                    } 
                  </div>
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
        <div className="w-[85%] py-[40px]">
          <div className="flex justify-center py-[20px] font-[600] text-[#333] mt-[10px]">
            YOU MAY ALSO LIKE
          </div>
          {/* <SuggestionCarousel/> */}
        </div>
        <div className="py-[40px]">
          <img src={payment_img} alt="" />
        </div>
      </div>
    </>
  );
};
export default CartPagePresent;
