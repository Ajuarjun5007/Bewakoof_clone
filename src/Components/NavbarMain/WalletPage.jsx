import { FaChevronLeft } from "react-icons/fa6";
import wallet_img from "../../assets/wallet_img.gif"
function WalletPage(){
    return(
        <>
        <div className="flex justify-center">
        <div className="w-85 mt-[120px]">
            <div className="my-5 text-[#51cccc] flex items-center text-sm gap-2">
                <FaChevronLeft className="text-[19px] font-[400]" />
                  <p className="text-[16px] font-[400]">Back to My Account</p>  
            </div>
            <div className="pt-4 pl-[10px] w-max pb-6">
                <p className="text-3xl font-bold text-[#2d2d2d] pb-1">My Wallet</p>
            <div className="w-9/12 h-[2px] bg-[#fbd139] mt-[6px]  ml-[2px]"></div>
            </div>
            <div className="flex flex-col items-center px-2">
                <div className="text-sm text-[#18181899] font-medium text-center">
                    <p className="text-[21px] mb-2">Oh no! Looks like your wallet is empty :(</p>
                    <p className="text-center text-[20px]  py-4 font-bold text-black">Start earning credits now!</p>
                </div>
                <img src={wallet_img} alt="" />
                <div className="text-sm text-[#18181899] font-medium text-center pb-12">
                    <p className="text-[21px] mb-2">Invite your friends to shop on Bewakoof and</p>
                    <p className="text-center text-[20px]  py-4 font-bold text-black">win credits worth Rs. 100 on every referral</p>
                </div>
            
            </div>
        </div>
        </div>
        </>
    )
}
export default WalletPage;