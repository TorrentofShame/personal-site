import React from "react";
import PropTypes from "prop-types";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import ProjectBadge from "_components/ProjectBadge";

const ProjectLink = ({ name, url }) => <Button size="sm" className="ml-3" variant="primary" href={url}>{name}</Button>;
ProjectLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const Project = ({ name, startDate, endDate, badges, wakatimestub, links, description }) => {

  let badgeObjs = badges.map((id,k) => <ProjectBadge key={k} id={id} />);

  let linkBtns = links.map((l,k) => <ProjectLink key={k} name={l.name} url={l.url} />);

  if (wakatimestub) {
    const link = `https://wakatime.com/badge/gitlab/torrentofshame/${wakatimestub}`;
    badgeObjs.push(<a key="wakatime" href={link}><Image alt="Wakatime" src={link+".svg"} width="118" height="20" /></a>);
  }

  let period = startDate + " — " + (endDate ? endDate : "Current");

  return (
    <Row className="item">
      <Col md={6}>
        <h3>{name}</h3>
        {badgeObjs }
      </Col>
      <Col md={6}>
        <span className="period">{period}</span>
      </Col>
      <p style={{"width": "100%"}} className="ml-3">{description}</p>
      {linkBtns }
    </Row>
  );
};
Project.propTypes = {
  name: PropTypes.string.isRequired,
  wakatimestub: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  badges: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired
};

export default Project;
