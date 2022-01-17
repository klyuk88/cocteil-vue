import {
  createStore, storeKey
} from 'vuex'

const URL = process.env.VUE_APP_API_URL
const CK = 'consumer_key=' + process.env.VUE_APP_CK
const CS = 'consumer_secret=' + process.env.VUE_APP_CS
const authParams = `${CK}&${CS}`


export default createStore({
  state: {
    openHeaderMenu: false,

    products: [],
    product: {},
    productsOfCategory: [],
    upSellProducts: [],

    categories: [],
    category: {},
    childCategories: [],

    oneProductReviews: [],

    attributes: [],


  },
  getters: {
    salePraceProducts(state) {
      return state.products.filter(item => item['sale_price'].length > 0)
    },
    parentCategories(state) {
      return state.categories.filter(item => item.parent === 0 && item.count > 0)
    },
    calcRaiting(state) {
      return Math.round(state.product.average_rating) === 6 ? 5 : Math.round(state.product.average_rating)
    },
    getChildCategories: (state) => (id) => {
      return state.categories.filter(category => category.parent === id && category.count > 0)
    }
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
    async getProductReviews({commit}, id) {
      let res = await fetch(`${URL}/products/reviews?product=${id}&${authParams}`);
      if (res.ok) {
        let resData = await res.json();
        commit('setOneProductReviews', resData)
      }
    },
    async getCategory({commit}, slug) {
      let res = await fetch(`${URL}/products/categories?slug=${slug}&${authParams}`);
      if (res.ok) {
        let resData = await res.json();
        commit('setCategory', resData)
      }
    },

    async getProductOfCategory({commit}, id) {
      let res = await fetch(`${URL}/products?category=${id}&${authParams}`);
      if (res.ok) {
        let resData = await res.json();
        commit('setProductOfCategory', resData)
      }
    },
    async getAttributes({commit}) {
      let res = await fetch(`${URL}/products/attributes?${authParams}`);
      if (res.ok) {
        let resData = await res.json();
        commit('setAttributes', resData)
      }
    }



  },
  mutations: {
    setAttributes(state, items) {
      state.attributes = items
    },
    setChildCategories(state, id) {
      state.childCategories = state.categories.filter(item => item.parent === id && item.count > 0)
    },
    setProductOfCategory(state, items) {
      state.productsOfCategory = items
    },
    setCategory(state, items) {
      state.category = items[0]
    },
    setOneProductReviews(state, items) {
      state.oneProductReviews = items
    },
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
    setProduct(state, slug) {
      state.product = state.products.find(product => product.slug === slug)
    },
    setUpSellProducts(state, ids) {
      ids.forEach(id => {
        state.upSellProducts.push(state.products.find(product => product.id === id))
      })
    },
    clearUpSellProducts(state) {
      state.upSellProducts = []
    },
  },

  modules: {}
})




