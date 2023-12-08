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
import { useEffect , useState } from "react";
function App() {
  const location =  useLocation();
  console.log("loc",location.pathname.split('/')[1]);
  const [footerDisplay,setFooterDisplay] = useState(true);
    useEffect(()=>{
      if(location.pathname.split('/')[1]=='LoginPage'){
        console.log("loginpage is on..!!");
        setFooterDisplay(false);
      }
    },[])
  
  return (
    <>
    <HeaderComponent/>
     <NavbarMain/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/OfferPage" element={<OfferPage/>}/>
        <Route path="/FanbookPage" element={<FanbookPage/>}/>
        <Route path="/DownloadAppPage" element={<DownloadAppPage/>}/>
        <Route path="/TribeMembershipPage" element={<TribeMembershipPage/>}/>
        <Route path="/ContactusPage" element={<ContactusPage/>}/>
        <Route path="/TrackOrderPage" element={<TrackOrderPage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
      </Routes>
{
  footerDisplay &&
     <FooterComponent/>
}
     
    </>
  )
}

export default App;
