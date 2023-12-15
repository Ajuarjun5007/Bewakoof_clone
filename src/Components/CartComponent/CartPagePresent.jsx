import truck_img from  "../../assets/red-truck.webp"

function CartPagePresent(){
    return(
        <>
        <div className="flex justify-center">
        <div className="mt-[120px]  w-85 border-2 border-black solid">
        <div className="px-4 pb-10 flex justify-start">
            <p className=""><strong>My Bag</strong> 1 item(s) </p>
        </div>
        <div className="pt-9">
            {/* left section */}
        <div className="w-[50%]">
            <div className="flex items-center h-12 relative bg-[#fcffee] overflow-hidden 
            rounded mb-5">
                <img className="ml-5 w-5 h-3" src={truck_img} alt="" />
                <p className="ml-2 text-xs font-medium">Yay! You get FREE delivery on this order</p>
            </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default CartPagePresent;