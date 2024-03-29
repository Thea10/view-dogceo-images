import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LazyLoad from "./custom-directives/lazy-load";

Vue.config.productionTip = false;
Vue.directive("img-lazy-load", LazyLoad);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
