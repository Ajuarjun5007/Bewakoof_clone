import { Link } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
function AddressPage() {
    
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log("userInfo",userInfo);

    function handleInputChange(value,type){
        
        if( value.trim()!=='' && (type=='name' || type=='pincode' || type=='city' || 
        type=='state' || type=='country' || type=='Address Type ' ||  type=='landmark' ) )
        console.log(value,type);
    }

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
            <form className="relative w-full lg:w-11/12 pb-12 m-auto">
              <div className="w-[650px]">
                <div className="px-4 md:px-6">
                  <div className="flex-1 pb-7">
                    <label
                      for="country"
                      className="text-xs font-medium opacity-60 block mb-2"
                    >
                      Full Name
                    </label>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Name"
                        onChange={(e)=>handleInputChange(e.target.value,"name")}
                        className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold 
                        rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100"
                        // className={`border text-black h-12 lg:h-14 text-sm lg:text-base font-bold 
                        // rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100`}
                      />
                    </div>
                  </div>
                  <div className="flex-1 pb-7">
                    <label
                      for="country"
                      className="text-xs font-medium opacity-60 block mb-2"
                    >
                      Pincode/Postal Code/Zipcode
                    </label>
                    <div className="">
                      <input
                        type="text"
                        onChange={(e)=>handleInputChange(e.target.value,"pincode")}
                        placeholder="Pincode/Postal Code/Zipcode"
                        className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                      />
                    </div>
                  </div>
                  <div className="md:flex md:gap-4">
                    <div className="flex-1">
                      <label className="text-xs font-medium opacity-60 block mb-2">
                        City
                      </label>
                      <div className="">
                        <input
                          type="text"
                        onChange={(e)=>handleInputChange(e.target.value,"city")}
                          placeholder="City"
                          className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="text-xs font-medium opacity-60 block mb-2">
                        State
                      </label>
                      <div className="">
                        <input
                          type="text"
                        onChange={(e)=>handleInputChange(e.target.value,"state")}
                          placeholder="State"
                          className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 pb-7 pt-7">
                    <label
                      for="country"
                      className="text-xs font-medium opacity-60 block mb-2"
                    >
                      Address Type
                    </label>
                    <div className="">
                      <input
                        type="text"
                        onChange={(e)=>handleInputChange(e.target.value,"Address Type")}
                        placeholder=" Address Type"
                        className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                      />
                    </div>
                  </div>
                  <div className="flex-1 pb-7">
                    <label
                      for="country"
                      className="text-xs font-medium opacity-60 block mb-2"
                    >
                      Landmark (Optional)
                    </label>
                    <div className="">
                      <input
                        type="text"
                        onChange={(e)=>handleInputChange(e.target.value,"landmark")}
                        placeholder="Landmark (Optional)"
                        className="border text-black h-12 lg:h-14 text-sm lg:text-base font-bold rounded-md  p-1 w-full pl-3 outline-none border-[#979797] opacity-100 "
                      />
                    </div>
                  </div>
                  <div className="flex gap-6 md:w-4/5 m-auto mt-10 my-2">
                    <button
                      type="submit"
                      className="submit fixed md:static md:z-0 z-50 bottom-0 uppercase 
                                cursor-pointer lg:h-14 h-14 lg:text-xl w-full flex-1 
                                border-none outline-none flex justify-center items-center 
                                md:rounded-md text-white bg-[#989898]"
                    >
                      SAVE ADDRESS
                    </button>
                    <button
                      className="hidden md:flex border border-[#51cccc] text-[#51cccc] 
                                rounded-md justify-center items-center lg:text-xl flex-1"
                    >
                      CANCEL
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
