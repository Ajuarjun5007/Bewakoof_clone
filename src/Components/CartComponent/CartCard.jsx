import { ChevronDownIcon } from "@radix-ui/react-icons";
import img_1 from "../../assets/bw-demo-3.webp";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CartItemHandler from "./CartItemHandler";
import { SlArrowDown } from "react-icons/sl";
import Portal from "../MobileComponent/Portal";
function Cartcard() {
  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [qty, setQty] = useState(1);
  // const [prodSize, setProdSize] = useState(size);
  const [wishlisted, setWishlisted] = useState(false);
  const dispatch = useDispatch();

  // const discount = useRef(getRandomDiscount(20, 80));
  // let discountPrice = getDiscountedPrice(price, discount.current);
  // price *= qty;
  // discountPrice *= qty;

  const handleQty = (qtyToSet) => {
    setQty(qtyToSet);
    const resQty = qtyToSet - quantity;
    dispatch(addToCart({ productId: _id, quantity: resQty, size: prodSize }));
  };

  const handleSize = (sizeToSet) => {
    setProdSize(sizeToSet);
    dispatch(addToCart({ productId: _id, quantity: 0, size: sizeToSet }));
  };
  const [selectedSize, setSelectedSize] = useState("seee");
  const [selecteQty, setSelectedQty] = useState(quantities[0]);
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
    setSelectedSize(value);
    onClose(event);
  };
  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  console.log("sele", selectedSize);
  return (
    <>
      <div className="px-4">
        <div className="relative border-[1px] border-[#0003] solid mb-5 rounded">
          <div className="">
            <div className="py-5 pb-9 px-2 flex flex-row justify-between  border-black solid">
              <div className="h-[130px] ">
                <span className="text-[16px] leading-[1.25rem] flex py-1 text-[#000000b3]">
                  Men's tshirt
                </span>
                <div className="flex items-center my-[6px]">
                  <span className="text-[#333] font-semibold mr-1">₹ 999</span>
                  <span className="text-[#9c9c9c] text-sm line-through">
                    ₹ 1299
                  </span>
                </div>
                <div className="block text-[16px] text-[#1d8802] font-[400] pt-1 pb-3">
                  <p>You Saved ₹ 300!</p>
                </div>
                <div className="flex gap-5 py-2">
                  <CartItemHandler
                    options={sizes}
                    title={"Size"}
                    heading={"Select Size"}
                  />
                  <CartItemHandler
                    options={quantities}
                    title={"Qty"}
                    heading={"Select Quantity"}
                  />
                </div>
              </div>
              <div className="">
                <img
                  src={img_1}
                  alt=""
                  className=" w-[140px] object-cover rounded-md"
                />
              </div>
            </div>
          </div>
          <div
            className="w-[100%] px-4 text-sm text-[#00000080] flex justify-center 
                "
          >
            <button className="py-5 border-r border-t flex-1  justify-center cursor-pointer">
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
