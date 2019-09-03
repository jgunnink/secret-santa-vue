<template>
  <div class="container" v-if="!nameAndListExist()">
    <h2>Oops! You either refreshed the page or you got here by accident!</h2>
    <p>Go to the home page first, to set your name and list details</p>
  </div>
  <div v-else class="container" style="margin-bottom: 30px">
    <h2>List Page!</h2>
    <p>{{this.$store.state.organiserName}}, let's get started with some details:</p>
    <ListDetails />

    <p>You can put in up to 15 people, but should probably put in more than two.</p>
    <b-form inline @submit="onSubmit">
      <template v-for="santa in santas">
        <b-form-group v-bind:key="santas.indexOf(santa)" style="margin-right: 20px">
          <p>Santa {{santas.indexOf(santa) + 1}}</p>
          <b-input id="nameInput" required placeholder="John Smith" v-model="santa.name" />
          <div style="padding-bottom: 5px" />
          <b-input
            id="emailInput"
            type="email"
            required
            placeholder="name@example.com"
            v-model="santa.email"
          />
          <div style="margin-bottom: 20px" />
        </b-form-group>
      </template>
    </b-form>
    <b-btn
      variant="primary"
      :disabled="this.submitting || santas.length === 15"
      v-on:click="addBlankSanta(santas)"
      style="margin-top: 10px"
    >Add Santa</b-btn>
    <b-btn
      variant="secondary"
      :disabled="this.submitting || santas.length === 1"
      v-on:click="santas.pop()"
      style="margin-top: 10px; margin-left: 10px"
    >Remove Santa</b-btn>
    <b-alert
      style="margin-top: 10px;"
      :show="santas.length == 15"
    >You've made it to the maximum of 15 santas</b-alert>
    <hr />
    <h5>Here are the details you've recorded for your list:</h5>
    <ul>
      <li>Your name: {{this.$store.state.organiserName}}</li>
      <li>List name: {{this.$store.state.listName}}</li>
      <li>Gift value: ${{this.$store.state.list.value}}</li>
      <li>Gift day: {{this.$store.state.list.giftDay}}</li>
      <li>List size: {{filterEmptyRecords(santas).length}}</li>
    </ul>
    <b-alert :show="this.submitting">Now shuffling and sending... Please wait</b-alert>
    <b-alert v-if="!this.submitting" variant="warning" show>
      Please double check emails and names!
      <br />Incorrect emails means that people will miss out.
    </b-alert>
    <b-btn
      variant="primary"
      :disabled="this.submitting"
      v-on:click="onSubmit"
      style="margin-top: 10px"
    >Shuffle and send emails</b-btn>
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
    ListDetails
  }
})
export default class ListEditPage extends Vue {
  submitting: boolean = false;
  receiveCopy: boolean = false;
  santas: Santa[] = [{ name: "", email: "" }];

  addBlankSanta(santas): void {
    santas.push({ name: "", email: "" });
    return;
  }

  async onSubmit(evt) {
    evt.preventDefault();
    this.submitting = true;
    const filteredList = this.filterEmptyRecords(this.santas);
    this.$store.commit("saveSantas", filteredList);
    const response = await this.$store.dispatch("sendSantas", this.fetchList);
    console.log("RESPONSE FROM REQUEST IS:", response);
    if (response.status && response.status.code == 200) {
      this.submitting = false;
      showSuccessToast("List submitted, your Santas have been emailed!");
      this.$router.push("/");
    } else {
      this.submitting = false;
      showErrorToast("Something went wrong submitting your list.");
    }
  }

  filterEmptyRecords(santas) {
    return santas.filter(santa => santa.name != "" && santa.email != "");
  }

  get fetchList() {
    return this.$store.getters.list;
  }

  nameAndListExist(): boolean {
    return (
      this.$store.state.organiserName.length != 0 ||
      this.$store.state.listName.length != 0
    );
  }

  get valueAndDay(): boolean {
    return this.$store.state.list.value && this.$store.state.list.giftDay;
  }
}
</script>
