import flag from "../../assets/NavbarflagImages/india-flag.png";
import mobile_men from "../../assets/mobile_men.webp";
import mobile_women from "../../assets/mobile_women.webp";
import { BsChevronRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
function MobileSideNavBar({ onClose }) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  let userInfo = JSON.parse(localStorage.getItem("userInfo")) || "";

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUserLoggedIn(true);
      setUserName(userInfo[1].name);
    }
  }, []);
  const clearStorage = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("user");
    window.location.reload(false);
    console.log("clear");
  };
  console.log(userName);
  console.log(localStorage.getItem("userInfo"));
  return (
    <>
      <div onClick={handleClose} className="w-full h-full bg-[#0000007f]">
        <div className="w-72  max-sm:w-[80%] bg-white h-full text-black  overflow-y-auto">
          <div className="menuHeading border-b px-5 sticky top-0 bg-white">
            <h1 className="font-bold py-4">Hello {userName} </h1>
          </div>
          <div className="">
            <div
              // onClick={onClose}
              className="currentCountry hover:bg-[#f3f3f383] mt-3 flex items-center justify-between px-5 cursor-pointer"
            >
              <Link to="/">
              <div 
              onClick={handleClose}
               className="flex items-center justify-center h-12 gap-2">
                <img
                  className="rounded-full w-8 h-8 object-cover"
                  src={flag}
                  alt=""
                />
                <div className="font-bold text-xs">India</div>
              </div>
              </Link>
              <span className="">
                <BsChevronRight />
              </span>
            </div>
            <div className="menuListWrapper">
              <p className="menuHeading  pt-3 px-5 text-[#0000004d] text-xs font-bold">
                SHOP IN
              </p>
              <ul className="menuList pt-1 text-xs font-bold">
                {/* <Link to={'Men'} onClick={onClose}> */}
                <li className="menulistOption hover:bg-[#f3f3f383] px-5 flex justify-between items-center h-12">
                  <span className="font-bold">Men</span>
                  <img
                    className="w-8 h-8 object-cover"
                    src={mobile_men}
                    alt=""
                  />
                </li>
                {/* </Link> */}
                {/* <Link to={'Women'} onClick={onClose}> */}
                <li className="menulistOption hover:bg-[#f3f3f393] px-5 flex justify-between items-center h-12">
                  <span className="font-bold">Women</span>
                  <img
                    className="w-8 h-8 object-cover"
                    src={mobile_women}
                    alt=""
                  />
                </li>
                {/* </Link> */}
              </ul>
            </div>
            {/* My Profile */}
            {userLoggedIn && (
              <div className="menuListWrapper bg-[#f3f3f3]">
                <p className="menuHeading pt-3 text-[#0000004d] px-5 text-xs font-bold">
                  MY PROFILE
                </p>
                <ul className="menuList pt-1 text-xs font-bold">
                  <Link onClick={onClose} to="/AccountPage">
                    <li className="menulistOption hover:bg-[#00000013] px-5 flex justify-between items-center h-12">
                      <span className="font-bold">My Account</span>
                    </li>
                  </Link>
                  <Link onClick={onClose} to="/WishlistPage">
                    <li className="menulistOption hover:bg-[#00000013] px-5 flex justify-between items-center h-12">
                      <span className="font-bold">My Wishlist</span>
                    </li>
                  </Link>
                  <Link onClick={onClose} to="/TrackOrderPage">
                    <li className="menulistOption hover:bg-[#00000013] px-5 flex justify-between items-center h-12">
                      <span className="font-bold">My Orders</span>
                    </li>
                  </Link>
                  <Link onClick={onClose} to="/WalletPage">
                    <li className="menulistOption hover:bg-[#00000013] px-5 flex justify-between items-center h-12">
                      <span className="font-bold">My Wallet</span>
                    </li>
                  </Link>
                </ul>
              </div>
            )}
            {/* COntact us */}
            <div className="menuListWrapper bg-[#f3f3f3]">
              <p className="menuHeading pt-3 text-[#0000004d] px-5 text-xs font-bold">
                Contact Us
              </p>
              <ul className="menuList pt-1 text-xs font-bold">
                <Link onClick={onClose} to="/AccountPage">
                  <li className="menulistOption hover:bg-[#00000013] px-5 flex justify-between items-center h-12">
                    <span className="font-bold">Help & Support</span>
                  </li>
                </Link>
                <Link onClick={onClose} to="/WishlistPage">
                  <li className="menulistOption hover:bg-[#00000013] px-5 flex justify-between items-center h-12">
                    <span className="font-bold">Feedback and Suggestions</span>
                  </li>
                </Link>
                <Link onClick={onClose} to="/TrackOrderPage">
                  <li className="menulistOption hover:bg-[#00000013] px-5 flex justify-between items-center h-12">
                    <span className="font-bold">Become a Seller</span>
                  </li>
                </Link>
              </ul>
            </div>
            {/* About us */}
            <div className="menuListWrapper bg-[#f3f3f3]">
              <p className="menuHeading pt-3 text-[#0000004d] px-5 text-xs font-bold">
                About Us
              </p>
              <ul className="menuList pt-1 text-xs font-bold">
                <Link onClick={onClose} to="/OfferPage">
                  <li className="menulistOption hover:bg-[#00000013] px-5 flex justify-between items-center h-12">
                    <span className="font-bold">Offers</span>
                  </li>
                </Link>
                <Link onClick={onClose} to="/TribeMembershipPage">
                  <li className="menulistOption hover:bg-[#00000013] px-5 flex justify-between items-center h-12">
                    <span className="font-bold">TriBe Membership</span>
                  </li>
                </Link>
                <Link onClick={onClose} to="/FanbookPage">
                  <li className="menulistOption hover:bg-[#00000013] px-5 flex justify-between items-center h-12">
                    <span className="font-bold">Fanbook</span>
                  </li>
                </Link>
              </ul>
            </div>
            {/* Login/Logout */}
            {userLoggedIn
                        ? <div onClick={()=>clearStorage()} className="menulistOption hover:bg-[#f3f3f383] px-5 flex justify-between items-center text-xs h-12 cursor-pointer">
                            <span className="font-bold">Logout</span>
                        </div>
                        :
                        <Link to="/LoginPage">
                        <div className="menulistOption hover:bg-[#f3f3f383] px-5 flex justify-between items-center text-xs h-12 cursor-pointer">
                            <span className="font-bold">Login</span>
                        </div>
                        </Link>
                    } 
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileSideNavBar;
