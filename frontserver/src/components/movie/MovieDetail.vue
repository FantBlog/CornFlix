<template>
  <div class="container-lg mt-5">
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <img class="img-fluid" :src="movie.poster_path" alt="영화 포스터">
        </div>
      </div>
    </div>
    <div class="wrap container text-center">
      <div id="likemovies" class="row justify-content-md-center align-items-center">
        <div class="col-md-4">
          <img class="movie-poster" :src="movie.poster_path" alt="영화 포스터" data-bs-toggle="modal" data-bs-target="#exampleModal">
        </div>
        <div class="col-6 col-md-8">
          <h1 class="text-center m-3"><b>{{ movie.title }}</b></h1>
          <!-- <p>{{ movie.genres }}</p> -->
          <p class="d-flex">개봉일 : {{ movie.release_date }}</p>
          <div class="d-flex">
            <p class="me-2">장르 :</p>
            <div class="genre-list d-flex flex-wrap">
              <p v-for="genre in movie.genres" :key="genre.id" class="me-2 mb-2">{{ genre.name }}</p>
            </div>
          </div>
          <p class="text-start mt-5">{{ movie.overview }}</p>
        </div>
      </div>
    </div>

    <MovieReview v-bind:reviews="movie.review_set" :review_count="movie.review_count"/>

    <iframe class="container" v-if="movie.youtube !== `null`"
      :width="1024"
      :height="600"
      :src="`https://www.youtube.com/embed/${movie.youtube}?autoplay=1`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>

    <!-- <div>
      <h2>비슷한 영화 추천</h2>
    </div> -->
  </div>
</template>

<script>
import MovieReview from '@/components/movie/MovieReview.vue'

export default {
  name: 'MovieDetail',
  components: {
      MovieReview,
    },
  computed: {
    movie() {
      return this.$store.state.movie.movie
    },
  },
  created() {
    this.getDetailMovie()
  },
  methods: {
    getDetailMovie() {
      console.log(this.$route.params.movieId)
      const payload = {
        movie_id : this.$route.params.movieId
      }
      this.$store.dispatch('getDetailMovie', payload)
    }
  },
}
</script>

<style scoped>
.wrap{
    margin: 50px;
}
.movie-poster{
    height: 500px;
}
#likemovies .col {
  flex: 0 0 50%;
  max-width: 50%;
  margin-bottom: 20px;
}

.collapse{
  background-color: black;
}
</style>