import Vue from "vue";
import Vuex from "vuex";
import dateRange from "./dateRange";
import reservation from "./reservation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { dateRange, reservation },
});
