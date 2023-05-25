<template>
  <div>
    <h1>{{ this.$route.params.type }} 영화들</h1>
    <ul class="nav nav-tabs mx-5">
      <li class="nav-item">
        <a class="nav-link" :class="{active:this.$route.params.type === 'recent'}" aria-current="page" @click="typeMove('recent')">Recent</a>
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
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center mb-0">
        <li class="page-item" v-if="page > 1">
          <a class="page-link" @click="goPage(1)"><span aria-hidden="true">&laquo;</span></a>
        </li>
        <li class="page-item" v-if="page > 1">
          <a class="page-link" @click="goPage(page - 10)"><span aria-hidden="true">&lt;</span></a>
        </li>
        <li class="page-item" v-if="page > lastpage - 4">
          <p class="page-link" @click="goPage(page - 9)">{{ page - 9 }}</p>
        </li>
        <li class="page-item" v-if="page > lastpage - 3">
          <p class="page-link" @click="goPage(page - 8)">{{ page - 8 }}</p>
        </li>
        <li class="page-item" v-if="page > lastpage - 2">
          <p class="page-link" @click="goPage(page - 7)">{{ page - 7 }}</p>
        </li>
        <li class="page-item" v-if="page > lastpage - 1">
          <p class="page-link" @click="goPage(page - 6)">{{ page - 6 }}</p>
        </li>
        <li class="page-item" v-if="page > lastpage">
          <p class="page-link" @click="goPage(page - 5)">{{ page - 5 }}</p>
        </li>
        <li class="page-item" v-if="page > 4">
          <p class="page-link" @click="goPage(page - 4)">{{ page - 4 }}</p>
        </li>
        <li class="page-item" v-if="page > 3">
          <p class="page-link" @click="goPage(page - 3)">{{ page - 3 }}</p>
        </li>
        <li class="page-item" v-if="page > 2">
          <p class="page-link" @click="goPage(page - 2)">{{ page - 2 }}</p>
        </li>
        <li class="page-item" v-if="page > 1">
          <p class="page-link" @click="goPage(page - 1)">{{ page - 1 }}</p>
        </li>
        <li class="page-item active">
          <p class="page-link" @click="goPage(page)">{{ page }}</p>
        </li>
        <li class="page-item" v-if="page !== lastpage">
          <p class="page-link" @click="goPage(page + 1)">{{ page + 1 }}</p>
        </li>
        <li class="page-item" v-if="page < lastpage - 1">
          <p class="page-link" @click="goPage(page + 2)">{{ page + 2 }}</p>
        </li>
        <li class="page-item" v-if="page < lastpage - 2">
          <p class="page-link" @click="goPage(page + 3)">{{ page + 3 }}</p>
        </li>
        <li class="page-item" v-if="page < lastpage - 3">
          <p class="page-link" @click="goPage(page + 4)">{{ page + 4 }}</p>
        </li>
        <li class="page-item" v-if="page < 5">
          <p class="page-link" @click="goPage(page + 5)">{{ page + 5 }}</p>
        </li>
        <li class="page-item" v-if="page < 6">
          <p class="page-link" @click="goPage(page + 6)">{{ page + 6 }}</p>
        </li>
        <li class="page-item" v-if="page < 7">
          <p class="page-link" @click="goPage(page + 7)">{{ page + 7 }}</p>
        </li>
        <li class="page-item" v-if="page < 8">
          <p class="page-link" @click="goPage(page + 8)">{{ page + 8 }}</p>
        </li>
        <li class="page-item" v-if="page !== lastpage">
          <p class="page-link" @click="goPage(page + 10)"><span aria-hidden="true">&gt;</span></p>
        </li>
        <li class="page-item" v-if="page !== lastpage">
          <p class="page-link" @click="goPage(lastpage)"><span aria-hidden="true">&raquo;</span></p>
        </li>
      </ul>
    </nav>
    <div class="d-flex justify-content-center">
      <div class="input-group mb-3 w-25">
        <span class="input-group-text">1 ~ </span>
        <input type="number" class="form-control" v-model="inputpage">
        <span class="input-group-text">~ {{ lastpage }} page</span>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="goPage(inputpage)">[이동]</button>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/movie/CardItem.vue'

export default {
  name: 'TypeMovieList',
  data() {
    return {
      inputpage:0,
    }
  },
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
    lastpage() {
      return Math.ceil(this.$store.state.movie.movie_count/15)
    },
    page() {
      return Number(this.$route.params.page)
    },
  },
  methods: {
    getTypeMovies() {
      const type = this.$route.params.type
      const page = this.$route.params.page
      this.inputpage = this.$route.params.page

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
      if (nextpage === null) {
        alert('페이지 번호를 입력하세요')
        return
      }
      if (nextpage > this.lastpage) nextpage = this.lastpage
      if (nextpage < 1) nextpage = 1
      
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

<style scoped>
</style>
