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
    </b-form>
    <b-btn variant="primary" v-on:click="onSubmit">Shuffle and send emails</b-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ListDetails from "./ListDetails.vue";
import { Santa } from "../types/index";

@Component({
  components: {
    ListDetails,
  },
})
export default class ListEditPage extends Vue {
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
    const filteredList = this.filterEmptyRecords(this.santas);
    this.$store.commit("saveSantas", filteredList);
    console.log("About to send to endpoint: ", this.$store.state.list);
    const response = await this.$store.dispatch("sendSantas", this.$store.state.list);
  }

  filterEmptyRecords(santas) {
    return santas.filter(santa => santa.name != "" || santa.email != "");
  }
}
</script>
