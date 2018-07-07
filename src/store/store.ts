import Vue from "vue";
import Vuex from "vuex";
import { IStoreState } from "../types/store";
import { List, Santa } from "../types";

// Mutations
import * as mutations from "./mutations/lists";

Vue.use(Vuex);

let state: IStoreState;

state = {
  listName: "",
  organiserName: "",
  list: undefined,
};

export const store = new Vuex.Store({
  state,
  mutations,
});
