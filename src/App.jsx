import { Routes,Route, useLocation } from "react-router-dom";
import NavbarMain from "./Components/NavbarMain/NavbarMain";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HomePage from "./Components/HomePage/HomePage";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import OfferPage from "./Components/HeaderComponent/OfferPage"
import FanbookPage from "./Components/HeaderComponent/FanbookPage";
import DownloadAppPage from "./Components/HeaderComponent/DownloadAppPage";
import TribeMembershipPage from "./Components/HeaderComponent/TribeMembershipPage";
import ContactusPage from "./Components/HeaderComponent/ContactusPage";
import TrackOrderPage from "./Components/HeaderComponent/TrackOrderPage";
import LoginPage from "./Components/UserAuthentication/LoginPage"
import MailPage from "./Components/UserAuthentication/MailPage"
import WishlistPage from "./Components/WishListComponent/WishlistPage";
import ProductListPage from "./Components/ProductComponent/ProductLIstPage";
import ProductDetailsPage from "./Components/ProductComponent/ProductDetailsPage";
import CartPage from  "./Components/CartComponent/CartPage";
import { useEffect,useState} from "react";
import SignupPage from "./Components/UserAuthentication/SignupPage";
import WalletPage from "./Components/NavbarMain/WalletPage";
import AccountPage from "./Components/NavbarMain/AccountPage"
import AddressPage from "./Components/NavbarMain/AddressPage"
import ProfilePage from "./Components/NavbarMain/ProfilePage"
import PaymentPage from "./Components/PaymentComponent/PaymentPage";
import ReviewEditPage from "./Components/ProductComponent/ReviewComponent/ReviewEditPage"
import ReviewPage from "./Components/ProductComponent/ReviewComponent/ReviewPage";
import MobileNavBar from "./Components/MobileComponent/MobileNavBar";
import {useScreenSize} from "./Components/MobileComponent/useScreenSize"
function App() {
  const location =  useLocation();
  const [footerDisplay,setFooterDisplay] = useState(true);
  const footerHidePage=['LoginPage','MailPage','CartPage','SignupPage','ReviewEditPage','PaymentPage']
    useEffect(()=>{
      if(footerHidePage.includes(location.pathname.split('/')[1])){
        setFooterDisplay(false);
      }
    },[location])

  const screenSize = useScreenSize();
    let isMobile = screenSize < 1000;
  
  return (
    <>
    {
      !isMobile &&
    <HeaderComponent/>
    }
     {
      !isMobile &&
     <NavbarMain/>
    }
     {
      isMobile &&
      <MobileNavBar/>
     }
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/OfferPage" element={<OfferPage/>}/>
          <Route path="/FanbookPage" element={<FanbookPage/>}/>
          <Route path="/DownloadAppPage" element={<DownloadAppPage/>}/>
          <Route path="/TribeMembershipPage" element={<TribeMembershipPage/>}/>
          <Route path="/ContactusPage" element={<ContactusPage/>}/>
          <Route path="/TrackOrderPage" element={<TrackOrderPage/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/MailPage" element={<MailPage/>}/>
          <Route path="/WishlistPage" element={<WishlistPage/>}/>
          <Route path="/ProductListPage/:category" element={<ProductListPage/>}/>
          <Route path="/ProductDetailsPage/:id" element={<ProductDetailsPage/>}/>
          <Route path="/CartPage" element={<CartPage/>}/>
          <Route path="/SignupPage" element={<SignupPage/>}/>
          <Route path="/WalletPage" element={<WalletPage/>}/>
          <Route path="/AccountPage" element={<AccountPage/>}/>
          <Route path="/AddressPage" element={<AddressPage/>}/>
          <Route path="/ProfilePage" element={<ProfilePage/>}/>
          <Route path="/PaymentPage" element={<PaymentPage/>}/>
          <Route path="/ReviewEditPage/:id" element={<ReviewEditPage/>}/>
          <Route path="/ReviewPage/:id" element={<ReviewPage/>}/>

        </Routes>
{/* {
  footerDisplay &&
     <FooterComponent/>
} */}
     
    </>
  )
}

export default App;
