import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from '@/views/MainView.vue'
import MoviesView from '@/views/MoviesView.vue'
import CommunityView from '@/views/CommunityView.vue'
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
    path: '/profile',
    name: 'profile',
    component: ProfileView,
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

export default router
