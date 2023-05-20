<template>
  <div class="container-lg p-0">
    <div class="wrap">
      <div id="likemovies" class="m-3">
        <hr>
        <h3 class="text-start">좋아하는 영화</h3>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row row-cols-3 row-cols-md-5 g-3">
                <LikeMovieCard v-for="movie in like_movies" :key="movie.id" :movie="movie" />
              </div>
            </div>
            <div class="carousel-item">
              <div class="row row-cols-3 row-cols-md-5 g-3">
                <div class="col">
                  <div class="card">
                    <img src="@/assets/poster/poster1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">영화제목</div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src="@/assets/poster/poster2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">영화제목</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div id="myreviews">
        <h3>나의 리뷰</h3>
        <p>내가 리뷰한 영화들 목록 -> 좋아하는 영화처럼... </p>
      </div>
      <div id="mycommu">
        <h3>나의 커뮤니티</h3>
        <p>게시글... (커뮤니티 더보기에서 내 게시글과 댓글 확인)</p>
      </div>
    </div>
  </div>
</template>
  
<script>
import LikeMovieCard from '@/components/profile/LikeMovieCard.vue';


export default {
  components: { LikeMovieCard },
  computed: {
    like_movies() {
      console.log(this.$store.state.profile.profile.like_movies)
      return this.$store.state.profile.profile.like_movies;
    },
  },
}
</script>
  
<style scoped>
.carousel-control-prev {
  left: -20px;
}

.carousel-control-next {
  right: -20px;
}
</style>