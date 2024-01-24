import WishListCard from "./WishListCard";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function WishlistPage() {
  let wishListResult = useSelector((state) =>
    state.productReducer.wishList?.data?.items?.map(
      (item) => item?.products._id || item?.products
    )
  );
  console.log("wishListResult", wishListResult);

  return (
    <>
      <div className="flex justify-center items-center mt-[120px] flex-wrap gap-1">
        {wishListResult?.length > 0 &&
          wishListResult?.map((Id) => 
          <WishListCard key={Id} Id={Id} />
          )}
        {wishListResult?.length === 0 && (
          <div className="mx-w-[450px] pb-[80px]  flex flex-col items-center justify-center">
            <div className="">
              <img
                src="https://images.bewakoof.com/web/wishlistEmpty.svg"
                alt=""
              />
            </div>
            <div className="flex py-[20px] flex-col items-center justify-center">
              <p className="text-[12px] text-[#292d35] font-[900]">
                Hey! Your wishlist is empty.
              </p>
              <div className="w-[190px] flex text-center justify-center items-center text-[12px] text-[#8f98a9] font-weight-[400]">
                <p>Save your favourites here and make them yours soon!</p>
              </div>
            </div>
            <button className="bg-[rgb(66,162,162)] w-[100%] border-[1px] border-[rgb(66,162,162)] solid rounded text-white flex justify-center p-[8px]">
              <Link to="/">
              SHOP NOW
              </Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default WishlistPage;
