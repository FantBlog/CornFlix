<template>
  <div>
    <h1>최신 영화들</h1>
    <RecentMovieListItem 
    v-for="recentmovie in recentmovies" 
    :key="recentmovie.id" 
    :movie="recentmovie"
    />
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
      return this.$store.state.movie.recentmovies;
    },
  },
}
</script>

<style>

</style>
