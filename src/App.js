import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import Footer from "./components/Footer";
import Home from "./Home";
import withMeta from "./components/withMeta";

const projects = require("./projects.json");
const cdn_sitelogo = "https://cdn.weizman.us/portfolio-assets/images/sitelogo.webp";

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Simon Weizman",
      headerLinks: [
        { 
		  title: "Home - Simon Weizman",
		  path: "/"
		},
        { title: "About", path: "/about"},
        { title: "Contact", path: "/contact"},
      ],
      home: {
        title: "Simon Weizman",
        description: "Computer Science Student at University of Central Florida | Expected to Graduate May 2024 | FIRST Alumni | Completed Google Foobar"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Contact Me"
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="navbar-dark gradient" expand="lg">
            <Navbar.Brand href="/#"><Image alt="" src={cdn_sitelogo} fluid />Simon Weizman</Navbar.Brand>
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

          <Route path="/" exact render={() => <Home meta={withMeta(this.state.home)} projects={projects} />} />
		  
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
