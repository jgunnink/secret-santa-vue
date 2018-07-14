<template>
  <div class="container">
    <h2>List Page!</h2>
    <p>{{this.$store.state.organiserName}}, let's organise your names for your {{this.$store.state.listName}} list.</p>
    <b-form inline @submit="onSubmit">
      <template v-for="santa in 15">
        <b-form-group id="santaGroup" v-bind:key="santa" style="margin-right: 20px">
          <p>Santa {{santa}}</p>
          <b-input id="nameInput" placeholder="John Smith" />
          <div style="padding-bottom: 5px" />
          <b-input id="emailInput" type="email" required placeholder="name@example.com" />
          <div style="padding-bottom: 5px" />
          <br>
        </b-form-group>
      </template>
    </b-form>
    <b-button type="submit" variant="primary">Submit</b-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ListEditPage extends Vue {
  onSubmit(evt) {
    evt.preventDefault();
  }
}
</script>

<style scoped>
</style>
