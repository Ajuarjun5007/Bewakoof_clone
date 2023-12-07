
import img_1 from "../../assets/no-orders.png"
import { IoChevronBackOutline } from "react-icons/io5"

function TrackOrderPage(){

    return(
        <>
        <div className="flex justify-center mt-[100px] bg-[#f9f9f9]">
        <div className="w-85 ">
            <div className=" flex my-[20px] items-center">
            <IoChevronBackOutline className="text-[#51cccc] font-[100] text-[19px]"/>
            <span className="text-[#51cccc] text-[14px] font-[300] tracking-wide">Back to My Account</span>
            </div>
            <div className="my-[20px]">
                <span className="underline decoration-[rgb(253,216,13)] decoration-[3px] text-[#181818] text-[2em] 
            font-[600]">My Orders</span>
            </div>
            <div className="flex justify-center py-[40px] ">
                <span className="text-[rgba(24,24,24,.8)] text-center text-[20px]">Sadly, you haven't placed any orders till now.</span>
            </div>
            <div className="flex justify-center">
            <img className="w-[138px] h-[203px]" src={img_1} alt="" />
            </div>
            <div className=" flex justify-center py-[40px] mb-[50px]">
                <button  className="text-[#51cccc] border-[1px]
                 border-[#51cccc] solid px-[10px] py-[5px] rounded-[2px]">Continue Shopping</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default TrackOrderPage;