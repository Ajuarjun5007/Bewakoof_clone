import { ChevronDownIcon } from "@radix-ui/react-icons";
import img_1 from  "../../assets/bw-demo-3.webp"
function Cartcard(){
    return(
    <>
    <div className="px-4">
        <div className="relative border-[1px] border-[#0003] solid mb-5 rounded">
            <div className="">
                <div className="py-5 pb-9 px-2 flex flex-row justify-between  border-black solid">
                    <div className="h-[130px] ">
                        <span className="text-[16px] leading-[1.25rem] flex py-1 text-[#000000b3]">Men's tshirt</span>
                        <div className="flex items-center my-[6px]">
                     <span className="text-[#333] font-semibold mr-1">₹ 999</span>
                            <span className="text-[#9c9c9c] text-sm line-through">₹ 1299</span>
                        </div>
                        <div className="block text-[16px] text-[#1d8802] font-[400] pt-1 pb-3">
                            <p>You Saved ₹ 300!</p>
                        </div>
                        <div className="flex gap-5 py-2">
                            <div className="cursor-pointer flex items-center border rounded py-2 px-3 bg-[#f4f8fb]">
                                <span className="text-[12px] text-[#1c6c9e] md:text-[#333]">
                                    Size : <strong className="text-black px-1">L</strong>
                                </span>
                                <span className="pb-1 pl-1" ><ChevronDownIcon/></span>
                            </div>
                            <div className="cursor-pointer flex items-center border rounded py-1 px-1 bg-[#f4f8fb]">
                                <span className="text-[12px] text-[#1c6c9e] md:text-[#333]">
                                    Qty :<strong className="text-black px-1">1</strong>
                                </span>
                                <span className="pb-1 pl-1"><ChevronDownIcon/></span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={img_1} alt="" className=" w-[140px] object-cover rounded-md" />
                    </div>
                </div>
            </div>
                <div className="w-[100%] px-4 text-sm text-[#00000080] flex justify-center 
                ">
                    <button className="py-5 border-r border-t flex-1  justify-center cursor-pointer">Remove</button>
                    <button className="py-5 border-l border-t flex-[2] cursor-pointer">Move to Wishlist</button>
                </div>
        </div>
    </div>
    </>
    )
}
export default Cartcard;