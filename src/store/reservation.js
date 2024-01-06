import bookings from "../data/bookings.json";

export default {
  state: {
    reservationInfo: structuredClone(bookings),
    /**
     * get Array of unique room's names
     */
    rooms: Array.from(new Set(bookings.map((el) => el.roomDetails.name))),
  },
  actions: {
    /**
     * Get array of all reservation for the specified date range
     * @param {Array} payload - Array of dates
     */
    getWeeklyReservations({ commit }, payload) {
      const info = structuredClone(bookings).filter((el) =>
        payload.some(
          (date) => date >= new Date(el.start) && date <= new Date(el.end)
        )
      );
      commit("setReservationInfo", info);
    },
  },
  mutations: {
    setReservationInfo(state, payload) {
      state.reservationInfo = payload;
    },
  },
  getters: {
    getReservationInfo(state) {
      return state.reservationInfo;
    },
    getRooms(state) {
      return state.rooms;
    },
  },
};
