import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/index';
import MainView from '@/views/MainView.vue'
import MoviesView from '@/views/MoviesView.vue'
import CommunityView from '@/views/community/CommunityView.vue'
import CreatePostView from '@/views/community/CreatePostView.vue'
import DetailPostView from '@/views/community/DetailPostView'
import PutPostView from '@/views/community/PutPostView'
import SignUpView from '@/views/SignUpView.vue'
import LogInView from '@/views/LogInView.vue'
import ProfileView from '@/views/ProfileView.vue'

import NotFoundErr from '@/views/NotFoundErr'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
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
    path: '/create',
    name: 'createPost',
    component: CreatePostView
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
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/post/:id',
    name: 'DetailPostView',
    component: DetailPostView,
  },
  {
    path: '/post/put/:id',
    name: 'PutPostView',
    component: PutPostView,
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFoundErr
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
