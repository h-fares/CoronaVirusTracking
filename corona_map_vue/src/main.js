import Vue from "vue";
import Highcharts from 'highcharts-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.use(Highcharts)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
