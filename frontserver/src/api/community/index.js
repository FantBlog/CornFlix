import api from '@/api/base.js';

const fetchPosts = () => api.get('/community/posts/');

const fetchCreatePosts = function ({ title, content }) {
  return api({
    method: 'post',
    url: '/community/posts/',
    data: {
      title,
      content,
    },
  });
};

export { fetchPosts, fetchCreatePosts};
