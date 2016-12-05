import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/list', component: ListPage },
];

export default new VueRouter({
  routes,
});
