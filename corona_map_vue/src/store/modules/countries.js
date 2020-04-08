import CountriesServices from "../../services/CountriesServices";

export const namespaced = true

export const state = {
    countries:[],
    date: null,
    globalCases: []
}

export const mutations = {
    SET_COUNTRIES(state, countries) {
        state.countries = countries
    },
    SET_DATE(state, date) {
        state.date = date
    },
    SET_GLOBAL_CASES(state, globalCases) {
        state.globalCases = globalCases
    }
}

export const actions = {
    fetchCountries({ commit }) {
        CountriesServices.getCountries()
            .then(response => {
                response.data['Countries'].forEach(function (p) {
                    p.value = p.TotalConfirmed;
                    delete p.TotalConfirmed;
                    p.value = (p.value < 1 ? '0': p.value);
                });
                commit('SET_COUNTRIES', response.data['Countries'])
                commit('SET_DATE', response.data['Date'])
                commit('SET_GLOBAL_CASES', response.data['Global'])
            })
    }
}

export const getters = {
    getCountries: state => {
        return state.countries;
    }
}