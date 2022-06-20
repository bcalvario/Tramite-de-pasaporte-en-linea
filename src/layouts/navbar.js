import { Navbar, Nav, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Outlet, Link } from "react-router-dom";
import logo from "./logoheader.svg";
import React, { Component } from "react";

const NavBarExample = () => {
  return (
    <>
      <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Nav.Link as={Link} to="/">
              <img
                src={logo}
                width="300"
                height="50"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Container>
      </Navbar>
      <Navbar className="navBg2" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="https://www.gob.mx/tramites">
                Tramites
              </Nav.Link>
              <Nav.Link as={Link} to="https://www.gob.mx/gobierno">
                Gobierno
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default NavBarExample;
