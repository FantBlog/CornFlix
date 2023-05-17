import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate';

import userModule from '@/store/modules/user.js';
import articleModule from '@/store/modules/article.js';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['user'],
    }),
  ],
  modules: {
    user: userModule,
    article: articleModule,
  },
});
