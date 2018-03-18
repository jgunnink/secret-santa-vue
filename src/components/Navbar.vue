<template>
  <header class="masthead mb-auto">
    <div class="inner">
      <nav class="nav nav-masthead justify-content-center">
        <a class="nav-link active" href="#">Home</a>
        <a class="nav-link" href="#">Sign in</a>
        <a class="nav-link" href="#">Sign up</a>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Navbar extends Vue {}
</script>

<style scoped>

</style>
