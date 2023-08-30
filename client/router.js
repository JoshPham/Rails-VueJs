import { createRouter, createWebHistory } from 'vue-router';
import Home from './src/components/Home.vue';
import Posts from './src/components/Posts.vue';
import SessionManager from './src/components/SessionManager.vue';
import Register from './src/components/Register.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/posts', component: Posts },
  { path: '/sessionmanager', component: SessionManager },
  { path: '/register', component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;