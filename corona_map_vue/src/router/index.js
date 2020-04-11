import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CountriesList from "../views/CountriesList";
import CountryShow from "../views/CountryShow";

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
  },
  {
    path: "/country/:countryCode",
    name: "country-show",
    component: CountryShow,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.replace({ path: "/", redirect: "*" });
export default router;
