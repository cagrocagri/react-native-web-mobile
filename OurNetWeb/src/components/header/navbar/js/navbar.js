import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { BiMoney, BiNews } from "react-icons/bi";
import { MdSportsSoccer } from "react-icons/md";
import { TITLES } from "../../../../../shared/constants";
import "../css/navbar.css";

const MyNavBar = () => {
  const location = useLocation();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <Navbar
        expanded={expand}
        expand="xl"
        variant="dark"
        bg="dark"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand
            className={location.pathname === "/" ? "active" : ""}
            href="/"
          >
            {TITLES.webName}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          ></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item
                className={location.pathname === "/gündem" ? "active" : ""}
              >
                <Nav.Link
                  as={Link}
                  to="/gündem"
                  onClick={() => updateExpanded(false)}
                >
                  <BiNews style={{ marginBottom: "2px" }} /> Gündem
                </Nav.Link>
              </Nav.Item>

              <Nav.Item
                className={location.pathname === "/spor" ? "active" : ""}
              >
                <Nav.Link
                  as={Link}
                  to="/spor"
                  onClick={() => updateExpanded(false)}
                >
                  <MdSportsSoccer style={{ marginBottom: "2px" }} /> Spor
                </Nav.Link>
              </Nav.Item>

              <Nav.Item
                className={location.pathname === "/ekonomi" ? "active" : ""}
              >
                <Nav.Link
                  as={Link}
                  to="/ekonomi"
                  onClick={() => updateExpanded(false)}
                >
                  <BiMoney style={{ marginBottom: "2px" }} /> Ekonomi
                </Nav.Link>
              </Nav.Item>

              <Nav.Link href="#" disabled>
                @Çağrı GÜL
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
