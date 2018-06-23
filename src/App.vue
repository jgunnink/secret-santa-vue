<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppFooter from "./components/AppFooter.vue";
import Navbar from "./components/Navbar.vue";
import CreateListModal from "./components/CreateListModal.vue";

export default class App extends Vue {}
</script>

<style scoped>
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>
