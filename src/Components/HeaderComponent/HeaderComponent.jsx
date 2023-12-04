import { CiMobile2 } from "react-icons/ci";
import { Link } from "react-router-dom";
function HeaderComponent() {
  return (
    <>
      <div className="bg-headerbg w-full fixed z-10  flex  top-0 justify-center">
        <div className="flex w-85 justify-between font-medium font-cmnstyle py-2 leading-2 tracking-wider lg:max-xl:w-full">
          <div className="flex header-left text-center text-textcolor text-basesize justify-between items-center">
          
            <Link to="OfferPage">
            <span className="mx-2 pb-1">Offers</span>
            </Link>

            <span className="mr-2 pb-1">Fanbook</span>
            <div className="flex ">
              <span className=" text-sm pb-1">
                 <CiMobile2 />
              </span>
            </div>
            <span className="mx-1 pb-1">Download App</span>
            <span className="mx-2 pb-1">TriBe Membership</span>
          </div>
          <div className="header-right text-center text-textcolor text-basesize">
            <span className="mx-2">Contact Us</span>
            <span className="mx-2">Track Order</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderComponent;
