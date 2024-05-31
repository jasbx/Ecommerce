"use client";
import React from "react";
import { FcLike } from "react-icons/fc";
import { CiShoppingCart } from "react-icons/ci";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg z-20 fixed rounded-none">
      <Container>
        <Navbar.Brand href="#home" className="ml-32">
          E-Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Help</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Oure Product
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">sigin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Navbar.Collapse className="justify-content-end">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search"
          className=" p-2 text-center rounded-2xl mr-5 bg-slate-600"
        />

        <Navbar.Text>
          <FcLike className="mr-5 text-5xl"></FcLike>
        </Navbar.Text>
        <Navbar.Text>
          <CiShoppingCart className="mr-5 text-5xl"></CiShoppingCart>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
