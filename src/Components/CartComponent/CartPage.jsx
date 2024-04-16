import { useState,useEffect} from "react";
import empty_bag_img from "../../assets/cart_page/empty-cart-page-doodle.png";
import CartPagePresent from "../CartComponent/CartPagePresent";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function CartPage() {
  let { cartList, isLoading: LoadingCheck } = useSelector(
    (state) => state.productReducer
  );
  
  let cartListItems =
    !LoadingCheck && cartList?.data?.items
      ? cartList.data.items.map((item) => item)
      : [];

      useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        window.scrollTo(0,0);
      },[])

  return (
    <>
      {cartListItems.length > 0 ? (
        <CartPagePresent />
      ) : (
        <div className="mt-[120px] flex flex-col  items-center justify-center">
          <div className="flex justify-center">
            <img className="w-[160px] h-[194px]" src={empty_bag_img} alt="" />
          </div>
          <p className="text-[#000c] text-lg font-[400] mt-[20px] tracking-wider">
            Nothing in the bag
          </p>
          <Link to='/'>
          <button
            className="cursor-pointer h-10 w-52 my-5 m-auto font-medium outline-none flex justify-center
            items-center rounded-md border-[#51cccc] border-2 text-lg text-[#51cccc] hover:bg-opacity-80"
          >
            Continue Shopping
          </button>
          </Link>
        </div>
      )}

      {/* <CartPagePresent/> */}
    </>
  );
}
export default CartPage;
