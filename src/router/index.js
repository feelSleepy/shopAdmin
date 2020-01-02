import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '@/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login.vue")
  },
  {
    path: '/goods',
    redirect: '/goods/goodsList',
    component: Index,
    children: [
      {
        path: 'goodsList',
        name: 'goodsList',
        component: () => import("@/components/goods/goodsList.vue")
      }
    ]
  },
  {
    path: '/order',
    component: Index,
    children: [
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import("@/components/order/index.vue")
      }
    ]
  },
  {
    path: '/banner',
    component: Index,
    children: [
      {
        path: 'bannerList',
        name: 'bannerList',
        component: () => import("@/components/banner/index.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router