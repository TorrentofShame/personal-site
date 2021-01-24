import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Education.scss";

const Education = ({ degree, institution, startDate, endDate, desc }) => {
  
  let period = startDate + " — " + endDate;

  return(
    <Row className="educationitem item">
      <Col md={6}>
        <h3>{degree}</h3>
        <h4 className="organization">{institution}</h4>
      </Col>
      <Col bsPrefix="col-6">
        <span className="period">{period}</span>
        { desc &&<>
          <br />
          <small>{desc}</small>
        </>}
      </Col>
    </Row>
  );
};
Education.propTypes = {
  degree: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  desc: PropTypes.string
};

export default Education;
