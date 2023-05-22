<template>
  <div class="container-lg mt-5">
    <h1>추천 영화들</h1>
    <div id="carouselRecommendControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="( movies, idx ) in dividedMovies" :key="idx" :class="{ 'active': idx === 0 }">
          <div class=" row row-cols-3 row-cols-md-5 g-3">
            <RecentMovieListItem v-for="movie in movies" :key="movie.id" :movie="movie" />
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselRecommendControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselRecommendControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import RecentMovieListItem from '@/components/movie/RecentMovieListItem.vue'

export default {
  name: 'RecentMovieList',
  components: {
    RecentMovieListItem,
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
    recommendmovies() {
      return this.$store.state.movie.recommendmovies
    },
    LargeScreen() {
      return this.isLargeScreen
    },
    dividedMovies() {
      if (this.recommendmovies === undefined) {
        return []
      }

      const recommendmovies = this.recommendmovies
      const chunks = []
      let j = recommendmovies.length

      const cardCount = this.LargeScreen ? 5 : 3;

      for (let i = 0; i < j; i += cardCount) {
        chunks.push(recommendmovies.slice(i, i + cardCount))
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
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.movie-list-item {
  width: calc(20% - 20px);
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
</style>
