import Vue from "vue";
import Vuex from "vuex";

import CountriesServices from "../services/CountriesServices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries:[],
    date: ''
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countries = countries
    },
    SET_DATE(state, date) {
      state.date = date
    }
  },
  actions: {
    fetchCountries({ commit }) {
      CountriesServices.getCountries()
          .then(response => {
            response.data['Countries'].forEach(function (p) {
              p.value = p.TotalConfirmed;
              delete p.TotalConfirmed;
              p.value = (p.value < 1 ? '0': p.value);
              if (p.Country === 'US') {
                p.Country = 'United States of America';
              }
            });
            commit('SET_COUNTRIES', response.data['Countries'])
            commit('SET_DATE', response.data['Date'])
          })
    }
  },
  modules: {},
  getters: {
    getCountries: state => {
      return state.countries;
    }
  }
});
