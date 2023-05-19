import { fetchPosts, fetchCreatePosts, fetchDetailPost, fetchDeleteDetailPost, fetchPutDetailPost } from '@/api/community/post.js'

import router from '@/router'

export default {
  state: {
    posts: [],
    post: {}
  },
  mutations: {
    GET_POSTS(state, posts) {
      state.posts = posts;
    },
    GET_POST(state, post) {
      if (post.created_at) {
        var date = new Date(post.created_at)
        post.created = date.toLocaleString("ko-KR")
      } else {
        post.created = ""
      }
      if (post.updated_at) {
        var date2 = new Date(post.updated_at)
        post.updated = date2.toLocaleString("ko-KR")
      } else {
        post.updated = ""
      }
      state.post = post;
    },
    DELETE_POST(state, post_id) {
      let posts = state.posts
      posts = posts.filter(post => post.id !== post_id)
      this.posts = posts
    },
  },
  actions: {
    getPosts(context) {
      fetchPosts()
        .then((res) => {
          // console.log(res, context)
          context.commit('GET_POSTS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    CreatePosts(context, payload) {
      const title = payload.title
      const content = payload.content

      fetchCreatePosts({ title, content })
        .then(() => {
          router.push({ name: 'commu' })
        })
        .catch((err) => console.log(err))
    },
    getDetailPost(context, payload) {
      const post_id = payload.post_id
      fetchDetailPost(post_id)
        .then((res) => {
          // console.log(res, context)
          context.commit('GET_POST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteDetailPost(context, payload) {
      const post_id = payload.post_id
      context.commit('DELETE_POST', post_id);
      fetchDeleteDetailPost(post_id)
        .then(() => {
          // console.log(res, context)
          router.push({ name: 'commu' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    putDetailPost(context, payload) {
      const post_id = payload.post_id
      const title = payload.title
      const content = payload.content
      fetchPutDetailPost({ post_id, title, content })
        .then((res) => {
          console.log(res, context)
          router.push({ name: 'DetailPostView', params: { id: post_id } })
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
};
