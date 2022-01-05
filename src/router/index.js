import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CatalogPage from '../views/CatalogPage.vue'
import ProductPage from '../views/ProductPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/catalog/:parentCategory/:category/',
    name: 'Category',
    component: CatalogPage,
  },
  {
    path: '/:produts?/:id',
    name: 'Product',
    component: ProductPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
