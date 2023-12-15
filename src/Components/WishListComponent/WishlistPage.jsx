import WishListCard from "./WishListCard";

function WishlistPage(){
    return (
        <>
        {/* <div className="flex justify-center items-center mt-[120px] pb-[100px]">
            <div className="mx-w-[450px]  flex flex-col items-center justify-center">
            <div className="">
                <img src="https://images.bewakoof.com/web/wishlistEmpty.svg" alt="" />
            </div>
            <div className="flex py-[20px] flex-col items-center justify-center">
                <p className="text-[12px] text-[#292d35] font-[900]">Hey! Your wishlist is empty.</p>
                <div className="w-[190px] flex text-center justify-center items-center ju text-[12px] text-[#8f98a9]  font-weight-[400] ">
                <p>Save your favourites here and make them yours soon!
                </p>
                </div>
            </div>
            <button className="bg-[rgb(66,162,162)] w-[100%] border-[1px] border-[rgb(66,162,162)] solid rounded text-white flex justify-center p-[8px]">SHOP NOW</button>
            </div>
        </div> */}
        <WishListCard/>
        </>
    )
}
export default WishlistPage;