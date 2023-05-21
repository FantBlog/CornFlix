<template>
  <div class="about">
    <h1>Home page</h1>
    <RecentMovieList />
  </div>
</template>


<script>
import RecentMovieList from '@/components/movie/RecentMovieList.vue'

export default {
  name: 'MoviesView',
  components: {
    RecentMovieList,
  },
  computed: {
  },
  created() {
    this.getRecentMovies()
  },
  methods: {
    getRecentMovies() {
      this.$store.dispatch('getMovies')
    }
  },
}
</script>