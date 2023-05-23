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
              <MovieReviewDetail
                v-for="review in reviews"
                :key="review.id"
                :review="review"
                :review_id="review.id"
              />
            </ul>

            <div>
              <label for="rank">리뷰 Rank:</label>
              <select v-model="review_rank" id="rank">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div>
              <label for="content">리뷰 내용:</label>
              <input type="text" v-model="review_content" id="content">
            </div>

            <button @click="createReview">리뷰 작성</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieReviewDetail from '@/components/movie/MovieReviewDetail.vue'

export default {
  name: 'MovieReview',
  components: {
    MovieReviewDetail,
  },
  props: {
    movieId:String,
    review_count:Number,
    reviews:Array,
  },
  data() {
    return {
      review_rank: 1,
      review_content:'',
    }
  },
  methods: {
    createReview() {
      const movie_id = this.movieId
      const rank = this.review_rank
      const content = this.review_content
      const payload = {movie_id,rank,content}
      this.$store.dispatch('createReview', payload)
    },
  }
}
</script>

