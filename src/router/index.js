import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue'); // Lazy Loading
const missings = () => import('../views/missings.vue'); // Lazy Loading
const registerMissing = () => import('../views/registerMissing.vue'); // Lazy Loading

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/desaparecidos',
    name: 'missings',
    component: missings,
  },
  {
    path: '/registrar-desaparecido',
    name: 'registerMissing',
    component: registerMissing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;