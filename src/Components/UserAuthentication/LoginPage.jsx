import img_1 from "../../assets/login_image/left_image.webp";
import ind_img from "../../assets/NavbarflagImages/india-flag.png";
import Select from "react-select";
import canada_img from "../../assets/NavbarflagImages/canada-flag.webp";
import aus_img from "../../assets/NavbarflagImages/austrialia-flag.webp";
import malaysia_img from "../../assets/NavbarflagImages/malaysia-flag.webp";
import oman_img from "../../assets/NavbarflagImages/oman-flag.webp";
import qatar_img from "../../assets/NavbarflagImages/qatar-flag.webp";
import saudi_img from "../../assets/NavbarflagImages/saudi-arabia-flag.webp";
import singapore_img from "../../assets/NavbarflagImages/singapore-flag.webp";
import uae_img from "../../assets/NavbarflagImages/uae-flag.png";
import usa_img from "../../assets/NavbarflagImages/usa-flag.webp";
import thailand_img from "../../assets/NavbarflagImages/thailand-flag.webp";
import google_img from "../../assets/login_image/google_img.webp";
import fb_img from "../../assets/login_image/fb_img.webp";
import { VscTriangleDown } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./LoginService";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import mobile_login_img from "../../assets/login_mobile.webp"
import { useScreenSize } from "../MobileComponent/useScreenSize";

function LoginPage() {
 

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  let idInfo = [];
  const screenSize = useScreenSize();
  const loginHandler = (event) => {
    event.preventDefault();
    console.log("event",event);
    // if(event.target[0].value != "" && event.target[1].value != "") {
    //   setEmail(event.target[0].value);
    //   setPassword(event.target[1].value);
    // } else {
    //   setErrorMessage("enter valid id or password");
    // }

    login(email,password)
      .then((response) => {
        idInfo.push(response.data.token);
        idInfo.push(response.data.data);
        localStorage.setItem("userInfo", JSON.stringify(idInfo));
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/");
        console.log("navi");
        navigate(0);
      })
      .catch((error) => {
        console.log("err", error);
        setErrorMessage(error?.response?.data?.message);
        setErrorAlert(true);
      });
  };
  const passwordVisibleHandler = () => {
    setPasswordVisible(!passwordVisible);
  };
  const isMobile  = screenSize < 767;
  return (
    <>
      <div className="mt-[90px] flex text-[montserrat,sans-serif] max-[767px]:flex-col max-[767px]:w-full">
        <div className="w-[50%]  flex flex-col items-center bg-[linear-gradient(0deg,#fff4c4,#fff)] max-[767px]:hidden">
          <div className="py-[40px] font-[900] text-[30px] tracking-wide">
            <p>Welcome to the world of Bewakoof®!</p>
          </div>
          <div>
            <img src={img_1} alt="" />
          </div>
        </div>
{
  isMobile &&
        <div className="max-[768px]:block">
                <img className="w-[100%] object-cover max-[768px]:block " src={mobile_login_img} alt="" />
            </div>
}
        <div className="w-[50%] flex items-center  flex-col max-[767px]:w-full ">
          <div className="flex flex-col items-center content-center py-[20px]">
            <p className="text-[24px] py-[10px] font-[500] text-[#333]">
              Log in / Sign up
            </p>
            <p className="text-[18px] text-[#a0a0a0] tracking-wider flex justify-center items-center max-[767px]:px-[3%]">
              for Latest trends, exciting offers and everything Bewakoof®!
            </p>
          </div>
          {/* input and button */}

          <form 
          // onSubmit={(event) => loginHandler(event)} 
          className="gap-2">
            <div className="flex flex-col gap-[2px] items-center justify-center">
              <div className="relative flex  flex-col items-center  p-[5px] ">
                <input
                  type="tel"
                  placeholder="Email"
                  onChange={(event)=>setEmail(event.target.value)}
                  className={
                    errorAlert
                      ? "focus:outline-none border-[1px] border-[#db3236] solid rounded text-black font-[900] flex justify-center pl-[20px] w-[360px] h-[40px] mb-[10px] py-[25px] max-[281px]:w-[250px]"
                      : "focus:outline-none border-[1px] border-[#979797] solid rounded text-black font-[900] flex justify-center pl-[20px] w-[360px] h-[40px] mb-[10px] py-[25px] max-[281px]:w-[250px]"
                  }
                />
                <div className="">
                <input
                 type={passwordVisible?"text":"password"}
                  placeholder="password"
                  onChange={(event)=>setPassword(event.target.value)}
                  className={
                    errorAlert
                      ? "focus:outline-none border-[1px] border-[#db3236] solid rounded text-black font-[900] flex justify-center pl-[20px] w-[360px] h-[40px] py-[25px] max-[281px]:w-[250px]"
                      : "focus:outline-none border-[1px] border-[#979797] solid rounded text-black font-[900] flex justify-center pl-[20px] w-[360px] h-[40px] py-[25px] max-[281px]:w-[250px]"
                  }
                />
                   <div
                  className="absolute bottom-[15px] right-[15px]"
                  onClick={passwordVisibleHandler}
                >
                  {passwordVisible ? (
                    <IoEye className="w-[20px] h-[25px] text-[#181818] opacity-[.5]" />
                  ) : (
                    <IoEyeOff className="w-[20px] h-[25px] text-[#181818] opacity-[.5]" />
                  )}
                </div>
                </div>
              </div>
              {errorAlert && (
                <div className="w-[100%] px-[20px] flex justify-start ">
                  <p className="text-[#db3236] text-[12px]">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                onClick={(email,password)=>loginHandler(email,password)}
                className="rounded bg-[#42a2a2] text-[20px] text-[#fff] flex justify-center items-center 
               w-[360px] h-[40px] py-[25px]  max-[281px]:w-[250px] "
              >
                CONTINUE
              </button>
            </div>
          </form>

          {/* or container */}
          <div className="my-[20px]">
            <div className="relative border-b-[2px] w-[380px]  m-[20px] flex justify-center 
            z-0 border-[#aeaeae] font-[300] solid text-black max-[767px]:w-[250px] max-[767px]:mx-0">
              <span className="absolute top-[-14px] bg-white">OR</span>
            </div>
          </div>
          {/* mail container */}
          <Link to={"/SignupPage"}>
          <div
            className="border-[1px] flex justify-center items-center w-[340px] mb-[10px] 
          rounded border-[#aeaeae] solid  max-[281px]:w-[250px]  "
          >
            <div className="flex  justify-center items-center text-[16px]  py-[8px]">
              <button
                type={"submit"}
                className="flex items-center px-[20px] text-[#5c5c5c] leading-[20px] font-[900] gap-[10px] justify-center "
              >
                <MdOutlineEmail className="text-[18px]" />
                  <span>SIGN UP</span>
              </button>
            </div>
          </div>
                </Link>
          <div className="flex w-[360px] max-[281px]:w-[250px] gap-[5px] mt-2">
            <button className="flex w-[50%]  text-[16px] py-[4px] rounded text-[#5c5c5c] font-[900] justify-evenly items-center border-[1px] border-[#aeaeae] solid">
              <img className="w-[18px]" src={google_img} alt="" />
              <span>GOOGLE</span>
            </button>
            <button className="flex w-[50%] py-[4px] rounded  text-[16px] text-[#5c5c5c] font-[900] justify-evenly items-center border-[1px] border-[#aeaeae] solid">
              <img className="w-[18px]" src={fb_img} alt="" />
              <span>FACEBOOK</span>
            </button>
          </div>
          <div className="w-[400px] max-[281px]:w-[260px] text-[12px] text-[#a0a0a0] mt-[30px]">
            <p>
              By creating an account or logging in, you agree with Bewakoof®'s{" "}
              <strong className="text-[#42a2a2]"> Terms and Conditions</strong>{" "}
              and <strong className="text-[#42a2a2]"> Privacy Policy. </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
