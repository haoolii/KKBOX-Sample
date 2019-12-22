import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SearchResult from '../components/SearchResult.vue';
import YTPlayer from '../components/YTPlayer.vue';
Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/SearchResult', name: 'SearchResult', component: SearchResult },
  { path: '/YTPlayer', name: 'YTPlayer', component: YTPlayer }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
