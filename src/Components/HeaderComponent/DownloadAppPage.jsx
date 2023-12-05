import img_1 from "../../assets/downloadapp_page/download_app_img_1.webp"
import img_2 from "../../assets/downloadapp_page/download_app_img_2.webp"
import android_img from "../../assets/downloadapp_page/android.webp"
import ios_img from "../../assets/downloadapp_page/ios.webp"
import { useEffect, useState } from "react"

function DownloadAppPage(){

    // useEffect(()=>{
    //     window.location.reload(false);
    // },[])

    return (
        <>
        <div className="flex justify-center pb-[200px]">
        <div className="w-[68%] h-max flex relative pb-[100px] mt-[120px] " >  
        {/* mt-[229px] */}
            <div className="absolute pt-[100px] pl-[00px] z-[2]  pb-[40px] ">
                <img className=" w-[300px] h-[619px]" src={img_2} alt="" />
            </div>
            {/* mt-[119px] */}
            <div className="flex  pt-[0px] pl-[250px] pb-[40px] z-[0] ">
                <img className="w-[300px] h-[619px]" src={img_1} alt="" />
            <div className="w-[300px] flex flex-col flex-wrap">
                <p className="  text-[120px] leading-[124px] text-[#333]">the all new app</p>
                <p className="pt-[30px] text-[28px] font-[900] text-[#333]">Shop on the go!</p>
                <p className="pt-[15px] text-[#333]">Bewakoof Shopping App</p>
            </div>
            </div>
            <div className="absolute bottom-[50px]  gap-[20px] right-0 flex">
                <img className="w-[174px] h-[52px]" src={android_img} alt="" />
                <img className="w-[174px] h-[52px]" src={ios_img} alt="" />
            </div>
        </div>
        </div>
        </>
    )
}
export default DownloadAppPage;