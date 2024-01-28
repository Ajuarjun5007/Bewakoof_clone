import { Link, useNavigate } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { useState, useEffect } from "react";
import { getUpdateMe } from "../ProductComponent/Slices/FilterSlice";
import { useDispatch, useSelector } from "react-redux";
function AddressPage() {
  // let userValue= JSON.parse(localStorage.getItem("userInfo"))[1].name;
  const dispatch = useDispatch();
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let userValue;
  if (userInfo && Array.isArray(userInfo) && userInfo.length > 1) {
    userValue = userInfo[1].name;
  }
  console.log("user", userValue);
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
  const [addressInfo, setAddressInfo] = useState({
    addressType: "",
    street: "",
    city: "",
    state: "",
    country: "India",
    zipcode: "",
  });
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
  }, [
    cityErrorAlert,
    stateErrorAlert,
    pincodeErrorAlert,
    streetErrorAlert,
  ]);
  // let updateMe  = useSelector((state) => state.productReducer.updateMe);
  // console.log("updateMe", updateMe);
  useEffect(() => {
    setAddressInfo({
      addressType: addressTypeValue,
      street: streetValue,
      city: cityValue,
      state: stateValue,
      country: "India",
      zipcode: zipcodeValue,
    });
  }, [addressTypeValue, cityValue, streetValue, stateValue]);

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
    if (value.trim() !== "" && type == "Address Type") {
      if (value.length >= 4) {
        setAddressTypeErrorAlert(false);
        setAddressTypeValue("" + value);
      } else {
        setAddressTypeErrorAlert(true);
      }
    }
    if (value.trim() !== "" && type == "residence Details") {
      if (value.length >= 4) {
        setStreetErrorAlert(false);
        setStreetValue("" + value);
      } else {
        setStreetErrorAlert(true);
      }
    }
  }
  let user = JSON.parse(localStorage.getItem("user"));

  function handleFormSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!errorAlert) {
      console.log("dids");
      dispatch(
        getUpdateMe({
          userName:userValue,
          streetName: streetValue,
          cityName: cityValue,
          stateName: stateValue,
          countryName: 'India',
          zipcodeName: zipcodeValue,
          tokenValue: JSON.parse(localStorage.getItem("userInfo"))[0],
        })
      );
    }
    // if(user.address){
    //   navigate("/PaymentPage");
    // }
    console.log("hanndleformclicked");
  }
  let userAddressInfo = JSON.parse(localStorage.getItem("addressInfo"));
  
  function removeAddress(e) {
    e.stopPropagation();
    e.preventDefault();
    if (localStorage.getItem("addressInfo")) {
      localStorage.removeItem("addressInfo");
      window.location.reload();
    }
    console.log("remveo");
    console.log("addressInfo", JSON.parse(localStorage.getItem("user")));
  }
  console.log("value", cityValue, streetValue, stateValue, zipcodeValue);
  return (
    <>
      <div className="flex justify-center">
        <div className="w-85 mt-[120px]">
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
              className="relative w-full lg:w-11/12 pb-12 m-auto"
            >
              <div className="w-[80%]">
                <div className="px-4 md:px-6">
                  <div className="flex-1 pb-7">
                    <label className="text-xs font-medium opacity-60 block mb-2">
                      Full Name
                    </label>
                    <div className="">
                      <input
                        type="text"
                        disabled
                        placeholder={userValue}
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
                        value={user?.address?.street}
                        type="text"
                        onChange={(e) =>
                          handleInputChange(e.target.value, "residence Details")
                        }
                        placeholder=" Flat / Building No,Street Name"
                        className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                      />
                    </div>
                    {!userAddressInfo?.street && streetErrorAlert && (
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
                        value={user?.address?.zipcode}
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
                          value={user?.address?.city}
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
                          value={user?.address?.state}
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
                  <div className="flex gap-6 md:w-4/5 m-auto mt-10 my-2">
                    <button
                      type="submit"
                      className={`submit fixed md:static md:z-0 z-50 bottom-0 uppercase 
                      cursor-pointer lg:h-14 h-14 lg:text-xl w-full flex-1 
                      border-none outline-none flex justify-center items-center 
                      md:rounded-md text-white ${
                        errorAlert && !user?.address
                          ? "bg-[grey]"
                          : "bg-[#42a2a2]"
                      }`}
                    >
                      SAVE ADDRESS
                    </button>
                    <button
                      className="hidden md:flex border border-[#51cccc] text-[#51cccc] 
                                rounded-md justify-center items-center lg:text-xl flex-1"
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
