<template>
  <footer class="footer">
    <div class="container text-center">
      <p id="footerMsg">
        <img src="@/assets/santa_face_40.png" />
        Made for fun by
        <a id="footerLink" href="http://twitter.com/jgunnink/">JK Gunnink</a>.
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class AppFooter extends Vue {}
</script>

<style scoped>
</style>

