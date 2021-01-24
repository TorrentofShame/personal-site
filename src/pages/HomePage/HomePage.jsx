import React from "react";
import PropTypes from "prop-types";

import Header from "./../../components/Header";
import CV from "./../../components/CV";
import CVSection from "./../../components/CVSection";
import Experience from "./../../components/Experience";
import Education from "./../../components/Education";
import Certification from "./../../components/Certification";
import Project from "./../../components/Project";

import Experiences from "./experiences.json";
import Projects from "./projects.json";

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

function HomePage({ isWarm }) {

  let experiences = Experiences.map((d,k) => <Experience key={k} {...d} />);
  let certifications = certs.map((d,k) => <Certification key={k} {...d} />);
  let projects = Projects.map((d,k) => <Project key={k} {...d} />);

  return (
    <main>
      <Header isWarm={isWarm} />
      <CV>
        <CVSection name="experience">
          {experiences }
        </CVSection>
        <CVSection name="education">
          <Education
            degree="Computer Science"
            institution="University of Central Florida"
            startDate="Jun 2020"
            endDate="May 2024"
            desc="Currently enrolled as a Computer Science major."
          />
        </CVSection>
        <CVSection name="certifications">
          {certifications }
        </CVSection>
        <CVSection name="projects">
          {projects }
        </CVSection>
      </CV>
    </main>
  );
}
HomePage.propTypes = {
  isWarm: PropTypes.bool.isRequired
};

export default HomePage;
