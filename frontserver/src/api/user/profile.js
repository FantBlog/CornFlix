import api from '@/api/base.js';

const fetchProfile = function ({ user_name }) {
  return api({
    method: 'get',
    url: `/user/profile/${user_name}/`
  });
};

const fetchReview = function ({ user_name }) {
  return api({
    method: 'get',
    url: `/user/profile/${user_name}/review/`
  });
};


export { fetchProfile, fetchReview };
