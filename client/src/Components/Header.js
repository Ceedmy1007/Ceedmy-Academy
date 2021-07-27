import React from "react";
import { Navbar, NavDropdown, Form, Nav } from "react-bootstrap";
import logo from "../images/logo.jpeg";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="/">Ceedmy</Navbar.Brand> */}
      <img
        src={logo}
        style={{ height: "70px" }}
        alt="Second slide"
        className="mr-3"
      />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100vh" }}
            navbarScroll
          >
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <NavDropdown title="StudyMaterial" id="navbarScrollingDropdown">
              <NavDropdown.Item><Link to="/mpsccontent">NEET</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/upsccontent">IIT-JEE</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/clatcontent">UPSC</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/ncert">NCERT Books</Link></NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Scholarship" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Admission cum Scholarship Test</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Classroom Integrated Scholarship
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Test Series Scholarship
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ><Link to="/course">Buy a Course</Link></Nav.Link>
            <Nav.Link ><Link to="/succes">Success Stories</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About us</Link></Nav.Link>
          </Nav>
          <Form className="d-flex " action="/login">
            <Nav.Link className="btn btn-primary float-right" href="/login">
              Login
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;



