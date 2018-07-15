<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="margin-bottom: 15px">
      <b-form-group label="Gift value amount: ($)"
                    label-for="valueinput"
                    prepend="$"
                    description="Numbers only. Eg: 40">
        <b-form-input id="valueinput" v-model="value" type="number" required placeholder="Enter gift value amount." />
      </b-form-group>
        <b-form-group label="Day to exchange gifts">
        <b-form-input type="text" v-model="giftDay" required placeholder="Eg: 25th December" />
      </b-form-group>
      <b-button type="submit" variant="success">Save</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-alert v-if="this.savedNotice" fade show variant="success">List details saved!</b-alert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { List } from "../types/index";

@Component
export default class ListDetails extends Vue {
  value: string = "";
  giftDay: string = "";
  show: boolean = true;
  savedNotice: boolean = false;

  async onSubmit(evt) {
    evt.preventDefault();
    if (!this.value || !this.giftDay) {
      alert("Please fill out the fields before proceeding");
    } else {
      this.$store.commit("updateListDetails", {
        value: this.value,
        giftDay: this.giftDay,
      });
      this.savedNotice = true;
      await this.sleep(4000);
      this.savedNotice = false;
    }
  }

  onReset(evt) {
    evt.preventDefault();
    this.value = "";
    this.giftDay = "";
    /* Trick to reset/clear native browser form validation state */
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
</script>
