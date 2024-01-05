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
// import bwf_logo from "../../assets/bwk--eyes.svg";
import bwf_logo from "../../assets/bwk--eyes.svg";
function MobileNavBar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openSidebar = (e) => {
    if (e.stopProgation) e.stopProgation();
    document.body.style.overflowY = "hidden";
    setIsOpenSidebar(true);
  };

  const closeSidebar = (e) => {
    e.stopPropagation();
    document.body.style.overflowY = "";
    setIsOpenSidebar(false);
  };
  return (
    <>
      <div className="top-0 left-0 right-0 fixed">
        <div className="mainHeaderWrapper bg-[#fdd855] lg:bg-white h-14 px-4 lg:px-0 lg:border-b lg:border-[rgba(0,0,0,0.2)] shadow-sm lg:shadow-none relative">
          <div className="mainHeader lg:container flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RiMenu2Line
                onClick={openSidebar}
                className="w-7 h-7 block lg:hidden cursor-pointer hover:text-[#ef4444] transition-all duration-300"
              />

              <Link to={"/"} className="logo flex items-center h-14 ">
                <img
                  className="w-36 object-cover hidden lg:block mx-2 mb-1"
                  src={bwf_logo}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="lg:w-5/12 flex items-center  justify-end">

              <AiOutlineSearch className="lg:hidden w-7 h-7 mx-2 cursor-pointer" />

              <div className="divider border border-[rgba(0,0,0,0.3)] hidden  my-1 ml-4 h-6" />
              <AiOutlineHeart className="w-7 h-7 ml-1 mr-2 cursor-pointer" />
              <BsBag className="h-7 w-6 cursor-pointer ml-1 mr-0 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileNavBar;
