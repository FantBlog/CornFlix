<template>
  <div class="container">
    <div class="accordion mt-5 mb-5" id="reviewAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            <p class="m-0">리뷰 총 개수 : {{ review_count }} </p>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#comentAccordion">
          <div class="row accordion-body">
            <div class="col-12 col-md-4">
              <form id="myform" @submit="ratestar">
                <fieldset>
                  <input type="radio" v-model="selectedOption" name="rating" value="5" id="rate1"><label
                    for="rate1">⭐</label>
                  <input type="radio" v-model="selectedOption" name="rating" value="4" id="rate2"><label
                    for="rate2">⭐</label>
                  <input type="radio" v-model="selectedOption" name="rating" value="3" id="rate3"><label
                    for="rate3">⭐</label>
                  <input type="radio" v-model="selectedOption" name="rating" value="2" id="rate4"><label
                    for="rate4">⭐</label>
                  <input type="radio" v-model="selectedOption" name="rating" value="1" id="rate5"><label
                    for="rate5">⭐</label>
                </fieldset>
              </form>
            </div>
            <div class="col">
              <div class="input-group">
                <input type="text" class="form-control custom-input" v-model="review_content"  placeholder="리뷰 추가...">
                <button class="btn btn-primary" @click="createReview">리뷰</button>
              </div>
            </div>
            <div>
              <MovieReviewDetail v-for="review in reviews" :key="review.id" :review="review" :review_id="review.id" />
            </div>
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
    movieId: String,
    review_count: Number,
    reviews: Array,
  },
  data() {
    return {
      review_rank: 0,
      review_content: '',
      selectedOption: '',
    }
  },
  methods: {
    createReview() {
      const movie_id = this.movieId
      const rank = this.selectedOption
      if (rank === '') {
        alert('평점을 골라주세요')
        return
      }
      const content = this.review_content
      if (content === '') {
        alert('리뷰를 작성해 주세요')
        return
      }
      const payload = { movie_id, rank, content }
      this.$store.dispatch('createReview', payload)
    },
    ratestar(event) {
      event.preventDefault()
    },
  }
}
</script>

<style scoped>
#myform fieldset {
  display: inline-block;
  /* 하위 별점 이미지들이 있는 영역만 자리를 차지함.*/
  border: 0;
  /* 필드셋 테두리 제거 */
}

#myform input[type=radio] {
  display: none;
  /* 라디오박스 감춤 */
}

#myform label {
  font-size: 1em;
  /* 이모지 크기 */
  color: transparent;
  /* 기존 이모지 컬러 제거 */
  text-shadow: 0 0 0 #f0f0f0;
  /* 새 이모지 색상 부여 */
}

#myform label:hover {
  text-shadow: 0 0 0 rgb(255, 230, 0);
  /* 마우스 호버 */
}

#myform label:hover~label {
  text-shadow: 0 0 0 rgb(255, 230, 0);
  /* 마우스 호버 뒤에오는 이모지들 */
}

#myform fieldset legend {
  text-align: left;
}

#myform fieldset {
  display: inline-block;
  /* 하위 별점 이미지들이 있는 영역만 자리를 차지함.*/
  direction: rtl;
  /* 이모지 순서 반전 */
  border: 0;
  /* 필드셋 테두리 제거 */
}

#myform input[type=radio]:checked~label {
  text-shadow: 0 0 0 rgb(255, 230, 0);
  /* 마우스 클릭 체크 */
}

</style>

