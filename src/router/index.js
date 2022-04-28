import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/moviesinfo',
    name: 'moviesinfo',
    component: MoviesView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
