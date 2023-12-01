import { Routes,Route } from "react-router-dom";
import NavbarMain from "./Components/NavbarMain/NavbarMain";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HomePage from "./Components/HomePage/HomePage";




function App() {

  return (
    <>
    <HeaderComponent/>
     <NavbarMain/>
     <HomePage/>
    </>
  )
}

export default App;
