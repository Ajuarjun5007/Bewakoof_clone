import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import "./LoginPage.css"
import { signup } from "./LoginService";

function MailPage(){

    const [passwordVisible,setPasswordVisible] = useState(false);
    const passwordVisibleHandler =()=>{
        setPasswordVisible(!passwordVisible);
    }
    const [isPasswordActive, setIsPasswordActive] = useState(false);
    const [isEmailActive, setIsEmailActive] = useState(false);

      let email='';
    function handleLabelChange(text,type){
        if(type=='password'){
            if (text !== '') {
              setIsPasswordActive(true);
            } else {
              setIsPasswordActive(false);
            }
        }else{
            if (text !== '') {
                setIsEmailActive(true);
              email =text;

              } else {
                setIsEmailActive(false);
              }
        }
      }
    return (
        <>
        <div className="  bg-[linear-gradient(0deg,#fff4c4,#fff)] flex justify-center items-center">

        <div className="mt-[100px] flex flex-col w-85 py-[60px]  bg-white justify-center items-center ">
          <div className="w-[45%] flex flex-col items-center justify-center ">
            <p className="my-[20px] text-[24px] font-[900] mt-[16px] mb-[35px] tracking-wide">Log in to your account</p>
          </div>
            <div className="flex flex-col w-[35%] relative mb-[75px]">
            <input type="text"  className="emailinput focus:outline-none border-b-[1px]
             border-[#979797]  solid text-black font-[900]"   onChange={(e) => handleLabelChange(e.target.value,"name")}
             />
             <label className={isEmailActive ? "EmailActive absolute text-[#181818] opacity-[.5] email-text transition duration-200":"absolute text-[#181818] opacity-[.5] email-text transition duration-200"}
              htmlFor="">Email</label>
          </div>
          <div className="flex flex-col w-[35%] relative mb-[75px]">
            <input type="text"  className="emailinput focus:outline-none border-b-[1px]
             border-[#979797]  solid text-black font-[900]"   onChange={(e) => handleLabelChange(e.target.value,"email")}
             />
             <label className={isEmailActive ? "EmailActive absolute text-[#181818] opacity-[.5] email-text transition duration-200":"absolute text-[#181818] opacity-[.5] email-text transition duration-200"}
              htmlFor="">Email</label>
          </div>

          <div className="flex flex-col w-[35%] relative mb-[75px]">
            <input type={passwordVisible?"text":"password"}  className=" focus:outline-none border-b-[1px]
             border-[#979797] solid "   onChange={(e) => handleLabelChange(e.target.value,"password")}
             />
         <label className={isPasswordActive ? "PasswordActive absolute text-[#181818] opacity-[.5] password-text transition duration-200" : "absolute text-[#181818] opacity-[.5] password-text transition duration-200"} htmlFor="">
     Password
</label>

             <div className="absolute right-[0px]" onClick={passwordVisibleHandler} >
                { passwordVisible ? (
                    <IoEye className="w-[20px] h-[25px] text-[#181818] opacity-[.5]"/>
                ):(
                    <IoEyeOff className="w-[20px] h-[25px] text-[#181818] opacity-[.5]"/>
                )
                }
             </div>
          </div>





          <div className="">
            <button className=" text-[#42a2a2] text-[16px]">Forgot Password?</button>
          </div>
         
            <button className="bg-[#989898] w-[35%] h-[50px] rounded mt-[50px] text-[20px] text-white">LOGIN</button>
        </div>
        </div>
        </>
    )
}
export default MailPage;