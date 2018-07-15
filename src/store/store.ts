import Vue from "vue";
import Vuex from "vuex";
import { IStoreState } from "../types/store";
import { List } from "../types/index";

// Mutations
import * as mutations from "./mutations/lists";

// Actions
import * as actions from "./actions/list";

// Getters
import * as getters from "./getters/lists";

Vue.use(Vuex);

let state: IStoreState;

state = {
  listName: "",
  organiserName: "",
  list: {} as List,
};

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
