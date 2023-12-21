import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import signup_img from "../../assets/signup_image.webp";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { signup } from "./LoginService";
import { MdWhatsapp } from "react-icons/md";
function SignupPage() {
  const location = useLocation();
  const mobileNumber = location.state || "";

  const EMAIL_EXPRESSION =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const NAME_EXPRESSION = /^[a-zA-Z\-]+$/;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordVisibleHandler = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [isPasswordActive, setIsPasswordActive] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isNameActive, setIsNameActive] = useState(false);

  const [nameErrorAlert, setNameErrorAlert] = useState(false);
  const [mailErrorAlert, setMailErrorAlert] = useState(false);
  const [passwordErrorAlert, setPasswordErrorAlert] = useState(false);
  const [checkboxErrorAlert, setcheckboxErrorAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
   
  }, [isPasswordActive,isEmailActive,isNameActive]);

  function checking(){
    if (
      nameErrorAlert ||
      mailErrorAlert ||
      passwordErrorAlert
    ) {
      setErrorAlert('true');
    }else{
      setErrorAlert('false');
    }
    console.log(nameErrorAlert, mailErrorAlert , passwordErrorAlert);
  }








  const handleLabelChange = (text, type) => {
    if (type === "password" ) {
      // && isPasswordActive !== (text !== "")
      setIsPasswordActive(text !== "");
      console.log("paswrd",text.length);
      if (text.length<6) {
        setPasswordErrorAlert(true);
      } else {
        setPasswordErrorAlert(false);
        checking()
      }
    } else if (type === "name" ) {
      // && isNameActive !== (text !== "")
      // setIsNameActive(text !== "");
      if (!text.match(NAME_EXPRESSION)) {
        setNameErrorAlert(true);
      } else {
        setNameErrorAlert(false);
      }
    } else if(type === "email") {
      // && isNameActive !== (text !== "")
      // setIsEmailActive(text !== "");
      if (!text.match(EMAIL_EXPRESSION)) {
        setMailErrorAlert(true);
      } else {
        setMailErrorAlert(false);
      }

      
    }

    if (!isCheckboxChecked) {
      setcheckboxErrorAlert(true);
    } else {
      setcheckboxErrorAlert(false);
    }
  };


  const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  function register(event) {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

      console.log(event.target[0].value, event.target[1].value, event.target[2].value,)
   
      const signupRequest = {
        name: name,
        email: email,
        password: password,
        appType: "ecommerce",
      };
      signup(signupRequest)
        .then((response) => {
          navigate("/LoginPage");
        })
        .catch((error) => {
          if (error.response) {
            console.log([error.response?.data?.message]);
          }
        });
      console.log("login success");
    } 

  // console.log("errorAlert", errorAlert);
  // console.log("nameErrorAlert", nameErrorAlert);
  // console.log("mailErrorAlert", mailErrorAlert);
  // console.log("passwordErrorAlert", passwordErrorAlert);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[80px] pb-[30px] pt-[50px]  bg-[linear-gradient(0deg,#fff4c4,#fff)]">
        <div className="w-[70%] flex justify-between">
          <div className="py-[20px]">
            <img className="w-[320px] h-[430px]" src={signup_img} alt="" />
          </div>
          <div className="mx-[20px] block  justify-start w-[420px] pt-[5px] px-[60px] pb-[5px] bg-white">
            <div className="">
              <p className="text-[24px] font-bold text-[#333]">Signup</p>
              <p className="pt-[10px] text-[18px] font-[600] text-[#333]">
                Hi new buddy, let's get you started with the bewakoofi!
              </p>
            </div>

            <form onSubmit={(event) => register(event)}>
              <div className="flex flex-col w-[100%] mt-[35px] relative mb-[45px]">
                <input
                  type="text"
                  placeholder="Name"
                  className="focus:outline-none border-b-[1px]
             border-[#979797]  solid text-black font-[900]"
                  onChange={(e) => handleLabelChange(e.target.value, "name")}
                />
              
                {nameErrorAlert && (
                  <p className="text-[#db3236] text-[12px]">
                    Invalid user name
                  </p>
                )}
              </div>
              <div className="flex flex-col w-[100%] relative mb-[45px]">
                <input
                  type="text"
                  placeholder="Email"
                  className="focus:outline-none border-b-[1px]
             border-[#979797]  solid text-black font-[900]"
                  onChange={(e) => handleLabelChange(e.target.value, "email")}
                />
                {mailErrorAlert && (
                  <p className="text-[#db3236] text-[12px]">
                    Invalid mail address
                  </p>
                )}
              </div>

              <div className="flex flex-col w-[100%] relative mb-[45px]">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="password"
                  className=" focus:outline-none border-b-[1px]
             border-[#979797] solid text-black font-[900]"
                  onChange={(e) =>
                    handleLabelChange(e.target.value, "password")
                  }
                />
           
                <div
                  className="absolute right-[0px]"
                  onClick={passwordVisibleHandler}
                >
                  {passwordVisible ? (
                    <IoEye className="w-[20px] h-[25px] text-[#181818] opacity-[.5]" />
                  ) : (
                    <IoEyeOff className="w-[20px] h-[25px] text-[#181818] opacity-[.5]" />
                  )}
                </div>
                {passwordErrorAlert && (
                  <p className="text-[#db3236] text-[12px]">Invalid password</p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={isCheckboxChecked}
                />
                <span className="text-[13px] text-[#333]">
                  I want to receive order updates on Whatsapp
                </span>
              </div>
              {!isCheckboxChecked && (
                <p className="text-[#db3236] text-[12px]">
                  Whatsapp updates need to be turned On
                </p>
              )}
              <div className="py-[10px]">
                <button
                  className={`${
                    errorAlert == "true" || errorAlert== ""
                      ? "bg-[rgb(152,152,152)]"
                      : "bg-[#42a2a2]"
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
  );
}
export default SignupPage;
