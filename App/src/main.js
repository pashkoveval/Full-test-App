import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  BootstrapVue,
  IconsPlugin,
  render: h => h(App)
}).$mount("#app");