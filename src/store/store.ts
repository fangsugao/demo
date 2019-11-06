import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// 加载子模块
import login from './modules/login'
import topic from './modules/topic'
import catalog from './modules/catalog'
import good from './modules/good'
import cart from './modules/cart'
import category from './modules/category'
import address from './modules/address'
import search from './modules/search'
import collect from './modules/collect'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    login,
    topic,
    catalog,
    good,
    cart,
    category,
    address,
    search,
    collect
  },
  plugins: [createLogger()]
})
