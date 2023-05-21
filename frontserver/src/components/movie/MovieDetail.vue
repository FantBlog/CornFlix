<template>
  <div class="wrap">
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <img class="img-fluid" :src="movie.poster_path" alt="영화 포스터">
        </div>
      </div>
    </div>
    <div class="wrap">
      <div id="likemovies" class="row">
        <div class="col-4">
          <img class="movie-poster" :src="movie.poster_path" alt="영화 포스터" data-bs-toggle="modal" data-bs-target="#exampleModal">
        </div>
        <div class="col-6">
          <h1 class="text-center m-3 b"><b>{{ movie.title }}</b></h1>
          <p class="text-start mt-5">{{ movie.overview }}</p>
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
  </div>
</template>

<script>
export default {
  name: 'MovieDetail',
  computed: {
    movie() {
      const movieId = this.$route.params.movieId;
      return this.$store.state.movie.recentmovies.find(movie => movie.id === movieId)
    },
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