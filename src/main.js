import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {routes} from "./routes"
import {store} from "./store.js"
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

Vue.use(VueRouter);

const router = new VueRouter({
  routes, // ES6

  mode : "history" // # kaldırıldı
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
