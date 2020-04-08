import CountriesServices from "../../services/CountriesServices";

export const namespaced = true

export const state = {
    allCases:[]
}

export const mutations = {
    SET_ALL_CASES(state, allCases) {
        state.allCases = allCases
    }
}

export const actions = {
    fetchAllCases({ commit, dispatch }) {
        CountriesServices.getCountries()
            .then(response => {
                commit('SET_ALL_CASES', response.data)
                dispatch('countries/fetchCountries', response.data['Countries'], { root: true })
                dispatch('date/fetchDate', response.data['Date'], { root: true })
                dispatch('global/fetchGlobal', response.data['Global'], { root: true })
            })
    }
}
