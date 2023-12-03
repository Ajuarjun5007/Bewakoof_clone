import footer_logo from "../../assets/footerImage/black-logo.jpg";
import fb_icon from "../../assets/footerImage/fb_icon_a.png";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { HiOutlineFilter } from "react-icons/hi";
import playstore_img from "../../assets/downloadapp_page/android.webp";
import ios_img from "../../assets/downloadapp_page/ios.webp";
import payment_img from "../../assets/footerImage/secure-payments-image.webp";
import { topWearForMen } from "../HomePage/menucontent";
import { bottomWearForMen } from "../HomePage/menucontent";
import { topWearForWomen } from "../HomePage/menucontent";
import { bottomWearForWomen } from "../HomePage/menucontent";
import { mobiles } from "../TypeConstants";
function FooterComponent() {
  return (
    <>
      <div className=" px-[110px] py-[72px] bg-[rgb(24,24,24)] w-full left-0 text-[12px] bottom-0">
      {/* section 1 */}
        <div className=" ">
          {/* footer logo */}
          <div className="">
            <img src={footer_logo} alt="" />
          </div>
          <div className="flex gap-[150px] px-[14px] ">
            {/* customer service */}
            <div className="py-[10px]">
              <span className="text-[12px] pb-[15px] text-[#fdd835] tracking-[1px]">
                CUSTOMER SERVICE
              </span>
              <div className="mt-[20px]">
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Contact us
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Track Order
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Return Order
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Cancel Order
                </p>
              </div>
            </div>
            {/* company */}
            <div className="py-[10px]">
              <span className="text-[12px] pb-[15px] text-[#fdd835] tracking-[1px]">
                COMPANY
              </span>
              <div className="mt-[20px]">
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  About us
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  We're Hiring
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Terms & Conditions
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Privacy Policy
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Blog</p>
              </div>
            </div>
            {/* connect with us */}
            <div className="py-[10px]">
              <span className="text-[12px] pb-[15px] text-[#fdd835] tracking-[1px]">
                CONNECT WITH US
              </span>

              <div className="mt-[20px]">
                <div className="flex gap-[4px] pb-[5px]">
                  <img
                    className="bg-white font-[pink] w-[18px] h-[20px]"
                    src={fb_icon}
                    alt=""
                  />
                  <span className="text-[hsla(0,0%,100%,.9)]  font-[500] pt-[4px]">
                    4.7M People Like this
                  </span>
                </div>
                <div className="flex gap-[2px] py-[10px]">
                  <FaInstagram className="w-[20px] h-[20px] text-[white]" />
                  <span className="text-[hsla(0,0%,100%,.9)]  font-[500] pt-[4px]">
                    1M Followers
                  </span>
                </div>
                <div className="flex gap-[10px]">
                  <FaTwitter className="w-[20px] h-[20px] text-[white]" />
                  <FaPinterest className="w-[20px] h-[20px] text-[white]" />
                  <FaSnapchatGhost className="w-[20px] h-[20px] text-[white]" />
                  <FaApple className="w-[20px] h-[20px] text-[white]" />
                </div>
              </div>
            </div>
            {/* keep up to date */}
            <div className="py-[10px]">
              <span className="text-[12px] pb-[15px] text-[#fdd835] tracking-[1px]">
                KEEP UP TO DATE
              </span>

              <div className="mt-[20px] flex">
                <input
                  type="text"
                  placeholder="Enter Email Id"
                  className="w-[133px] bg-[rgb(24,24,24)] px-[12px] py-[6px] text-[#555] focus:outline-none 
                            focus:border-bg-red-400 solid
                             border-t-[black] border-b-[1px] border-b-[#fdd835]"
                />
                <input
                  type="submit"
                  value="SUBSCRIBE"
                  className="h-[34px] bg-[#fdd835] text-[12px] py-[10px] px-[12px]"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex  px-[14px] ">
            {/* policy & delivery  */}
            <div className="my-[20px] ">
              <div className="flex px-[14px] gap-3 my-[10px]">
                <SlHandbag className="text-[hsla(0,0%,100%,.9)]" />
                <span className="text-[hsla(0,0%,100%,.9)] ">
                  {" "}
                  15 Days return policy*{" "}
                </span>
              </div>
              <div className="flex px-[14px] gap-3">
                <HiOutlineFilter className="text-[hsla(0,0%,100%,.9)]" />
                <span className="text-[hsla(0,0%,100%,.9)] ">
                  Cash on delivery*
                </span>
              </div>
            </div>
            {/* App store images */}
            <div className="my-[20px] ml-[100px] gap-y-[10px]">
              <span className="text-[12px]  text-[#fdd835] tracking-[1px]">
                DOWNLOAD THE APP
              </span>
              <div className=" mt-[20px] flex gap-[10px]">
                <img
                  className="w-[100px] h-[30px]"
                  src={playstore_img}
                  alt=""
                />
                <img className="w-[100px] h-[30px]" src={ios_img} alt="" />
              </div>
            </div>
            {/* payment*/}
            <div className="my-[20px] gap-y-[10px] ml-[60px]">
              <span className="text-[12px]  text-[#fdd835] tracking-[1px]">
                100% SECURE PAYMENT
              </span>
              <div className=" mt-[20px] flex gap-[10px]">
                <img className="w-[220px] h-[20px]" src={payment_img} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="flex  border-t-[1px] m-[14px] px-[10px] py-[20px] border-[#979797] solid">
            {/* mens clothing */}
            <div className="w-[255px] px-[10px] pr-[40px]">
                <span className="text-[white] font-[900] text-[17px] tracking-[1px]">MEN'S CLOTHING</span>
                {/* topwear */}
                <div className=" py-[10px] pt-[30px]">
                    <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Top Wear</p>
                {
                    topWearForMen.map((item)=>(
                        <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">{item}</p>
                    ))
                }
                </div>
                  {/* bottomwear */}
                  <div className=" py-[10px]">
                    <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Bottom Wear</p>
                {
                    bottomWearForMen.map((item)=>(
                        <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">{item}</p>
                    ))
                }
                </div>
            </div>
            {/* womens clothing */}
            <div className="w-[255px] px-[10px] pr-[40px]">
                <span className="text-[white] font-[900] text-[17px] tracking-[1px]">WOMEN'S CLOTHING</span>
                {/* topwear */}
                <div className=" py-[10px] pt-[30px]">
                    <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Top Wear</p>
                {
                    topWearForWomen.map((item)=>(
                        <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">{item}</p>
                    ))
                }
                </div>
                  {/* bottomwear */}
                  <div className=" py-[10px]">
                    <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Bottom Wear</p>
                {
                    bottomWearForWomen.map((item)=>(
                        <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">{item}</p>
                    ))
                }
                </div>
            </div>
            {/* Mobiles */}
            <div className="w-[255px] px-[10px] pr-[40px]">
                <span className="text-[white] font-[900] text-[17px] tracking-[1px]">MOBILE COVERS</span>
                {/* topwear */}
                <div className=" py-[10px] pt-[30px]">
                    <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Brands</p>
                {
                    mobiles.map((item)=>(
                        <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">{item}</p>
                    ))
                }
                </div>
            </div>
            {/* FANMAP */}
            <div className="w-[255px] px-[10px] pr-[40px] ">
                <p className="text-[#51cccc] font-[900] text-[17px] tracking-[1px] pb-[15px]">FAN BOOK</p>
                <p className="text-[#51cccc] font-[900] text-[17px] tracking-[1px] pb-[15px]">OFFERS</p>
                <p className="text-[#51cccc] font-[900] text-[17px] tracking-[1px] pb-[15px]">SITEMAP</p>
                {/* topwear */}
                
            </div>
        </div>
      </div>
    </>
  );
}
export default FooterComponent;
