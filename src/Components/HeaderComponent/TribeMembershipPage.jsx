import tribe_logo  from "../../assets/tribe_membership_page/tribe-page-logo.webp"
import small_icon_1 from  "../../assets/tribe_membership_page/small_icon_1.webp"
import small_icon_2 from  "../../assets/tribe_membership_page/small_icon_2.webp"
import small_icon_3 from  "../../assets/tribe_membership_page/small_icon_3.webp"
import small_icon_4 from  "../../assets/tribe_membership_page/small_icon_4.webp"
import small_icon_5 from  "../../assets/tribe_membership_page/small_icon_5.webp"
import small_icon_6 from  "../../assets/tribe_membership_page/small_icon_6.webp"
function TribeMembershipPage(){
    return(
        <>
        <div className="">
            {/* top content */}
            <div className="mt-[80px] flex py-[20px]">
                <div className="px-[180px] py-[100px] w-[50%] bg-[rgb(255,216,53)]">
                   <img className=" w-[270px] h-[135px]" src={tribe_logo} alt="" />
                   <span>Stay Trendy & Never Pay Full Price</span>
                </div>
                <div className="bg-[#f8f8f8] w-[50%] p-[40px] ">
                    <div className=" flex flex-wrap ">
                        <div className="p-[40px] ">
                        <img className="w-[40pcx] h-[40px]"  src={small_icon_1} alt="" />
                        <p className="py-[5px] font-[500] text-[18px]">Guaranteed Savings</p>
                        <p className=" text-[rgba(0,0,0,.5)] py-[4px] font-[400] text-[12px]">On Every Order</p>
                        </div>
                        <div className="p-[40px] ">
                        <img className="w-[40pcx] h-[40px]" src={small_icon_2} alt="" />
                        <p className="py-[5px] font-[500] text-[18px]">Exclusive Perks</p>
                        <p className="text-[rgba(0,0,0,.5)] py-[5px] font-[400] text-[12px]">Offers, Cashback etc.</p>
                        </div>
                        <div className="px-[49px] py-[46px] ">
                        <img className="w-[40pcx] h-[40px]" src={small_icon_3} alt="" />
                        <p className="pt-[6px] pb-[10px] font-[500] text-[18px]">Early Access</p>
                        <p className="text-[rgba(0,0,0,.5)]  font-[400] text-[12px]">to Sales & Collections</p>
                        </div>
                        <div className="ml-[20px] p-[47px] ">
                        <img className="w-[40pcx] h-[40px]" src={small_icon_4} alt="" />
                        <p className="py-[5px] font-[500] text-[18px]">Exclusive Experiences</p>
                        <p className="text-[rgba(0,0,0,.5)] py-[5px] font-[400] text-[12px]">Contests, Newsletters</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* button wrapper */}
            <div className="flex justify-center  flex-col items-center ">
                <button className="bg-[rgba(255,199,0,.9)] flex flex-col items-center rounded-[5px] w-[455px] py-[10px]">
                    <p className="text-[16px] font-[500] text-[#303030]">BUY BEWAKOOF TRIBE</p>
                    <div className="text-[14px] text-[#303030]">
                        at
                        <span className="line-through">₹299 </span>
                    
                        <strong>₹129 </strong>
                        for 3 months
                        </div>
                </button>
                <p className="text-[15px] text-[#333] pt-[10px] pb-[30px]"><strong> 5,832</strong> users have joined Tribe last week</p>
            </div>
            {/* five reasons wrapper */}
            <div className="bg-[#f8f8f8] my-[30px] flex justify-center py-[40px]">
                <div className=" w-[80%] ">
                    <p className="text-[20px]"><strong>Five Reasons</strong> Why You Should Join</p>
                    <div className="flex  py-[20px]">
                    {/* discnt 1 */}
                    <div className="flex  solid ">
                        <img className="w-[30px] h-[30px]" src={small_icon_5} alt="" />
                        <div className="w-[160px]  items-center justify-center pl-[5px] py-[5px]">
                            <p className="text-[12px] font-[600]">Guaranteed Discounts</p>
                            <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">On all products. On every order.</p>
                        </div>
                    </div>
                      {/* discnt 2 */}
                      <div className="flex solid w-max">
                        <img className="w-[30px] h-[30px]" src={small_icon_4} alt="" />
                        <div className="w-[160px] items-center justify-center pl-[5px] py-[5px]">
                            <p className="text-[12px] font-[600]">Free Shipping</p>
                            <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">On Everything you shop. No minimum purchase required.</p>
                        </div>
                    </div>
                      {/* discnt 3 */}
                      <div className="flex solid w-max">
                        <img className="w-[30px] h-[30px]" src={small_icon_2} alt="" />
                        <div className="w-[160px] items-center justify-center pl-[5px] py-[5px]">
                            <p className="text-[12px] font-[600]">Exclusive Perks</p>
                            <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">Tribe only Offers, Cashbacks, Products & Collections</p>
                        </div>
                    </div>
                      {/* discnt 4 */}
                      <div className="flex  solid w-max">
                        <img className="w-[30px] h-[30px]" src={small_icon_3} alt="" />
                        <div className="w-[160px] items-center justify-center pl-[5px] py-[5px]">
                            <p className="text-[12px] font-[600]">Early Access</p>
                            <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">VIP early access to all Sales & Events.</p>
                        </div>
                    </div>
                     {/* discnt 5 */}
                     <div className="flex  w-max">
                        <img className="w-[30px] h-[30px]" src={small_icon_3} alt="" />
                        <div className="w-[160px] items-center justify-center pl-[5px] py-[5px]">
                            <p className="text-[12px] font-[600]">Early Access</p>
                            <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">VIP early access to all Sales & Events.</p>
                        </div>
                    </div>
                      {/* discnt  6*/}
                      <div className="flex  solid w-max">
                        <img className="w-[30px] h-[30px]" src={small_icon_6} alt="" />
                        <div className="w-[160px] items-center justify-center pl-[5px] py-[5px]">
                            <p className="text-[12px] font-[600]">Exclusive Experiences</p>
                            <p className="text-[rgba(0,0,0,0.5)] text-[11px] py-[5px]">Tribe only Contests, Newsletters, Giveaways & more</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* tribe carousel */}
            <div className="flex justify-center">
                <div className="flex w-[80%]">
                    <p> <strong>Exclusive Savings</strong> Only for our TriBees</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default TribeMembershipPage;