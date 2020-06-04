import React from "react";
import { shallow } from "enzyme";

import { Header } from "./header.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

describe.only("Header component", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      hidden: true,
      currentUser: {
        uid: "123",
      },
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render Header component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("if currentUser is present", () => {
    it("should render sign out link", () => {
      expect(wrapper.find("OptionLink").at(1).text()).toBe("SIGN OUT");
    });
  });

  describe("if currentUser is null", () => {
    it("should render sign in link", () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.find("OptionLink").at(1).text()).toBe("SIGN IN");
    });
  });

  describe("if hidden is true", () => {
    it("should not render CartDropdown", () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe("if currentUser is null", () => {
    it("should render CartDropdown", () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});
