import { GoChevronRight } from "react-icons/go";
import account_img from "../../assets/empty-account.png"
import { Link } from "react-router-dom";
function AccountPage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-85 mt-[120px]">
        <div className="pt-4 pl-[10px] w-max pb-6">
            <p className="text-3xl font-bold text-[#2d2d2d] pb-1">My Account</p>
            <div className="w-9/12 h-[2px] bg-[#fbd139] mt-[6px]  ml-[2px]"></div>
          </div>
            <div className="mb-10">
          <div className="px-4 w-full flex gap-4 flex-wrap">
            <Link to="/TrackOrderPage">
            <div className="py-5 text-[#181818] border-b md:border-r md:px-5 hover:bg-gray-50">
                <div className="flex items-center gap-2">
                    <div className="font-medium">My Orders</div>
                    <GoChevronRight/>
                </div>
                <span className="text-xs opacity-60">View,modify and track orders</span>
            </div>
            </Link>
            <Link to="/WalletPage">
            <div className="py-5 text-[#181818] border-b md:border-r md:px-5 hover:bg-gray-50">
                <div className="flex items-center gap-2">
                    <div className="font-medium">My Wallet</div>
                    <span className="text-[#42a2a2] text-xs pl-2">Rs.0</span>
                    <GoChevronRight/>
                </div>
                <span className="text-xs opacity-60">Bewakoof Wallet History and redeemed gift records</span>
            </div>
            </Link>
            <Link to="/AddressPage">
            <div className="py-5 text-[#181818] border-b md:border-r md:px-5 hover:bg-gray-50">
                <div className="flex items-center gap-2">
                    <div className="font-medium">My Address</div>
                    <GoChevronRight/>
                </div>
                <span className="text-xs opacity-60">Edit,add or remove address</span>
            </div>
            </Link>
            <Link to="/ProfilePage">
            <div className="py-5 text-[#181818] border-b md:border-r md:px-5 hover:bg-gray-50">
                <div className="flex items-center gap-2">
                    <div className="font-medium">My Profile</div>
                    <GoChevronRight/>
                </div>
                <span className="text-xs opacity-60">Edit,personal info or change password</span>
            </div>
            </Link>
          </div>
            </div>
            <div className="pt-14 md:pt-26 pb-12 md:pb-26 flex justify-between md:justify-normal">
                <div className="ml-4 md:ml-0">
                <h3 className="pt-10 mb-8 text-xs md:text-xl text-[#181818] font-bold opacity-60 w-[200px] md:w-[355px]">
                    Buy something to get personalised recommendations. 
                </h3>
                <button className="border hover:opacity-80 rounded border-[#51cccc] text-[#51cccc] py-2 px-3 text-sm">
                    Continue Shopping
                </button>
                </div>
                <img 
                className="overflow-hidden"
                src={account_img} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}
export default AccountPage;