import { useState,useEffect } from "react";
import { useLocation,useNavigate} from "react-router-dom";
import signup_img from "../../assets/signup_image.webp"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { signup } from "./LoginService";
import { MdWhatsapp } from "react-icons/md";
function SignupPage(){
  const location = useLocation();
  const mobileNumber = location.state||'';

  const EMAIL_EXPRESSION =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const NAME_EXPRESSION =  /^[a-zA-Z\-]+$/;
    const [passwordVisible,setPasswordVisible] = useState(false);
    const passwordVisibleHandler =()=>{
        setPasswordVisible(!passwordVisible);
    }
    const [isPasswordActive, setIsPasswordActive] = useState(false);
    const [isEmailActive, setIsEmailActive] = useState(false);
    const [isNameActive, setIsNameActive] = useState(false);
    
    const [nameErrorAlert,setNameErrorAlert]=useState(false);
    const [mailErrorAlert,setMailErrorAlert]=useState(false);
    const [passwordErrorAlert,setPasswordErrorAlert]=useState(false);
    const[errorAlert,setErrorAlert]=useState('');

    const navigate = useNavigate();
    
  useEffect(() => {
    if (nameErrorAlert || mailErrorAlert || passwordErrorAlert || errorAlert) {
      setErrorAlert(true);
    }else{
      setErrorAlert(false);
    }
  }, [nameErrorAlert, mailErrorAlert, passwordErrorAlert, errorAlert]);

  const handleLabelChange = (text, type) => {
    if (type === 'password' && isPasswordActive !== (text !== '')) {
        setIsPasswordActive(text !== '');
    } else if (type === 'name' && isNameActive !== (text !== '')) {
        setIsNameActive(text !== '');
    } else if (type === 'email' && isEmailActive !== (text !== '')) {
        setIsEmailActive(text !== '');
    }

    console.log("text", text);
    console.log("type", type);
};
const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);

const handleCheckboxChange = (event) => {
  setIsCheckboxChecked(event.target.checked);
};

      function register(event){

        event.preventDefault();
    
        const name = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
          
    
         if(!name.match(NAME_EXPRESSION)|| name===''){
          setNameErrorAlert(true);
        }else{
          setNameErrorAlert(false);
        }

        console.log('name',name);
       if(!email.match(EMAIL_EXPRESSION) || email==='') {
          setMailErrorAlert(true);
        }
        console.log('mail',email);
    
         if(password.length<6 || password===''){
          setPasswordErrorAlert(true);
        }

        if (!isCheckboxChecked) {
          setErrorAlert(true);
        }
    
    
        if(!errorAlert){
         const signupRequest = {
          name: name,
          email: email,
          password: password,
          appType: "ecommerce",
        }
          signup(signupRequest)
           .then((response) => {
             navigate("/LoginPage");
           })
           .catch((error) => {
            if(error.response){
              console.log([error.response?.data?.message])
            }
          });
          console.log("login success");
       }else{
        setErrorAlert(true);
        console.log("login failed");
       }
    
      };

      console.log("errorAlert",errorAlert);
      console.log("nameErrorAlert",nameErrorAlert);
      console.log("mailErrorAlert",mailErrorAlert);
      console.log("passwordErrorAlert",passwordErrorAlert);
 return (
        <>
        <div className="flex flex-col justify-center items-center mt-[80px] pb-[30px] pt-[50px]  bg-[linear-gradient(0deg,#fff4c4,#fff)]">
            <div className="w-[70%] flex justify-between">
            <div className="py-[20px]">
                <img className="w-[320px] h-[430px]"  src={signup_img} alt="" />
            </div>
            <div className="mx-[20px] block  justify-start w-[420px] pt-[5px] px-[60px] pb-[5px] bg-white">
                <div className="">
                    <p className="text-[24px] font-bold text-[#333]">Signup</p>
                    <p className="pt-[10px] text-[18px] font-[600] text-[#333]">Hi new buddy, let's get you started with the bewakoofi!</p>
                </div>
               <form 
               onSubmit={(event)=>register(event)}
               >
       <div className="flex flex-col w-[100%] mt-[35px] relative mb-[45px]">
            <input type="text"  className="focus:outline-none border-b-[1px]
             border-[#979797]  solid text-black font-[900]"   onChange={(e) => handleLabelChange(e.target.value,"name")}
             />
             <label className={isNameActive ? "NameActive absolute text-[#181818] opacity-[.5] name-text transition duration-200":"absolute text-[#181818] opacity-[.5] name-text transition duration-200"}
              htmlFor="">Name</label>
         {nameErrorAlert && <p className="text-[#db3236] text-[12px]">Invalid user name</p>}
          </div>
          <div className="flex flex-col w-[100%] relative mb-[45px]">
            <input type="text"  className="focus:outline-none border-b-[1px]
             border-[#979797]  solid text-black font-[900]"   onChange={(e) => handleLabelChange(e.target.value,"email")}
             />
             <label className={isEmailActive ? "EmailActive absolute text-[#181818] opacity-[.5] email-text transition duration-200":"absolute text-[#181818] opacity-[.5] email-text transition duration-200"}
              htmlFor="">Email</label>
          {mailErrorAlert && <p className="text-[#db3236] text-[12px]">Invalid mail address</p>}
          </div>

          <div className="flex flex-col w-[100%] relative mb-[45px]">
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
          {passwordErrorAlert && <p className="text-[#db3236] text-[12px]">Invalid password</p>}
          </div>

                <div className="flex items-center gap-2">
                    <input  type="checkbox"   onChange={handleCheckboxChange}
          checked={isCheckboxChecked}   />
                    <span className="text-[13px] text-[#333]">I want to receive order updates on Whatsapp</span>
                </div>
                {!isCheckboxChecked && <p className="text-[#db3236] text-[12px]" >Whatsapp updates need to be turned On</p>}
                <div className="py-[10px]">
                <button
  disabled={errorAlert}
  className={`${
    (errorAlert===true || errorAlert=='')? 'bg-[rgb(152,152,152)]' : 'bg-[#42a2a2]'
  } w-full h-14 text-base text-white rounded-md`}
>
  PROCEED
</button>

                </div>
          </form>
            </div>
            </div>

        </div>
        </>
    )
}
export default SignupPage;