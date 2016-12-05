import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import EventListenerPage from './pages/EventListenerPage';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/list', component: ListPage },
  { path: '/event', component : EventListenerPage }
];

export default new VueRouter({
  routes,
});
