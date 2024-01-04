import PaymentType from "./PaymentType";
import { useState } from "react";
import comingSoon from "../../assets/coming-soon.webp";
function PaymentPage() {
  const [activeTab, setActiveTab] = useState(4);

  console.log("activetab", activeTab);
  return (
    <>
      <div className="flex justify-center">
        <div className="w-85 mt-[120px]">
          <div className="pt-9 pb-12 bg-[#f7f7f7] lg:bg-white">
            <div className="lg:container flex lg:flex-row flex-col-reverse lg:px-4 ">
              <div className="pmt-left md:sticky md:top-28 h-max lg:flex-[2] p-4 lg:pr-4 lg:border-r border-[#d6d6d6] bg-white">
                <p className="my-3 font-bold">Choose your payment method</p>
                <div className="paymentListTabs border flex border-[#d6d6d6] w-full">
                  <PaymentType
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <div className="paymentTabDetails flex-[2] flex justify-center items-center px-4">
                    {activeTab != 4 ? (
                      <div
                        className="flex  items-center my-2 text-sm sm:text-base "
                      >
                        This Payment method in updation.
                      </div>
                    ) : (
                      <div className="my-3 text-sm sm:text-base">
            <p className="text-[#4e5664] font-medium mb-4">Cash handling charges of ₹ 20 are applicable</p>
            <button 
             className="cursor-pointer h-12 text-sm font-semibold w-full border-none outline-none flex bg-[#42a2a2] hover:bg-opacity-90 justify-center items-center rounded-md text-white">Pay </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ! right side ! */}
              <div className="pmt-right md:flex-1 px-4 lg:px-0 lg:pl-4 mb-4 lg:border-l bg-[#f7f7f7] lg:bg-white border-[#d6d6d6]">
                    <div className="border bg-white border-[#d6d6d6] px-4 rounded-md mb-4 hover:shadow-md transition-all">
                    </div>
                    <div className="border bg-white border-[#d6d6d6] px-4 rounded-md mb-4 hover:shadow-md transition-all">
                    </div>
                    <div className="summaryBorderBox md:sticky md:top-24  md:mb-8">
                        <div className="sectionHeading py-3 px-5 text-xs font-bold">
                            <h4 className="">PRICE SUMMARY</h4>
                        </div>
                        <div className="paymentBox bg-white font-medium">
                            <div className="pmtsWrap p-4">
                                <div className="flex justify-between pb-3 text-xs">
                                    <p>Total MRP (Incl. of taxes)</p>
                                    <p>₹1000</p>
                                </div>
                                <div className="flex justify-between pb-3 text-xs">
                                    <p>Shipping Charges</p>
                                    <p className="text-[#42a2a2]">FREE</p>
                                </div>
                                <div className="justify-between pb-3 text-xs hidden">
                                    <p>Discount on MRP</p>
                                    <p>- ₹1000</p>
                                </div>
                                <div className="flex border-t-2 justify-between py-3 text-sm font-semibold">
                                    <p>Final amount</p>
                                    <p>₹1000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PaymentPage;
