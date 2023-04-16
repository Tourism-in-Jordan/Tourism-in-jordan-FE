import "./App.css";
import AboutUs from "./AboutUs/AboutUs";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VisitList from "./VisitList";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
function App() {
  return (
    <>
      <Header />
<Routes>
  <Route path ='/'            element={<Home />}></Route>
  <Route path="/about"        element={<AboutUs />}></Route>
  <Route path="/VisitList"    element={<VisitList />}></Route>
      
      </Routes>

<Footer />


    </>
  );
}

export default App;
