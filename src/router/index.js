import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from '@/views/home'
import Introduce from '@/views/introduce'
import Download from '@/views/download'
import Case from '@/views/case'
import Price from '@/views/price'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {
      title: '首页',
      requireAuth: false
    }
  },
  {
    path: '/introduce',
    component: Introduce,
    name: 'introduce',
    meta: {
      title: '公司介绍',
      requireAuth: false
    }
  },
  {
    path: '/download',
    component: Download,
    name: 'download',
    meta: {
      title: '下载地址',
      requireAuth: false
    }
  },
  {
    path: '/case',
    component: Case,
    name: 'case',
    meta: {
      title: '案例',
      requireAuth: false
    }
  },
  {
    path: '/price',
    component: Price,
    name: 'Price',
    meta: {
      title: '价格',
      requireAuth: false
    }
  },
]

const router = new Router({
  routes: routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router

