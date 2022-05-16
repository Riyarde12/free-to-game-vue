import { createRouter, createWebHashHistory } from 'vue-router';
import details from '../views/details.vue';
import homePage from '../views/homePage.vue';

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    },
  ]
});

export default router;
