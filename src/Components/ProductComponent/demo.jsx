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