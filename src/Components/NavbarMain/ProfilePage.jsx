import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import ComingSoon from "../../Components/ComingSoon.jsx"
function ProfilePage() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  let userName = JSON.parse(localStorage.getItem("userInfo"))[1].name;
  let userMail = JSON.parse(localStorage.getItem("userInfo"))[1].email;
  let userPassword = JSON.parse(localStorage.getItem("userInfo"))[1].password;
  return (
    <>
      <div className="flex justify-center">
        {/* <div className="mt-[120px] w-85">
          <Link to="/AccountPage">
            <div className="my-5 text-[#51cccc] flex items-center text-sm gap-2">
              <GoChevronLeft className="text-[19px] font-[400]" />
              <p className="text-[16px] font-[400]">Back to My Account</p>
            </div>
          </Link>
          <div className="pt-4 pl-[10px] w-max pb-6">
            <p className="text-3xl font-bold text-[#2d2d2d] pb-1">My Profile</p>
            <div className="w-9/12 h-[2px] bg-[#fbd139] mt-[6px]  ml-[2px]"></div>
          </div>
          <div className="">
            <form className="md:max-w-[480px]">
              <div className="mx-4 md:mx-10">
                <div className="flex-1 py-[7px]">
                  <label className="text-xs font-medium opacity-60 block mb-2">
                    Full Name
                  </label>
                  <div className="mb-3">
                    <input
                      placeholder={userName}
                      disabled
                      type="text"
                      className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md p-1 w-full pl-3 outline-none border-[#979797]"
                    />
                  </div>
                </div>
                <div className="flex-1 py-[7px]">
                  <label className="text-xs font-medium opacity-60 block mb-2">
                    Mobile Number
                  </label>
                  <div className="mb-3">
                    <input
                      placeholder="Mobile Number"
                      type="text"
                      className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md p-1 w-full pl-3 outline-none border-[#979797]"
                    />
                  </div>
                </div>
                <div className="flex-1 py-[7px]">
                  <label className="text-xs font-medium opacity-60 block mb-2">
                    Email Id
                  </label>
                  <div className="mb-3">
                    <input
                      placeholder={userMail}
                      disabled
                      type="text"
                      className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md p-1 w-full pl-3 outline-none border-[#979797]"
                    />
                  </div>
                </div>
                <div className="flex-1 py-[7px]">
                  <label className="text-xs font-medium opacity-60 block mb-2">
                    Password
                  </label>
                  <div className="mb-3">
                    <input
                      placeholder="Password"
                      type="password"
                      className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md p-1 w-full pl-3 outline-none border-[#979797]"
                    />
                  </div>
                </div>
                <div className="text-[#51cccc] opacity-95 cursor-pointer mb-6">
                  <span>Change Password</span>
                </div>
                <div className="">
                  <span className="text-xs opacity-60">Gender</span>
                  <div className="flex w-max mt-2 mb-5 font-semibold text-sm">
                    <div>
                      <input
                        type="radio"
                        id="male"
                        className="opacity-0 w-0 cursor-pointer peer"
                        checked={selectedGender === "male"}
                        onChange={() => handleGenderChange("male")}
                      />
                      <label
                        htmlFor="male"
                        className={`cursor-pointer rounded-tl rounded-bl ${
                          selectedGender === "male" ? "bg-yellow-300" : ""
                        } px-5 py-1 border border-r-0 border-[#1818188a]`}
                      >
                        Male
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="female"
                        className="opacity-0 w-0 cursor-pointer peer"
                        checked={selectedGender === "female"}
                        onChange={() => handleGenderChange("female")}
                      />
                      <label
                        htmlFor="female"
                        className={`cursor-pointer rounded-br rounded-tr ${
                          selectedGender === "female" ? "bg-yellow-300" : ""
                        } px-5 py-1 border border-[#1818188a]`}
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="my-10 pb-10 md:pb-0 text-sm font-medium flex items-center">
                    <input type="checkbox" className="cursor-pointer accent-[#51cccc]" />
                    <label htmlFor="" className="cursor-pointer pl-2 text-[#333]">
                    I want to receive order updates on Whatsapp
                    </label>
                </div>
              </div>
              <button disabled className="md:mx-10 fixed h-14 md:static bottom-0 w-full md:w-52 py-5 px-10 md:mb-5 text-white 
              flex justify-center items-center text-sm font-semibold bg-[#989898]">SAVE CHANGES</button>
            </form>
          </div>
        </div> */}
        <ComingSoon/>
      </div>
    </>
  );
}
export default ProfilePage;
