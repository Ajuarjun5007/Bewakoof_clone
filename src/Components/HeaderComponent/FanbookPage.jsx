import cover_pic_1 from "../../assets/fanbook_page/fanbook-cover-photo.jpg"
import cover_pic_2 from "../../assets/fanbook_page/fanbook-cover-photo-2.jpg"
import img_1 from "../../assets/fanbook_page/grid-image-1.jpg"
import img_2 from "../../assets/fanbook_page/grid-image-2.jpg"
import img_3 from "../../assets/fanbook_page/grid-image-3.jpg"
import img_4 from "../../assets/fanbook_page/grid-image-4.jpg"
import img_5 from "../../assets/fanbook_page/grid-image-5.jpg"
import img_6 from "../../assets/fanbook_page/grid-image-6.jpeg"
import img_7 from "../../assets/fanbook_page/grid-image-7.jpg"
import img_8 from "../../assets/fanbook_page/grid-image-8.jpg"
import img_9 from "../../assets/fanbook_page/grid-image-9.jpg"
import { useScreenSize } from "../../Components/MobileComponent/useScreenSize";

function FanbookPage () {
    const screenSize =  useScreenSize();
    let isMobile = screenSize < 1000;
    return (
        <>
        <div className="">
            <div className="mt-[90px] py-[10px] gap-y-4">
                <img className="py-[10px]" src={cover_pic_1} alt="" />
                <img className="py-[10px]" src={cover_pic_2} alt="" />
            </div>
            {
                !isMobile &&
            <div className="grid grid-cols-3 px-[100px] py-10">
            <img className="p-[1px] h-[577px]" src={img_1} alt="" />
            <img className="p-[1px] h-[577px]" src={img_2} alt="" />
            <img className="p-[1px] w-[440px]" src={img_3} alt="" />
            <img className="p-[1px] h-[512px]" src={img_4} alt="" />
            <img className="p-[1px] h-[512px]" src={img_5} alt="" />
            <img className="p-[1px] w-[440px]" src={img_6} alt="" />
            <img className="p-[1px] w-[440px]" src={img_7} alt="" />
            <img className="p-[1px] h-[480px]" src={img_8} alt="" />
            <img className="p-[1px] w-[440px]" src={img_9} alt="" />
            </div>
            }
        </div>
        </>
    )
}
export default FanbookPage;