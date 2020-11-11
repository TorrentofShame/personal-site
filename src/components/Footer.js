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
			<a href="https://www.linkedin.com/in/simon-weizman"><i class="fab fa-linkedin-in"></i></a>
			<a href="https://www.facebook.com/simon.weizman.13"><i class="fab fa-facebook-f"></i></a>
			<a href="https://twitter.com/torrentofshame"><i class="fab fa-twitter"></i></a>
			<a href="https://www.instagram.com/mviwxg/"><i class="fab fa-instagram"></i></a>
			<a href="https://gitlab.com/torrentofshame"><i class="fab fa-gitlab"></i></a>
			<a href="https://github.com/Torrentisthegreatest"><i class="fab fa-github"></i></a>
			<a href="https://discord.gg/MYvd3RB"><i class="fab fa-discord"></i></a>
        </Row>
		<Row className="item justify-content-center mt-3">
			<p className="copyright">© 2020 - Simon Weizman</p>
		</Row>
      </Container>
    </footer>
  );
}

export default Footer
