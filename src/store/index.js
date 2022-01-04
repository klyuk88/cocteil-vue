import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    openHeaderMenu: false,
    products: [],
    title: ''

  },
  getters: {
    salePraceProducts(state) {
      return state.products.filter(item => item['sale_price'].length > 0)
    }
  },
  actions: {
    async getProducts({commit}) {
      let res = await fetch(process.env.VUE_APP_API_URL + "/products", {
        headers: {
          'Authorization': 'Basic ' + process.env.VUE_APP_API_KEY,
        },
      });
      if (res.ok) {
        let resData = await res.json();
        commit('setProducts', resData)
      }
    }
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
  },

  modules: {}
})