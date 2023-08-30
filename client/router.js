import { createRouter, createWebHistory } from 'vue-router';
import Home from './src/components/Home.vue';
import Posts from './src/components/Posts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/posts', component: Posts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;