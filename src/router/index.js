import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import QuestionView from "../views/QuestionView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/question",
    name: "QuestionView",
    component: QuestionView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
