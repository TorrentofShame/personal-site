import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Experience = ({ jobTitle, organization, startDate, endDate, description }) => {

  let period = startDate + " — " + (endDate ? endDate : "Current");
  let descList = description.map((d, k) => <li key={k}>{d}</li>);

  return(
    <Row className="item">
      <Col md={6}>
        <h3>{jobTitle}</h3>
        <h4 className="organization">{organization}</h4>
      </Col>
      <Col md={6}>
        <span className="period">{period}</span>
      </Col>
      <ul>
        {descList }
      </ul>
    </Row>
  );
};
Experience.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  description: PropTypes.array.isRequired
};

export default Experience;
