<template>
  <div class="container" style="margin-bottom: 30px">
    <h2>List Page!</h2>
    <p>{{this.$store.state.organiserName}}, let's get started with some details:</p>
    <ListDetails />
    <hr />
    <p>Ok, now lets organise your names for your {{this.$store.state.listName}} list.</p>
    <p>You can put in up to 15 people, but should probably put in more than two.</p>
    <b-form inline @submit="onSubmit">
      <template v-for="santa in santas">
        <b-form-group v-bind:key="santas.indexOf(santa)" style="margin-right: 20px">
          <p>Santa {{santas.indexOf(santa) + 1}}</p>
          <b-input id="nameInput" required placeholder="John Smith" v-model="santa.name" />
          <div style="padding-bottom: 5px" />
          <b-input id="emailInput" type="email" required placeholder="name@example.com" v-model="santa.email" />
          <div style="margin-bottom: 20px" />
        </b-form-group>
      </template>
      <b-form-checkbox id="copyOfList" v-model="this.receiveCopy" value="true" unchecked-value="false" aria-describedby="copyOfListHelp">
        I would like a copy of all the members and their email addresses.
      </b-form-checkbox>
      <b-form-text id="copyOfListHelp">
        Don't worry! You won't know who was assigned to who, this is just a confirmation email.
      </b-form-text>
    </b-form>
    <b-alert :show="this.submitting">Now shuffling and sending... Please wait</b-alert>
    <b-btn variant="primary" :disabled="this.submitting" v-on:click="onSubmit" style="margin-top: 10px">
      Shuffle and send emails
    </b-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ListDetails from "./ListDetails.vue";
import { Santa } from "../types/index";
import { showSuccessToast, showErrorToast } from "../helpers/toast_popup";

@Component({
  components: {
    ListDetails,
  },
})
export default class ListEditPage extends Vue {
  submitting: boolean = false;
  receiveCopy: boolean = false;

  // 15 Empty Santas as generated on page load
  santas: Santa[] = [
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
  ];

  async onSubmit(evt) {
    evt.preventDefault();
    this.submitting = true;
    const filteredList = this.filterEmptyRecords(this.santas);
    this.$store.commit("saveSantas", filteredList);
    const response = await this.$store.dispatch("sendSantas", this.fetchList);
    if (response.status.code == 200) {
      this.submitting = false;
      showSuccessToast("List submitted, your Santas will be emailed soon!");
      this.$router.push("/");
    } else {
      this.submitting = false;
      showErrorToast("Something went wrong submitting your list.");
    }
  }

  filterEmptyRecords(santas) {
    return santas.filter(santa => santa.name != "" || santa.email != "");
  }

  get fetchList() {
    return this.$store.getters.list;
  }
}
</script>
