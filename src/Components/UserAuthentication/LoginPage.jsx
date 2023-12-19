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
import google_img from "../../assets/login_image/google_img.webp"
import fb_img from  "../../assets/login_image/fb_img.webp"
import { VscTriangleDown } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./LoginService";

function LoginPage() {

  const countryOptions = [
    { value: "91", label: "+91", image: ind_img },
    { value: "1", label: "+1", image: canada_img },
    { value: "61", label: "+61", image: aus_img },
    { value: "61", label: "+60", image: malaysia_img },
    { value: "966", label: "+966", image: oman_img },
    { value: "971", label: "+971", image: qatar_img },
    { value: "968", label: "+968", image: saudi_img },
    { value: "974", label: "+974", image: uae_img },
    { value: "1", label: "+1", image: usa_img },
    { value: "66", label: "+66", image: thailand_img },
    { value: "65", label: "+65", image: singapore_img },
    // Add other options with values, labels,and images as needed
  ];


  const [selectCountry, setSelectCountry] = useState("+91");
  const [countryImage, setCountryImage] = useState(ind_img);
  const [countryDisplay, setCountryDisplay] = useState(false);
  const navigate = useNavigate();
  const selectCountryHandler = (item) => {
    setCountryImage(item.image);
    setSelectCountry(item.label);
    setCountryDisplay(false);
  };
  
 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  let idInfo=[];
  
  const loginHandler=(event)=>{
    event.preventDefault();
    console.log("email",event.target[0].value);
    console.log("password",event.target[1].value);
    
    if(event.target[0].value!='' && event.target[1].value!=''){
      setEmail(event.target[0].value);
      setPassword(event.target[1].value);
    }else{
      setErrorMessage("enter valid id or password")
    }
      console.log("email",email);
      console.log("password",password);


      login(email,password)
      .then((response)=>{
        idInfo.push(response.data.token);
        idInfo.push(response.data.data);
        localStorage.setItem("userInfo", JSON.stringify(idInfo));
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/");
        navigate(0);
      })
      .catch((error) => {
        console.log("err", error.response.data.message);
        setErrorMessage(error.response.data.message);
        setErrorAlert(true);
      });
  }


console.log("errorAlert", errorAlert);
console.log("email",email);
console.log("password",password);
  return (
    <>
      <div className="mt-[90px] flex text-[montserrat,sans-serif]">
        <div className="w-[50%]  flex flex-col items-center bg-[linear-gradient(0deg,#fff4c4,#fff)]">
          <div className="py-[40px] font-[900] text-[30px] tracking-wide">
            <p>Welcome to the world of Bewakoof®!</p>
          </div>
          <div>
            <img src={img_1} alt="" />
          </div>
        </div>
        <div className="w-[50%] flex items-center  flex-col ">
          <div className="flex flex-col items-center content-center py-[20px]">
            <p className="text-[24px] py-[10px] font-[500] text-[#333]">
              Log in / Sign up
            </p>
            <p className="text-[18px] text-[#a0a0a0] tracking-wider">
              for Latest trends, exciting offers and everything Bewakoof®!
            </p>
          </div>
          {/* input and button */}
  <form onSubmit={(event)=>loginHandler(event)} className="gap-2">
          <div className="flex flex-col gap-[2px] items-center justify-center">
            <div className="relative flex  flex-col items-center  p-[5px] ">

<input
  type="tel"
  placeholder="Email"
  className={errorAlert
    ? "focus:outline-none border-[1px] border-[#db3236] solid rounded flex justify-center pl-[20px] w-[380px] h-[40px] mb-[10px] py-[25px]"
    : "focus:outline-none border-[1px] border-[#979797] solid rounded flex justify-center pl-[20px] w-[380px] h-[40px] mb-[10px] py-[25px]"
  }
/>
<input
  type="tel"
  placeholder="password"
  className={errorAlert
    ? "focus:outline-none border-[1px] border-[#db3236] solid rounded flex justify-center pl-[20px] w-[380px] h-[40px] py-[25px]"
    : "focus:outline-none border-[1px] border-[#979797] solid rounded flex justify-center pl-[20px] w-[380px] h-[40px] py-[25px]"
  }
/>

            </div>
            {
                errorAlert &&
            <div className="w-[100%] px-[20px] flex justify-start ">
              <p className="text-[#db3236] text-[12px]">{errorMessage}</p>
            </div>
            }
        
              <button type="submit"  className="rounded bg-[#42a2a2] text-[20px] text-[#fff] flex justify-center items-center 
               w-[380px] h-[40px] py-[25px]">CONTINUE</button>
         
          </div>
</form>

          {/* or container */}
          <div className="my-[20px]">
          <div className="relative border-b-[1px] w-[380px] m-[20px] flex justify-center z-0 border-[#aeaeae] font-[300] solid text-black">
            <span className="absolute top-[-14px] bg-white">OR</span>
          </div>
          </div>
          {/* mail container */}
          <div className="border-[1px] flex justify-center items-center w-[340px] mb-[10px] 
          rounded border-[#aeaeae] solid ">

          <div className="flex  justify-center items-center text-[16px]  py-[8px]">
            <button  type={"submit"} className="flex items-center px-[20px] text-[#5c5c5c] leading-[20px] font-[900] gap-[10px] justify-center ">
            <MdOutlineEmail className="text-[18px]"/>
            <Link to={"/SignupPage"}>
            <span>SIGN UP</span>
            </Link>
            </button>
          </div>
          </div>
            <div className="flex w-[340px]  gap-[5px] ">
              <button className="flex w-[50%]  text-[16px] py-[4px] rounded text-[#5c5c5c] font-[900] justify-evenly items-center border-[1px] border-[#aeaeae] solid">
                <img className="w-[18px]" src={google_img} alt="" />
                <span>GOOGLE</span>
              </button>
              <button className="flex w-[50%] py-[4px] rounded  text-[16px] text-[#5c5c5c] font-[900] justify-evenly items-center border-[1px] border-[#aeaeae] solid">
                <img className="w-[18px]" src={fb_img} alt="" />
                <span>FACEBOOK</span>
              </button>
            </div>
            <div className="w-[400px] text-[12px] text-[#a0a0a0] mt-[30px]">
              <p>By creating an account or logging in, you agree
                 with Bewakoof®'s <strong className="text-[#42a2a2]">  Terms and Conditions</strong> and <strong className="text-[#42a2a2]" >  Privacy Policy.   </strong></p>
            </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
