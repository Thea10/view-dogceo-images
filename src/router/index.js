import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dog-images",
    name: "Home",
    component: Home,
    meta: {
      title: "View Dog Images",
    },
  },
  {
    path: "/dog-detail/:source",
    name: "ImageDetail",
    component: () => import("@/views/ImageDetail.vue"),
    meta: {
      title: "Dog Detail",
    },
  },
  {
    path: "*",
    component: Home,
    meta: {
      title: "View Dog Images",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
