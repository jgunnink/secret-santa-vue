<template>
  <div>
    <main role="main">
      <b-container>
        <b-row>
          <b-col>
            <h1>Secret Santa</h1>
            <p class="lead" id="welcomeMsg">{{ msg }}</p>
            <p>Organise your secret santa gift exchange in minutes!</p>
            <p>
              <b-btn v-b-modal.createListModal>Get started</b-btn>
            </p>
          </b-col>
          <b-col>
            <div class="text-center">
              <img src="@/assets/santa_with_sack_full.png" class="image-santa" />
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container style="margin-bottom: 60px">
        <b-row>
          <b-col>
            <img height="140px" width="140px" src="@/assets/checklist.png" />
            <h4>Easy organising</h4>
            <p>
              If you're organising a gift exchange for your family or workplace, let Secret Santa
              take care of the organising for you. Easily add lists of your contacts, send out
              notification emails, and shuffle your list of santas.
            </p>
          </b-col>
          <b-col>
            <img height="140px" width="140px" src="@/assets/open_letter.png" />
            <h4>How it works</h4>
            <p>
              Once you have your list of Santas, let computer take care of the rest! It will shuffle
              all your users around, no matter how big your list is, and randomly assign each person
              a Santa. Once everyone is assigned, each Santa recieves a notification email letting
              them know what the details are.
            </p>
          </b-col>
          <b-col>
            <img height="140px" width="140px" src="@/assets/gift.png" />
            <h4>It's free!</h4>
            <p>
              Secret Santa is free to use. There's no adverts, no spamming and we keep your details
              safe. Secret Santa is free to use for lists of up to 15 people, but if you need more,
              we offer bigger list sizes.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-container fluid style="textAlign: center;">
            <b-button variant="primary" v-b-modal.how-it-works>Watch video and learn more</b-button>
            <b-modal id="how-it-works" title="How it works" ok-only>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/BCUq2gmUDpw"
                frameborder="0"
                allow="autoplay;"
                allowfullscreen
              ></iframe>
            </b-modal>
          </b-container>
        </b-row>
      </b-container>
      <CreateListModal />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import AppFooter from "./AppFooter.vue";
import CreateListModal from "./CreateListModal.vue";

@Component({
  components: {
    CreateListModal
  }
})
export default class Home extends Vue {
  get msg(): string {
    return "Welcome to Secret Santa";
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 60px;
  width: 100%;
  line-height: 60px;
  background: #f5f5f5;
}

.image-santa {
  max-width: 100%;
  height: auto;
}
</style>
