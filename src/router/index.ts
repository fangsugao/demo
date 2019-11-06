import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router=new Router({
  mode: 'history',
  linkActiveClass:"routerActive",
  routes: [
    {
      path:'/',
      redirect:'/login',
    },
    {
      name: '登录',
      // isTab: true,
      path: '/login',
      component: ()=>import('../views/login/index.vue')
    },
    {
      name: '首页',
      // isTab: true,
      path: '/home',
      component: ()=>import('../views/home/index.vue')
    },
    {
      name: '专题',
      path: '/topic',
      // isTab: true,
      component: ()=>import('../views/topic/index.vue')
    },
    {
      name: '分类',
      path: '/catelog',
      // isTab: true,
      component: ()=>import('../views/catelog/index.vue')
    },
    {
      name: '购物车',
      path: '/cart',
      // isTab: true,
      component: ()=>import('../views/cart/index.vue')
    },
    {
      name: '我的',
      path: '/mine',
      // isTab: true,
      component: ()=>import('../views/mine/index.vue')
    },
    {
      name: 'categorys',
      path: '/categorys/:id',
      // isTab: false,
      component: ()=>import('../views/categroys/index.vue')
    },
    {
      name: '商品详情',
      path: '/goods/:id',
      // isTab: false,
      component: ()=>import('../views/goods/index.vue')
    },
    {
      name: 'brandDetail',
      path: '/brandDetail/:id',
      // isTab: false,
      component: ()=>import('../views/brandDetail/index.vue')
    },
    {
      name: '专题详情',
      path: '/topicDetail/:id',
      // isTab: false,
      component: ()=>import('../views/topicDetail/index.vue')
    },
    {
      name: '评论页',
      path: '/comment/:id',
      // isTab: false,
      component: ()=>import('../views/comment/index.vue')
    },
    {
      name: '写专题评论',
      path: '/topicCommentWrite/:id',
      // isTab: false,
      component: ()=>import('../views/topicCommentWrite/index.vue')
    },
    {
      name: '商品查询',
      path: '/goodsSearch',
      // isTab: false,
      component: ()=>import('../views/goodsSearch/index.vue')
    },
    {
      name: 'collect',
      path: '/collect',
      // isTab: false,
      component: ()=>import('../views/collect/index.vue')
    },
    {
      name: 'address',
      path: '/address',
      // isTab: false,
      component: ()=>import('../views/address/index.vue')
    },
    {
      name: '订单确认',
      path: '/orderConfirm',
      // isTab: false,
      component: ()=>import('../views/orderComfirm/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log(from);
    // next();
    //我在这里模仿了一个获取用户信息的方法
    let token = window.localStorage.getItem('token');
    if (token) {
        //如果用户信息存在则往下执行。
        next()
    } else {
       //如果用户token不存在则跳转到login页面
       if (to.path === '/login') {
            next()
        } else {
            next('/login')
        }
    } 
}) 

export default router