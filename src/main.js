import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import VueResource from 'vue-resource';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
// const A = { template: '<div>A</div>' }
// const B = { template: '<div>B</div>' }
// const C = { template: '<div>C</div>' }

const router = new VueRouter({
  routes:[
    { path: '/a', component: goods },
    { path: '/b', component: ratings },
    { path: '/c', component: seller }
  ]
})
new Vue({
  el: "#app",
  template: "<App/>",
  components:{
    App,
    goods,
    ratings,
    seller
  },
  router
}).$mount("#app")
