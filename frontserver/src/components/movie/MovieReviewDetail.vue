<template>
    <div>
        <p>1</p>
    <div v-if="modifyreview">
      <p>{{ review.content }}
        <button @click="setmodify">[리뷰 수정]</button>
        <button @click="deleteReview(review.id)">[리뷰 삭제]</button>
      </p>
    </div>
    <div v-else>
      <input type="text" v-model="review_content">
      <button @click="setmodify">[취소]</button>
      <button @click="putReview(review.id)">[완료]</button>
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
        modifyreview:true,
      }
    },
    methods: {
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
  