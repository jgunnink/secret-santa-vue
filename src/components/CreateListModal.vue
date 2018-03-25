<template>
  <b-modal id="createListModal" title="Create a Secret Santa list!">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="listNameInputGroup"
                    label="Name of your list:"
                    label-for="listNameInput"
                    description="Give the list a name, for example: Office Secret Santa - 2018.">
        <b-form-input id="listNameInput"
                      type="text"
                      v-model="form.listName"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="organiserNameGroup"
                    label="Your Name:"
                    label-for="organiserName">
        <b-form-input id="organiserName"
                      type="text"
                      v-model="form.organiserName"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class CreateListModal extends Vue {}
</script>
