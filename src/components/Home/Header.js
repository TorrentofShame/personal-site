import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";


function Header() {
  
  return (
    <header className="bg-header text-white text-center portfolio-block block-intro">
		<Container>
			<Row>
				<Image alt="" className="avatar" src="https://cdn.weizman.us/portfolio-assets/images/profile.webp" roundedCircle fluid width="450" height="450" />
			</Row>
			<h3 className="text-center">Simon Weizman</h3>
			<Row className="about-me">
				<p className="text-center">Computer Science Student at University of Central Florida</p>
			</Row>
		</Container>
	</header>
  );
}

export default Header
