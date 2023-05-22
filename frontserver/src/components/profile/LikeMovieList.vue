<template>
  <div id="likemovies" class="m-3">
    <hr>
    <h3 class="text-start">좋아하는 영화</h3>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="( movies, idx ) in dividedMovies" :key="idx" :class="{ 'active': idx === 0 }">
          <div class=" row row-cols-3 row-cols-md-5 g-3">
            <LikeMovieListItem v-for="movie in movies" :key="movie.id" :movie="movie" />
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
  
<script>
import LikeMovieListItem from '@/components/profile/LikeMovieListItem.vue';

export default {
  components: { LikeMovieListItem },
  props: {
    like_movies: Array,
  },
  data() {
    return {
      isLargeScreen: false,
    }
  },
  created() {
    this.handleResize()
  },
  mounted() {
    // console.log("ready...");
    window.addEventListener('resize', this.handleResize)
	},
  beforeDestroy() {
    // console.log("beforeDestroy...");
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    LargeScreen() {
      return this.isLargeScreen
    },
    dividedMovies() {
      if (this.like_movies === undefined) {
        return []
      }

      const like_movies = this.like_movies
      const chunks = []
      let j = like_movies.length

      const cardCount = this.LargeScreen ? 10 : 6;

      for (let i = 0; i < j; i += cardCount) {
        chunks.push(like_movies.slice(i, i + cardCount))
      }
      return chunks
    },
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 768) {
        this.isLargeScreen = true
        return
      }
      this.isLargeScreen = false
    }
  }
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