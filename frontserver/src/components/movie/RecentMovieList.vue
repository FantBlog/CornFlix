<template>
  <div>
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

<style>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie-list-item {
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
</style>