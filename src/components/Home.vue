<template>
  <main role="main" class="container">
    <div class="banner">
      <b-row>
        <b-col cols="4">
          <h1>Secret Santa</h1>
          <p class="lead" id="welcomeMsg">{{ msg }}</p>
          <p>Organise your secret santa gift exchange in minutes!</p>
          <p>
            <a href="#" class="btn btn-lg btn-secondary">Get started</a>
          </p>
        </b-col>
        <b-col cols="8">
          <div class="text-center"><img src="@/assets/santa_with_sack_full.png"></div>
        </b-col>
      </b-row>
      <div class="text-center">
        <b-row>
          <b-col cols="4">
            <img height="140px" width="140px" src="@/assets/checklist.png">
            <h4>Easy organising</h4>
            <p>
              If you're organising a gift exchange for your family or workplace, let Secret Santa take care of the
              organising for you. Easily add lists of your contacts, send out notification emails, and shuffle your
              list of santas.
            </p>
          </b-col>
          <b-col cols="4">
            <img height="140px" width="140px" src="@/assets/open_letter.png">
            <h4>How it works</h4>
            <p>
              Once you have your list of Santas, let computer take care of the rest! It will shuffle all your users
              around, no matter how big your list is, and randomly assign each person a Santa. Once everyone is
              assigned, each Santa recieves a notification email letting them know what the details are.
            </p>
          </b-col>
          <b-col cols="4">
            <img height="140px" width="140px" src="@/assets/gift.png">
            <h4>It's free!</h4>
            <p>
              Secret Santa is free to use. There's no adverts, no spamming and we keep your details safe. The Secret
              Santa is free to use for lists of up to 15 people, but if you need more, we offer bigger list sizes.
            </p>
          </b-col>
        </b-row>
      </div>
    </div>
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
.banner {
  margin-top: 2em;
}
</style>
