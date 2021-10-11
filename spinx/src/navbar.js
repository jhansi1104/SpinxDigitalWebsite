import React from "react";
import './navbar.css'
import { Navbar, Nav ,NavDropdown,Container} from 'react-bootstrap';
import Home from "./work";


function Navigation(){
return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home" style={{"background-color": "yellow"}}>SpinX Digital</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
           <div className="row">
           </div>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="src/home.js"><Home/></Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#expertise">expertise</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#process">process</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#agency">agency</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#resources">resources</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Navigation;