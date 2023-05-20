<template>
  <!-- <iframe 
    :width="1024"
    :height="600"
    :src="`https://www.youtube.com/embed/${movie.youtube}?autoplay=1`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe> -->
    
  <!-- title	overview	popularity	poster_path	youtube	release_date	vote_average	vote_count	score -->
  <div>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ movie.title }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img class="img-fluid" :src="movie.poster_path" alt="영화 포스터">
          </div>
        </div>
      </div>
    </div>




    <div class="container-lg p-0">
      <div class="wrap">
        <div id="likemovies" class="">
          <h3 class="text-start">{{ movie.title }}</h3>
          <img class="movie-poster" :src="movie.poster_path" alt="영화 포스터" >
          <p>{{ movie.overview }}</p>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RecentMovieListItem',
  props: {
    movie: Object,
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style>
.movie-poster {
  height: 500px;
}
</style>