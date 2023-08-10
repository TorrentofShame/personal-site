import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./Certification.scss";

const certImgSize = 50;

const Certification = ({ name, url, issuer, issueDate, expireDate, logo }) => {
  const now = new Date(Date.now());
  let expireMonth = expireDate ? new Date(Date.parse(expireDate)) : null;
  let endofExpireMonth = expireMonth ? new Date(expireMonth.getFullYear(), expireMonth.getMonth() + 1, 0) : null;
  let expireString = endofExpireMonth && endofExpireMonth.getTime() <= now.getTime()
      ? `Expired ${expireDate}`
      : `Expires ${expireDate}`;
  
  let period = `Issued ${issueDate} — ` + (expireDate ? expireString : "No Expiration Date");

  return (
    <Row className="item">
      <Col md={1}>
        <Image
          alt={name}
          src={require(`_assets/certs/${logo}.png`)}
          width={certImgSize}
          height={certImgSize}
        />
      </Col>
      <Col md={6}>
        <a href={url}>
          <h3>{name}</h3>
          <h4 className="organization" style={{backgroundColor: "#186329"}}>{issuer}</h4>
        </a>
      </Col>
      <Col bsPrefix="col-5">
        <span className="period" style={{position: "static"}}>{period}</span>
      </Col>
    </Row>
  );
};
Certification.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  issueDate: PropTypes.string.isRequired,
  expireDate: PropTypes.string,
  logo: PropTypes.string.isRequired
};

export default Certification;
