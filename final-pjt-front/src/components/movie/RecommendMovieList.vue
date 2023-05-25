<template>
  <div class="container-lg mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="text-start">추천 영화들</h1>
      <router-link :to="{ name: 'typemovie', params: { type: 'recommend', page: '1' }}">더보기</router-link>
    </div>
    <div id="carouselRecommendControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="( movies, idx ) in dividedMovies" :key="idx" :class="{ 'active': idx === 0 }">
          <div class="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-3">
            <CardItem v-for="movie in movies" :key="movie.id" :movie="movie" />
          </div>
        </div>
      </div>
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
    dividedMovies() {
      if (this.recommendmovies === undefined) {
        return []
      }

      const recommendmovies = this.recommendmovies
      const chunks = []
      let j = recommendmovies.length

      for (let i = 0; i < j; i += this.isLargeScreen) {
        chunks.push(recommendmovies.slice(i, i + this.isLargeScreen))
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
</style>
