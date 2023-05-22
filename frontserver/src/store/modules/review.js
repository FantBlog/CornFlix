import { fetchCreateReview, fetchDeleteReview, fetchPutReview } from '@/api/movie/review.js'

import router from '@/router'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    createReview(context, payload) {
      const movie_pk = payload.movie_pk
      const content = payload.content

      fetchCreateReview({ movie_pk, content })
        .then(() => {
          router.go(0)
        })
        .catch((err) => console.log(err))
    },
    deleteReview(context, payload) {
      const review_id = payload.review_id

      fetchDeleteReview({ review_id })
        .then(() => {
          router.go(0)
        })
        .catch((err) => console.log(err))
    },
    putReview(context, payload) {
      const review_id = payload.review_id
      const content = payload.content
      fetchPutReview({ review_id, content })
        .then(() => {
          router.go(0)
        })
        .catch((err) => console.log(err))
    },
  },
}