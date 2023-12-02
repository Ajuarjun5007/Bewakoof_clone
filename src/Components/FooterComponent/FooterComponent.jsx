import footer_logo from "../../assets/footerImage/black-logo.jpg"
function FooterComponent(){
    return(
        <>
        <div className=" px-[110px] py-[72px] bg-[rgb(24,24,24)] w-full left-0 text-[12px] bottom-0">
            <div className="border-2 border-red-500 solid">
                <div className="">
                    <img src={footer_logo} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default FooterComponent;