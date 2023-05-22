<template>
  <div class="about">
    <h1>Home page</h1>
    <RecentMovieList />
    <RecommendMovieList />
  </div>
</template>


<script>
import RecentMovieList from '@/components/movie/RecentMovieList'
import RecommendMovieList from '@/components/movie/RecommendMovieList'

export default {
  name: 'MoviesView',
  components: {
    RecentMovieList,
    RecommendMovieList,
  },
  computed: {
  },
  created() {
    this.getRecentMovies()
  },
  methods: {
    getRecentMovies() {
      this.$store.dispatch('getMovies')
      this.$store.dispatch('getRecommendMovies')
    }
  },
}
</script>