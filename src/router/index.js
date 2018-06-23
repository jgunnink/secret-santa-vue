import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import AppFooter from "@/components/AppFooter";
import Navbar from "@/components/Navbar";
import CreateListModal from "@/components/CreateListModal";

Vue.component("AppFooter", AppFooter);
Vue.component("Navbar", Navbar);
Vue.component("CreateListModal", CreateListModal);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Secret Santa",
      component: Home,
    },
  ],
});
