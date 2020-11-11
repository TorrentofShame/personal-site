import React from "react";

const projBadges = {
	"python": {"name": "Python", "bgcolor": "#007bff"},
	"lua": {"name": "Lua", "bgcolor": "#007bff"},
	"js": {"name": "JavaScript", "bgcolor": "#007bff"},
	"react": {"name": "React", "bgcolor": "#007bff"},
	"web": {"name": "Web Design", "bgcolor": "#6c757d"},
	"cad": {"name": "CAD", "bgcolor": "#6c757d"},
	"ml": {"name": "Machine Learning", "bgcolor": "#6c757d"},
	"linux": {"name": "Linux", "bgcolor": "#6c757d"},
	"virtualization": {"name": "Virtualization", "bgcolor": "#6c757d"}
};

function projBadge(id) {
	const badge_info = projBadges[id];
	const badgestyle = {"background-color": badge_info.bgcolor};
	return <h4 className="organization" style={badgestyle}>{badge_info.name}</h4>
}

export default projBadge;