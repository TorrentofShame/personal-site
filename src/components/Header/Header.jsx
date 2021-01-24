import React from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import ProfileImg from "./../../assets/profile.webp";

function Header({ isWarm }) {
  
  return (
    <header
      className="bg-header text-white text-center portfolio-block block-intro"
      style={{
        backgroundImage: `url(https://cdn.weizman.us/portfolio-assets/images/banner-${isWarm ? "warm" : "cold"}.webp)`
      }}
    >
      <Container>
        <Row>
          <Image
            alt=""
            className="avatar"
            src={ProfileImg}
            roundedCircle fluid
            width="450" height="450"
          />
        </Row>
        <h3 className="text-center">Simon Weizman</h3>
        <Row className="about-me">
          <p className="text-center">Computer Science Student at University of Central Florida</p>
        </Row>
      </Container>
    </header>
  );
}
Header.propTypes = {
  isWarm: PropTypes.bool.isRequired
};

export default Header;
