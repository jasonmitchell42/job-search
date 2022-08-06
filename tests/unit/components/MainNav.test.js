import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Mitchell Careers");
  });
  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll("[main-nav-list-item]");
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Students",
      "Jobs",
    ]);
  });

  describe("When user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.find("[data-test=login-button]");
      expect(loginButton.exists()).toBe(true);
    });
  });
  describe("When user logs in", () => {
    it("displays user profile image", async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test=profile-image]");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test=login-button]");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test=profile-image]");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
