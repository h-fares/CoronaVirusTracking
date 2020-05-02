export const namespaced = true;

export const state = {
  countries: []
};

export const mutations = {
  SET_COUNTRIES(state, countries) {
    state.countries = countries;
  }
};

export const actions = {
  fetchCountries({ commit }, countries) {
    countries.forEach(function(p) {
      p.value = p.TotalConfirmed;
      delete p.TotalConfirmed;
      p.name = p.Country;

      p.value = p.value < 1 ? p = null : p.value;
    });
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
