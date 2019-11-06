import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg',
  attempt: 1
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
