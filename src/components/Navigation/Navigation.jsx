import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import withMeta from "./../withMeta";
const cdn_sitelogo = "https://cdn.weizman.us/portfolio-assets/images/sitelogo.webp";

/* Pages */
import HomePage from "./../../pages/HomePage";
import NotFoundPage from "./../../pages/NotFoundPage";

const Navigation = ({ isWarm, home }) => {
  return (<>
    <Navbar className="navbar-dark gradient" expand="lg">
      <Navbar.Brand href="/"><Image alt="" src={cdn_sitelogo} fluid width="150" height="126" />Simon Weizman</Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/#experience">Experience</Link>
          <Link className="nav-link" to="/#projects">Projects</Link>
          <Link className="nav-link" to="/#contact">Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {/* Routes */}
    <Switch>
      <Route path="/" exact render={() => <HomePage isWarm={isWarm} meta={withMeta(home)} />} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </>);
};
Navigation.propTypes = {
  isWarm: PropTypes.bool.isRequired,
  home: PropTypes.object.isRequired
};

export default Navigation;
