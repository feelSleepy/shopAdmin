import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index/goodsList'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login.vue")
  },
  {
    path: '/index',
    name: 'index',
    component: () => import("@/Index.vue"),
    children: [
      {
        path: 'goodsList',
        name: 'goods',
        component: () => import("@/components/goods/goodsList.vue")
      },
      {
        path: 'banner',
        name: 'banner',
        component: () => import("@/components/banner/index.vue")
      },
      {
        path: 'order',
        name: 'order',
        component: () => import("@/components/order/index.vue")
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
