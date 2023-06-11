/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function Footer() {
  
  return (
    <footer className="page-footer gradient">
      <Container fluid={true}>
        <Row className="item justify-content-center">
        </Row>
        <Row className="item social footer-socials justify-content-center">
          <a target="_blank" rel="noopener noreferrer" aria-label="Linkedin" href="https://www.linkedin.com/in/simonweizman"><i aria-hidden="true" className="fab fa-linkedin-in" /></a>
          <a target="_blank" rel="noopener noreferrer" aria-label="Facebook" href="https://www.facebook.com/simon.weizman.13"><i aria-hidden="true" className="fab fa-facebook-f" /></a>
          <a target="_blank" rel="noopener noreferrer" aria-label="Twitter" href="https://twitter.com/torrentofshame"><i aria-hidden="true" className="fab fa-twitter" /></a>
          <a target="_blank" rel="noopener noreferrer" aria-label="Instagram" href="https://www.instagram.com/mviwxg/"><i aria-hidden="true" className="fab fa-instagram" /></a>
          <a target="_blank" rel="noopener noreferrer" aria-label="GitLab" href="https://gitlab.com/torrentofshame"><i aria-hidden="true" className="fab fa-gitlab" /></a>
          <a target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="https://github.com/TorrentofShame"><i aria-hidden="true" className="fab fa-github" /></a>
          <a title="@torrent#0662" target="_blank" rel="noopener noreferrer" aria-label="Discord" href="https://discord.gg/MYvd3RB"><i aria-hidden="true" className="fab fa-discord" /></a>
        </Row>
        <Row className="item justify-content-center mt-3">
          {/*<a href="https://fsf.org" style={{position: "absolute", left: "1rem"}} target="_blank" rel="noopener noreferrer" title="Proud Member of FSF since Dec 21"><img src="https://static.fsf.org/nosvn/associate/crm/5739948.png" alt="FSF Member Since December 2021" /></a>*/}
          <p className="copyright">© 2021 - Simon Weizman - <a className="compsrchref" href="https://gitlab.com/torrentofshame/personal-site">Complete source code</a></p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
