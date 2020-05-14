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

    let PS = [];
    countries.forEach(function(p) {
      if(p.CountryCode === 'IL') {
        PS = p;
      }
    });
    countries.forEach(function(p) {
      if(p.CountryCode === 'PS') {
        p.Country = 'Palestinian';
        p.FlagCode = 'PS';
        p.CountryCode = PS.CountryCode;
        p.NewConfirmed = p.NewConfirmed + PS.NewConfirmed;
        p.NewDeaths = p.NewDeaths + PS.NewDeaths;
        p.NewRecovered = p.NewRecovered + PS.NewRecovered;
        p.TotalDeaths = p.TotalDeaths + PS.TotalDeaths;
        p.TotalRecovered = p.TotalRecovered + PS.TotalRecovered;
        p.value = p.TotalConfirmed + PS.TotalConfirmed;
        delete p.TotalConfirmed;
        p.value = p.value < 1 ? p = null : p.value;
      } else {
        p.FlagCode = p.CountryCode;
        p.value = p.TotalConfirmed;
        delete p.TotalConfirmed;
        p.value = p.value < 1 ? p = null : p.value;
      }
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
