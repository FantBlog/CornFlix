<template>
  <div class="container-lg">
    <!-- Poster Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <img class="img-fluid" :src="movie.poster_path" alt="영화 포스터">
        </div>
      </div>
    </div>

    <!-- movie detail -->
    <div class="container text-center">
      <div id="likemovies" class="row justify-content-md-center align-items-center">
        <h1 class="text-center m-3"><b>{{ movie.title }}</b></h1>
        <div class="col-md-4">
          <img class="w-100" :src="movie.poster_path" alt="영화 포스터" data-bs-toggle="modal" data-bs-target="#exampleModal">
        </div>
        <div class="col-12 col-md-8">
          <p class="text-start">
            <button class="heart btn" @click="like">{{ islike ? '♥' : '♡' }}</button>
            {{ like_users_count }}
          </p>
          <p class="d-flex">개봉일: {{ movie.release_date }}</p>
          <div class="d-flex">
            <p class="me-2">장르:</p>
            <div class="genre-list d-flex flex-wrap">
              <p v-for="genre in movie.genres" :key="genre.id" class="me-2 mb-2 genre">
                <router-link :to="{
                  name: 'typemovie',
                  params: { type: 'genre', page: 1 },
                  query: { genreId: genre.pk, genreName: genre.name }
                }">
                  {{ genre.name }}
                </router-link>
              </p>
            </div>
          </div>
          <p class="text-start mt-5">{{ movie.overview }}</p>
        </div>
      </div>
    </div>

    <MovieReview v-bind:reviews="movie.review_set" :review_count="movie.review_count" :movieId="movie_id" />

    <!-- youtube부분 -->
    <iframe class="container" v-if="movie.youtube !== `null`" :width="1024" :height="600"
      :src="`https://www.youtube.com/embed/${movie.youtube}`" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>

    <!-- 추천영화 -->
    <RelateMovieList />
    <br>
  </div>
</template>

<script>
import MovieReview from '@/components/movie/MovieReview.vue'
import RelateMovieList from '@/components/movie/RelateList.vue'

export default {
  name: 'MovieDetail',
  components: {
    MovieReview,
    RelateMovieList,
  },
  computed: {
    movie_id() {
      return this.$route.params.movieId
    },
    movie() {
      if (this.$store.state.movie.movie === null) return {
        poster_path: '',
      }
      return this.$store.state.movie.movie
    },
    islike() {
      return this.$store.state.movie.islike
    },
    like_users_count(){
      if(this.$store.state.movie.movie === null) return 0
      return this.$store.state.movie.movie.like_users_count
    },
  },
  created() {
    this.getDetailMovie()
    this.getRelateMovie()
  },
  methods: {
    getDetailMovie() {
      const payload = {
        movie_id: this.$route.params.movieId
      }
      this.$store.dispatch('getDetailMovie', payload)
    },
    getRelateMovie() {
      const payload = {
        movie_id: this.$route.params.movieId
      }
      this.$store.dispatch('getRelateMovie', payload)
    },
    like() {
      const payload = {
        movie_id: this.$route.params.movieId
      }
      this.$store.dispatch('likeMovie', payload);
    },
  },
}
</script>

<style scoped>
.heart {
  color: red;
  width: 40px;
}
.genre > a{
  color: white;
  text-decoration: none;
  padding: 0px 5px;
}
.genre > a:hover{
  border-radius: 10px;
  background-color: rgb(255, 179, 15);

}
</style>