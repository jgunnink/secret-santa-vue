<template>
  <div class="container">
    <h2>List Page!</h2>
    <p>{{this.$store.state.organiserName}}, let's organise your names for your {{this.$store.state.listName}} list.</p>
    <b-form @submit="onSubmit">
      <b-container fluid class="bv-example-row">
        <template v-for="santa in 15">
          <b-row v-bind:key="santa">
            <b-form-group id="santaGroup"
                          :label="'Name and email of participant ' + santa.toString()"
                          label-for="nameInput"
                          v-bind:key="santa">
              <b-col>
                <b-form-input id="nameInput"
                            type="text"
                            required
                            placeholder="Name">
                </b-form-input>
              </b-col>
              <b-col>
                <b-form-input id="emailInput"
                              type="email"
                              required
                              placeholder="Email">
                </b-form-input>
              </b-col>
            </b-form-group>
          </b-row>
        </template>
      </b-container>
    </b-form>
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
