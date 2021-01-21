import React from "react";
import PropTypes from "prop-types";

import Header from "./../../components/Header";
import CV from "./../../components/CV";
import Projects from "./../../components/Projects";

const certs = [
  {
    url: "https://www.youracclaim.com/badges/81aef082-ffbf-4086-9854-079e7d86012c",
    logo: "autodesk-inventor-certified-user",
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

function HomePage({ meta, isWarm }) {

  return (
    <main>
      {meta}
      <Header isWarm={isWarm} />
      <CV experiences={require("./experiences.json")} certs={certs} />
      <Projects projects={require("./projects.json")} />
    </main>
  );
}
HomePage.propTypes = {
  meta: PropTypes.object.isRequired,
  isWarm: PropTypes.bool.isRequired
};

export default HomePage;
