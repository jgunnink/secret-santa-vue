<template>
  <div class="home">
    <br/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Secret Santa",
    };
  },
};
</script>
