import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomePage.css"
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
import poster_gif_1 from "../../assets/desktop-all-eyes-.gif"
import poster_gif_2 from "../../assets/ThinBanner-Desktop-low.gif"
import splitbanner_1 from "../../assets/split-banner-1.webp"
import splitbanner_2 from "../../assets/split-banner-2.webp"
import trendingimg_1 from "../../assets/Trending_Categories_page/trending_img_1.webp"
import trendingimg_2 from "../../assets/Trending_Categories_page/trending_img_2.webp"
import trendingimg_3 from "../../assets/Trending_Categories_page/trending_img_3.jpg"
import trendingimg_4 from "../../assets/Trending_Categories_page/trending_img_4.webp"
import trendingimg_5 from "../../assets/Trending_Categories_page/trending_img_5.jpg"
import trendingimg_6 from "../../assets/Trending_Categories_page/trending_img_6.jpg"
import trendingimg_7 from "../../assets/Trending_Categories_page/trending_img_7.webp"
import trendingimg_8 from "../../assets/Trending_Categories_page/trending_img_8.webp"
import trendingimg_9 from "../../assets/Trending_Categories_page/trending_img_9.webp"
import trendingimg_10 from "../../assets/Trending_Categories_page/trending_img_10.webp"
import trendingimg_11 from "../../assets/Trending_Categories_page/trending_img_11.webp"
import trendingimg_12 from "../../assets/Trending_Categories_page/trending_img_12.webp"
import b_original_1 from "../../assets/bewakooforiginals_images/b_o_1.webp"
import b_original_2 from "../../assets/bewakooforiginals_images/b_o_2.webp"
import b_original_3 from "../../assets/bewakooforiginals_images/b_o_3.webp"
import to_missed_img_1 from "../../assets/Toohottobemissed_images/to_missed_img_1.jpg"
import to_missed_img_2 from "../../assets/Toohottobemissed_images/to_missed_img_2.webp"
import to_missed_img_3 from "../../assets/Toohottobemissed_images/to_missed_img_3.webp"
import to_missed_img_4 from "../../assets/Toohottobemissed_images/to_missed_img_4.jpg"
import category_box_1 from "../../assets/Categories_to_bag_images/category-box-1.jpg"
import category_box_2 from "../../assets/Categories_to_bag_images/category-box-2.webp"
import category_box_3 from "../../assets/Categories_to_bag_images/category-box-3.webp"
import category_box_4 from "../../assets/Categories_to_bag_images/category-box-4.jpg"
import category_box_5 from "../../assets/Categories_to_bag_images/category-box-5.jpg"
import category_box_6 from "../../assets/Categories_to_bag_images/category-box-6.jpg"
import bestpick_1 from "../../assets/Our_best_pick_images/best_pick_1.webp"
import bestpick_2 from "../../assets/Our_best_pick_images/best_pick_2.webp"
import bestpick_3 from "../../assets/Our_best_pick_images/best_pick_3.webp"
import bestpick_4 from "../../assets/Our_best_pick_images/best_pick_4.webp"
import tribe_img_1 from "../../assets/Tribe_member_images/tribe_img_1.webp"
import tribe_img_2 from "../../assets/Tribe_member_images/tribe_img_2.jpg"
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
      <div 
      className=" relative top-[120px] py-2"
      >
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
      {/* image icon  */}
      <div className="flex top-[120px] px-5 relative py-[30px]">
        <div className="iconimg-item">
        <img src={iconimg_1} alt="" className="px-2"/>
        </div>  
        <div className="iconimg-item">
        <img src={iconimg_2} alt="" className="px-2 "/>
        </div>   
        <div className="iconimg-item ">
        <img src={iconimg_3} alt="" className="px-2 rounded-s-lg"/>
        </div>  
        <div className="iconimg-item">
        <img src={iconimg_4} alt="" className="px-2 "/>
        </div>  
        <div className="iconimg-item">
        <img src={iconimg_5} alt="" className="px-2"/>
        </div>  
        <div className="iconimg-item">
        <img src={iconimg_6} alt="" className="px-2"/>
        </div>  
        <div className="iconimg-item">
        <img src={iconimg_7} alt="" className="px-2"/>
        </div>
        <div className="iconimg-item">
        <img src={iconimg_8} alt="" className="px-2"/>
        </div>
      </div>
      {/* poster gifs */}
      <div className="relative top-[140px] px-2 pb-[30px]">
        <img src={poster_gif_1} alt="" />
        <img src={poster_gif_2} alt="" />
      </div>
      {/* split banner */}
      <div className="  relative top-[130px] pb-[30px]">
        <div className="flex  justify-center text-[23px] text-black font-[550] tracking-wider">Designs of the Week</div>
           <div className="flex  mx-[8px]  overflow-hidden">
            <img src={splitbanner_1} alt="" />
            <img src={splitbanner_2} alt="" />
           </div>
      </div>
     {/* Trending categories */}
        <div className="relative top-[120px] flex justify-center pb-[30px] mb-[10px]">
        <div className="flex flex-col items-center justify-center  font-[550] text-[23px] tracking-wider">
            <p>TRENDING CATEGORIES</p>
            <div className="flex justify-center h-[300px] flex-wrap">
            <div className="trending-item  solid h-[330px] w-[220px]">
                    <img 
                    className=" "
                    src={trendingimg_1} alt=""  />
                </div>
                <div className="trending-item  solid h-[330px] w-[220px]">
                    <img 
                      className=" h-[330px] w-[230px]"
                    src={trendingimg_2} alt="" />
                </div>
                <div className="trending-item  solid h-[330px] w-[220px]">
                    <img 
                      className=" h-[330px] w-[230px]"
                    src={trendingimg_3} alt="" />
                </div>
                <div className="trending-item  solid h-[330px] w-[220px]">
                    <img 
                      className=" h-[330px] w-[230px]"
                    src={trendingimg_4} alt="" />
                </div>
                <div className="trending-item  solid h-[330px] w-[220px]">
                    <img
                      className=" h-[330px] w-[230px]"
                     src={trendingimg_5} alt="" />
                </div>
                <div className="trending-item  solid h-[330px] w-[220px]">
                    <img 
                      className=" h-[330px] w-[230px]"
                    src={trendingimg_6} alt="" />
                </div>
                <div className="trending-item  solid h-[330px] w-[220px]">
                    <img 
                      className=" h-[330px] w-[230px]"
                    src={trendingimg_7} alt="" />
                </div>
                <div className="trending-item  solid h-[330px] w-[220px]">
                    <img 
                      className=" h-[330px] w-[230px]"
                     src={trendingimg_8} alt="" />
                </div>
                <div className="trending-item  solid h-[330px] w-[220px]">
                    <img 
                      className=" h-[330px] w-[230px]"
                    src={trendingimg_9} alt="" />
                </div>
                <div className="trending-item  solid h-[330px] w-[220px]">
                    <img 
                      className=" h-[330px] w-[230px]"
                    src={trendingimg_10} alt="" />
                </div> 
                <div className="trending-item  solid h-[330px] w-[220px]">
                    <img 
                      className=" h-[330px] w-[230px]"
                    src={trendingimg_11} alt="" />
                </div>
                <div className="trending-item  solid h-[330px] w-[220px]">
                    <img 
                      className=" h-[330px] w-[230px]"
                    src={trendingimg_12} alt="" />
                </div>
            </div>
        </div>
        </div>
        {/* Bewakoof Originals */}
        <div className="relative top-[420px] flex flex-col justify-center pb-[70px]">
            <div className="flex justify-center">
            <span className="text-[23px] justify-center font-[550] tracking-wider">Bewakoof Originals</span>
            </div>
            <div 
      className="px-[10px]  "
      >
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
        //   renderButtonGroupOutside={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //   dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
        >
          <div className="w-max-content">
            <img
             className="solid object-cover px-1"
             src={b_original_1} alt="" />
          </div> 
          <div className="w-max-content">
            <img 
            className="solid object-cover px-1" 
            src={b_original_2} alt="" />
          </div> 
          <div className="w-max-content">
            <img 
            className="solid object-cover px-1" 
             src={b_original_3} alt="" />
          </div> 
        </Carousel>
      </div>
        </div>
        {/* Too hot to be missed */}
        <div className="relative top-[390px] flex flex-col items-center font-[550] pb-[30px]
         text-[23px] tracking-wider">
            <p>TOO HOT TO BE MISSED</p>
            <div className="flex justify-center w-full flex-wrap">
                <img 
                className="px-[3px] py-[3px] w-[670px]"
                src={to_missed_img_1} alt="" />
                <img 
                className="px-[3px] py-[3px] w-[670px]"
                src={to_missed_img_2} alt="" />
                <img 
                className="px-[3px] py-[3px] w-[670px]"
                src={to_missed_img_3} alt="" />
                <img 
                className="px-[3px] py-[3px] w-[670px]"
                src={to_missed_img_4} alt="" />
            </div>
        </div>
        {/* categories to bag */}
        <div className="relative top-[390px] flex flex-col items-center">
            <p className="text-[23px] font-[550] track-wider">CATEGORIES TO BAG</p>
            <div className="flex justify-center">
            <img className="w-[220px]"
            src={category_box_1} alt="" />
            <img className="w-[220px]"
            src={category_box_2} alt="" />
            <img className="w-[220px]"
            src={category_box_3} alt="" />
            <img className="w-[220px]"
            src={category_box_4} alt="" />
            <img className="w-[220px]"
            src={category_box_5} alt="" />
            <img className="w-[220px]"
            src={category_box_6} alt="" />
            </div>
        </div>
        {/* Our Best Picks */}
        <div className="relative top-[390px] flex flex-col items-center font-[550] pb-[30px]
         text-[23px] tracking-wider">
            <p>OUR BEST PICKS</p>
            <div className="flex justify-center w-full flex-wrap">
                <img 
                className="px-[3px] py-[3px] w-[670px]"
                src={bestpick_1} alt="" />
                <img 
                className="px-[3px] py-[3px] w-[670px]"
                src={bestpick_2} alt="" />
                <img 
                className="px-[3px] py-[3px] w-[670px]"
                src={bestpick_3} alt="" />
                <img 
                className="px-[3px] py-[3px] w-[670px]"
                src={bestpick_4} alt="" />
            </div>
        </div>
        {/* tribe member*/}
        <div className="relative top-[390px] pb-[30px]">
            <img className="py-[5px]" src={tribe_img_1} alt="" />
            <img className="py-[5px]" src={tribe_img_2} alt="" />
        </div>
    </>
  );
}
export default HomePage;
