import logo from "../../assets/bewakoof_logo.svg"
import { useEffect } from "react";
import { dressList } from "../ApiFetch";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import flag from "../../assets/NavbarflagImages/india-flag.png"
function NavbarMain(){

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await dressList();
            console.log("data",data.data);
           const type= new Set( data.data.map((item)=>{
                if(item.description.includes("top")){
                    return item.description;
                };
            }));
            console.log("color",type);

          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);

    return(

    <>
    <div className="flex justify-center border-b-[1px] border-b-btmclr-300">
    <div className="flex  w-85 ">
{/* Navbar logo */}
        <div className="logocontainer px-2  py-3">
        <img className="h-5"src={logo} alt="" />
        </div>
    {/* categories */}
        <div className=" w-5/12 py-3 tracking-widest ml-10 lg:ml-0 lg-max:xl:w-4/12 ">
            <span className="text-[13px] pt-4 px-3 pb-3 leading-3  hover:border-b-4 border-hoveryellow">MEN</span>
            <span className="text-[13px] pt-2 px-3 pb-3 leading-3  hover:border-b-4 border-hoveryellow">WOMEN</span>
            <span className="text-[13px] pt-2 px-3 pb-3 leading-3  hover:border-b-4 border-hoveryellow">MOBILE COVERS</span>
        </div>
        {/* rightnavbar */}
        <div className="flex items-center border-[rgba(0,0,0,0.5)]">
            <div className="inputwrapper flex relative  bg-[#eaeaea] mt-1 mb-1 h-10  rounded">
            <IoIosSearch  className="absolute left-3.5 top-2 text-[rgba(0,0,0,0.5)] text-[24px]"/>
            <input className=" pr-1.5 pl-10 text-[11px] text-[rgba(0,0,0,0.5)] w-[330px] focus:bg-white focus:border-[1px] bg-[#eaeaea] rounded" type="text" placeholder="Search by product, category or collection"/>
            </div>
            <div className="flex justify-between items-center px-2 ">
            <RxDividerVertical className="text-[40px] font-light text-[rgba(0,0,0,0.5)] "/>
                <span className="text-[14px] leading-3 tracking-wider">Login</span>
                <span className="px-2 text-[30px] ">
                <CiHeart />
                </span>
                <span className="px-2 text-[22px] ">
                < BsBag/> 
                </span>
                <span className="px-2  ">
                    <img className=" h-[30px] w-[40px]" src={flag} alt="" />
                </span>
            </div>
        </div>
    </div>
    </div>
    {/* scroll navbar */}
    <div className="sub-navbar flex">
        <div className="sub-navbar-item">

        </div>
    </div>
    </>
    )
}
export default NavbarMain