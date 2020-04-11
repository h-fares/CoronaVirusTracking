export const namespaced = true;

export const state = {
  globalCases: []
};

export const mutations = {
  SET_GLOBAL_CASES(state, globalCases) {
    state.globalCases = globalCases;
  }
};

export const actions = {
  fetchGlobal({ commit }, global) {
    commit("SET_GLOBAL_CASES", global);
  }
};
