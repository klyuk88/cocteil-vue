import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import CatalogPage from '../views/CatalogPage.vue'
import ProductPage from '../views/ProductPage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:categoryName',
    name: 'category',
    component: CatalogPage,
  },
  {
    path: '/:category?/:slug',
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
    return {
      top: 0
    }
  }
})

export default router


// let products = [{
//     id: 1,
//     attrs: [{
//         id: 1,
//         name: 'Бренд',
//         slug: 'brend',
//         options: [
//           'Prada',
//           'LV',
//           'Gucci'
//         ]
//       },
//       {
//         id: 2,
//         name: 'Размер',
//         slug: 'razmer',
//         options: [
//           '48',
//           '50',
//           '52'
//         ]
//       },

//     ]
//   },
//   {
//     id: 2,
//     attrs: [{
//         id: 1,
//         name: 'Бренд',
//         slug: 'brend',
//         options: [
//           'CK',
//         ]
//       },

//     ]
//   },
//   {
//     id: 3,
//     attrs: [{
//         id: 1,
//         name: 'Бренд',
//         slug: 'brend',
//         options: [
//           'CK',
//           'Gucci'
//         ]
//       },
//       {
//         id: 2,
//         name: 'Размер',
//         slug: 'razmer',
//         options: [
//           '46',
//           '48',
//         ]
//       },
//     ]
//   }
// ]

// function filterArr(array, id, names) {
//   return array.filter((elem) => {
//     for (let i = 0; i < elem.attrs.length; i++) {
//       const attr = elem.attrs[i];
//       if (attr.id === id) {
//         for (let y = 0; y < names.length; y++) {
//           const option = names[y];
//           if (attr.options.includes(option)) {
//             return true
//           }
//         }
//       }
//     }
//   })
// }
// params = [
//   {
//     id: 1,
//     options: ['Gucci', 'CK', 'LV']
//   },
//   {
//     id: 2,
//     options: ['46', '48']
//   },
// ]




