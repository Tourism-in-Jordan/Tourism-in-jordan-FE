
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
// import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import VisitList from "./Components/VisitList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Profile from "./Components/Profile";


function App() {
  return (
    <>
      <Header />


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/VisitList" element={<VisitList />}></Route>
      </Routes>

      <Footer />

    </>
  );
}

export default App;
