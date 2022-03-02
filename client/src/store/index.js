import Vue from "vue";
import Vuex from "vuex";
import {moduleResource1} from "./resources/resource1";
import {moduleGlobal} from "./global/global";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    resources: {
      namespaced: true,
      modules: {
        resource1: moduleResource1,
      },
    },
    global: moduleGlobal,
  },
});
