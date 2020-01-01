import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login.vue")
  },
  {
    path: '/index',
    name: 'index',
    redirect: '/index/goodsList',
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
];
// 权限路由
const asyncRouters = [
  // 商品模块
  {
    path: '/index',
    name: 'index',
    redirect: '/index/goodsList',
    component: Index,
    children: [
      {
        path: 'goodsList',
        name: 'goods',
        component: () => import("@/components/goods/goodsList.vue")
      },
    ]
  },
  // 订单模块
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {
        path: 'order',
        name: 'order',
        component: () => import("@/components/order/index.vue")
      }
    ]
  },
  // 轮播图模块
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {
        path: 'banner',
        name: 'banner',
        component: () => import("@/components/banner/index.vue")
      },
    ]
  },
]

const router = new VueRouter({
  [...routes, ...asyncRouters]
})

export default router
