import Vue from "vue";
import Vuex from "vuex";
import { List, Santa } from "../types";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    listName: {} as List,
    organiserName: String,
    santas: [] as Santa[],
  },
});
