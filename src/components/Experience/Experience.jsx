import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Experience = ({ jobTitle, org, startDate, endDate, desc }) => {

  let period = startDate + " — " + (endDate ? endDate : "Current");
  let desclist = desc.map((d, k) => <li key={k}>{d}</li>);

  return(
    <Row className="item">
      <Col md={6}>
        <h3>{jobTitle}</h3>
        <h4 className="organization">{org}</h4>
      </Col>
      <Col md={6}>
        <span className="period">{period}</span>
      </Col>
      <ul>
        {desclist }
      </ul>
    </Row>
  );
};
Experience.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  desc: PropTypes.array.isRequired
};

export default Experience;
