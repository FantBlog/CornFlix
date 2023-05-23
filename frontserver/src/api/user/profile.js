import api from '@/api/base.js';

const fetchProfile = function ({ user_name }) {
  return api({
    method: 'get',
    url: `/user/profile/${user_name}/`
  })
}
const fetchPutProfile = function ({ user_name, content, profile_image }) {
  const formData = new FormData()
  formData.append('content', content)
  formData.append('profile_image', profile_image)

  return api.put(`/user/profile/${user_name}/`, formData)
}

const fetchFollow = function ({ user_name }) {
  return api({
    method: 'post',
    url: `/user/${user_name}/follow/`
  })
}

export { fetchProfile, fetchFollow, fetchPutProfile };
