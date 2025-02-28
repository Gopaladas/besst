import React from "react";
import { Navbar, Nav, NavDropdown, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const MainPage = () => {
  return (
    <div className="body">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        className="navbar-custom"
        sticky="top"
      >
        <Navbar.Brand href="#">
          <img
            src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1722104660/best_imfexa.png"
            style={{ width: "100px", height: "100px", borderRadius: "10px" }}
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ position: "relative", right: "20px", border: "none" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="subnav">
            <Nav.Link
              href="main.php"
              className="nav-link"
              style={{
                fontWeight: "bold",
                paddingTop: "15px",
                fontSize: "20px",
                color: "#666",
              }}
            >
              Home
            </Nav.Link>
            <NavDropdown
              title="Courses"
              id="navbarDropdownCourses"
              className="nav-link"
              style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
            >
              <NavDropdown.Item href="/cuet_ug">CUET(UG)</NavDropdown.Item>
              <NavDropdown.Item href="/cuet_pg">CUET(PG)</NavDropdown.Item>
              <NavDropdown.Item href="/cuet_ncert">
                NCERT CLASS XII
              </NavDropdown.Item>
              <NavDropdown.Item href="/cuet_seba">
                SEBA CLASS X
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Services"
              id="navbarDropdownServices"
              className="nav-link"
              style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
            >
              <NavDropdown.Item href="/Service_online">
                Online classes
              </NavDropdown.Item>
              <NavDropdown.Item href="/Service_mock">
                Mock Test series
              </NavDropdown.Item>
              <NavDropdown.Item href="/Service_download">
                Downloaded Study Materials
              </NavDropdown.Item>
              <NavDropdown.Item href="/Service_previous">
                Previous Year Question Bank
              </NavDropdown.Item>
              <NavDropdown.Item href="/Service_counselling">
                Counselling and Mock Registration for Admission in Central
                University
              </NavDropdown.Item>
              <NavDropdown.Item href="/Service_counselling">
                Complete Guidance for Admission Process of Delhi University
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              href="view.php"
              className="nav-link blogs mb-[22px]"
              style={{ fontWeight: "bold", fontSize: "20px", color: "#666" }}
              
            >
              Blogs
            </Nav.Link>

            <div className="" style={{ display: "flex" }}>
              <Nav.Link
                href="placed.php"
                className="nav-link gradient-text"
                style={{ fontSize: "20px" }}
              >
                CUET Online Subscription
              </Nav.Link>
              <Button
                className="small-yellow-button"
                style={{ textalign: "center" }}
              >
                New
              </Button>
            </div>

            
            <Form inline className="signbtn">
              <Button variant="outline-primary">
                <a
                  href="/Signin"
                  style={{
                    textDecoration: "none",
                    color: "rgb(150, 35, 150)",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Sign In/Sign Up
                </a>
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  );
};

export default MainPage;