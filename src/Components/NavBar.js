import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import VisitList from "./VisitList";
import Profile from './Profile'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'


import './nav.css'
export default function NavBar() {
  return (
    <>
    <nav className="allnav">
    <div id="iconHeader">
    <Link className="pages" to="/">HOME</Link>
        <Link className="pages" to="/about">About us</Link>
        <Link className="pages" to="/VisitList">VisitList</Link>

        <a className="anchour" href="#footer">connect us</a>
        {/* <a href="#13">The Royal Automobile Museum</a> */}

        <NavDropdown title="select a city" id="basic-nav-dropdown" style={{ color: "rgb(177, 178, 179)" }}>
          <NavDropdown.Item href="#1">Perta</NavDropdown.Item>
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
          <NavDropdown.Item href="#12"> Qasr al-Abd </NavDropdown.Item>
          <NavDropdown.Item href="#13"> The Royal Automobile Museum</NavDropdown.Item>
          <NavDropdown.Item href="#14">  Dibbeen Forest Reserve</NavDropdown.Item>
        </NavDropdown>
      
    </div>
      
        {/* <p className="logo">Tourisum in Jordan</p> */}
       
        <div id="cardProfile">
    
        <LoginButton />
        <LogoutButton />
        <Profile />
        </div>
    
        </nav>


        {/* <select>
          <option>select a city</option>
          <option>
            <a href="#1">Perta</a>
          </option>
          <option>
            <a href="#2">Om-Qais</a>
          </option>
          <option>
            <a href="#3">Dead sea</a>
          </option>
          <option>
            <a href="#4">Jarash Ruins</a>
          </option>
          <option>
            <a href="#5">Ajloun Castle</a>
          </option>
          <option>
            <a href="#6">Wadi Rum</a>
          </option>
          <option>
            <a href="#7">Aqaba Beach</a>
          </option>
          <option>
            <a href="#8">Roman Ruins</a>
          </option>
          <option>
            <a href="#9">Wadi Mujib</a>
          </option>
          <option>
            <a href="#10">Qasr Amra</a>
          </option>
           <a href="#11">South Amman<option>
          </option></a>
          <option>
            <a href="#12">Qasr al-Abd</a>
          </option>
          <option>
            <a href="#13">The Royal Automobile Museum</a>
          </option>
          <option>
            <a href="#14">Dibbeen Forest Reserve</a>
          </option>
        </select> */}
     

      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tourism in Jordan</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">About us</Nav.Link>
              <Nav.Link href="#footer">Connect us</Nav.Link>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>

                
              </NavDropdown>
            </Nav>
            <Nav>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  */}
    </>
  );
}
