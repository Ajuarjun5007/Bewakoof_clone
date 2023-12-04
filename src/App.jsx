import { Routes,Route } from "react-router-dom";
import NavbarMain from "./Components/NavbarMain/NavbarMain";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HomePage from "./Components/HomePage/HomePage";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import OfferPage from "./Components/HeaderComponent/OfferPage";
import FanbookPage from "./Components/HeaderComponent/FanbookPage";
import DownloadAppPage from "./Components/HeaderComponent/DownloadApp";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {

  const hideScrollNavBar=["OfferPage",];
  const location = useLocation();
  console.log(location.pathname.split("/"));
  useEffect(()=>{
    if(hideScrollNavBar.includes(location.pathname.split("/")[1])){
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
      </Routes>

     <FooterComponent/>
     
    </>
  )
}

export default App;
