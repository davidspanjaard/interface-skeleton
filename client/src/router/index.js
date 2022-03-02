import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: "",
  },
  {
    path: "*",
    name: "404NotFound",
    redirect: { name: "Resources" },
  },
];

const router = new VueRouter({
  // History mode requires a catch all routing
  // on the server side.
  // Ref: https://router.vuejs.org/guide/essentials/history-mode.html
  mode: "history",
  routes,
});

export default router;
