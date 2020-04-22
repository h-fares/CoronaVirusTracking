import Vue from "vue";
import Vuex from "vuex";

import * as request from "@/store/modules/request.js";
import * as countries from "@/store/modules/countries.js";
import * as date from "@/store/modules/date.js";
import * as global from "@/store/modules/global.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    request,
    countries,
    date,
    global
  }
});
