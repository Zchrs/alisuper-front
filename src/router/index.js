import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../layouts/App.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/Index.vue'),
      },

        {
          name: 'fruits',
          path: 'fruits',
          component: () => import('../views/products/fruits/Index.vue'),
        },
        {
          name: 'grains',
          path: 'grains',
          component: () => import('../views/products/grains/Index.vue'),
        },
        {
          name: 'vegetables',
          path: 'vegetables',
          component: () => import('../views/products/vegetables/Index.vue'),
        },
  
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
