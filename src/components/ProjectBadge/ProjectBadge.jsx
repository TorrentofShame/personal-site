import React from "react";
import PropTypes from "prop-types";

import "./ProjectBadge.scss";

const projectBadges = {
  python: "Python",
  lua: "Lua",
  js: "JavaScript",
  react: "React",
  web: "Web Design",
  cad: "CAD",
  ml: "Machine Learning",
  linux: "Linux",
  virtualization: "Virtualization"
};

function ProjectBadge({ id }) {
  let badge_name = projectBadges[id];

  return (
    <h4
      key={id}
      className={`organization ${id}badge`}
    >
      {badge_name}
    </h4>
  );
}
ProjectBadge.propTypes = { id: PropTypes.string.isRequired };

export default ProjectBadge;
