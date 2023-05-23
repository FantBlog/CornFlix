<template>
  <div>
    <div v-if="!modifyreview">
      <p>
        <input type="number" v-model="review_rank">
        <input type="text" v-model="review_content">
        <button @click="putReview">[완료]</button>
        <button @click="setModify">[취소]</button>
      </p>
    </div>
    <div v-else>
      <p>{{ this.review.rank }} {{ this.review.content }}</p>
      <button @click="setModify">[수정하기]</button>
      <button @click="deleteReview">[리뷰 삭제]</button>
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
      review_content: '',
      review_rank: '',
      modifyreview: true,
    }
  },
  methods: {
    putReview() {
      // const rank = this.review_rank !== '' ? this.review_rank : this.review.rank;
      // const content = this.review_content !== '' ? this.review_content : this.review.content;
      // const review_id = this.review_id;
      // const payload = { rank, content, review_id };
      // this.$store.dispatch('putReview', payload);
    },
    deleteReview() {
      const payload = { review_id: this.review_id }
      this.$store.dispatch('deleteReview', payload)
    },
    setModify() {
      this.modifyreview = !this.modifyreview
      if (this.modifyreview) {
        this.review_content = this.review.content
        this.review_rank = this.review.rank
      } else {
        this.review_content = ''
        this.review_rank = ''
      }
    },
  }
}
</script>
