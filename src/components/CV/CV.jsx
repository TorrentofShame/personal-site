import React from "react";
import PropTypes from "prop-types";


function CV({ children }) {  
  
  return (
    <section id="cv" className="portfolio-block cv">
      {children }
    </section>
  );
}
CV.propTypes = {
  children: PropTypes.array.isRequired
};

export default CV;
