import api from '@/api/base.js'

const fetchPosts = () => api.get('/community/posts/')

const fetchCreatePosts = function ({ title, content }) {
  return api({
    method: 'post',
    url: '/community/posts/',
    data: {
      title,
      content,
    },
  })
}
const fetchLikePosts = function ({ post_id }) {
  return api({
    method: 'post',
    url: `/community/posts/${post_id}/like/`,
  })
}

const fetchDetailPost = (post_id) => api.get(`/community/posts/${post_id}/`)
const fetchDeleteDetailPost = (post_id) => api.delete(`/community/posts/${post_id}/`)
const fetchPutDetailPost = function ({ post_id, title, content }) {
  return api({
    method: 'put',
    url: `/community/posts/${post_id}/`,
    data: {
      title,
      content,
    },
  })
}

export { fetchPosts, fetchCreatePosts, fetchDetailPost, fetchDeleteDetailPost, fetchPutDetailPost, fetchLikePosts }
