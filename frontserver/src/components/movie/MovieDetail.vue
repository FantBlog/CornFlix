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
    <div class="wrap">
      <div id="likemovies" class="row">
        <div class="col-6 col-lg-4">
          <img class="movie-poster" :src="movie.poster_path" alt="영화 포스터" data-bs-toggle="modal" data-bs-target="#exampleModal">
        </div>
        <div class="col-6 col-lg-8">
          <h1 class="text-center m-3"><b>{{ movie.title }}</b></h1>
          <p>{{ movie.genre_id }}</p>
          <p class="text-start mt-5">{{ movie.overview }}</p>
        </div>
      </div>
    </div>
    <div class="accordion m-5" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            리뷰
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            리뷰
          </div>
        </div>
      </div>
    </div>
    <iframe 
      :width="1024"
      :height="600"
      :src="`https://www.youtube.com/embed/${movie.youtube}?autoplay=1`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <div>
      <h2>비슷한 영화 추천</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetail',
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
      const payload = {
        movie_id : this.$route.params.movieId
      }
      this.$store.dispatch('getMovies', payload)
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
</style>