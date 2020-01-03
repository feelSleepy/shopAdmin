import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '@/Index.vue'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login.vue")
  },
];

export const asyncRoutes = [
  {
    path: '/goods',
    redirect: '/goods/goodsList',
    component: Index,
    meta: {
      roles: ['admin']
    },
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
    meta: {
      roles: ['admin']
    },
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
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'bannerList',
        name: 'bannerList',
        component: () => import("@/components/banner/index.vue")
      }
    ]
  }
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

router.addRoutes(asyncRouters);

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


export default router