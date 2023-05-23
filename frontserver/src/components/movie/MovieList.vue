<template>
  <div>
    <div class="container-lg mt-5">
      <h1>{{ $route.query?.genreName }} {{ this.$route.params.type }} 영화들</h1>
      <div class=" row row-cols-3 row-cols-md-5 g-3">
        <CardItem v-for="movie in typemovies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/movie/CardItem.vue'

export default {
  name: 'TypeMovieList',
  components: {
    CardItem,
  },
  created() {
    this.getTypeMovies()
  },
  computed: {
    typemovies() {
      return this.$store.state.movie.typemovies
    },
  },
  methods: {
    getTypeMovies() {
      const type = this.$route.params.type
      const page = this.$route.params.page

      // 타입에 따라서 dispatch가 달라져야함
      if (type === 'genre') {
        const genre_id = this.$route.query.genreId
        const payload = {
          genre_id,
          page
        }
        this.$store.dispatch('getGenreMovies', payload)
      }
      else { // recent, recommend
        const payload = {
          type,
          page
        }
        this.$store.dispatch('getTypeMovies', payload)
      }
    },
  },
}
</script>

<style scoped></style>
