import React from "react";
import { shallow } from "enzyme";
import { checkProps } from "_utils";

import Row from "react-bootstrap/Row";
import ProjectBadge from "_components/ProjectBadge";
import Project from "./Project";

const ProjectMock = {
  name: "Fake Project Name",
  startDate: "Fake Date",
  badges: ["python"],
  links: [
    { name: "View", url: "https://something.com/mydmsareatzero" }
  ],
  desc: "Lorem ipsum dolor sit amet.",
};

describe("<Project />", () => {

  describe("Checking PropTypes", () => {

    it("Should NOT throw a warning", () => {
      let propsError = checkProps(Project, ProjectMock);
      expect(propsError).toBeUndefined();
    });

  });

  describe("Should Render", () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Project {...ProjectMock} />));

    it("Renders as a <div> element", () => {
      expect(wrapper.type()).toEqual(Row);
    });

    it("Renders with Badges", () => {
      expect(wrapper.contains(<ProjectBadge id="python" />)).toBe(true);
    });

  });

});
