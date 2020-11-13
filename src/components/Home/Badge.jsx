import React from "react";

const projBadges = {
	"python": {"name": "Python", "bgcolor": "#0049DB"},
	"lua": {"name": "Lua", "bgcolor": "#0049DB"},
	"js": {"name": "JavaScript", "bgcolor": "#0049DB"},
	"react": {"name": "React", "bgcolor": "#0049DB"},
	"web": {"name": "Web Design", "bgcolor": "#535A5F"},
	"cad": {"name": "CAD", "bgcolor": "#535A5F"},
	"ml": {"name": "Machine Learning", "bgcolor": "#535A5F"},
	"linux": {"name": "Linux", "bgcolor": "#535A5F"},
	"virtualization": {"name": "Virtualization", "bgcolor": "#535A5F"}
};

function projBadge(id) {
	const badge_info = projBadges[id];
	const badgestyle = {"background-color": badge_info.bgcolor};
	return <h4 className="organization" style={badgestyle}>{badge_info.name}</h4>
}

export default projBadge;
