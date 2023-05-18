import { fetchArticles } from '@/api/article/index.js';

export default {
  state: {
    articles: [],
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
    },
  },
  actions: {
    getArticles(context) {
      fetchArticles()
        .then((res) => {
          // console.log(res, context)
          context.commit('GET_ARTICLES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
