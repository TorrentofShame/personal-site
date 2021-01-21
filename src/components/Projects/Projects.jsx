import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import ProjectBadge from "./../ProjectBadge";

function build_projects(project, key) {
	
  const badgelist = project.badges.map((id,k) => {
    return (<ProjectBadge key={k} id={id} />);
  });
  const linkbtns = project.links.map((l,k) => <Button key={k} size="sm" className="ml-3" variant="primary" href={l.url}>{l.name}</Button>);
	
  if (project.wakatimestub) {
    const link = `https://wakatime.com/badge/gitlab/torrentofshame/${project.wakatimestub}`;
    badgelist.push(<a key="wakatime" href={link}><Image alt="Wakatime" src={link+".svg"} width="118" height="20" /></a>);
  }
	
  return (
    <Row key={key} className="item">
      <Col md={6}>
        <h3>{project.name}</h3>
        {badgelist }
      </Col>
      <Col md={6}>
        <span className="period">{project.period}</span>
      </Col>
      <p style={{"width": "100%"}} className="ml-3">{project.description}</p>
      {linkbtns }
    </Row>
  );
}

function Projects({ projects }) {
  
  const projlist = projects.map(build_projects);
  
  return (
    <section id="projects" className="portfolio-block cv">
      <Container className="group">
        <div className="heading"><h2 className="text-center">Projects</h2></div>
        {projlist }
      </Container>
    </section>
  );
}
Projects.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;
