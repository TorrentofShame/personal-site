import React from "react";
import { shallow } from "enzyme";
import { checkProps } from "_utils";

import ProjectBadge from "./ProjectBadge";

describe("<ProjectBadge />", () => {

  describe("Checking PropTypes", () => {
    
    it("Should NOT throw a warning", () => {
      let propsError = checkProps(ProjectBadge, {id: "python"});
      expect(propsError).toBeUndefined();
    });

  });

  describe("Should Render", () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<ProjectBadge id="python" />));

    it("Renders as an <h4> element", () => {
      expect(wrapper.type()).toEqual("h4");
    });

    it("Renders with badge-specific class", () => {
      expect(wrapper.exists(".pythonbadge")).toBe(true);
    });

  });

  describe("Should NOT Render", () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<ProjectBadge id="invalid badge id" />));

    it("Content is not rendered", () => {
      expect(wrapper.isEmptyRender()).toBe(true);
    });

  });
});
