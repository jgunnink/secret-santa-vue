import { expect } from "chai";
import sinon from "sinon";
import { createMountedVM, nextTick } from "../../helpers/vm_utils";
import CreateListModal from "@/components/CreateListModal.vue";
import mockStoreCreator from "../../helpers/mock_store_creator";

describe("Home.vue", () => {
  let vm;
  let alert; // We are going to override default alert() function

  function generateAlert(x: boolean) {
    if (!x) {
      return;
    }
    alert(x);
  }

  beforeEach(() => {
    vm = createMountedVM(CreateListModal, { store: mockStoreCreator({ state: {} }) });
    alert = sinon.spy();
  });

  it("should display an alert when the list name and organiser's name has not been entered", async () => {
    const listName: string = "";
    const organiserName: string = "";
    generateAlert(!listName || !organiserName);
    vm.$el.querySelector(".btn-primary").click();

    await nextTick();
    expect(alert.calledOnce).to.be.true;
  });

  it("should display an alert when the list name has not been entered", async () => {
    const listName: string = "";
    const organiserName: string = "Mr Ed";
    generateAlert(!listName || !organiserName);
    vm.$el.querySelector(".btn-primary").click();

    await nextTick();
    expect(alert.calledOnce).to.be.true;
  });

  it("should display an alert when the organiser's name has not been entered", async () => {
    const listName: string = "MechR Office Secret Santa";
    const organiserName: string = "";
    generateAlert(!listName || !organiserName);
    vm.$el.querySelector(".btn-primary").click();

    await nextTick();
    expect(alert.calledOnce).to.be.true;
  });

  it("should not display an alert when the list name or organiser's name has been entered", async () => {
    const listName: string = "Family Secret Santa";
    const organiserName: string = "JK Gunnink";
    generateAlert(!listName || !organiserName);
    vm.$el.querySelector(".btn-primary").click();

    await nextTick();
    expect(alert.callCount).to.equal(0);
  });

  describe("Saving the values of the starting modal to state", () => {
    it("should save the entered values of the form into state", async () => {
      vm.listName = "Family Secret Santa, 2018";
      vm.organiserName = "JK Gunnink";
      vm.$el.querySelector(".btn-primary").click();

      await nextTick();
      expect(vm.$store.state.listName).to.equal("Family Secret Santa, 2018");
      expect(vm.$store.state.organiserName).to.equal("JK Gunnink");
    });
  });
});
