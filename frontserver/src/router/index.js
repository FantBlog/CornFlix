import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/index';
import MainView from '@/views/MainView.vue'
import MoviesView from '@/views/MoviesView.vue'
import CommunityView from '@/views/CommunityView.vue'
import SignUpView from '@/views/SignUpView.vue'
import LogInView from '@/views/LogInView.vue'

import NotFoundErr from '@/views/NotFoundErr'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFoundErr
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView
  },
  {
    path: '/commu',
    name: 'commu',
    component: CommunityView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView,
  },
  {
    path: '*',
    redirect: '/notfound',
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const allowAllPages = ['login', 'signup', 'main']
  const isAuthRequired = !allowAllPages.includes(to.name)

  // if (to.meta.requiresAuth && !store.getters['isLogined']) {
  if (isAuthRequired && !store.getters['isLogin']) {
    console.log('로그인이 필요해요!');
    alert('로그인 필요해요')
    next('/login');
  } else {
    next();
  }
})

export default router
