import Vue from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import mapInit from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/custom/world.geo.json";
import darkTheme from "highcharts/themes/dark-blue";
import moment from "vue-moment";
import "nprogress/nprogress.css";
import CountryFlag from "vue-country-flag";
import JwPagination from "jw-vue-pagination";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";
darkTheme(Highcharts);
mapInit(Highcharts);

Highcharts.maps["myMapName"] = mapData;

Vue.use(HighchartsVue);
Vue.use(moment);
Vue.component("country-flag", CountryFlag);
Vue.component("jw-pagination", JwPagination);

Vue.component("v-select", vSelect);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
