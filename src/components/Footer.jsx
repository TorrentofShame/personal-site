import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//import CoffeeBtn from "./CoffeeBtn.jsx";

function Footer() {
  
  return (
    <footer className="page-footer gradient">
      <Container fluid={true}>
        <Row className="item justify-content-center">
        </Row>
        <Row className="item social footer-socials justify-content-center">
          <Link aria-label="Linkedin" to="https://www.linkedin.com/in/simon-weizman"><i aria-hidden="true" className="fab fa-linkedin-in" /></Link>
          <Link aria-label="Facebook" to="https://www.facebook.com/simon.weizman.13"><i aria-hidden="true" className="fab fa-facebook-f" /></Link>
          <Link aria-label="Twitter" to="https://twitter.com/torrentofshame"><i aria-hidden="true" className="fab fa-twitter" /></Link>
          <Link aria-label="Instagram" to="https://www.instagram.com/mviwxg/"><i aria-hidden="true" className="fab fa-instagram" /></Link>
          <Link aria-label="GitLab" to="https://gitlab.com/torrentofshame"><i aria-hidden="true" className="fab fa-gitlab" /></Link>
          <Link aria-label="GitHub" to="https://github.com/Torrentisthegreatest"><i aria-hidden="true" className="fab fa-github" /></Link>
          <Link aria-label="Discord" to="https://discord.gg/MYvd3RB"><i aria-hidden="true" className="fab fa-discord" /></Link>
        </Row>
        <Row className="item justify-content-center mt-3">
          <p className="copyright">© 2020 - Simon Weizman</p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
