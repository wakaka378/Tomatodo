import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue'),
  },
]

const router = createRouter({ history: createWebHashHistory(import.meta.env.BASE_URL), routes })

export default router
