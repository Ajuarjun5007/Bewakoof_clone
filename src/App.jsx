import { Routes,Route } from "react-router-dom";
import NavbarMain from "./Components/NavbarMain/NavbarMain";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HomePage from "./Components/HomePage/HomePage";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import OfferPage from "./Components/HeaderComponent/OfferPage";
function App() {

  return (
    <>
    <HeaderComponent/>
     <NavbarMain/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/OfferPage" element={<OfferPage/>}/>
      </Routes>

     <FooterComponent/>
     
    </>
  )
}

export default App;
