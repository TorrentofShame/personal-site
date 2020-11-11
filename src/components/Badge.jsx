import Badge from 'react-bootstrap/Badge';

const projBadges = {
	"python": {"name": "Python", "variant": "primary"},
	"lua": {"name": "Lua", "variant": "primary"},
	"js": {"name": "JavaScript", "variant": "primary"},
	"react": {"name": "React", "variant": "primary"},
	"web": {"name": "Web Design", "variant": "secondary"},
	"cad": {"name": "CAD", "variant": "secondary"},
	"ml": {"name": "Machine Learning", "variant": "secondary"},
	"linux": {"name": "Linux", "variant": "secondary"},
	"virtualization": {"name": "Virtualization", "variant": "secondary"}
};

const projBadge = props => {
	let badge_info = projBadges[props.idn];
	return <Badge variant={badge_info.variant}>{badge_info.name}</Badge>
}

export { projBadge };