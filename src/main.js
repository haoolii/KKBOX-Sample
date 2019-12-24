import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTimesCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueResource);

Vue.config.productionTip = false;
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
