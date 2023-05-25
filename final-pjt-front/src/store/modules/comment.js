import { fetchCreateComment, fetchDeleteComment, fetchPutComment } from '@/api/community/comment.js'

import router from '@/router'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    createComment(context, payload) {
      const post_id = payload.post_id
      const content = payload.content

      fetchCreateComment({ post_id, content })
        .then(() => {
          // 게시글 댓글 다시 로드
          router.go(0)
        })
        .catch((err) => console.log(err))
    },
    deleteComment(context, payload) {
      const comment_id = payload.comment_id

      fetchDeleteComment({ comment_id })
        .then(() => {
          // 게시글 댓글 다시 로드
          router.go(0)
        })
        .catch((err) => console.log(err))
    },
    putComment(context, payload) {
      const comment_id = payload.comment_id
      const content = payload.content
      fetchPutComment({ comment_id, content })
        .then(() => {
          // 게시글 댓글 다시 로드
          router.go(0)
        })
        .catch((err) => console.log(err))
    },
  },
}
