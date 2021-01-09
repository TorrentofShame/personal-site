import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
//import CardDeck from "react-bootstrap/CardDeck";
//import Card from "react-bootstrap/Card";


function build_certs(data, key) {
  let period = `Issued ${data.issueDate} — ` + (data.expireDate ? `Expires ${data.expireDate}` : "No Expiration Date");
  return (
    <Row key={key} className="item">
      <Col md={1}>
        <Image
          src={`/assets/certifications/${data.logo}.png`}
          style={{
            height: "50px",
            width: "50px"
          }}
        />
      </Col>
      <Col md={6}>
        <a href={data.url}>
          <h3>{data.name}</h3>
          <h4 className="organization" style={{backgroundColor: "#186329"}}>{data.issuer}</h4>
        </a>
      </Col>
      <Col bsPrefix="col-5">
        <span className="period" style={{position: "static"}}>{period}</span>
      </Col>
    </Row>
  )
}

function exp_builder(data, key) {
	return(
		<Row key={key} className="item">
				<Col md={6}>
					<h3>{data.title}</h3>
					<h4 className="organization">{data.org}</h4>
				</Col>
				<Col md={6}>
					<span className="period">{data.period}</span>
				</Col>
				<ul>
					{data.desclist.map((d, k) => <li key={k}>{d}</li>) }
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
					<h4 className="organization" style={{backgroundColor: "#186329"}}>University of Central Florida</h4>
				</Col>
				<Col bsPrefix="col-6">
					<span className="period" style={{position: "static"}}>06/2020 — Current</span>
					<br />
					<small>Currently enrolled as a Computer Science major.</small>
				</Col>
			</Row>
		</Container>
		<Container id="certifications" className="certification group">
			<div className="heading"><h2 className="text-center">Certifications</h2></div>
			{certlist }
		</Container>
	</section>
  );
}

export default CV
