import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import { capitalize } from "_utils";

const CVSection = ({ name, children }) => {
  return(
    <Container
      id={name}
      className={`${name} group`}
    >
      <div className="heading">
        <h2 className="text-center">
          {capitalize(name)}
        </h2>
      </div>
      {children }
    </Container>
  );
};
CVSection.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default CVSection;
