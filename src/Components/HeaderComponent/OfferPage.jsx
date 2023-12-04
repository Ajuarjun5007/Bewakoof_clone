import poster_1 from  "../../assets/offer_images/offer_1.webp"
import poster_2 from  "../../assets/offer_images/offer_2.webp"
import poster_3 from  "../../assets/offer_images/offer_3.webp"
import poster_4 from  "../../assets/offer_images/offer_4.webp"
import poster_5 from  "../../assets/offer_images/offer_5.webp"
function OfferPage(){
    return(
        <>
        <div className="flex flex-col justify-center items-center mt-[150px] ">
            <p className=" text-[48px] font-[900] tracking-tight">Bewakoof Offers</p>
            <p className="text-[18px] text-[rgb(0,0,0,0.9)]">Find the best offers across our platforms on this page.</p>
        </div>
        <div className="flex justify-center">
        <div className="mx-[17px] flex-wrap  flex justify-center items-center">
            <img className="py-[10px] w-[585px] h-[287px]" src={poster_1} alt="" />
            <img className="py-[10px] w-[585px] h-[287px]" src={poster_2} alt="" />
            <img className="py-[10px] w-[585px] h-[287px]" src={poster_3} alt="" />
            <img className="py-[10px] w-[585px] h-[287px]" src={poster_4} alt="" />
            <img className="py-[10px]  h-[287px] " src={poster_5} alt="" />
        </div>
        </div>
        </>
    )
}
export default OfferPage;