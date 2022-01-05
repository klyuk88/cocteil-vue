import {
  createStore
} from 'vuex'

const URL = process.env.VUE_APP_API_URL
const CK = 'consumer_key=' + process.env.VUE_APP_CK
const CS = 'consumer_secret=' + process.env.VUE_APP_CS
const authParams = `${CK}&${CS}`


export default createStore({
  state: {
    openHeaderMenu: false,
    products: [],
    categories: [],

  },
  getters: {
    salePraceProducts(state) {
      return state.products.filter(item => item['sale_price'].length > 0)
    },
    parentCategories(state) {
      return state.categories.filter(item => item.parent === 0 && item.count > 0)
    },
  },
  actions: {
    async getProducts({commit}) {
      let res = await fetch(`${URL}/products?${authParams}`);
      if (res.ok) {
        let resData = await res.json();
        commit('setProducts', resData)
      }
    },
    async getCategories({commit}) {
      let res = await fetch(`${URL}/products/categories?${authParams}`);
      if (res.ok) {
        let resData = await res.json();
        commit('setCategories', resData)
      }
    },


  },
  mutations: {
    openMenu(state) {
      state.openHeaderMenu = true
    },
    closeMenu(state) {
      state.openHeaderMenu = false
    },
    setProducts(state, items) {
      state.products = items
    },
    setCategories(state, items) {
      state.categories = items
    },
  },

  modules: {}
})