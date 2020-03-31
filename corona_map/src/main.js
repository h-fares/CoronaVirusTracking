import Vue from "vue";
import HighChartsVue from "highcharts-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mapData from ''

Highcharts.maps['myMapName'] = mapData
Vue.use(HighChartsVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount("#app");
