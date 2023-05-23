<template>
  <div>
    <div class="container-lg mt-5">
      <br><br>
      <h1>{{ $route.params.genreName }} 장르 영화들</h1>
      <div class=" row row-cols-3 row-cols-md-5 g-3">
        <GenreMovieListItem v-for="movie in genremovies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import GenreMovieListItem from '@/components/movie/GenreMovieListItem.vue'

export default {
  name: 'GenreMovieList',
  components: {
    GenreMovieListItem,
  },
  created() {
    this.getGenres()
  },
  computed: {
    genremovies() {
      return this.$store.state.movie.genremovies
    },
  },
  methods: {
    getGenres() {
      const genre_id = this.$route.params.genreId
      const payload = { genre_id }
      this.$store.dispatch('getGenreMovies', payload)
    },
  },
}
</script>

<style scoped>
</style>
