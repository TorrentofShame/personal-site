import React from "react";
import PropTypes from "prop-types";

import Header from "_components/Header";
import CV from "_components/CV";
import CVSection from "_components/CVSection";
const Experience = React.lazy(() => import("_components/Experience"));
const Education = React.lazy(() => import("_components/Education"));
const Certification = React.lazy(() => import("_components/Certification"));
const Project = React.lazy(() => import("_components/Project"));

import Resume from "_config/resume.json";
//import Projects from "./projects.json";

function HomePage({ isWarm }) {

  let exps = Resume.experiences.map((d,k) => <Experience key={k} {...d} />);
  let certs = Resume.certifications.map((d,k) => <Certification key={k} {...d} />);
  let projects = Resume.projects.map((d,k) => <Project key={k} {...d} />);

  return (
    <main>
      <Header isWarm={isWarm} />
      <CV>
        <CVSection name="experience">
          {exps }
        </CVSection>
        <CVSection name="education">
          <Education
            degree="Computer Science"
            institution="University of Central Florida"
            startDate="Jan 2020"
            endDate="Aug 2023"
            desc=""
          />
        </CVSection>
        <CVSection name="certifications">
          {certs }
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
