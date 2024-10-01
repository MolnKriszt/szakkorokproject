import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'szakkorok',
      component: () => import('../views/SzakkorokView.vue')
    },
  ]
})

export default router
