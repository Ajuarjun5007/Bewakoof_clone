import { Link, useNavigate } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { useState, useEffect } from "react";
import { getUpdateMe } from "../ProductComponent/Slices/FilterSlice";
import { useDispatch, useSelector } from "react-redux";
function AddressPage() {
  // let userValue= JSON.parse(localStorage.getItem("userInfo"))[1].name;
  const dispatch = useDispatch();
  let token = JSON.parse(localStorage.getItem("userInfo"))[0] || [];
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let userValue;
  if (userInfo && Array.isArray(userInfo) && userInfo.length > 1) {
    userValue = userInfo[1].name;
  }
  const navigate = useNavigate();
  const [pincodeErrorAlert, setPinCodeErrorAlert] = useState(true);
  const [cityErrorAlert, setCityErrorAlert] = useState(true);
  const [stateErrorAlert, setStateErrorAlert] = useState(true);
  const [countryErrorAlert, setCountryErrorAlert] = useState(true);
  const [addressTypeErrorAlert, setAddressTypeErrorAlert] = useState(true);
  const [streetErrorAlert, setStreetErrorAlert] = useState(true);
  const [errorAlert, setErrorAlert] = useState(true);
  const [addressTypeValue, setAddressTypeValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [zipcodeValue, setZipcodeValue] = useState("");

  useEffect(() => {
    if (
      !cityErrorAlert &&
      !stateErrorAlert &&
      !pincodeErrorAlert &&
      !streetErrorAlert
    ) {
      setErrorAlert(false);
    } else {
      setErrorAlert(true);
    }
  }, [cityErrorAlert, stateErrorAlert, pincodeErrorAlert, streetErrorAlert]);
  let updateMe = useSelector((state) => state.productReducer.updateMeInfo);

  function handleInputChange(value, type) {
    if (value.trim() !== "" && type == "pincode") {
      if (value.length == 6 && Number(value)) {
        setPinCodeErrorAlert(false);
        setZipcodeValue("" + value);
      } else {
        setPinCodeErrorAlert(true);
      }
    }
    if (value.trim() !== "" && type == "city") {
      if (value.length >= 4) {
        setCityErrorAlert(false);
        setCityValue("" + value);
      } else {
        setCityErrorAlert(true);
      }
    }
    if (value.trim() !== "" && type == "state") {
      if (value.length >= 4) {
        setStateErrorAlert(false);
        setStateValue("" + value);
      } else {
        setStateErrorAlert(true);
      }
    }

    if (value.trim() !== "" && type == "residence Details") {
      if (value.length >= 4) {
        setStreetErrorAlert(false);
        setStreetValue("" + value);
      } else {
        setStreetErrorAlert(true);
      }
      console.log("se", streetErrorAlert);
    }
  }
  let user = JSON.parse(localStorage.getItem("user"));
  let userInfoAddress = userInfo[1];
  console.log("userInfAdd", userInfoAddress);
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!errorAlert) {
      dispatch(
        getUpdateMe({
          type: "PATCH",
          userName: userValue,
          streetName: streetValue,
          cityName: cityValue,
          stateName: stateValue,
          countryName: "India",
          zipcodeName: zipcodeValue,
          tokenValue: token,
          phoneNumber: "",
        })
      );
    }
    // console.log("value", streetValue, cityValue, zipcodeValue, stateValue);
  }
  console.log("outside", updateMe);

  let userDetails = JSON.parse(localStorage.getItem("user"));
  if (updateMe) {
    userInfoAddress = {
      ...userInfoAddress,
      address: updateMe.data?.user?.address,
    };
    userDetails = {
      ...userDetails,
      address: updateMe.data?.user?.address,
    };

    localStorage.setItem("user", JSON.stringify(userDetails));
    console.log("i", userDetails);
    console.log("usia", userInfoAddress);
  }

  function removeAddress(e) {
    e.stopPropagation();
    e.preventDefault();

    let userDetails = JSON.parse(localStorage.getItem("user"));

    if (userDetails && userDetails.address) {
      userDetails.address.length = 0;
      localStorage.setItem("user", JSON.stringify(userDetails));
    }

    console.log("address", userDetails.address);
    console.log("ree", updateMe);
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-85 mt-[120px] md:w-full ">
          <Link to="/AccountPage">
            <div className="my-5 text-[#51cccc] flex items-center text-sm gap-2">
              <GoChevronLeft className="text-[19px] font-[400]" />
              <p className="text-[16px] font-[400]">Back to My Account</p>
            </div>
          </Link>
          <div className="pt-4 pl-[10px] w-max pb-6">
            <p className="text-3xl font-bold text-[#2d2d2d] pb-1">My Address</p>
            <div className="w-9/12 h-[2px] bg-[#fbd139] mt-[6px]  ml-[2px]"></div>
          </div>
          <div className="">
            <form
              onSubmit={(e) => handleFormSubmit(e)}
              className=" w-full lg:w-11/12 pb-12 m-auto"
            >
              <div className="w-[80%] max-[767px]:w-full">
                <div className="px-4 md:px-1">
                  <div className="flex-1 pb-7">
                    <label className="text-xs font-medium opacity-60 block mb-2">
                      Full Name
                    </label>
                    <div className="">
                      <input
                        type="text"
                        disabled
                        // placeholder={userValue}
                        onChange={(e) =>
                          handleInputChange(e.target.value, "name")
                        }
                        className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold 
    rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100"
                      />
                    </div>
                  </div>
                  <div className="flex-1 pb-7 pt-7">
                    <label className="text-xs font-medium opacity-60 block mb-2">
                      Flat / Building No,Street Name
                    </label>
                    <div className="">
                      <input
                        // value={streetValue}
                        type="text"
                        onChange={(e) =>
                          handleInputChange(e.target.value, "residence Details")
                        }
                        placeholder=" Flat / Building No,Street Name"
                        className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                      />
                    </div>
                    {streetErrorAlert && (
                      <p className="text-red-500">Invalid residence Details</p>
                    )}
                  </div>
                  <div className="flex-1  pb-7">
                    <label className="text-xs font-medium opacity-60 block mb-2">
                      Pincode/Postal Code/Zipcode
                    </label>
                    <div className="">
                      <input
                        type="text"
                        // value={zipcodeValue}
                        onChange={(e) =>
                          handleInputChange(e.target.value, "pincode")
                        }
                        placeholder="Pincode/Postal Code/Zipcode"
                        className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                      />
                    </div>
                    {!user?.address?.zipcode && pincodeErrorAlert && (
                      <p className="text-red-500">
                        Pincode Should be in 6 Digit
                      </p>
                    )}
                  </div>
                  <div className="md:flex md:gap-4">
                    <div className="flex-1">
                      <label className="text-xs font-medium opacity-60 block mb-2">
                        City
                      </label>
                      <div className="">
                        <input
                          // value={cityValue}
                          type="text"
                          onChange={(e) =>
                            handleInputChange(e.target.value, "city")
                          }
                          placeholder="City"
                          className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                        />
                      </div>
                      {!user?.address?.city && cityErrorAlert && (
                        <p className="text-red-500">Invalid city Name</p>
                      )}
                    </div>
                    <div className="flex-1">
                      <label className="text-xs font-medium opacity-60 block mb-2">
                        State
                      </label>
                      <div className="">
                        <input
                          type="text"
                          // value={stateValue}
                          onChange={(e) =>
                            handleInputChange(e.target.value, "state")
                          }
                          placeholder="State"
                          className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                        />
                      </div>
                      {!user?.address?.state && stateErrorAlert && (
                        <p className="text-red-500">Invalid state Name</p>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 pb-7 pt-7">
                    <label className="text-xs font-medium opacity-60 block mb-2">
                      Area / Locality (Optional)
                    </label>
                    <div className="">
                      <input
                        type="text"
                        // value={user?.address?.addressType}
                        // onChange={(e) =>
                        //   handleInputChange(e.target.value, "Address Type")
                        // }
                        placeholder="Area/Locality (Optional)"
                        className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                      />
                    </div>
                    {/* {!user?.address?.addressType && addressTypeErrorAlert && (
  <p className="text-red-500">Invalid Address Type</p>
)} */}
                  </div>
                  <div className="flex-1 pb-7">
                    <label className="text-xs font-medium opacity-60 block mb-2">
                      Landmark (Optional)
                    </label>
                    <div className="">
                      <input
                        type="text"
                        onChange={(e) =>
                          handleInputChange(e.target.value, "landmark")
                        }
                        placeholder="Landmark (Optional)"
                        className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 md:w-4/5 m-auto mt-10 my-2">
                    <button
                      type="submit"
                      className={`submit fixed md:static md:z-0 z-50 bottom-16 uppercase 
                      cursor-pointer lg:h-14 h-14 lg:text-xl w-[80%] ml-0 pr-30 flex-1 
                      border-none outline-none flex justify-center items-center 
                      md:rounded-md text-white ${
                        errorAlert ? "bg-[grey]" : "bg-[#42a2a2]"
                      }`}
                    >
                      SAVE ADDRESS
                    </button>
                    <button
                      className="fixed md:static md:z-0  z-50 bottom-1 uppercase 
                      cursor-pointer lg:h-14 h-14 lg:text-xl w-[80%] ml-0 pr-30 flex-1 bg-[grey] border border-[#51cccc] text-[#51cccc] 
                                rounded-md justify-center items-center "
                      onClick={(e) => removeAddress(e)}
                    >
                      EDIT ADDRESS
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddressPage;
