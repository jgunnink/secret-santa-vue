import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import { store } from "./store/store";
import router from "./router";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
const v = new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App },
});
