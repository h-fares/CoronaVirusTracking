import Vue from "vue";
import HighchartsVue from 'highcharts-vue'
import Highcharts from "highcharts";
import mapInit from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/custom/world.geo.json";

import App from "./App.vue";
import router from "./router";
import store from "./store";

mapInit(Highcharts);

Highcharts.maps["myMapName"] = mapData;

Vue.use(HighchartsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
