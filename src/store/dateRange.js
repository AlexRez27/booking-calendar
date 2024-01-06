import { getInitialDateRange } from "../common/helpers";

export default {
  state: {
    dateRange: getInitialDateRange(),
  },
  getters: {
    getDateRange(state) {
      return state.dateRange;
    },
  },
  mutations: {
    setDateRange(state, payload) {
      state.dateRange = payload;
    },
  },
  actions: {
    /**
     * add one week to date range
     * @param {Array} state
     */
    addWeek({ commit, state }) {
      const dateRange = state.dateRange.map(
        (el) => new Date(el.setDate(el.getDate() + 7))
      );
      commit("setDateRange", dateRange);
    },
    /**
     * minus one week to date range
     * @param {Array} state
     */
    minusWeek({ commit, state }) {
      const dateRange = state.dateRange.map(
        (el) => new Date(el.setDate(el.getDate() - 7))
      );
      commit("setDateRange", dateRange);
    },
    /**
     * go back to current week
     * @param {Array} state
     */
    gotoCurrentWeek({ commit }) {
      const dateRange = getInitialDateRange();
      commit("setDateRange", dateRange);
    },
  },
};
