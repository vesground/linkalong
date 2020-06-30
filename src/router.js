import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

import routes from 'routes.js';

Vue.use(Router);
Vue.use(VueMeta);

export function createRouter() {
  return new Router({
    routes,
    // linkActiveClass: 'active',
    mode: 'history',
  });
}
