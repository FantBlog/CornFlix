import { fetchCreateReview, fetchDeleteReview, fetchPutReview } from '@/api/movie/review.js'

import router from '@/router'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    createReview(context, payload) {
      const movie_id = payload.movie_id
      const rank = payload.rank
      const content = payload.content
      fetchCreateReview({ movie_id, rank, content })
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
      const rank = payload.rank
      const content = payload.content
      fetchPutReview({ review_id, rank, content })
        .then(() => {
          router.go(0)
        })
        .catch((err) => console.log(err))
    },
  },
}
