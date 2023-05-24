<template>
  <div id="reviews" class="m-3">
    <hr>
    <h3 class="text-start">리뷰들</h3>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item"  v-for="( review, idx ) in dividedReviews" :key="idx" :class="{ 'active': idx === 0 }">
          <div class="row row-cols-3 row-cols-md-5 g-3">
            <ReviewListItem v-for="rvw in review" :key="rvw.id" :review="rvw" />
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
import ReviewListItem from '@/components/profile/ReviewListItem';

export default {
  components: { ReviewListItem },
  props: {
    reviews: Array
  },
  computed: {
    dividedReviews() {
      const reviews = this.reviews

      if (reviews === undefined) {
        return[]
      }

      const chunks = []
      let j = reviews.length

      for (let i = 0; i < j; i += 6) {
        chunks.push(reviews.slice(i, i + 6))
      }
      return chunks
    },
  }
}
</script>
  
<style scoped></style>