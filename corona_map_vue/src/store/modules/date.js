

export const namespaced = true

export const state = {
    date: null
}

export const mutations = {
    SET_DATE(state, date) {
        state.date = date
    }
}

export const actions = {
    fetchDate({ commit }, date ) {
        commit('SET_DATE', date)
    }
}
