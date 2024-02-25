import {
  Link,
  NavLink,
  createSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineMobile,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import MobileSideNavBar from "./MobileSideNavBar";
import bwf_logo from "../../assets/bwk--eyes.svg";
import Portal from "./Portal";
function MobileNavBar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { cartList, isLoading: LoadingCheck } = useSelector(
    (state) => state.productReducer
  );
  
  let cartListItems =
    !LoadingCheck && cartList?.data?.items
      ? cartList.data.items.map((item) => item)
      : [];
      console.log("cartListItems",cartListItems);
      const[cartCount,setCartCount] = useState(0);

      useEffect(()=>{
        setCartCount(cartListItems.length);
      },[cartListItems])
  const openSideNavbar = (e) => {
    if (e.stopProgation) e.stopProgation();
    document.body.style.overflowY = "hidden";
    setIsOpenSidebar(true);
  };
  let userInfo = JSON.parse(localStorage.getItem("userInfo")) || "";
  const closeSideNavbar = (e) => {
    e.stopPropagation();
    document.body.style.overflowY = "";
    setIsOpenSidebar(false);
    console.log("close clicked");
  };
  return (
    <>
      <div
        className="mainHeaderWrapper bg-[rgb(255,210,50)] lg:bg-white h-14 px-4 lg:px-0 lg:border-b
         lg:border-[rgba(0,0,0,0.2)] shadow-sm lg:shadow-none top-0 left-0 right-0 fixed z-10"
      >
        {/* Mobile Navbar & sideNavbar */}
        <div className="mainHeader lg:container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RiMenu2Line
              onClick={openSideNavbar}
              className="w-7 h-7 block lg:hidden cursor-pointer hover:text-[#ef4444] transition-all duration-300"
            />
            {isOpenSidebar && (
              <Portal onClose={closeSideNavbar}>
                <MobileSideNavBar onClose={closeSideNavbar} />
              </Portal>
            )}
            <Link to={"/"} className="logo flex items-center h-14 ">
              <img className="w-10 object-cover" src={bwf_logo} alt="logo" />
            </Link>
          </div>
          <div className="lg:w-5/12 flex items-center  justify-end">
            <Link to="/MobileSearch">
            <AiOutlineSearch className="lg:hidden w-7 h-7 mx-2 cursor-pointer" />
            </Link>
            <div className="divider border border-[rgba(0,0,0,0.3)] hidden  my-1 ml-4 h-6" />
              <Link to={`${userInfo?"/WishlistPage":"/LoginPage"}`}>
            <AiOutlineHeart className="w-7 h-7 ml-1 mr-2 cursor-pointer" />
              </Link>
              <Link to={`${userInfo?"/CartPage":"/LoginPage"}`}>
                <div className="relative inline-block">
              { cartCount>0 && (
                    <p className="absolute top-0 right-0 font-medium transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-red-500 rounded-full h-5 w-5 
                    text-black text-xs ">
                    {cartCount>0 ? cartCount: " "}
                </p>
                  )
                  }
            <BsBag className="h-7 w-6 cursor-pointer ml-1 mr-0 " />
                </div>
                
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileNavBar;
