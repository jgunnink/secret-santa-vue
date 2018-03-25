import Vue from "vue";
import Vuex from "vuex";
import { List, Santa } from "../types";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    listName: {} as List,
    santas: [] as Santa[],
  },
});
