import card from  "../../assets/Payment_images/debit_card.svg"
import netbanking from  "../../assets/Payment_images/netbanking_img.webp"
import rupee_icon from  "../../assets/Payment_images/rupee_img.webp"
import upi_icon from  "../../assets/Payment_images/upi_img.webp"
import wallet_icon from  "../../assets/Payment_images/wallet_img.webp"

function PaymentType({ activeTab, setActiveTab }){
    const paymentTypes = [
        { image: card, paymentMethod: 'Debit & Credit Card' },
        { image: netbanking, paymentMethod: 'Wallet' },
        { image: rupee_icon, paymentMethod: 'UPI' },
        { image: upi_icon, paymentMethod: 'Net Banking' },
        { image: wallet_icon, paymentMethod: 'Cash On Delivery' },
    ];
    return(
        <>
         <div className=" flex-1 bg-[#f7f7f7] min-w-[120px]">
            {
                paymentTypes?.map((item,index) => (
                    <div onClick={() => setActiveTab(index)} key={index} className={`cursor-pointer relative p-6 font-bold text-xs md:text-sm text-[#333] border-b last:border-b-0 flex items-center gap-3 transition-all ${activeTab === index ? 'bg-white' : ''}`}>
                        <img className="w-6 h-6 object-cover" src={item.image} alt="" />
                        <span className="">{item.paymentMethod}</span>
                        <div className={`absolute left-0 top-0 h-full w-1 bg-[#51cccc] transition-all ${activeTab === index ? 'opacity-100' : 'opacity-0'}`}></div>
                    </div>
                ))
            }
        </div>
        </>
    )
}
export default PaymentType;