import { CiMobile2 } from "react-icons/ci";
import { Link } from "react-router-dom";
function HeaderComponent() {
  return (
    <>
      <div className="bg-headerbg w-full fixed z-10  flex  top-0 justify-center">
        <div className="flex w-85  md:max-xl:w-full justify-between font-medium font-cmnstyle py-2 leading-2 tracking-wider 
       ">
          <div className="flex header-left text-center text-textcolor text-basesize justify-between " >
          
            <Link to="OfferPage">
            <span className="mx-2 pb-[3px]">Offers</span>
            </Link>
            <Link to="FanbookPage">
            <span className="mr-2 pb-[5px]">Fanbook</span>
            </Link>

            <Link to="DownloadAppPage">
            <div className="flex ">
              <span className=" text-sm pb-1">
                 <CiMobile2 />
              </span>
            <span className="mx-1 pb-1">Download App</span>
            </div>
            </Link>
            <Link to="TribeMembershipPage">
            <span className="mx-2 pb-1">TriBe Membership</span>
            </Link>
          </div>
          <div className="header-right text-center text-textcolor text-basesize">
            <Link to="ContactusPage">
            <span className="mx-2">Contact Us</span>
            </Link>
            <Link to="TrackOrderPage">
            <span className="mx-2">Track Order</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderComponent;