<template>
  <div class="container">
    <h2>List Page!</h2>
    <p>{{this.$store.state.organiserName}}, let's organise your names for your {{this.$store.state.listName}} list.</p>
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
import { Santa } from "../types/index";

@Component
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
    const updatedList = this.filterEmptyRecords(this.santas);
    const response = await this.$store.dispatch("sendSantas", updatedList);
    console.log(updatedList);
  }

  filterEmptyRecords(santas) {
    return santas.filter(santa => santa.name != "" || santa.email != "");
  }
}
</script>
