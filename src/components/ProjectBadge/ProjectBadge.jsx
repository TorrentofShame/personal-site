import React from "react";
import PropTypes from "prop-types";

const projectBadges = {
  python: {"name": "Python", "bgcolor": "#0049DB"},
  lua: {"name": "Lua", "bgcolor": "#0049DB"},
  js: {"name": "JavaScript", "bgcolor": "#0049DB"},
  react: {"name": "React", "bgcolor": "#0049DB"},
  web: {"name": "Web Design", "bgcolor": "#535A5F"},
  cad: {"name": "CAD", "bgcolor": "#535A5F"},
  ml: {"name": "Machine Learning", "bgcolor": "#535A5F"},
  linux: {"name": "Linux", "bgcolor": "#535A5F"},
  virtualization: {"name": "Virtualization", "bgcolor": "#535A5F"}
};

function ProjectBadge({ id }) {
  let badge_info = projectBadges[id];
  if (typeof badge_info == "undefined") { console.log(`id:${id}\tinfo:${badge_info}`); }
  const badgestyle = {backgroundColor: badge_info.bgcolor};
  return (
    <h4
      key={id}
      className="organization"
      style={badgestyle}
    >
      {badge_info.name}
    </h4>
  );
}
ProjectBadge.propTypes = { id: PropTypes.string.isRequired };

export default ProjectBadge;
