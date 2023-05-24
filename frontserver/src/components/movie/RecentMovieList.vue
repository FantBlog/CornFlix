<template>
  <div class="container-lg mt-5">
    <h1 class="text-start">최신 영화들</h1>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="( movies, idx ) in dividedMovies" :key="idx" :class="{ 'active': idx === 0 }">
          <div class="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-3">
            <CardItem v-for="movie in movies" :key="movie.id" :movie="movie" />
          </div>
        </div>
      </div>
      <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> -->
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/movie/CardItem.vue'

export default {
  name: 'RecentMovieList',
  components: {
    CardItem,
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
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    recentmovies() {
      return this.$store.state.movie.recentmovies
    },
    dividedMovies() {
      if (this.recentmovies === undefined) {
        return []
      }

      const recentmovies = this.recentmovies
      const chunks = []
      let j = recentmovies.length

      for (let i = 0; i < j; i += this.isLargeScreen) {
        chunks.push(recentmovies.slice(i, i + this.isLargeScreen))
      }
      return chunks
    },
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 1200) {
        this.isLargeScreen = 5
        return
      }
      else if (window.innerWidth >= 768) {
        this.isLargeScreen = 3
      }
      else this.isLargeScreen = 1
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
