import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img_1 from "../../assets/topcarouselhomeimages/tc_1.jpg";
import img_2 from "../../assets/topcarouselhomeimages/tc_2.jpg";
import img_3 from "../../assets/topcarouselhomeimages/tc_3.webp";
import img_4 from "../../assets/topcarouselhomeimages/tc_4.jpg";
import img_5 from "../../assets/topcarouselhomeimages/tc_5.webp";
import iconimg_1 from "../../assets/categoryiconimages/iconimg_1.jpg"
import iconimg_2 from "../../assets/categoryiconimages/iconimg_2.jpg"
import iconimg_3 from "../../assets/categoryiconimages/iconimg_3.webp"
import iconimg_4 from "../../assets/categoryiconimages/iconimg_4.jpg"
import iconimg_5 from "../../assets/categoryiconimages/iconimg_5.webp"
import iconimg_6 from "../../assets/categoryiconimages/iconimg_6.gif"
import iconimg_7 from "../../assets/categoryiconimages/iconimg_7.webp"
import iconimg_8 from "../../assets/categoryiconimages/iconimg_8.webp"
function HomePage() {
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
  return (
    <>
    {/*top carousel */}
      <div className="carousel-container py-2  relative flex justify-center top-[100px] ">
        <Carousel
            className="  "
          swipeable={false}
          draggable={false}
        //   autoPlay={true}
          showDots={true}
          responsive={responsive}
            infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all 1.2 ease-in ease-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //   dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
        >
          <div >
            <img
             className=" p-[2px] object-cover "
             src={img_1} alt="" />
          </div> 
          <div className="w-max-content">
            <img 
            className="p-[2px] object-cover " 
            src={img_2} alt="" />
          </div> 
          <div className="w-max-content">
            <img 
            className="p-[2px] object-cover" 
             src={img_3} alt="" />
          </div> 
          <div className="w-max-content">
            <img 
            className="p-[2px] object-cover" 
             src={img_4} alt="" />
          </div> 
          <div className="w-max-content">
            <img 
             className="p-[2px] object-cover"  
             src={img_5} alt="" />
          </div> 

        </Carousel>

      </div>
      {/* image icon  */}
      <div className="flex top-40 relative">
        <div className="iconimg-item">
        <img src={iconimg_1} alt="" className="px-3"/>
        </div>  
        <div className="iconimg-item">
        <img src={iconimg_2} alt="" className="px-3"/>
        </div> 
         <div className="iconimg-item">
        <img src={iconimg_1} alt="" className="px-3" />
        </div>  
        <div className="iconimg-item">
        <img src={iconimg_3} alt="" className="px-3"/>
        </div>  
        <div className="iconimg-item">
        <img src={iconimg_4} alt="" className="px-3"/>
        </div>  
        <div className="iconimg-item">
        <img src={iconimg_5} alt="" className="px-3"/>
        </div>  
        <div className="iconimg-item">
        <img src={iconimg_6} alt="" className="px-3"/>
        </div>  
        <div className="iconimg-item">
        <img src={iconimg_7} alt="" className="px-3"/>
        </div>
        <div className="iconimg-item">
        <img src={iconimg_8} alt="" className="px-3"/>
        </div>
      </div>
    </>
  );
}
export default HomePage;
