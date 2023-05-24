import api from '@/api/base.js'
import { fetchLogin, fetchSignup } from '@/api/user/index.js'

import router from '@/router'

export default {
  state: {
    token: null,
    username: '',
  },
  getters: {
    isLogin(state) {
      if (state.token) {
        api.setToken(state.token)
      } else {
        api.clearToken()
      }
      return state.token ? true : false
    },
  },
  mutations: {
    SAVE_TOKEN(state, token) {
      state.token = token
    },
    SAVE_USERNAME(state, username) {
      state.username = username
    },
  },
  actions: {
    signUp(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2

      fetchSignup({ username, password1, password2 })
        .then((key) => {
          context.commit('SAVE_TOKEN', key)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logIn(context, payload) {
      const username = payload.username
      const password = payload.password

      fetchLogin({ username, password })
        .then((res) => {
          context.commit('SAVE_TOKEN', res.data.key)
          context.commit('SAVE_USERNAME', username)
          router.push({ name: 'main' })
        })
        .catch((err) => console.log(err))
    },
    logOut(context) {
      context.commit('SAVE_TOKEN', null)
      context.commit('SAVE_USERNAME', '')
    },

  },
}
