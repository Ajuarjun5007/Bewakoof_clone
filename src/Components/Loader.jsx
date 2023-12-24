import loader_img from "../assets/wishlist_page/bwkf-loading-anim-common.gif"
function Loader(){
    return (
        <>
        <div className="flex w-full h-full backdrop-brightness-[0.99] pointer-events-none items-center justify-center">
                <div className="w-20 h-16 md:w-32 md:h-28 rounded-xl md:scale-150 flex shadow-md items-center justify-center bg-white">
                    <img className="pt-2 h-full object-cover contrast-125 saturate-150 " src={loader_img} alt="" />
                </div>
            </div>
        </>
    )
}
export default Loader;