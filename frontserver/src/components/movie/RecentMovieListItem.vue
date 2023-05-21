<template>
  <div class="movie-list-item card" @click="goToDetailPage">
    <img :src="movie.poster_path" alt="영화 포스터">
    <h3>{{ movie.title }}</h3>
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

</style>
