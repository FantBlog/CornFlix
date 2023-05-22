<template>
  <div>
    <div class="accordion m-5" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <p>리뷰 {{ review_count }}</p>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
                <li v-for="review in reviews" :key="review.id">
                    <!-- <MovieReviewDetail :review="review"/> -->
                </li>
            </ul>
            <input type="text" v-model="review_content">
            <button @click="createReview">리뷰 작성</button>
            <MovieReview/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import MovieReviewDetail from '@/components/movie/MovieReviewDetail.vue'

export default {
  name: 'MovieReviewDetail',
  components: {
    // MovieReviewDetail,
  },
  props: {
    review_count:Number,
    reviews:Array,
  },
  data() {
    return {
      review_content:'',
    }
  },
  methods: {
    createReview() {
      const content = this.review_content
      const movie_pk = this.$route.params.id
      const payload = {movie_pk,content}
      this.$store.dispatch('createReview', payload)
    },
  }
}
</script>
