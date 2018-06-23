import { expect } from "chai";
import { querySelectorForVM, createMountedVM } from "../../helpers/vm_utils";
import Home from "@/components/Home.vue";

describe("Home.vue", () => {
  let vm;

  beforeEach(() => {
    vm = createMountedVM(Home, {});
  });

  it("should display a welcome message on the home page", () => {
    expect(querySelectorForVM(vm, "#welcomeMsg").textContent.trim()).to.equal("Welcome to Secret Santa");
  });
});
