import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import { createRouter } from './router';
// import { createStore } from './client/store';

import App from './App.vue';

export function createApp() {
  const router = createRouter();
  // const store = createStore();

  // sync(store, router);

  Vue.directive('scroll', {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          el.removeEventListener('scroll', f)
        }
      }
      el.addEventListener('scroll', f)
    }
  })

  const app = new Vue({
    router,
    // store,
    render: h => h(App),
  });

  return { app, router };
  // return { app, router, store };
}
