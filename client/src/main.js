import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VueApollo from "vue-apollo";
import apolloClient from "./plugins/apollo";

Vue.config.productionTip = false;

Vue.use(VueApollo);

Vue.config.performance = true;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export const bus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
