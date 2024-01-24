import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import Portal from "../MobileComponent/Portal"

function CartItemHandler({
  options,
  title,
  heading,
  handleQty,
  initialQuantity = options[0],
}) {
  const [selected, setSelected] = useState(initialQuantity);
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

  const handleSelect = (e) => {
    const { textContent } = e.target;
    console.log("textContent", textContent);
  
    if (handleQty) {
      handleQty(textContent);
    }
  
    setSelected(textContent);
    onClose(e);
  };
  
  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
//  console.log("se",selected);
  return (
    <>
      <div
        className="cartModOptions cursor-pointer flex items-center border rounded py-1 md:py-2 px-1 md:px-3 bg-[#f4f8fb]"
        onClick={onOpen}
      >
        <span className="text-[10px] sm:text-xs text-[#1c6c9e] md:text-[#333]">
          {title} : <b className="font-semibold md:font-bold">{selected}</b>
        </span>
        <span className="pl-1">
          <SlArrowDown className="p-[3px]" />
        </span>
      </div>
      {modalOpen && (
            <Portal onClose={onClose}>
        <div className="z-10 absolute top-[0px] flex justify-center items-center  w-full h-full left-[0px] bg-[#0000007a]">
          <div
            className=" top-[90px]l bg-[#0000007a] relative flex flex-col justify-end md:justify-center"
            onClick={handleModalClose}
          ></div>
          <div className="w-full h-full flex bg-[#0000007a]" onClick={onClose}>
            <div className="modal p-4 text-center bg-white h-max m-auto max-w-[150px]">
              <div className="modalHeading mb-4 text-xs opacity-70 font-medium">
                {heading}
              </div>
              <ul className="flex flex-col overflow-y-scroll">
                {options?.map((value, id) => (
                  <li
                    className={`p-3 hover:bg-[#e6e6e6] cursor-pointer ${
                      selected === value ? "text-[#51cccc]" : ""
                    }`}
                    onClick={(e)=>handleSelect(e)}
                    key={id}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </Portal>
      )}
    </>
  );
}
export default CartItemHandler;
