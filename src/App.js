
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
// import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import VisitList from "./Components/VisitList/VisitList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoginButton from "./Components/LoginButtons/LoginButton";
import LogoutButton from "./Components/LoginButtons/LogoutButton";
import Profile from "./Components/Profile/Profile";
import Gallery from "./Components/Gallery/Gallery";


function App() {
  return (
    <>
      <Header />


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/VisitList" element={<VisitList />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
      </Routes>

      <Footer />

    </>
  );
}

export default App;
