import React from "react";
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
			<a aria-label="Linkedin" href="https://www.linkedin.com/in/simon-weizman"><i aria-hidden="true" className="fab fa-linkedin-in"></i></a>
			<a aria-label="Facebook" href="https://www.facebook.com/simon.weizman.13"><i aria-hidden="true" className="fab fa-facebook-f"></i></a>
			<a aria-label="Twitter" href="https://twitter.com/torrentofshame"><i aria-hidden="true" className="fab fa-twitter"></i></a>
			<a aria-label="Instagram" href="https://www.instagram.com/mviwxg/"><i aria-hidden="true" className="fab fa-instagram"></i></a>
			<a aria-label="GitLab" href="https://gitlab.com/torrentofshame"><i aria-hidden="true" className="fab fa-gitlab"></i></a>
			<a aria-label="GitHub" href="https://github.com/Torrentisthegreatest"><i aria-hidden="true" className="fab fa-github"></i></a>
			<a aria-label="Discord" href="https://discord.gg/MYvd3RB"><i aria-hidden="true" className="fab fa-discord"></i></a>
        </Row>
		<Row className="item justify-content-center mt-3">
			<p className="copyright">© 2020 - Simon Weizman</p>
		</Row>
      </Container>
    </footer>
  );
}

export default Footer
