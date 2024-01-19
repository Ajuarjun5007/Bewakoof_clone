import img_1 from "../../assets/bw-demo-1.webp";
import bag_img from "../../assets/wishlist_blue_bag.svg";
import crossbtn_img from "../../assets/crossBtn.svg";
import { AiFillStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

import {
  applyFilters,
  getProductList,
  getWishListOperations,
} from "../ProductComponent/Slices/FilterSlice";
import { productDetail } from "../ProductComponent/ProductService";
import { useEffect, useState } from "react";

function WishListCard({ Id }) {
  const [productInfo, setProductInfo] = useState([]);
  console.log("Id", Id);
  useEffect(() => {
    if (Id !== undefined) {
      productDetail(Id).then((res) => {
        setProductInfo(res.data);
        //   setImages(res.data.images);
        //   setIsLoading(false);
      });
    }
  }, []);
  function removeItemFromWishList(event, Id) {
    event.stopPropagation();
    event.preventDefault();

    dispatch(
      getWishListOperations({
        id: Id,
        type: "DELETE",
        tokenValue: JSON.parse(localStorage.getItem("userInfo"))[0],
        suffix: Id,
      })
    );
  }
  console.log("Pi", productInfo);
  return (
    <>
      <div className=" w-[266px] relative mt-[10px] ml-[20px] mb-[30px]">
        <div className=" border lg:border-none rounded-sm ">
          {/* <Link to={`/p/${_id}`}> */}
          <div className="overflow-hidden relative mt">
            <img
              className="w-[266px] fog h-[330px] transition-all hover:scale-105 aspect-[5/7] object-cover object-top"
              src={productInfo?.displayImage}
              alt={name}
            />
            {/* {
                            !!ratings && */}
            <div className="flex items-center gap-[5px] py-[1px] pl-[8px] pr-[4px] absolute bottom-5 bg-white">
              <FaStar className="text-[#ffc700] text-[9px]" />
              <p className="text-[#337ab7] text-[10px]">
                {productInfo?.ratings?.toFixed(1)}
                {/* 4.2 */}
              </p>
            </div>
            {/* } */}
            {/* <div className="tagContainer  bg-[#525252cc] absolute top-0 left-0 min-h-4 flex items-center">
                            <span className="tagText text-white font-semibold px-1 py-[2px] md:px-2 text-[10px]">OVERSIZED FIT</span>
                        </div> */}
          </div>
          {/* </Link> */}

          <div className="cardDetails border pt-1 px-1 md:pt-2 md:px-2 pb-2`">
            <div className="flex">
              <div className="flex-1 truncate">
                <p className="mt-[5px] text-[#4f5362] text-[12px] leading-[15px] font-[550]">
                  {productInfo?.brand}
                </p>
                <p className="mt-[5px] w-[85%] truncate text-[#737373] text-[10px] leading-[12px] font-[550]">
                  {productInfo?.name}
                </p>
              </div>
            </div>
            <div className="priceBox gap-1 flex items-end">
              <p>
                ₹<strong>{productInfo?.price}</strong>
              </p>
              <p className="line-through text-[#949494] text-[12px]">
                                        {Math.round(
                                          productInfo?.price * 0.5 + productInfo?.price
                                        )}
                                      </p>
              <p className="pl-2 text-[#00b852] text-[10px] md:text-xs whitespace-nowrap">
                {" "}
                {Math.round(
                  ((productInfo?.price * 0.5 +
                    productInfo?.price -
                    productInfo?.price) /
                    (productInfo?.price * 0.5 + productInfo?.price)) *
                    100
                )}
                % OFF
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 cursor-pointer">
          <img className="" src={crossbtn_img} alt="" />
        </div>
        {/* {!isAddedToCart && */}
        <div className=" flex items-center justify-center gap-2 cursor-pointer border border-t-0 text-[10px] text-[#207bb4] px-3 py-2 font-semibold hover:text-[#333] hover:bg-[#e6e6e6]">
          <img src={bag_img} alt="" />
          <span className="">ADD TO BAG</span>
        </div>
        {/* } */}
      </div>
    </>
  );
}
export default WishListCard;
