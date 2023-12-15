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
import { useEffect , useState } from "react";

function App() {
  const location =  useLocation();
  const [footerDisplay,setFooterDisplay] = useState(true);
  const footerHidePage=['LoginPage','MailPage']
    useEffect(()=>{
      if(footerHidePage.includes(location.pathname.split('/')[1])){
        setFooterDisplay(false);
      }
    },[location])
  
  return (
    <>
    <HeaderComponent/>
     <NavbarMain/>
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
        <Route path="/ProductListPage" element={<ProductListPage/>}/>
        <Route path="/ProductDetailsPage" element={<ProductDetailsPage/>}/>
        <Route path="/CartPage" element={<CartPage/>}/>
      </Routes>
{
  footerDisplay &&
     <FooterComponent/>
}
     
    </>
  )
}

export default App;
