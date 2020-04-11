import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CountriesList from "../views/CountriesList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/countries",
    name: "Countries-list",
    component: CountriesList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.replace({ path: "/", redirect: "*" });
export default router;
