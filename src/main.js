import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { dateFilter } from "./filters/global-filters";
import "./assets/scss/global.scss";

Vue.config.productionTip = false;
Vue.filter("dateFilter", dateFilter);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
