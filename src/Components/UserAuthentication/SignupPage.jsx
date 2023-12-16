import { useState } from "react";
import signup_img from "../../assets/signup_image.webp"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
function SignupPage(){
    const [passwordVisible,setPasswordVisible] = useState(false);
    const passwordVisibleHandler =()=>{
        setPasswordVisible(!passwordVisible);
    }
    const [isPasswordActive, setIsPasswordActive] = useState(false);
    const [isEmailActive, setIsEmailActive] = useState(false);
    const [isNameActive, setIsNameActive] = useState(false);
    const [isTelActive, setIsTelActive] = useState(false);

    function handleLabelChange(text,type){
        if(type=='password'){
            if (text !== '') {
              setIsPasswordActive(true);
            } else {
              setIsPasswordActive(false);
            }
        } else if(type=='name'){
            if (text !== '') {
              setIsNameActive(true);
            } else {
              setIsNameActive(false);
            }
        }
        else if(type=='tel'){
            if (text !== '') {
              setIsTelActive(true);
            } else {
              setIsTelActive(false);
            }
        }
        else{
            if (text !== '') {
                setIsEmailActive(true);
              } else {
                setIsEmailActive(false);
              }
        }
        console.log("text",text);

        console.log("type",type);
      }
    return (
        <>
        <div className="flex flex-col justify-center items-center mt-[80px] pt-[50px]  bg-[linear-gradient(0deg,#fff4c4,#fff)]">
            <div className="w-[70%] flex justify-between">
            <div className="py-[20px]">
                <img className="w-[320px] h-[430px]"  src={signup_img} alt="" />
            </div>
            <div className="mx-[20px] block  justify-start w-[420px] pt-[5px] px-[60px] pb-[5px] bg-white">
                <div className="">
                    <p className="text-[24px] font-bold text-[#333]">Signup</p>
                    <p className="pt-[10px] text-[18px] font-[600] text-[#333]">Hi new buddy, let's get you started with the bewakoofi!</p>
                </div>
               
       <div className="flex flex-col w-[100%] mt-[30px] relative mb-[45px]">
            <input type="text"  className="focus:outline-none border-b-[1px]
             border-[#979797]  solid text-black font-[900]"   onChange={(e) => handleLabelChange(e.target.value,"name")}
             />
             <label className={isNameActive ? "NameActive absolute text-[#181818] opacity-[.5] name-text transition duration-200":"absolute text-[#181818] opacity-[.5] name-text transition duration-200"}
              htmlFor="">Name</label>
          </div>
          <div className="flex flex-col w-[100%]  relative mb-[45px]">
            <input type="text"  className="focus:outline-none border-b-[1px]
             border-[#979797]  solid text-black font-[900]"   onChange={(e) => handleLabelChange(e.target.value,"tel")}
             />
             <label className={isTelActive ? "TelActive absolute text-[#181818] opacity-[.5] tel-text transition duration-200":"absolute text-[#181818] opacity-[.5] tel-text transition duration-200"}
              htmlFor="">Mobile</label>
          </div>
         
          <div className="flex flex-col w-[100%] relative mb-[45px]">
            <input type="text"  className="focus:outline-none border-b-[1px]
             border-[#979797]  solid text-black font-[900]"   onChange={(e) => handleLabelChange(e.target.value,"email")}
             />
             <label className={isEmailActive ? "EmailActive absolute text-[#181818] opacity-[.5] email-text transition duration-200":"absolute text-[#181818] opacity-[.5] email-text transition duration-200"}
              htmlFor="">Email</label>
          </div>

          <div className="flex flex-col w-[100%] relative mb-[35px]">
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
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="" />
                    <span className="text-[13px] text-[#333]">I want to receive order updates on Whatsapp</span>
                </div>
                <div className="py-[10px]">
                    <button className="bg-[rgb(152,152,152)] disabled: w-[100%] h-[50px] text-[20px] text-white rounded-md">PROCEED</button>
                </div>
            </div>
            </div>

        </div>
        </>
    )
}
export default SignupPage;