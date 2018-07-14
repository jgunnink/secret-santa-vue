import Vue from "vue";
import Vuex from "vuex";
import { IStoreState } from "../types/store";

// Mutations
import * as mutations from "./mutations/lists";

// Actions
import * as actions from "./actions/list";

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
  actions,
});
