import api from '@/api/base.js';

const fetchProfile = function ({ user_name }) {
  return api({
    method: 'get',
    url: `/user/profile/${user_name}/`
  })
}
const fetchPutProfile = function ({ user_name, content, image }) {
  return api({
    method: 'put',
    url: `/user/profile/${user_name}/`,
    data: {
      content,
    },
    image: {
      image
    }
  })
}

const fetchFollow = function ({ user_name }) {
  return api({
    method: 'post',
    url: `/user/${user_name}/follow/`
  })
}

export { fetchProfile, fetchFollow, fetchPutProfile };
