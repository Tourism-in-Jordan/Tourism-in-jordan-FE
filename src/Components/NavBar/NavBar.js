import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import VisitList from "../VisitList/VisitList";
import Profile from '../Profile/Profile'
import LoginButton from '../LoginButtons/LoginButton'
import LogoutButton from '../LoginButtons/LogoutButton'


import './NavBar.css'
export default function NavBar() {
  return (
    <>
      <nav className="allnav">
        <div id="iconHeader">
          <img id="logoNavbar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_and_map_of_Jordan.svg/929px-Flag_and_map_of_Jordan.svg.png" />
          <Link className="pages" to="/">Home</Link>
          <Link className="pages" to="/VisitList">Favorite sites</Link>
          <Link className="pages" to="/about">About us</Link>
          <Link className="pages" to="/Gallery">Gallery</Link>
          <a className="anchour" href="#footer">Contact us</a>
          <NavDropdown title="select a city" id="basic-nav-dropdown" style={{ color: "rgb(177, 178, 179)" }}>
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
