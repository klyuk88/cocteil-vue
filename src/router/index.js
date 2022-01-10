import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CatalogPage from '../views/CatalogPage.vue'
import ProductPage from '../views/ProductPage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/shop/:categoryName',
    name: 'category',
    component: CatalogPage,
  },
  {
    path: '/shop/:categoryName/:subCategoryId',
    name: 'subCategory',
    component: CatalogPage,
  },
  {
    path: '/shop/products/:category?/:slug',
    name: 'product',
    component: ProductPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound,
  },

]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
