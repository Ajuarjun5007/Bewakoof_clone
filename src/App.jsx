import { Routes,Route } from "react-router-dom";
import NavbarMain from "./Components/NavbarMain/NavbarMain";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HomePage from "./Components/HomePage/HomePage";
import FooterComponent from "./Components/FooterComponent/FooterComponent";



function App() {

  return (
    <>
    <HeaderComponent/>
     <NavbarMain/>
     <HomePage/>
     <FooterComponent/>
    </>
  )
}

export default App;
