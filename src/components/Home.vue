<template>
  <main role="main" class="inner cover">
    <h1 class="cover-heading">Secret Santa</h1>
    <p class="lead" id="welcomeMsg">{{ msg }}</p>
    <p class="lead">
      <a href="#" class="btn btn-lg btn-secondary">Get started</a>
    </p>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Home extends Vue {
  get msg(): string {
    return "Welcome to Secret Santa";
  }
}
</script>

<style scoped>

</style>
