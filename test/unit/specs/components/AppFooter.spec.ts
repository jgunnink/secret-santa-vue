import { expect } from "chai";
import { querySelectorForVM, createMountedVM, nextTick } from "../../helpers/vm_utils";

import AppFooter from "@/components/AppFooter.vue";
describe("AppFooter.vue", () => {
  let vm;

  beforeEach(() => {
    vm = createMountedVM(AppFooter, {});
  });

  it("should display a footer message at the bottom of the page", () => {
    expect(querySelectorForVM(vm, "#footerMsg").textContent.trim()).to.equal(
      "Made for fun in Perth, Western Australia by JK Gunnink.",
    );
  });

  it("should have a link to JK's twitter page", () => {
    expect(querySelectorForVM(vm, "#footerLink").textContent.trim()).to.equal("JK Gunnink");
    // TODO
    // expect(querySelectorForVM(vm, "#footerLink")).to.include("http://twitter.com/jgunnink/");
  });
});
