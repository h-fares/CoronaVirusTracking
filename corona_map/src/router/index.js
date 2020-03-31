import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Countries from "../components/Countries"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/countries",
    name: "Countries",
    component: Countries
  }
];

const router = new VueRouter({
  routes
});

export default router;
