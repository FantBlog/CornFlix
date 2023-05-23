<template>
  <div>
    <div v-if="modifyreview">
      <img :src="profileImage" alt="" class="img-thumbnail rounded-circle float-start">
      <div class="d-flex"><p class="star">{{ stars }}</p><p class="darkstar">{{ darkstar }}</p></div>
      <div class="d-flex justify-content-between">
        <router-link :to="{
          name: 'profile',
          params: {username: review.user.username }}">
          {{review.user.username}}
        </router-link>
        <p>{{ review.content }}
          <button class="btn btn-outline-secondary" @click="setmodify">[수정]</button>
          <button class="btn btn-outline-secondary" @click="deleteReview(review.id)">[삭제]</button>
        </p>
      </div>
    </div>
    <div v-else>
      <img :src="profileImage" alt="" class="img-thumbnail rounded-circle float-start">
      <div class="d-flex"><p class="star">{{ stars }}</p><p class="darkstar">{{ darkstar }}</p></div>
      <div class="d-flex justify-content-between">
        <p style="margin-right:20px;">{{ review.user.username }}</p>
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="review_content" :placeholder="review.content" :aria-label="review.content" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="setmodify">[취소]</button>
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="putReview(review.id)">[완료]</button>
        </div>
      </div>
    </div>
  </div>

</template>
  
<script>
export default {
  name: 'DetailView',
  props: {
    review:Object,
  },
  data() {
    return {
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
      const payload = {review_id, content}
      this.$store.dispatch('putReview', payload)
    },
    deleteReview(review_id) {
      const payload = {review_id}
      this.$store.dispatch('deleteReview', payload)
    },
    setmodify() {
      this.modifyreview = !this.modifyreview
    }
  }
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
    font-size: 1em; /* 이모지 크기 */
    color: transparent; /* 기존 이모지 컬러 제거 */
    text-shadow: 0 0 0 rgb(255, 230, 0); /* 새 이모지 색상 부여 */
}
.darkstar{
    font-size: 1em; /* 이모지 크기 */
    color: transparent; /* 기존 이모지 컬러 제거 */
    text-shadow: 0 0 0 #f0f0f0; /* 새 이모지 색상 부여 */
}
</style>