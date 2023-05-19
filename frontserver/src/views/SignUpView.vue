<template>
  <div class="background-container d-flex align-items-center justify-content-center mx-0">
    <!-- <div class="" style="height: 100%;"> -->
      <div class="card">
        <div class="card-body">
          <h1 class="text-center">Sign Up Page</h1>
          <form @submit.prevent="signUp">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="form-group">
              <label for="password1">Password:</label>
              <input type="password" class="form-control" id="password1" v-model="password1">
            </div>
            <div class="form-group">
              <label for="password2">Confirm Password:</label>
              <input type="password" class="form-control" id="password2" v-model="password2">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
          </form>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
    }
  },
  methods: {
    signUp() {
      const { username, password1, password2 } = this;
      const payload = { username, password1, password2 };
      this.$store.dispatch('signUp', payload);
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
  background-image: url("~@/assets/popcorn.png");
  background-size: cover;
}

.card {
  width: 500px;
  background-color: rgba(255, 255, 255, 0.7);
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
