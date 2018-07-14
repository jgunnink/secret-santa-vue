<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./components/Navbar.vue";
import CreateListModal from "./components/CreateListModal.vue";
import ListEditPage from "./components/ListEditPage.vue";

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

</style>
