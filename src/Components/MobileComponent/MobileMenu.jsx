
import "react-multi-carousel/lib/styles.css";
// import "./HomePage.css";
import ctgry_active from  '../../assets/mobile-categories-active.svg';
import ctgry_inactive from  '../../assets/mobile-categories-inactive.svg';
import profile_inactive from  '../../assets/mobile-profile-inactive.svg';
import profile_active from  '../../assets/mobile-profile-active.svg';
import home_active from  '../../assets/mobile-home-active.svg';
import home_inactive from  '../../assets/mobile-home-inactive.svg';
import explore_inactive from  '../../assets/mobile-explore-inactive.svg';
import explore_active from  '../../assets/mobile-explore-active.svg';
import {Link,NavLink, useNavigate,useLocation} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getWishListOperations,
  getProductList,
  getCartOperations,
  getOrderList,
} from "../ProductComponent/Slices/FilterSlice";
// import { dressList } from "../ApiFetch";
import { useScreenSize } from "../MobileComponent/useScreenSize";
import { useEffect, useState } from "react";
function MobileMenu(){
    const[locationName,setLocationName]=useState("")
    let location =  useLocation();
    useEffect(()=>{
        setLocationName(location.pathname);
        // locationHandler(location.pathname);
    },[location])
    
    // console.log("loc",location);
    // console.log("locationName",locationName);
    return(
        <>
         <div className="footerMenuWrapper fixed bottom-0 left-0 right-0 drop-shadow-2xl py-2 bg-white flex justify-evenly z-50 lg:hidden">
          <NavLink
            to={"/"}
            className="bottomNavTab flex flex-col justify-center"
          >
            <img
              className="h-6 w-6 m-auto nav-icon"
              src={`${locationName === "/"?home_active : home_inactive}`}
              alt="Home"
            />
            <span className="text-xs w-10 text-center">Home</span>
          </NavLink>

          <NavLink
            to={"/MobileSearch"}
            className="bottomNavTab flex flex-col justify-center"
          >
            <img
              className="h-6 w-6 m-auto nav-icon"
              src={`${locationName === "/MobileSearch"?ctgry_active:ctgry_inactive}`}
              alt="Categories"
            />
            <img
              className=" h-6 w-6 m-auto nav-icon-active hidden"
              src={ctgry_active}
              alt="Categories"
            />
            <span className="text-xs w-[66px] text-center">Categories</span>
          </NavLink>

          <NavLink
            to={"/TribeMembershipPage"}
            className="bottomNavTab flex flex-col justify-center"
          >
            <img
              className=" h-6 w-6 m-auto nav-icon"
              src={`${locationName === "/TribeMembershipPage"?explore_active :explore_inactive}`}
              alt="Explore"
            />
         
            <span className="text-xs w-12 text-center">Explore</span>
          </NavLink>

          <NavLink
            to={"/AccountPage"}
            className="bottomNavTab flex flex-col justify-center "
          >
            <img
              className=" h-6 w-6 m-auto nav-icon"
              src={`${locationName === "/AccountPage" ? profile_active : profile_inactive}`}

              alt="Profile"
            />
            {/* <img
              className=" h-6 w-6 m-auto nav-icon-active hidden"
              src={profile_active}
              alt="Profile"
            /> */}
            <span className="text-xs w-12 text-center">Profile</span>
          </NavLink>
        </div>
        </>
    )
}
export default MobileMenu;