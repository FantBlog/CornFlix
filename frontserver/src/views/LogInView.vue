<template>
  <div class="background-container d-flex align-items-center justify-content-center mx-0">
    <!-- <div class="" style="height: 100%;"> -->
      <div class="card">
        <div class="card-body">
          <h1 class="text-center">Log In Page</h1>
          <form @submit.prevent="logIn">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="form-group">
              <label for="password1">Password:</label>
              <input type="password" class="form-control" id="password1" v-model="password">
            </div>
            <div>
              <button type="submit" class="btn btn-primary btn-block">Login</button>
              <p>계정이 없으신가요?<button @click="signUp" class="btn btn-primary btn-block">회원가입</button> 을 누르세요</p>
            </div>
          </form>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    logIn(event) {
      event.preventDefault();
      
      const username = this.username
      const password = this.password

      const payload = {
        username, password
      }
      this.$store.dispatch('logIn', payload)
    },
    signUp(event) {
      event.preventDefault()
      this.$router.push({name:'signup'})
    }
  }
}
</script>
<style scoped>
.background-container {
  /* position: fixed; */
  /* top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
  /* z-index: 0; */
  background-image: url("~@/assets/popcorn/popcorn.png");
  background-size: cover;
}

.card {
  width: 500px;
  background-color: rgba(15, 15, 15, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 576px) {
  .card {
    width: 90%;
  }
}
</style>
