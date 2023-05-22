import api from '@/api/base.js'

const fetchCreateReview = function ({ movie_pk, content }) {
  return api({
    method: 'post',
    url: `/movies/${movie_pk}/reviews/`,
    data: {
      content,
    },
  })
}
const fetchDeleteReview = function ({ review_id }) {
  return api({
    method: 'delete',
    url: `/reviews/${review_id}/`,
  })
}
const fetchPutReview = function ({ review_id, content }) {
  return api({
    method: 'put',
    url: `/reviews/${review_id}/`,
    data: {
      content,
    },
  })
}


export { fetchCreateReview, fetchDeleteReview, fetchPutReview }
