// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'HomeView',
    path: '/',
    component: () => import('@/views/HomeView.vue')
  },
  {
    name: 'AboutView',
    path: '/about',
    component: () => import('@/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
