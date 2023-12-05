import poster_1 from  "../../assets/offer_images/offer_1.webp"
import poster_2 from  "../../assets/offer_images/offer_2.webp"
import poster_3 from  "../../assets/offer_images/offer_3.webp"
import poster_4 from  "../../assets/offer_images/offer_4.webp"
import poster_5 from  "../../assets/offer_images/offer_5.webp"
import img_1 from "../../assets/topcarouselhomeimages/tc_1.jpg";
import img_2 from "../../assets/topcarouselhomeimages/tc_2.jpg";
import img_3 from "../../assets/topcarouselhomeimages/tc_3.webp";
import img_4 from "../../assets/topcarouselhomeimages/tc_4.jpg";
import img_5 from "../../assets/topcarouselhomeimages/tc_5.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function OfferPage() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide:1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };
    return(
        <>
        <div className="flex flex-col justify-center items-center mt-[80px] ">
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


        <div 
      className=" relative top-[140px] py-2 "
      >
        <Carousel
          responsive={responsive}
        >
          <div className="w-max-content">
            <img
             className="solid object-cover px-1"
             src={img_1} alt="" />
          </div> 
          <div className="w-max-content">
            <img 
            className="solid object-cover px-1" 
            src={img_2} alt="" />
          </div> 
          <div className="w-max-content">
            <img 
            className="solid object-cover px-1" 
             src={img_3} alt="" />
          </div> 
          <div className="w-max-content">
            <img 
            className="solid object-cover px-1" 
             src={img_4} alt="" />
          </div> 
          <div className="w-max-content">
            <img 
             className="solid object-cover px-1"  
             src={img_5} alt="" />
          </div> 

        </Carousel>
      </div>


        </div>
        </>
    )
}
export default OfferPage;