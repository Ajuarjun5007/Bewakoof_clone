import { IoIosSearch } from "react-icons/io";
import img_1 from  "../../assets/contactus_airoplane.webp"
function ContactusPage(){
    return(
        <>
            <div className="flex justify-center p-[40px]">
            <div className="w-85 mt-[120px] ">
            <div className="">
            <p className="underline decoration-[rgb(253,216,13)] decoration-[1px] text-[20px] 
            font-[900]">Contact Us</p>
        <div className="flex mt-[34px] justify-between px-[10px]">
            <div className="">
            <p className="font-[500] text-[24px]">What’s your query about?</p>
            <div className="relative flex items-center py-[5px]">
            <input className="py-[20px] px-[40px] h-[49px] w-[360px] border-[1px]
             border-[rgb(0,0,0)] solid rounded-[50px] focus:outline-none " type="text" placeholder="Search your Query here" />
            <IoIosSearch className="absolute top-[20px] left-[10px] text-[22px]"/>
            </div>
            </div>
            <img className="w-[300px] h-[131px]" src={img_1} alt="" />
        </div>
            </div>
        <div className="">
            <div className="border-l-[2px] border-[rgb(253,216,13)] solid pl-[10px] mt-[30px]">
                <span className="text-[#333] font-[500]">Orders,Delivery & Payment</span>
            </div>
            <div className="mt-[20px]">
                <p className="p-[10px] font-[300] text-[#333]">Cancellations</p>
                <p className="p-[10px] font-[300] text-[#333]">Refunds & Returns</p>
                <p className="p-[10px] font-[300] text-[#333]">My Bewakoof® Wallet</p>
                <p className="p-[10px] font-[300] text-[#333]">My Accounts</p>
                <p className="p-[10px] font-[300] text-[#333]">Offers and Combos</p>
                <p className="p-[10px] font-[300] text-[#333]">Tribe Menbership</p>
                <p className="p-[10px] font-[300] text-[#333]">Go to My Orders</p>
            </div>
        </div>

        <div className=" py-[40px] bg-[#fafafa]">
            <div className="">
                <span className="underline decoration-[rgb(253,216,13)] decoration-[1px]">
                Corporate Address :
                </span>
            </div>
            <div className=" text-[15px] text-[#333] mt-[20px]">
            <p className="">Bewakoof Brands Pvt. Ltd.</p>
            <p className="">WeWorks Chromium,</p>
            <p className="">3rd Floor, B114-116,</p>
            <p className="">Next to L&T Flyover, Jogeshwari Vikhroli Link Road,</p>
            <p className="">Andheri (East) Mumbai, Maharashtra, 400076</p>
            </div>
            <div className="mt-[20px] text-[12px] ">
                <span>You can reach us at <strong>care@bewakoof.com </strong> with all queries. We do not have a Bewakoof customer care number.</span>
            </div>
        </div>
            </div>
        </div>
        <div className=""></div>
        </>
    )
}
export default ContactusPage;