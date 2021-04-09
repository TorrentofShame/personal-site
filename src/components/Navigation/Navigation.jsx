import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import SiteLogo from "_assets/sitelogo.webp";

import "./Navigation.scss";

const Navigation = () => {
  return (<>
    <Navbar className="navbar-dark gradient" expand="lg">

      <div className="skip-link">
        Skip to <HashLink to="/#main">Content</HashLink> or <HashLink to="/#footer">Footer</HashLink>
      </div>

      <Navbar.Brand href="/"><Image alt="" src={SiteLogo} fluid width="150" height="126" />Simon Weizman</Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link
            className="nav-link"
            to="/"
          >Home
          </Link>
          <HashLink
            className="nav-link"
            to="/#experience"
          >Experience
          </HashLink>
          <HashLink
            className="nav-link"
            to="/#projects"
          >Projects
          </HashLink>
          {/*
          <Link
            className="nav-link"
            to="/#contact"
          >Contact
          </Link>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>);
};

export default Navigation;
