import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesInfo from '../components/MoviesInfo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/moviesinfo',
    name: 'moviesinfo',
    component: MoviesInfo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
