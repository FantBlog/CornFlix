import api from '@/api/base.js';

const fetchProfile = function ({ username }) {
  return api({
    method: 'get',
    url: `/user/profile/${username}/`
  });
};

const fetchMyProfile = function () {
  return api({
    method: 'get',
    url: '/user/me/'
  });
};


export { fetchProfile, fetchMyProfile };
