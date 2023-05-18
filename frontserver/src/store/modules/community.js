import { fetchPosts, fetchCreatePosts } from '@/api/community/index.js';
import router from '@/router'

export default {
  state: {
    posts: [],
  },
  mutations: {
    GET_POSTS(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    getPosts(context) {
        fetchPosts()
        .then((res) => {
          console.log(res, context)
          context.commit('GET_POSTS', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    CreatePosts(context, payload) {
      const title = payload.title
      const content = payload.content

      fetchCreatePosts({ title, content })
        .then(() => {
          router.push({name: 'commu'})
        })
        .catch((err) => console.log(err))
    },
  },
};
