import api from '@/api/base.js'

const fetchCreateReview = function ({ movie_id, content, rank }) {
  return api({
    method: 'post',
    url: `/movies/${movie_id}/reviews/`,
    data: {
      content,
      rank
    },
  })
}
const fetchDeleteReview = function ({ review_id }) {
  return api({
    method: 'delete',
    url: `/movies/reviews/${review_id}/`,
  })
}
const fetchPutReview = function ({ review_id, rank, content }) {
  return api({
    method: 'put',
    url: `/movies/reviews/${review_id}/`,
    data: {
      rank,
      content,
    },
  })
}


export { fetchCreateReview, fetchDeleteReview, fetchPutReview }
