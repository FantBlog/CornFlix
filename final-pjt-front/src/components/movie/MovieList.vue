<template>
  <div>
    <h1>{{ this.$route.params.type }} 영화들</h1>
    <ul class="nav nav-tabs mx-5">
      <li class="nav-item">
        <p class="nav-link" :class="{active:this.$route.params.type === 'recent'}" aria-current="page" @click="typeMove('recent')">Recent</p>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{active:this.$route.params.type === 'recommend'}" @click="typeMove('recommend')">Recommend</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" :class="{active:this.$route.params.type === 'genre'}" data-bs-toggle="dropdown" role="button" aria-expanded="false">{{this.$route.params.type === 'genre' ? this.$route.query.genreName : 'Genre'}}</a>
        <ul class="dropdown-menu">
          <li v-for="genre in genres" :key="genre.id">
            <a class="dropdown-item" @click="typeGenre(genre.id, genre.name)">{{genre.name}}</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="container-lg mt-4">
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
    genres() {
      return this.$store.state.movie.genres
    },
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
    },
    typeMove(type) {
      const payload = {
        name: 'typemovie',
        params: { type, page: 1 },
      }
      this.$router.push(payload)
      this.$router.go()
    },
    typeGenre(genreId, genreName) {
      // type == 장르 이름 장르 아이디 받아와야댐
      const payload = {
        name: 'typemovie',
        params: { type:'genre', page: 1 },
        query: { genreId, genreName }
      }
      this.$router.push(payload)
      this.$router.go()
    },
  },
}
</script>

<style scoped></style>
