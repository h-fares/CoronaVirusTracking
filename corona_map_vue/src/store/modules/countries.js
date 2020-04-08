export const namespaced = true

export const state = {
    countries:[]
}

export const mutations = {
    SET_COUNTRIES(state, countries) {
        state.countries = countries
    },
}

export const actions = {
    fetchCountries({ commit }, countries ) {
        countries.forEach(function (p) {
            p.value = p.TotalConfirmed;
            delete p.TotalConfirmed;
            p.value = (p.value < 1 ? '0': p.value);
        });
        commit('SET_COUNTRIES', countries)
    }
}
