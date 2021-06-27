import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";
const NavbarComponent = () => {
  return (
    <div>
    
      <Navbar expand="lg" className="w-75">
      <Link className="navbar-brand p-5" to="/"> <span style={{color:"red" , fontFamily: "monospace"}}>Shahriar Blog</span></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar">
            <Link to="/home" className="text-lg p-3 text-decoration-none text-black hover:text-black">
              Home
            </Link>
            <Link to="/dashboard" className="p-3 text-lg text-black text-decoration-none hover:text-black">
              Dashboard
            </Link>

            <Link to="/contact" className="p-3 text-lg text-black text-decoration-none hover:text-black">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
