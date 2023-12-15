import img_1 from "../../assets/bw-demo-1.webp"
import bag_img from "../../assets/wishlist_blue_bag.svg"
import crossbtn_img from "../../assets/crossBtn.svg"
import { AiFillStar } from 'react-icons/ai';
function WishListCard(){
    return(
        <>
          <div className='relative mt-[120px] ml-[20px]'>
            <div className=' w-[200px] border lg:border-none rounded-sm overflow-hidden'>
                {/* <Link to={`/p/${_id}`}> */}
                    <figure className="overflow-hidden relative mt">
                        <img className='w-[200px] transition-all hover:scale-105 aspect-[5/7] object-cover object-top' 
                        src={img_1} alt={name} />
                        {/* {
                            !!ratings && */}
                            <div className="ratingBox absolute bottom-3 md:bottom-4 left-0 flex items-center gap-1 px-2 py-[2px] rounded-full bg-[#f7f7f7]">
                                <AiFillStar className="text-[#ffc700] w-3 h-3" />
                                <span className="text-[8px] md:text-xs text-[#000000e6]">4.2</span>
                            </div>
                        {/* } */}
                        <div className="tagContainer  bg-[#525252cc] absolute top-0 left-0 min-h-4 flex items-center">
                            <span className="tagText text-white font-semibold px-1 py-[2px] md:px-2 text-[10px]">OVERSIZED FIT</span>
                        </div>
                    </figure>
                {/* </Link> */}

                <div className="cardDetails border pt-1 px-1 md:pt-2 md:px-2 pb-2`">
                    <div className="flex">
                        <div className="flex-1 truncate">
                            {/* <Link to={`/p/${_id}`}> */}
                                {/* {brand &&
                                    <h3 className="brandName text-xs font-semibold truncate">{brand}</h3>
                                 }  */}
                                <h2 className="text-[10px] text-[#737373] truncate">Mens shirt</h2>
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className="priceBox font-semibold flex items-end">
                        <div className="text-[10px] md:text-base"><span className="text-xs">₹</span>499</div>
                        <div className="pl-1 line-through text-[#949494] text-[10px] md:text-xs">
                            ₹1299</div>
                        <div className="pl-2 text-[#00b852] text-[10px] md:text-xs whitespace-nowrap">69% OFF</div>
                    </div>
                </div>
            </div>
            <div className="removeItem absolute top-2 right-2 cursor-pointer">
                <img src={crossbtn_img} alt="" />
            </div>
            {/* {!isAddedToCart && */}
             <div className="addToBag flex items-center justify-center gap-2 cursor-pointer border border-t-0 text-[10px] text-[#207bb4] px-3 py-2 font-semibold hover:text-[#333] hover:bg-[#e6e6e6]" >
                <img src={bag_img} alt="" />
                <span className=''>ADD TO BAG</span>
            </div>
             {/* } */}
        </div>
        </>
    )
}
export default WishListCard;