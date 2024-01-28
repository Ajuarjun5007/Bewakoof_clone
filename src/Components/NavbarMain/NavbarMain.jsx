import logo from "../../assets/bewakoof_logo.svg";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { BsBag } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import flag from "../../assets/NavbarflagImages/india-flag.png";
import { genders, subCategories } from "../TypeConstants";
import { topWearForMen } from "../HomePage/menucontent";
import { topWearForWomen } from "../HomePage/menucontent";
import { bottomWearForMen } from "../HomePage/menucontent";
import { bottomWearForWomen } from "../HomePage/menucontent";
import { winterWearForMen } from "../HomePage/menucontent";
import { winterWearForWomen } from "../HomePage/menucontent";
import { plusSizeForMen } from "../HomePage/menucontent";
import { plusSizeForWomen } from "../HomePage/menucontent";
import { innerWearLoungewearForMen } from "../HomePage/menucontent";
import user_img from "../../assets/user_icon.png";
import { brands } from "../TypeConstants";
import { brandimages } from "../imageconstants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavbarMain.css";
import ComingSoon from "../ComingSoon";
import { setSearchValue } from "../ProductComponent/Slices/FilterSlice";
import { useDispatch } from "react-redux";
function NavbarMain() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userDetailsDisplay, setUserDetailsDisplay] = useState(false);
  const [dressList, setDressList] = useState([]);
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuContentForMen, setMenuContentForMen] = useState(false);
  const [menuContentForWomen, setMenuContentForWomen] = useState(false);
  const [menuContentForMobile, setMenuContentForMobile] = useState(false);
  
  // console.log("user",user);
  const searchValueResult = useSelector(
    (state) => state.productReducer.searchValue
  );

  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      setUserLoggedIn(true);
      let userInfo = JSON.parse(localStorage.getItem("userInfo")) || "";
      setUserName(JSON.parse(localStorage.getItem("userInfo"))[1].name);
    }
  },[])
  const clearStorage = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("user");
    window.location.reload(false);
    console.log("clear");
  };

  useEffect(() => {
    if (location.pathname == "/") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [location.pathname]);

  function searchHandler(e) {
    const value = e.target.value;
    console.log("value", e.target.value);
    dispatch(
      setSearchValue({
        id: "",
        type: "GET",
        // tokenValue: JSON.parse(localStorage.getItem("userInfo"))[0],
        suffix: "&limit=10",
        searchQuery: value,
      })
    );
  }
  console.log("searchvalueresult", searchValueResult);
  console.log("userLog",userLoggedIn);
  return (
    <>
      <div className="flex  w-full  fixed z-10 bg-white top-8 pt-[3px] justify-center border-b-[1px] border-[rgba(0,0,0,0.2)] solid ">
        <div className="flex w-85  md:max-xl:w-full  ">
          {/* Navbar logo */}
          <div className="logocontainer px-2  py-3 ">
            <Link to={"/"}>
              <img className="h-5" src={logo} alt="" />
            </Link>
          </div>
          {/* categories */}
          <div
            className=" w-5/12 py-3 flex relative
            tracking-widest ml-10 lg:ml-0 md:max-xl:w-6/12 "
          >
            {/* lg:ml-0 lg-max:xl:w-4/12 */}
            <div
              onMouseOverCapture={() => setMenuContentForMen(true)}
              onMouseLeave={() => setMenuContentForMen(false)}
            >
              <Link to={`/ProductListPage/${genders[0]}`}>
                <span
                  className={`text-sm pt-4 px-3 pb-3 leading-3 ${
                    menuContentForMen ? "border-b-4 border-hoveryellow" : ""
                  }`}
                >
                  MEN
                </span>
              </Link>
              {menuContentForMen && (
                <div
                  className="flex w-[1140px] justify-center z-11 max-h-[550px] overflow-scroll absolute left-[-150px]
             top-12  border-[1px] bg-white border-[rgba(0,0,0,0.2)] solid  "
                >
                  <div className=" p-10 flex">
                    <div
                      className=" flex w-[60%] gap-x-[40px] 
              flex-wrap border-r-[1px] border-[rgba(0,0,0,0.2)] solid "
                    >
                      <div className="">
                        <span className="  font-[450] pb-[20px] solid text-[#494949] text-[14px] ">
                          Topwear
                        </span>
                        <div className="my-3">
                          {topWearForMen.map((item) => (
                            <Link
                              to={`/ProductListPage/${decodeURIComponent(
                                item
                              )}_Men`}
                              state={{
                                MenuContent: `Men/${decodeURIComponent(item)}`,
                              }}
                            >
                              <p className="text-[13px] text-[#7f7f7f] py-[3px] hover:underline">
                                {item}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mx-3">
                        <span className=" pb-[20px]  font-[450] solid text-[#494949] text-[14px] ">
                          Bottomwear
                        </span>
                        <div className="my-3">
                          {bottomWearForMen.map((item) => (
                            <Link
                              to={`/ProductListPage/${decodeURIComponent(
                                item
                              )}_Men`}
                              state={{
                                MenuContent: `Men/${decodeURIComponent(item)}`,
                              }}
                            >
                              <p className="text-[13px] text-[#7f7f7f] py-[3px] hover:underline">
                                {item}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mx-3">
                        <span className=" pb-[20px]  font-[450] solid text-[#494949] text-[14px] ">
                          Winterwear
                        </span>
                        <div className="my-3">
                          {winterWearForMen.map((item) => (
                            <Link
                              to={`/ProductListPage/${decodeURIComponent(
                                item
                              )}_Men`}
                              state={{
                                MenuContent: `Men/${decodeURIComponent(item)}`,
                              }}
                            >
                              <p className="text-[13px] text-[#7f7f7f] py-[3px] hover:underline">
                                {item}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="">
                        <span className="pb-[20px]  font-[450] solid text-[#494949] text-[14px] ">
                          Plus size
                        </span>
                        <div className="my-3">
                          {plusSizeForMen.map((item) => (
                            <Link
                              to={`/ProductListPage/${decodeURIComponent(
                                item
                              )}_Men`}
                              state={{
                                MenuContent: `Men/${decodeURIComponent(item)}`,
                              }}
                            >
                              <p className="text-[13px] text-[#7f7f7f] py-[3px] hover:underline">
                                {item}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="">
                        <span className="pb-[20px]  font-[450] solid text-[#494949] text-[14px] ">
                          Inner wear & Lounge wear
                        </span>
                        <div className="my-3">
                          {innerWearLoungewearForMen.map((item) => (
                            <p className="text-[13px] text-[#7f7f7f] py-[3px] hover:underline">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className=" pl-[70px] ">
                      <span className="font-[450] mb-[30px] solid  text-[#494949] text-[14px]">
                        Brands
                      </span>
                      {Array(25)
                        .fill()
                        .map((_, i) => (
                          <Link
                            to={`/ProductListPage/${brands[i]}`}
                            state={{ brand: `Men/${brands[i]}` }}
                          >
                            <div
                              key={i}
                              className="flex items-center py-[10px] gap-3  font-[400] solid text-[#7f7f7f] text-[13px]"
                            >
                              <img
                                className="h-9 w-9"
                                src={brandimages[i]}
                                alt=""
                              />
                              {brands[i]}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              onMouseOverCapture={() => setMenuContentForWomen(true)}
              onMouseLeave={() => setMenuContentForWomen(false)}
            >
              <Link to={`/ProductListPage/${genders[1]}`}>
                <span
                  className={`text-sm pt-4 px-3 pb-3 leading-3 ${
                    menuContentForWomen
                      ? "border-b-[10px] border-hoveryellow"
                      : ""
                  }`}
                >
                  WOMEN
                </span>
              </Link>
              {menuContentForWomen && (
                <div
                  className="flex w-[1140px] justify-center z-11 max-h-[550px] overflow-scroll absolute left-[-150px]
             top-12  border-[1px] bg-white border-[rgba(0,0,0,0.2)] solid  "
                >
                  <div className=" p-10 flex">
                    <div
                      className=" flex w-[60%] gap-x-[40px] 
              flex-wrap border-r-[1px] border-[rgba(0,0,0,0.2)] solid "
                    >
                      <div className="">
                        <span className="  font-[450] pb-[20px] solid text-[#494949] text-[14px] ">
                          Topwear
                        </span>
                        <div className="my-3">
                          {topWearForWomen.map((item) => (
                            <Link
                              to={`/ProductListPage/${decodeURIComponent(
                                item
                              )}_Women`}
                              state={{
                                MenuContent: `Women/${decodeURIComponent(
                                  item
                                )}`,
                              }}
                            >
                              <p className="text-[13px] text-[#7f7f7f] py-[3px] hover:underline">
                                {item}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mx-3">
                        <span className=" pb-[20px]  font-[450] solid text-[#494949] text-[14px] ">
                          Bottomwear
                        </span>
                        <div className="my-3">
                          {bottomWearForWomen.map((item) => (
                            <Link
                              to={`/ProductListPage/${decodeURIComponent(
                                item
                              )}_Women`}
                              state={{
                                MenuContent: `Women/${decodeURIComponent(
                                  item
                                )}`,
                              }}
                            >
                              <p className="text-[13px] text-[#7f7f7f] py-[3px] hover:underline">
                                {item}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mx-3">
                        <span className=" pb-[20px]  font-[450] solid text-[#494949] text-[14px] ">
                          Winterwear
                        </span>
                        <div className="my-3">
                          {winterWearForWomen.map((item) => (
                            <Link
                              to={`/ProductListPage/${decodeURIComponent(
                                item
                              )}_Women`}
                              state={{
                                MenuContent: `Women/${decodeURIComponent(
                                  item
                                )}`,
                              }}
                            >
                              <p className="text-[13px] text-[#7f7f7f] py-[3px] hover:underline">
                                {item}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="">
                        <span className="pb-[20px]  font-[450] solid text-[#494949] text-[14px] ">
                          Plus size
                        </span>
                        <div className="my-3">
                          {plusSizeForWomen.map((item) => (
                            <Link
                              to={`/ProductListPage/${decodeURIComponent(
                                item
                              )}_Women`}
                              state={{
                                MenuContent: `Women/${decodeURIComponent(
                                  item
                                )}`,
                              }}
                            >
                              <p className="text-[13px] text-[#7f7f7f] py-[3px] hover:underline">
                                {item}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className=" pl-[70px] ">
                      <span className="font-[450] mb-[30px] solid text-[#494949] text-[14px]">
                        Brands
                      </span>
                      {Array(25)
                        .fill()
                        .map((_, i) => (
                          <Link
                            to={`/ProductListPage/${brands[i]}`}
                            state={{ brand: `Women/${brands[i]}` }}
                          >
                            <div
                              key={i}
                              className="flex items-center py-[10px] gap-3  font-[400] solid text-[#7f7f7f] text-[13px]"
                            >
                              <img
                                className="h-9 w-9"
                                src={brandimages[i]}
                                alt=""
                              />
                              {brands[i]}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              onMouseOverCapture={() => setMenuContentForMobile(true)}
              onMouseLeave={() => setMenuContentForMobile(false)}
            >
              <Link to="/ComingSoonPage">
                <span className="text-sm pt-4 px-3 pb-3 leading-3  hover:border-b-[4px] border-hoveryellow">
                  MOBILE COVERS
                </span>
              </Link>
              {menuContentForMobile && (
                <div
                  className="flex w-[1140px] justify-center z-11 max-h-[550px] overflow-scroll absolute left-[-150px]
             top-12  border-[1px] bg-white border-[rgba(0,0,0,0.2)]"
                >
                  <div className=" p-10 mt-10 flex">
                    <ComingSoon />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* lefttnavbar */}
          <div className="flex items-center border-[rgba(0,0,0,0.5)] md:max-xl:mr-2 ">
            <div className="inputwrapper flex relative  bg-[#eaeaea] mt-1 mb-1 h-10  rounded">
              <IoIosSearch className="absolute left-3.5 top-2 text-[rgba(0,0,0,0.5)] text-[24px]" />
              <input
                onChange={(e) => searchHandler(e)}
                className=" pr-1.5 pl-10 text-[11px] text-[rgba(0,0,0,0.5)] w-[330px] focus:bg-white focus:border-[1px] bg-[#eaeaea] rounded"
                type="text"
                placeholder="Search by product, category or collection"
              />
            </div>
            {/* right navbar */}
            <div
              onMouseOverCapture={() => setUserDetailsDisplay(true)}
              onMouseLeave={() => setUserDetailsDisplay(false)}
              className="flex justify-between items-center px-2 "
            >
              <RxDividerVertical className="text-[40px] font-light text-[rgba(0,0,0,0.5)] " />

              <div>
                {userLoggedIn ? (
                  <div
                    className=" user-detail-container relative"
                    //  onMouseOver={() => setUserDetailsDisplay(true)}
                    //  onMouseLeave={() => setUserDetailsDisplay(false)}
                  >
                    <LuUser2 className="text-[27px]" />
                    <div className="dropdown-container">
                      <div
                        className={`absolute w-[180px] z-2 mt-[14px] text-14 left-[-60px] cursor-pointer bg-white shadow-2px hover:shadow-md ${
                          userDetailsDisplay ? "block" : "hidden"
                        }`}
                      >
                        <p className="bg-[rgba(0,0,0,.05)] text-[rgba(0,0,0,.5)] text-ellipsis overflow-hidden italic  px-[15px] py-[10px]">
                          Hi ,{userName}
                        </p>
                        <Link to="/AccountPage">
                          <p className="hover:bg-[rgba(0,0,0,.05)] px-[15px] py-[10px]">
                            My Account
                          </p>
                        </Link>
                        <Link to="/WishlistPage">
                          <p className="hover:bg-[rgba(0,0,0,.05)]  px-[15px] py-[10px]">
                            My Wishlist
                          </p>
                        </Link>
                        <Link to="/TrackOrderPage">
                          <p className="hover:bg-[rgba(0,0,0,.05)]  px-[15px] py-[10px]">
                            My Orders
                          </p>
                        </Link>
                        <Link to="/WalletPage">
                          <p className="hover:bg-[rgba(0,0,0,.05)]  px-[15px] py-[10px]">
                            My Wallet
                          </p>
                        </Link>
                        <p
                          onClick={() => clearStorage()}
                          className="hover:bg-[rgba(0,0,0,.05)] px-[15px] py-[10px]"
                        >
                          Logout
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link to="LoginPage">
                    <span className="text-[14px] leading-3 tracking-wider">
                      Login
                    </span>
                  </Link>
                )}
              </div>

              <span className="px-2 text-[30px] ">
                <Link to={`${userLoggedIn ? "/WishlistPage" : "LoginPage"}`}>
                  <CiHeart />
                </Link>
              </span>
              <span className="px-2 text-[22px] ">
                <Link to={`${userLoggedIn ? "/CartPage" : "LoginPage"}`}>
                  <BsBag />
                </Link>
              </span>
              <span className="pl-1 ">
                <img className=" h-[30px] w-[40px] " src={flag} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* scroll navbar */}
      {isVisible && (
        <div className=" w-full z-[1] flex justify-center bg-white fixed top-[84px] pt-4 ">
          <div className=" px-1  flex w-[90%]   overflow-scroll">
            {subCategories.map((subCategory, index) => (
              <Link
                key={index * Math.random()}
                to={`/ProductListPage/${subCategory}`}
              >
                <span className="mx-1 pr-20 py-0 text-[17px] key={`index`}">
                  {subCategory.toUpperCase()}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default NavbarMain;
