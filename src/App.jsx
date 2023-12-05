import { Routes,Route } from "react-router-dom";
import NavbarMain from "./Components/NavbarMain/NavbarMain";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HomePage from "./Components/HomePage/HomePage";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import OfferPage from "./Components/HeaderComponent/OfferPage";
import FanbookPage from "./Components/HeaderComponent/FanbookPage";
import DownloadAppPage from "./Components/HeaderComponent/DownloadAppPage";
import TribeMembershipPage from "./Components/HeaderComponent/TribeMembershipPage";
import { useEffect } from "react";
function App() {

  // useEffect(()=>{
  //      window.location.reload(false);
  //    },[])
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
      </Routes>

     <FooterComponent/>
     
    </>
  )
}

export default App;
