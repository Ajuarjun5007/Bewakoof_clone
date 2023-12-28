import footer_logo from "../../assets/footerImage/black-logo.jpg";
import fb_icon from "../../assets/footerImage/fb_icon_a.png";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { HiOutlineFilter } from "react-icons/hi";
import playstore_img from "../../assets/downloadapp_page/android.webp";
import ios_img from "../../assets/downloadapp_page/ios.webp";
import payment_img from "../../assets/footerImage/secure-payments-image.webp";
import { topWearForMen } from "../HomePage/menucontent";
import { bottomWearForMen } from "../HomePage/menucontent";
import { topWearForWomen } from "../HomePage/menucontent";
import { bottomWearForWomen } from "../HomePage/menucontent";
import { mobiles } from "../TypeConstants";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function FooterComponent() {
  const location = useLocation();
  const [bewakoofDetailsShow, setBewakoofDetailsShow] = useState(false);

  useEffect(() => {
    // Check if the current location.pathname is '/'
    if (location.pathname === '/') {
      setBewakoofDetailsShow(true);
    } else {
      // If the location.pathname is not '/', hide the content
      setBewakoofDetailsShow(false);
    }
  }, [location.pathname]);
  return (
    <>
      <div className=" px-[110px] pt-[72px] pb-[250px] bg-[rgb(24,24,24)] w-full left-0 text-[12px] bottom-0">
      {/* section 1 */}
        <div className=" ">
          {/* footer logo */}
          <div className="">
            <img src={footer_logo} alt="" />
          </div>
          <div className="flex gap-[150px] px-[14px] ">
            {/* customer service */}
            <div className="py-[10px]">
              <span className="text-[12px] pb-[15px] text-[#fdd835] tracking-[1px]">
                CUSTOMER SERVICE
              </span>
              <div className="mt-[20px]">
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Contact us
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Track Order
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Return Order
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Cancel Order
                </p>
              </div>
            </div>
            {/* company */}
            <div className="py-[10px]">
              <span className="text-[12px] pb-[15px] text-[#fdd835] tracking-[1px]">
                COMPANY
              </span>
              <div className="mt-[20px]">
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  About us
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  We're Hiring
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Terms & Conditions
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">
                  Privacy Policy
                </p>
                <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Blog</p>
              </div>
            </div>
            {/* connect with us */}
            <div className="py-[10px]">
              <span className="text-[12px] pb-[15px] text-[#fdd835] tracking-[1px]">
                CONNECT WITH US
              </span>

              <div className="mt-[20px]">
                <div className="flex gap-[4px] pb-[5px]">
                  <img
                    className="bg-white font-[pink] w-[18px] h-[20px]"
                    src={fb_icon}
                    alt=""
                  />
                  <span className="text-[hsla(0,0%,100%,.9)]  font-[500] pt-[4px]">
                    4.7M People Like this
                  </span>
                </div>
                <div className="flex gap-[2px] py-[10px]">
                  <FaInstagram className="w-[20px] h-[20px] text-[white]" />
                  <span className="text-[hsla(0,0%,100%,.9)]  font-[500] pt-[4px]">
                    1M Followers
                  </span>
                </div>
                <div className="flex gap-[10px]">
                  <FaTwitter className="w-[20px] h-[20px] text-[white]" />
                  <FaPinterest className="w-[20px] h-[20px] text-[white]" />
                  <FaSnapchatGhost className="w-[20px] h-[20px] text-[white]" />
                  <FaApple className="w-[20px] h-[20px] text-[white]" />
                </div>
              </div>
            </div>
            {/* keep up to date */}
            <div className="py-[10px]">
              <span className="text-[12px] pb-[15px] text-[#fdd835] tracking-[1px]">
                KEEP UP TO DATE
              </span>

              <div className="mt-[20px] flex">
                <input
                  type="text"
                  placeholder="Enter Email Id"
                  className="w-[133px] bg-[rgb(24,24,24)] px-[12px] py-[6px] text-[#555] focus:outline-none 
                            focus:border-bg-red-400 solid
                             border-t-[black] border-b-[1px] border-b-[#fdd835]"
                />
                <input
                  type="submit"
                  value="SUBSCRIBE"
                  className="h-[34px] bg-[#fdd835] text-[12px] py-[10px] px-[12px]"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex  px-[14px] ">
            {/* policy & delivery  */}
            <div className="my-[20px] ">
              <div className="flex px-[14px] gap-3 my-[10px]">
                <SlHandbag className="text-[hsla(0,0%,100%,.9)]" />
                <span className="text-[hsla(0,0%,100%,.9)] ">
                  {" "}
                  15 Days return policy*{" "}
                </span>
              </div>
              <div className="flex px-[14px] gap-3">
                <HiOutlineFilter className="text-[hsla(0,0%,100%,.9)]" />
                <span className="text-[hsla(0,0%,100%,.9)] ">
                  Cash on delivery*
                </span>
              </div>
            </div>
            {/* App store images */}
            <div className="my-[20px] ml-[100px] gap-y-[10px]">
              <span className="text-[12px]  text-[#fdd835] tracking-[1px]">
                DOWNLOAD THE APP
              </span>
              <div className=" mt-[20px] flex gap-[10px]">
                <img
                  className="w-[100px] h-[30px]"
                  src={playstore_img}
                  alt=""
                />
                <img className="w-[100px] h-[30px]" src={ios_img} alt="" />
              </div>
            </div>
            {/* payment*/}
            <div className="my-[20px] gap-y-[10px] ml-[60px]">
              <span className="text-[12px]  text-[#fdd835] tracking-[1px]">
                100% SECURE PAYMENT
              </span>
              <div className=" mt-[20px] flex gap-[10px]">
                <img className="w-[220px] h-[20px]" src={payment_img} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="flex  border-t-[1px] m-[14px] px-[10px] py-[20px] border-[#979797] solid">
            {/* mens clothing */}
            <div className="w-[255px] px-[10px] pr-[40px]">
                <span className="text-[white] font-[900] text-[17px] tracking-[1px]">MEN'S CLOTHING</span>
                {/* topwear */}
                <div className=" py-[10px] pt-[30px]">
                    <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Top Wear</p>
                {
                    topWearForMen.map((item, index)=>(
                        <p key={index} className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">{item}</p>
                    ))
                }
                </div>
                  {/* bottomwear */}
                  <div className=" py-[10px]">
                    <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Bottom Wear</p>
                {
                    bottomWearForMen.map((item)=>(
                        <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">{item}</p>
                    ))
                }
                </div>
            </div>
            {/* womens clothing */}
            <div className="w-[255px] px-[10px] pr-[40px]">
                <span className="text-[white] font-[900] text-[17px] tracking-[1px]">WOMEN'S CLOTHING</span>
                {/* topwear */}
                <div className=" py-[10px] pt-[30px]">
                    <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Top Wear</p>
                {
                    topWearForWomen.map((item)=>(
                        <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">{item}</p>
                    ))
                }
                </div>
                  {/* bottomwear */}
                  <div className=" py-[10px]">
                    <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Bottom Wear</p>
                {
                    bottomWearForWomen.map((item)=>(
                        <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">{item}</p>
                    ))
                }
                </div>
            </div>
            {/* Mobiles */}
            <div className="w-[255px] px-[10px] pr-[40px]">
                <span className="text-[white] font-[900] text-[17px] tracking-[1px]">MOBILE COVERS</span>
                {/* topwear */}
                <div className=" py-[10px] pt-[30px]">
                    <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">Brands</p>
                {
                    mobiles.map((item)=>(
                        <p className="text-[hsla(0,0%,100%,.9)] tracking-[1px]">{item}</p>
                    ))
                }
                </div>
            </div>
            {/* FANMAP */}
            <div className="w-[255px] px-[10px] pr-[40px] ">
                <p className="text-[#51cccc] font-[900] text-[17px] tracking-[1px] pb-[15px]">FAN BOOK</p>
                <p className="text-[#51cccc] font-[900] text-[17px] tracking-[1px] pb-[15px]">OFFERS</p>
                <p className="text-[#51cccc] font-[900] text-[17px] tracking-[1px] pb-[15px]">SITEMAP</p>
                {/* topwear */}
                
            </div>
        </div>
        {
          bewakoofDetailsShow &&
        <div className="text-[hsla(0,0%,100%,.9)]">
          <div className="p-[10px]">
          <p className="text-[17px] font-[500] tracking-wide">BEWAKOOF® THE NEW AGE ONLINE SHOPPING EXPERIENCE.</p>
          </div>
          <div className="p-[10px] text-[16px] font-[400] tracking-wider">
          Founded in 2012, Bewakoof® is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian.
          Bewakoof® was created on the principle of creating impact through innovation, honesty and thoughtfulness.
          </div>
          <div className="p-[10px] text-[16px] font-[400] tracking-wider">
          With a team of 400 members, and 2mn products sold till date. We like to experiment freely, which allows us to balance creativity and relatability, and our innovative designs. Our range of products is always fresh and up-to-date, and we clock sales of over 1 lakh products a month. Our innovation focus extends to our operations as well. We are vertically integrated, manufacture our own products, and cut out the middleman wherever possible. This direct-to-consumer model allows us to create high-quality fashion at affordable prices. A thoughtful brand, we actively attempt to minimize our environmental footprint and maximize our social impact. These efforts are integrated right into our day-to-day operations, from rainwater harvesting to paper packaging to employee benefits.
          To create an accessible, affordable and thoughtful experience of online shopping in India.
          </div>
          <div className="p-[10px]">
          <p className="text-[17px] font-[500] tracking-wide">ONLINE SHOPPING AT BEWAKOOF® IS HASSLE-FREE, CONVENIENT AND SUPER-EXCITING!</p>
          </div>
          <div className="p-[10px] text-[16px] font-[400] tracking-wider">
          Online Shopping has always been a fun and exciting task for most and more so when the shopping mall is none other than your own house. We have all had days when we have planned trips to the clothing store in advance, dreaming about what we would buy once we get there. Now we wouldnt think twice before indulging in some online shopping. Well, cut to todays time and age, you can do all this from the comfort of your home while enjoying many online shopping offers, right from amazing deals and discounts to one of the most robust user interface amongst most online shopping sites in India, with many shopping filters to make your shopping experience truly hassle free.
          This in our own words is what we call Bewakoof.com.
          </div>
          <div className="p-[10px] text-[16px] font-[400] tracking-wider">
          Bewakoof®, THE place to be when it comes to the coolest in online fashion, offers you fine, high-quality merchandise go ahead and indulge in a bit of online shopping for men and womens fashion. So browse through the exciting categories we have on offer from mens fashion to basic mens clothing as well as wide variety in womenswear and womens clothes to the amazing range of accessories, fill up your carts and get fast home delivery for all orders. All of this topped with our exclusive online shopping offers makes for an exciting, irresistible and uber cool combo! You can even gift some to your near and dear ones while being absolutely 
          certain that it will put a smile on their faces.
          </div>
          <div className="p-[10px]">
          <p className="text-[17px] font-[500] tracking-wide">
          BEWAKOOF.COM: THE QUIRKIEST ONLINE SHOPPING SITES OF ALL!
          </p>
          </div>
          <div className="p-[10px] text-[16px] font-[400] tracking-wider">
          Online fashion is definitely more accessible with Bewakoof.com. Explore the latest collections in Marvel t-shirts including avengers t-shirts and captain America t-shirts in official merchandise. Apart from these, quirkiest of T-shirts that you wont find on any online shopping sites in India are showcased at Bewakoof.com. If your wardrobe has been longing for a cool overhaul then bewakoof.com will certainly be your best bet amongst all online shopping sites. Also, take a tour of our bewakoof® blog to stay abreast with the latest runway trends and be a trendsetter among your immediate circles. What we wear speaks volumes of us they say. But what if what you wore actually spoke what your mood was! Havent we all wondered where we could get those quirky t-shirts and sport them with confidence? Sure otherwise getting them made or even buying them from otherwise expensive online shopping sites for clothes may cost you substantially but with Bewakoof.com, you will understand that you do not have to spend a fortune on online fashion to look great. Sliders, joggers, sweatshirts, bag and
           bag packs and so much more are just some of the other items you can grab hold of here.
          </div>
          <div className="p-[10px]">
          <p className="text-[17px] font-[500] tracking-wide">
          AVAIL OF ONLINE SHOPPING BENEFITS AT BEWAKOOF.COM AND YOULL SHOP NOWHERE ELSE!
          </p>
          </div>
          <div className="p-[10px] text-[16px] font-[400] tracking-wider">
          Choose your product, get it ordered online, and we ensure that its delivery happens right at your doorstep anywhere in India. You just need to take care of the payment for the product from the comfort of your home, while we ensure free shipping all the time on almost everything with no strings attached. For any second thoughts after purchase, we have in place a return policy as well. One of the best you will find on any online shopping sites in India. For your online shopping experience to be safe and risk-free, we offer Cash On Delivery (COD) facility too. So you dont have to worry anymore about your hard earned money being stuck when you buy clothes online at bewakoof.com. Avail exciting online shopping offers like designs of the day and colour of the month when you shop with us. Make sure to use our easy 15-day returns policy, card or cash on delivery option and other customer-friendly features. A comprehensive sizing guide and detailed product descriptions coupled with high-resolution product shots will give you all the information to make the right buying decision. Give your wardrobe the much-needed upgrade with uber cool clothing head to Bewakoof.com for
           a great online shopping india experience now! Could you have asked for more?
          </div>
          <div className="p-[10px]">
          <p className="text-[17px] font-[500] tracking-wide">
          DONT MISS OUT ON ACCESSORIES AVAILABLE ON OUR MULTI-FACETED ONLINE STORE!
          </p>
          </div>
          <div className="p-[10px] text-[16px] font-[400] tracking-wider">
          We dont just offer you exciting options in online fashion but also give you amazing accessories with really cool bags and bag packs to choose from. Our bags and backpacks are compact, hassle-free and easy to stuff things in. And all of this with the swag that you get to carry along with it. Cool designs are what form a major part of our online 
          fashion and we also ensure our accessories section doesnt feel left out!
          </div>
          <div className="p-[10px] text-[16px] font-[400] tracking-wider">
          As for our accessories collection, they are also manufactured with impeccable
           quality materials. Our mobile covers are made from hard and durable polycarbonate, with a matte finish that will make for a great protection for
            your phone with the rough use that we put them through nowadays.
          </div>
          <div className="p-[10px]">
          <p className="text-[17px] font-[500] tracking-wide">
          DESIGN OF THE DAY- THE COOLEST FEATURE EVER!
          </p>
          </div>
          <div className="p-[10px] text-[16px] font-[400] tracking-wider">
          Who said good and cool t-shirts have to expensive? We bring newer, cooler
           and more youth oriented designs everyday. Yes! Everyday you get a new design 
           to explore and buy. Although all our t-shirts are at an extremely affordable price, 
           we decided to slash them down even further. But there is a catch. It is only for 
           those designs and these exclusive prices are only valid for for a duration of 24 hours! 
           Designs refresh every day at 3pm and are valid only for 24 hours. So you need to hurry 
           and grab one fast before it ends. Because we believe everyone needs to have a fair chance 
           at all of our fresh designs of the day.
          </div>
          <div className="p-[10px]">
          <p className="text-[17px] font-[500] tracking-wide">
          BEWAKOOF.COM: THE UBER COOL ONLINE FASHION STORE FOR THE YOUTH
          </p>
          </div>
          <div className="p-[10px] text-[16px] font-[400] tracking-wider">
          We, at Bewakoof.com, have all that you need to glam up your cool quotient. 
          From an extensive range of plus size clothing, casual shirts for men and accessories for everyone, 
          we purvey diversity of choices in online shopping india platform has to offer under one umbrella.
           The range of apparels like men t-shirts, joggers, sliders, Henley shirts, Polo t-shirts,
            Oxford pants and more provide an array of options for the online customer to create a 
            ravishing ensemble from. We try to target all kinds of customers and cater to their needs and preferences.
             Communication is the key to our functioning. Your Bewakoof® Online fashion Shop has arrived! Do not miss the attractive online shopping offers everyday. Work your fashion with the wide range of apparels available only one click away! 
          Make a statement with our best t-shirts online! Get more, pay less!
          </div>
          <div className="p-[10px]">
          <p className="text-[17px] font-[500] tracking-wide">
          OUR PHILOSOPHY
          </p>
          </div>
          <div className="p-[10px] text-[16px] font-[400] tracking-wider">
          We believe in creating the kind of fashion, that makes you stand out as they 
          are in line with the latest local and global trends of the industry,
           but also at the same time offer value for money functionality, with quality 
           materials and comfortable and flattering prints. We try to look into the psyche of our 
           customers, and try to get inspired by the conversations and experiences around us 
           while creating our graphics, to ensure that they are relatable. 
           We believe in constant and consistent innovation to ensure that our fans get nothing short 
           of the bets at affordable rates! While most people do not know, 
           we do not outsource the manufacturing of our products, 
           everything from the conception of the designs to the manufacture and the styling that you see on the photographs 
           of the banners and product pages of our website all happen in house! We go from yarn to product and since we 're vertically integrated and bring fashion from us directly to your doorstep without any middlemen that also further ensures reliability because for us it is not just about the money but about building the trust and credibility in our fans about our brand. We also make sure to decrease the impact on environment and are building initiatives that will help us with the same, for now by optimizing our processes to use only as much as we need from nature, rain water harvesting and recycling the water from our RO water facility, because we believe that the spirit of Bewakoof® is about creating
           an impact by breaking conventions and having a different perspective!
          </div>
        </div>
        }
      </div>
    </>
  );
}
export default FooterComponent;
