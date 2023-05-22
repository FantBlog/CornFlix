<template>
  <div class="container-lg mt-5">
    <h1>최신 영화들</h1>
    <div class="movie-list">
      <RecentMovieListItem v-for="movie in recentmovies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import RecentMovieListItem from '@/components/movie/RecentMovieListItem.vue'

export default {
  name: 'RecentMovieList',
  components: {
    RecentMovieListItem,
  },
  computed: {
    recentmovies() {
      return this.$store.state.movie.recentmovies
    },
  },
}
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.movie-list-item {
  width: calc(20% - 20px);
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
</style>
