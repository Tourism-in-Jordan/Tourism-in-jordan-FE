import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import VisitList from "../VisitList/VisitList";
import Profile from '../Profile/Profile'
import LoginButton from '../LoginButtons/LoginButton'
import LogoutButton from '../LoginButtons/LogoutButton'
// import { useState } from "react";

import './NavBar.css'
export default function NavBar() {

  // const [showMore, setShowMore] = useState(true);
  // const handleMore = () => setShowMore(!showMore);

  return (
    <>
      <nav className="allnav">
        {/* <div id="more" onClick={handleMore}>
          <img title="Open Location on Map" src={require('./more.png')} alt="image" />
        </div> */}
        <div>
          <img id="logoNavbar" src={require('./jordan.png')} />
        </div>
       {/* <div id="iconHeader" className={ showMore ?'mobile':'desktop'}> */}
       <div id="iconHeader">
          <Link className="pages" to="/">Home</Link>
          <Link className="pages" to="/VisitList">Favorite sites</Link>
          <Link className="pages" to="/Gallery">Gallery</Link>
          <Link className="pages" to="/about">About us</Link>
          <a className="anchour" href="#footer">Contact us</a>
          <NavDropdown title="Select Site" id="basic-nav-dropdown" style={{ color: "rgb(177, 178, 179)" }}>
            <NavDropdown.Item href="#1">Petra</NavDropdown.Item>
            <NavDropdown.Item href="#2">Om-Qais</NavDropdown.Item>
            <NavDropdown.Item href="#3">Dead sea</NavDropdown.Item>
            <NavDropdown.Item href="#4">Jarash Ruins</NavDropdown.Item>
            <NavDropdown.Item href="#5">Ajloun Castle</NavDropdown.Item>
            <NavDropdown.Item href="#6">Wadi Rum</NavDropdown.Item>
            <NavDropdown.Item href="#7">Aqaba Beach</NavDropdown.Item>
            <NavDropdown.Item href="#8">Roman Ruins</NavDropdown.Item>
            <NavDropdown.Item href="#9">Wadi Mujib</NavDropdown.Item>
            <NavDropdown.Item href="#10">Qasr Amra</NavDropdown.Item>
            <NavDropdown.Item href="#11">South Amman</NavDropdown.Item>
            <NavDropdown.Item href="#12">Qasr al-Abd </NavDropdown.Item>
            <NavDropdown.Item href="#13">The Royal Automobile Museum</NavDropdown.Item>
            <NavDropdown.Item href="#14">Dibbeen Forest Reserve</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div id="cardProfile">
          <LoginButton />
          <LogoutButton />
          <Profile />
        </div>
      </nav>
    </>
  );
}
