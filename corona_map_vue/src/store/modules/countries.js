export const namespaced = true;

export const state = {
  countries: [],
  countriesSorted: []
};

export const mutations = {
  SET_COUNTRIES(state, countries) {
    state.countries = countries;
  },
  SET_COUNTRIES_SORTED(state, countries) {
    state.countriesSorted = countries
  }
};

export const actions = {
  fetchCountries({ commit }, countries) {
    countries.forEach(function(p) {
      p.value = p.TotalConfirmed;
      delete p.TotalConfirmed;
      p.value = p.value < 1 ? p = null : p.value;
    });
    commit("SET_COUNTRIES_SORTED", countries);
    countries.sort(function(a, b) {
      return b.value - a.value;
    });
    commit("SET_COUNTRIES", countries);
  }
};

export const getters = {
  getCountryByCode: (state) => (code) => {
    return state.countries.find(countries => countries.CountryCode === code)
  }
};
