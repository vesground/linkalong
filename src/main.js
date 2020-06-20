import Vue from 'vue'
import VueRouter from 'vue-router';

// Components
import App from './App.vue'

// Other
import routes from './routes';

Vue.config.productionTip = false
Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
    routes,
    // linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
