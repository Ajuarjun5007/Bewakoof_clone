import { ChevronDownIcon } from "@radix-ui/react-icons";
import img_1 from "../../assets/bw-demo-3.webp";
import { useEffect, useState } from "react";
import CartItemHandler from "./CartItemHandler";
import { SlArrowDown } from "react-icons/sl";
import Portal from "../MobileComponent/Portal";
import { cartProductDetail } from "../ProductComponent/ProductService";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import { useSelector,useDispatch } from "react-redux";
import { getCartOperations } from "../ProductComponent/Slices/FilterSlice";

function Cartcard({ Id,name,price,quantity,size,image }) {
 
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const dispatch = useDispatch();
  const [cartProductInfo, setCartProductInfo] = useState([]);


  
  const [selectedSize, setSelectedSize] = useState("s");
  const [selectedQty, setSelectedQty] = useState(quantities[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const onClose = (e) => {
    e.stopPropagation();
    setModalOpen(false);
    document.body.style.overflow = "";
  };

  const onOpen = (e) => {
    e.stopPropagation();
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleSelect = (event, value) => {
    console.log("e", value);
    if (handleQty) {
      handleQty(Number(value));
    }
    // setSelectedSize(value);
    onClose(event);
  };
  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  

  const handleQtyChange = (quantity) => {
    if(Number(quantity)){
      setSelectedQty(quantity);
      console.log("qt",quantity);
    }else{
      setSelectedSize(quantity);
      console.log("szqt",quantity);
    }
  };
  // useEffect(()=>{
  //   dispatch(
  //     getCartOperations({
  //       id: Id,
  //       size: selectedSize,
  //       type: "PATCH",
  //       tokenValue: JSON.parse(localStorage.getItem("userInfo"))[0],
  //       suffix: Id,
  //       qty: selectedQty,
  //     })
  //   );
  // },[selectedSize,selectedQty])
  // console.log("pi", productInfo);
 function removefromCart(Id){
    dispatch(
      getCartOperations({
        id: Id,
        size: 'S',
        type: "DELETE",
        tokenValue: JSON.parse(localStorage.getItem("userInfo"))[0],
        suffix: Id,
        qty: '1',
      })
    );
 }
  // console.log('selectedSize',selectedSize);
  // console.log('selectedQty',selectedQty);
  // console.log("Id",Id);
  console.log("prisize",cartProductInfo && cartProductInfo);
  console.log("s",size);
  return (
    <>
      <div className="px-4">
        <div className="relative border-[1px] border-[#0003] solid mb-5 rounded">
          <div className="">
            <div className="py-5 pb-9 px-2 flex flex-row justify-between  border-black solid">
              <div className="h-[130px] ">
                <span className="text-[16px] leading-[1.25rem] flex py-1 text-[#000000b3]">
                  {name}
                </span>
                <div className="flex items-center my-[6px]">
                  <span className="text-[#333] font-semibold mr-1">
                    ₹{price}{" "}
                  </span>
                  <span className="text-[#9c9c9c] text-sm line-through">
                    {Math.round(price * 0.5 + price)}
                  </span>
                </div>
                <div className="block text-[16px] text-[#1d8802] font-[400] pt-1 pb-3">
                  <p>
                    You Saved ₹{" "}
                    {Math.round((price) * 0.5 + (price)) -
                      (price)}
                    !
                  </p>
                </div>
                <div className="flex gap-5 py-2">
                  {
                   
                      <CartItemHandler
                        options={size}
                        title={"Size"}
                        heading={"Select Size"}
                        handleQty={handleQtyChange}
                        productSizes={size}
                      />
                    
                  }
                  <CartItemHandler
                    options={quantities}
                    title={"Qty"}
                    heading={"Select Quantity"}
                    handleQty={handleQtyChange}
                  />
                </div>
              </div>
              <Link
                key={Id}
                to={{
                  pathname: `/ProductDetailsPage/${Id}`,
                }}
              >
                <div className="">
                  <img
                    src={image}
                    alt=""
                    className=" w-[140px] object-cover rounded-md"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div
            className="w-[100%] px-4 text-sm text-[#00000080] flex justify-center 
                "
          >
            <button
              onClick={()=>removefromCart(Id)}
             className="py-5 border-r border-t flex-1  justify-center cursor-pointer">
              Remove
            </button>
            <button className="py-5 border-l border-t flex-[2] cursor-pointer">
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cartcard;
