<template>
  <div class="movie-list-item card" @click="goToDetailPage">
    <img :src="movie.poster_path" alt="영화 포스터" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentMovieListItem',
  props: {
    movie: Object,
  },
  methods: {
    goToDetailPage() {
      this.$router.push({ name: 'MovieDetail', params: { movieId: this.movie.id } })
    },
  },
}
</script>

<style scoped>
.movie-list-item {
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s; /* 트랜지션 추가 */
}

.movie-list-item:hover {
  transform: scale(1.1); /* 호버 시 크기 확대 */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* 호버 시 그림자 효과 */
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}

.card-body {
  padding: 10px;
}

.card-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0;
}
</style>