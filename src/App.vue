<template>
  <div id="app">
    <Navbar class="text-center" />
    <router-view/>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppFooter from "@/components/AppFooter.vue";
import Navbar from "@/components/Navbar.vue";

export default class App extends Vue {}
</script>

<style scoped>

</style>
