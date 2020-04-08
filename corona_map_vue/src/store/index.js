import Vue from "vue";
import Vuex from "vuex";

import * as cases from '@/store/modules/countries.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cases
  }
});
