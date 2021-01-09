import React from "react";

import Header from "./components/Home/Header";
import CV from "./components/Home/CV";
import Projects from "./components/Home/Projects";

/*
const certs = [
  {"body": <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="f24472e9-1f36-43d4-9ff1-fb160271e9a5" data-share-badge-host="https://www.youracclaim.com"></div>, "isacclaim": true},
  {"body": <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="b51faed3-73b3-4911-9b7f-0c32bb5e96f9" data-share-badge-host="https://www.youracclaim.com"></div>, "isacclaim": true},
  {"body": <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="81aef082-ffbf-4086-9854-079e7d86012c" data-share-badge-host="https://www.youracclaim.com"></div>, "isacclaim": true},
];
*/

const certs = [
  {
    url: "https://www.youracclaim.com/badges/81aef082-ffbf-4086-9854-079e7d86012c",
    logo: "autodesk-autocad-certified-user",
    name: "Autodesk Inventor Certified User",
    issuer: "Autodesk",
    issueDate: "May 2020",
    expireDate: ""
  },
  {
    url: "https://www.youracclaim.com/badges/b51faed3-73b3-4911-9b7f-0c32bb5e96f9",
    logo: "autodesk-autocad-certified-user",
    name: "Autodesk AutoCAD Certified User",
    issuer: "Autodesk",
    issueDate: "Feb 2020",
    expireDate: ""
  },
  {
    url: "https://www.youracclaim.com/badges/f24472e9-1f36-43d4-9ff1-fb160271e9a5",
    logo: "autocad-certified-professional",
    name: "AutoCAD Certified Professional",
    issuer: "Autodesk",
    issueDate: "Jun 2020",
    expireDate: "Jun 2023"
  },
];

function Home(props) {

  return (
	<main>
		{props.meta}
		<Header isWarm={props.isWarm} />
		<CV experiences={require("./experiences.json")} certs={certs} />
		<Projects projects={props.projects} />
	</main>
  );
}

export default Home
