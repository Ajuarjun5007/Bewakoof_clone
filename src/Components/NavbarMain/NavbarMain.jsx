import logo from "../../assets/bewakoof_logo.svg"
import { useEffect, useState } from "react";
import { dressList } from "../ApiFetch";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import flag from "../../assets/NavbarflagImages/india-flag.png"
import {subCategories} from "../TypeConstants"
import { topWearForMen } from "../HomePage/menucontent";
import { bottomWearForMen } from "../HomePage/menucontent";
import { winterWearForMen } from "../HomePage/menucontent";
import { plusSizeForMen } from "../HomePage/menucontent";
import { innerWearLoungewearForMen } from "../HomePage/menucontent";
import { brands } from "../TypeConstants";
import { brandimages } from "../imageconstants";
import { Link, useLocation } from "react-router-dom";
function NavbarMain(){

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await dressList();
            console.log("data",data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);

      const hideScrollNavBar=[""];
      const location = useLocation();
      const [isVisible,setIsVisible] = useState(false);
      useEffect(()=>{
        if(hideScrollNavBar.includes(location.pathname.split("/")[1])){
            setIsVisible(true);
        }
        // window.location.reload(false);
      },[location])

    return(
    <>
    <div className="flex z-10 w-full  fixed bg-white top-8 pt-[3px] justify-center border-b-[1px] border-[rgba(0,0,0,0.2)] solid ">
    <div className="flex  w-85 ">
{/* Navbar logo */}
        <div className="logocontainer px-2  py-3" >
            <Link to={"/"}>
        <img className="h-5"src={logo} alt="" />
            </Link>
        </div>
    {/* categories */}
        <div className=" w-5/12 py-3 flex relative tracking-widest ml-10 lg:ml-0 lg-max:xl:w-4/12 ">
            <div className="">
                <Link to="/ProductListPage">
            <span className="text-[13px] pt-4 px-3 pb-3 leading-3  hover:border-b-4 border-hoveryellow">MEN</span>
                </Link>
             {/* Menu content */}
            {/* <div className="flex w-[1140px] justify-center z-11 max-h-[550px] overflow-scroll absolute left-[-150px]
             top-12  border-[1px] bg-white border-[rgba(0,0,0,0.2)] solid  ">
                <div className=" p-10 flex">
             <div className=" flex w-[60%] gap-x-[40px] 
              flex-wrap border-r-[1px] border-[rgba(0,0,0,0.2)] solid ">
                <div className="">
                    <span className="  font-[450] pb-[20px] solid text-[#494949] text-[14px] ">Topwear</span>
                    <div className="my-3">
                    {topWearForMen.map((item)=>(
                        <p className="text-[13px] text-[#7f7f7f] py-[3px]">{item}</p>
                    ))}
                    </div>
                </div>
                <div className="mx-3">
                    <span className=" pb-[20px]  font-[450] solid text-[#494949] text-[14px] ">Bottomwear</span>
                    <div className="my-3">
                    {bottomWearForMen.map((item)=>(
                        <p className="text-[13px] text-[#7f7f7f] py-[3px]">{item}</p>
                    ))}
                    </div>
                </div>
                <div className="mx-3">
                    <span className=" pb-[20px]  font-[450] solid text-[#494949] text-[14px] ">Winterwear</span>
                    <div className="my-3">
                    {winterWearForMen.map((item)=>(
                        <p className="text-[13px] text-[#7f7f7f] py-[3px]">{item}</p>
                    ))}
                    </div>
                </div>
                <div className="">
                    <span className="pb-[20px]  font-[450] solid text-[#494949] text-[14px] ">Plus size</span>
                    <div className="my-3">
                    {plusSizeForMen.map((item)=>(
                        <p className="text-[13px] text-[#7f7f7f] py-[3px]">{item}</p>
                    ))}
                    </div>
                </div>
            <div className="">
                    <span className="pb-[20px]  font-[450] solid text-[#494949] text-[14px] ">Inner wear & Lounge wear</span>
                    <div className="my-3">
                    {innerWearLoungewearForMen.map((item)=>(
                        <p className="text-[13px] text-[#7f7f7f] py-[3px]">{item}</p>
                    ))}
                    </div>
                </div>
             </div>
             <div className=" pl-[70px] "> 
             <span className="font-[450] mb-[30px] solid text-[#494949] text-[14px]">Brands</span>
             {
        Array(25).fill().map((_, i) => (
            <div key={i} className="flex items-center py-[10px] gap-3  font-[400] solid text-[#7f7f7f] text-[13px]">
                <img className="h-9 w-9" src={brandimages[i]} alt="" />
                {brands[i]}
            </div>
        ))
    }
             </div>
                </div>
            </div> */}
            </div>
            <div>
            <span className="text-[13px] pt-2 px-3 pb-3 leading-3  hover:border-b-4 border-hoveryellow">WOMEN</span>
            </div>
            <div>
            <span className="text-[13px] pt-2 px-3 pb-3 leading-3  hover:border-b-4 border-hoveryellow">MOBILE COVERS</span>
            </div>
           
        </div>


        {/* rightnavbar */}
        <div className="flex items-center border-[rgba(0,0,0,0.5)]">
            <div className="inputwrapper flex relative  bg-[#eaeaea] mt-1 mb-1 h-10  rounded">
            <IoIosSearch  className="absolute left-3.5 top-2 text-[rgba(0,0,0,0.5)] text-[24px]"/>
            <input className=" pr-1.5 pl-10 text-[11px] text-[rgba(0,0,0,0.5)] w-[330px] focus:bg-white focus:border-[1px] bg-[#eaeaea] rounded" type="text" placeholder="Search by product, category or collection"/>
            </div>
            {/* left navbar */}
            <div className="flex justify-between items-center px-2 ">
            <RxDividerVertical className="text-[40px] font-light text-[rgba(0,0,0,0.5)] "/>
            <Link to="LoginPage">
                <span className="text-[14px] leading-3 tracking-wider">Login</span> 
            </Link>
                <span className="px-2 text-[30px] ">
            <Link to="WishlistPage">
                <CiHeart />
            </Link>   
                </span>
                <span className="px-2 text-[22px] ">
                <Link to="CartPage">
                < BsBag/> 
                </Link>
                </span>
                <span className="px-2  ">
                    <img className=" h-[30px] w-[40px]" src={flag} alt="" />
                </span>
            </div>
        </div>
    </div>
    </div>
    {/* scroll navbar */}
    {
       isVisible &&
    <div className="sub-navbar w-full z-[3]  flex  bg-white fixed top-[84px]  py-4 ">
        <div className="sub-navbar-item px-1 no-scrollbar flex  overflow-scroll">
            {
                subCategories.map((subCategory)=>(
                    <span className="mx-1 pr-20 py-0 text-[17px] key={`index`}">
                       {subCategory.toUpperCase()} 
                    </span>
                ))
            }
        </div>
    </div>
    }
    </>
    )
}
export default NavbarMain