import empty_bag_img from  "../../assets/cart_page/empty-cart-page-doodle.png"
import CartPagePresent from "./CartPagePresent";
function CartPage(){
    return (
        <>
        {/* <div className="mt-[120px] flex flex-col  items-center justify-center">
            <div className="flex justify-center">
                <img className="w-[160px] h-[194px]" src={empty_bag_img} alt="" />
            </div>
            <p className="text-[#000c] text-lg font-[400] mt-[20px] tracking-wider">Nothing in the bag</p>
            <button className="cursor-pointer h-10 w-52 my-5 m-auto font-medium outline-none flex justify-center
            items-center rounded-md border-[#51cccc] border-2 text-lg text-[#51cccc] hover:bg-opacity-80">
                    Continue Shopping
            </button>
          </div> */}
          <CartPagePresent/>
        </>
    )
}
export default CartPage;