<template>
  <b-modal id="createListModal" title="Create a Secret Santa list!" @ok="onSubmit">
    <b-form @submit="onSubmit">
      <b-form-group id="listNameInputGroup"
                    label="Name of your list:"
                    label-for="listNameInput"
                    description="Give the list a name, for example: Office Secret Santa - 2018.">
        <b-form-input id="listNameInput"
                      type="text"
                      v-model="listName"
                      required
                      :state="listName.trim().length > 1"
                      placeholder="List name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="organiserNameGroup"
                    label="Your Name:"
                    label-for="organiserName"
                    description="Enter your name so your participants know who sent them the message.">
        <b-form-input id="organiserNameInput"
                      type="text"
                      required
                      v-model="organiserName"
                      :state="organiserName.trim().length > 1"
                      placeholder="Your Name">
        </b-form-input>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class CreateListModal extends Vue {
  listName: string = "";
  organiserName: string = "";

  onSubmit(evt) {
    evt.preventDefault();
    if (!this.listName || !this.organiserName) {
      alert("Please fill out the fields before proceeding");
    } else {
      this.$store.commit("setInitialListDetails", {
        listName: this.listName,
        organiserName: this.organiserName,
      });
      this.$router.push("/list");
    }
  }
}
</script>
