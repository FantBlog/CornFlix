<template>
  <div>
    <hr>
    <div v-if="modifyreview" class="mt-3">
      <div class="row">
        <div class="col-md-2">
          <img :src="profileImage" alt="" class="img-thumbnail rounded-circle">
          <router-link :to="{ name: 'profile', params: { username: review.user.username }}">
            {{ review.user.username }}
          </router-link>
        </div>
        <div class="col-md-10">
          <div class="row justify-content-between">
            <div class="col-md-4">
              <div class="d-flex align-items-center">
                <p class="star" style="display: inline-block;">{{ stars }}</p>
                <p class="darkstar" style="display: inline-block;">{{ darkstar }}</p>
              </div>
            </div>
            <div class="col text-end">
              <div v-if="review.user.username === $store.state.user.username" class="dropdown">
                <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-ellipsis-vertical text-black"></i>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" @click="setmodify">수정</a></li>
                  <li><a class="dropdown-item" @click="deleteReview(review.id)">삭제</a></li>
                </ul>
              </div>
            </div>
          </div>
          <p class="col text-start">{{ review.content }}</p>
        </div>
      </div>
    </div>

    <div v-else>
      <!-- 리뷰 수정 -->
      <div class="row">
        <div class="col-md-2">
          <img :src="profileImage" alt="" class="img-thumbnail rounded-circle">
          <router-link :to="{ name: 'profile', params: { username: review.user.username }}">
            {{ review.user.username }}
          </router-link>
        </div>
        <div class="col-md-10">
          <div class="row justify-content-between">
            <div class="col-md-4">
              <div class="d-flex align-items-center">
                <form id="myform" @submit="ratestar">
                  <fieldset>
                    <input type="radio" v-model="selectedOption" name="rating" value="5" :id="'rate1'+review.id"><label :for="'rate1'+review.id">⭐</label>
                    <input type="radio" v-model="selectedOption" name="rating" value="4" :id="'rate2'+review.id"><label :for="'rate2'+review.id">⭐</label>
                    <input type="radio" v-model="selectedOption" name="rating" value="3" :id="'rate3'+review.id"><label :for="'rate3'+review.id">⭐</label>
                    <input type="radio" v-model="selectedOption" name="rating" value="2" :id="'rate4'+review.id"><label :for="'rate4'+review.id">⭐</label>
                    <input type="radio" v-model="selectedOption" name="rating" value="1" :id="'rate5'+review.id"><label :for="'rate5'+review.id">⭐</label>
                  </fieldset>
                </form>
              </div>
            </div>
            <div class="col text-end">
              <div v-if="review.user.username === $store.state.user.username" class="dropdown">
                <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-ellipsis-vertical text-black"></i>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" @click="setmodify">수정</a></li>
                  <li><a class="dropdown-item" @click="deleteReview(review.id)">삭제</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="review_content" :placeholder="review.content" :aria-label="review.content" aria-describedby="button-addon2">
            <div class="input-group-append">
              <button class="btn btn-secondary" @click="setmodify">취소</button>
              <button class="btn btn-primary" @click="putReview(review.id)">수정</button>
            </div>
          </div>
        </div>
      </div>



      
    </div>
  </div>
</template>

  
<script>
export default {
  name: 'MovieReviewDetail',
  props: {
    review: Object,
    review_id: Number,
  },
  data() {
    return {
      selectedOption: '',
      review_content: '',
      modifyreview: true,
      stars: '',
      darkstar: ''
    }
  },
  computed: {
    profileImage() {
      const IMG_URL = process.env.VUE_APP_IMG_URL
      const image = this.review.user.profile_image
      if (image === null || image === undefined) return IMG_URL + '/media/free-icon-popcorn-3418886.png'
      return IMG_URL + image
    },
  },
  created(){
    this.getStar()
  },
  methods: {
    getStar() {
      this.review_content = this.review.content
      const rank = this.review.rank
      for (let i = 0; i < 5; i++) {
        if (i < rank) this.stars += '⭐'
        else this.darkstar += '⭐'
      }
    },
    putReview(review_id) {
      const content = this.review_content
      const rank = this.selectedOption
      console.log(rank)
      const payload = {review_id,rank, content}
      this.$store.dispatch('putReview', payload)
    },
    ratestar(event){
      event.preventDefault()
    },
    deleteReview() {
      const payload = { review_id: this.review_id }
      this.$store.dispatch('deleteReview', payload)
    },
    setmodify() {
      this.modifyreview = !this.modifyreview
    },
  },
}
</script>
  
<style scoped>


.img-thumbnail {
  border-color: transparent;
  position: relative;
  width: 60px;
  height: 60px;
}
.star{
    font-size: 0.7em; /* 이모지 크기 */
    color: transparent; /* 기존 이모지 컬러 제거 */
    text-shadow: 0 0 0 rgb(255, 230, 0); /* 새 이모지 색상 부여 */
}
.darkstar{
    font-size: 0.7em; 
    color: transparent; 
    text-shadow: 0 0 0 #f0f0f0; 
}
#myform fieldset{
    display: inline-block; /* 하위 별점 이미지들이 있는 영역만 자리를 차지함.*/
    border: 0; /* 필드셋 테두리 제거 */
}
#myform input[type=radio]{
    display: none; /* 라디오박스 감춤 */
}
#myform label{
    font-size: 0.7em; 
    color: transparent;
    text-shadow: 0 0 0 #f0f0f0;
}
#myform label:hover{
    text-shadow: 0 0 0 rgb(255, 230, 0); 
}
#myform label:hover ~ label{
    text-shadow: 0 0 0 rgb(255, 230, 0); /* 마우스 호버 뒤에오는 이모지들 */
}
#myform fieldset legend{
    text-align: left;
}
#myform fieldset{
    display: inline-block; /* 하위 별점 이미지들이 있는 영역만 자리를 차지함.*/
    direction: rtl; /* 이모지 순서 반전 */
    border: 0; /* 필드셋 테두리 제거 */
}#myform input[type=radio]:checked ~ label{
    text-shadow: 0 0 0 rgb(255, 230, 0); /* 마우스 클릭 체크 */
}
</style>
