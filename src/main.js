import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
