<template>
  <div>
    <div class="container-lg mt-5">
      <h1>{{ $route.query?.genreName }} {{ this.$route.params.type }} 영화들</h1>
      <div class=" row row-cols-3 row-cols-md-5 g-3">
        <CardItem v-for="movie in typemovies" :key="movie.id" :movie="movie" />
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" v-if="page > 1">
          <a class="page-link" @click="goPage(page - 10)"><span aria-hidden="true">&laquo;</span></a>
        </li>
        <li class="page-item" v-if="!lentypemovies">
          <p class="page-link" @click="goPage(page - 2)">{{ page - 2 }}</p>
        </li>
        <li class="page-item" v-if="page > 1">
          <p class="page-link" @click="goPage(page - 1)">{{ page - 1 }}</p>
        </li>
        <li class="page-item active">
          <p class="page-link" @click="goPage(page)">{{ page }}</p>
        </li>
        <li class="page-item" v-if="lentypemovies">
          <p class="page-link" @click="goPage(page + 1)">{{ page + 1 }}</p>
        </li>
        <li class="page-item" v-if="page === 1">
          <p class="page-link" @click="goPage(page + 2)">{{ page + 2 }}</p>
        </li>
        <li class="page-item" v-if="lentypemovies">
          <p class="page-link" @click="goPage(page + 10)"><span aria-hidden="true">&raquo;</span></p>
        </li>
      </ul>
    </nav>
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
    lentypemovies() {
      return this.$store.state.movie.typemovies.length === 15
    },
    page() {
      return Number(this.$route.params.page)
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
    goPage(nextpage) {
      const type = this.$route.params.type

      if (type === 'genre') {
        const genreId = this.$route.query.genreId
        const genreName = this.$route.query.genreName
        const payload = {
          name: 'typemovie',
          params: { type, page: nextpage },
          query: { genreId, genreName }
        }
        this.$router.push(payload)
        this.$router.go()
      }
      else { // recent, recommend
        const payload = {
          name: 'typemovie',
          params: { type, page: nextpage },
        }
        this.$router.push(payload)
        this.$router.go()
      }
    }
  },
}
</script>

<style scoped></style>
