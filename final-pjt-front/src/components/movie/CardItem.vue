<template>
  <div class="col">
    <div class="movie-list-item  mx-auto card" @click="goToDetailPage">
      <img :src=movie.poster_path class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
      </div>
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
      this.$router.go()
    },
  },
}
</script>

<style scoped>
.movie-list-item {
  width: 200px;
  margin: 10px;
  /* border: 1px solid #ccc; */
  border: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.movie-list-item:hover {
  transform: scale(1.1);
  z-index: 1;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
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
  /* margin-bottom: 0; */
  color: black;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
}
</style>
