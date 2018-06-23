import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default ({ state }) => {
  return new Vuex.Store({
    state,
  });
};
