import api from '@/api/base.js'

const fetchCreateComment = function ({ post_id, content }) {
  return api({
    method: 'post',
    url: `/community/posts/${post_id}/comments/`,
    data: {
      content,
    },
  })
}
const fetchDeleteComment = function ({ comment_id }) {
  return api({
    method: 'delete',
    url: `/community/comments/${comment_id}/`,
  })
}
const fetchPutComment = function ({ comment_id, content }) {
  return api({
    method: 'put',
    url: `/community/comments/${comment_id}/`,
    data: {
      content,
    },
  })
}


export { fetchCreateComment, fetchDeleteComment, fetchPutComment }
