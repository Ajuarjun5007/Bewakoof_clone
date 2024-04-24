import { Link } from "react-router-dom";
import img_1 from "../../assets/no-orders.png";
import { IoChevronBackOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useDeferredValue, useEffect, useState } from "react";
import { getOrderList } from "../ProductComponent/Slices/FilterSlice";
function TrackOrderPage() {
  const dispatch = useDispatch();
  const callOrder=()=>{
    if(localStorage.getItem("userInfo")){
      dispatch(
        getOrderList({
          type:"GET",
          tokenValue: JSON.parse(localStorage.getItem("userInfo"))[0],
        })
      );
    }
  }
  const [orderedProducts, setOrderedProducts] = useState([]);

  
  const orderListResult = useSelector(
    (state) => state.productReducer.orderList?.data
  );
  console.log("orderedList",orderListResult);
  let orderedItems =
    Array.isArray(orderListResult)&& orderListResult.map((stock) => {
      return stock?.order;
    });
   

  let orderedItemsAddress =Array.isArray(orderedItems) && orderedItems?.map((item) => {
    return item?.shipmentDetails?.address;
  });
  let orderedItemsDescription =Array.isArray(orderedItems) &&  orderedItems?.map((product) => {
    return product?.items;
  });
  let orderedItemsSpecs =Array.isArray(orderedItemsDescription) &&  orderedItemsDescription?.map((item) => {
    return item[0].product.name;
  });

  useEffect(() => {
    console.log("eer");
    callOrder();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    window.scrollTo(0,0);
   }, []);
  return (
    <>
      <div className="flex justify-center mt-[100px] bg-[#f9f9f9]">
        <div className="max-[360px]:w-[95%] w-85">
          <Link to="/AccountPage">
            <div className=" flex my-[20px] items-center">
              <IoChevronBackOutline className="text-[#51cccc] font-[100] text-[19px]" />
              <span className="text-[#51cccc] text-[14px] font-[300] tracking-wide">
                Back to My Account
              </span>
            </div>
          </Link>
          <div className="my-[20px] w-max">
            <span
              className=" text-[#181818] text-[2em] 
                    font-[600]"
            >
              My Orders
            </span>
            <div className="w-9/12 h-[2px] bg-[#fbd139] mt-[6px]  ml-[2px]"></div>
          </div>
          {orderListResult?.length > 0 ? (
            orderListResult?.map((item, index) => (
              <div className="orderPresent my-5">
                <div className="orderId font-medium">
                  Order#{" "}
                  <span className="font-bold ml-1 mb-10">{item.order._id}</span>
                </div>
                <div className="orderCard border-2 flex md:gap-6 p-2 md:p-0 bg-white rounded overflow-hidden">
                  <figure className="md:h-[260px] md:w-[260px] w-[121px] h-[151px] rounded md:rounded-none">
                    <img
                      className="object-cover h-full rounded md:rounded-none"
                      src={item.order.items[0].product.displayImage}
                      alt={name}
                    />
                  </figure>
                  <div className="text-[12px] max-[359px]:text-[9px] max-[359px]:px-0   flex-1 md:text-sm px-2 md:p-4 flex flex-col gap-4 md:gap-6">
                    <div>
                      <h3 className="font-semibold min-[768px]:text-[21px]">
                        {item.order.items[0].product.name}
                      </h3>
                    </div>
                    <div className="text-[12px] max-[359px]:text-[9px] min-[768px]:text-[18px] font-medium w-max  text-[black] p-1  pl-1 bg-[#f9f9f9]">
                      Paid Amount - ₹{item.order.totalPrice}
                    </div>
                    <div className="text-[12px] max-[359px]:text-[9px] min-[768px]:text-[16px] items-center gap-1 flex font-medium w-max  text-[black] p-1  pl-1 bg-[#f9f9f9]">
                      DELIVERED ON{" "}
                      {new Date(item.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </div>
                   

                    <div className="ml-auto w-max">
                      <button
                        className="border font-bold hover:opacity-80 rounded border-[#42a2a2] bg-[#e7ffeb] text-[#42a2a2] py-2 px-3 md:py-4 md:px-10 text-sm"
                      >
                      CONFIRMED
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="emptyOrderPage">
              <div className="flex justify-center py-[40px] ">
                <span className="text-[rgba(24,24,24,.8)] text-center text-[20px]">
                  Sadly, you haven't placed any orders till now.
                </span>
              </div>
              <div className="flex justify-center">
                <img className="w-[138px] h-[203px]" src={img_1} alt="" />
              </div>
              <div className=" flex justify-center py-[40px] mb-[50px]">
                <Link to='/'>
                <button
                  className="text-[#51cccc] border-[1px]
                         border-[#51cccc] solid px-[10px] py-[5px] rounded-[2px]"
                >
                  Continue Shopping
                </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TrackOrderPage;
