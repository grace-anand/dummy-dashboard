import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Other from '../pages/Other.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/:slug', component: Other },
  ],
})

export default router
