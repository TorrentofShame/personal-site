import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

function build_certs(data) {
	return (
		<Card>
			<Card.Body>
				{data.body}
				{data.isacclaim &&
					<script type="text/javascript" async src="https://cdn.youracclaim.com/assets/utilities/embed.js" />
				}
			</Card.Body>
		</Card>
	)
}

function exp_builder(data) {
	return(
		<Row className="item">
				<Col md={6}>
					<h3>{data.title}</h3>
					<h4 className="organization">{data.org}</h4>
				</Col>
				<Col md={6}>
					<span className="period">{data.period}</span>
				</Col>
				<ul>
					{data.desclist.map(d => <li>{d}</li>) }
				</ul>
			</Row>
	)
}

function CV(props) {  
  
  const certlist = props.certs.map(build_certs);
  
  const explist = props.experiences.map(exp_builder);
  
  return (
    <section id="cv" className="portfolio-block cv">
		<Container id="experience" className="experience group">
			<div className="heading"><h2 className="text-center">Experience</h2></div>
			{explist }
		</Container>
		<Container id="education" className="education group">
			<div className="heading"><h2 className="text-center">Education</h2></div>
			<Row className="item">
				<Col md={6}>
					<h3>Computer Science</h3>
					<h4 className="organization">University of Central Florida</h4>
				</Col>
				<Col bsPrefix="col-6">
					<span className="period" style={{position: "static"}}>06/2020 - Current</span>
					<small>Currently enrolled as a Computer Science major.</small>
				</Col>
			</Row>
		</Container>
		<Container id="certifications" className="group">
			<div className="heading"><h2 className="text-center">Certifications</h2></div>
			<CardDeck className="certdeck">
			  {certlist }
			</CardDeck>
		</Container>
	</section>
  );
}

export default CV
