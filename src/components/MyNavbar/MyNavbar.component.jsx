import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logo.gif";
import "./MyNavbar.styles.css";


const MyNavbar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
