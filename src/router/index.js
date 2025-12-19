import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'SOLUCIONES JURÍDICAS SJ - Bufete de Abogados'
      }
    }
  ]
})

// Actualizar título de página
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'SOLUCIONES JURÍDICAS SJ'
  next()
})

export default router
