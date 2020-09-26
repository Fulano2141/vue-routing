import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
// (Not applied here) Extract route with props => https://github.com/vuejs/vue-router/blob/dev/examples/route-props/app.js 
Vue.use(VueRouter);
// Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    console.log(from);
    return { x: 0, y: 0 };
  }
});

// Executed before every route 
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
