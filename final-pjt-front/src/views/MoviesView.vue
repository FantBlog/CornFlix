<template>
  <div class="about">
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
      this.$store.dispatch('getRecentMovies', { page: 1 })
      this.$store.dispatch('getRecommendMovies', { page: 1 })
    }
  },
}
</script>