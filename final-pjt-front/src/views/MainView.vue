<template>
  <div @click="toggleOn" class="background-container d-flex align-items-center justify-content-center mx-0">
    <div v-if="isStateOn">
      <h1 v-if="stateOn" class="tracking-in-expand cornflix">CORNFLIX</h1>
      <h1 v-else class="tracking-out-contract cornflix">CORNFLIX</h1>
    </div>
    <div v-else>
      <div class="scale-up-center">
        <div class="text-container align-items-end">
          <router-link :to="{ name: 'movies' }">Movies</router-link><br>
        </div>
        <div class="text-container">
          <div v-if="isLogin">
            <router-link :to="{ name: 'commu' }">Community</router-link>
          </div>
          <div v-else>
            <router-link :to="{ name: 'login' }">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
name: 'HomeView',
components: {
},
computed: {
    ...mapGetters(['isLogin']),
    username() {
      return this.$store.state.user.username
    }
  },
  data() {
      return{
      isStateOn:true,
      stateOn:true
      }
    },
  created() {
    this.toogleHeader()
  },
  destroyed() {
    this.toogleHeader()
  },
  methods: {
    toogleHeader() {
      this.$store.dispatch('toggleHeader')
    },
    toggleOn() {
      this.stateOn = false
      setTimeout(() => {
          this.isStateOn = false
      }, 1000);
    }
  }
}
</script>

<style scoped>
.background-container {
  background-image: url("~@/assets/popcorn/popcorn.png");
  background-size: cover;
}

.cornflix{
    font-size: 120px;
    color: white;
}
.tracking-in-expand {
	animation: tracking-in-expand 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
.tracking-out-contract {
	animation: tracking-out-contract 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
@keyframes tracking-out-contract {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
}

.scale-up-center {
  height: 350px;
  width: 350px;
  background-color: rgba(0, 0, 0, 0.8);
  animation: scale-up-center 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  display: flex;
  flex-direction: column; 
  /* align-items: center; */
  /* justify-content: center; */
  position: relative;
}
@keyframes scale-up-center {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
.text-container {
  flex: 1;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
a {
  font-size: 50px;
  color: white;
  text-decoration: none;
}
.scale-up-center a:hover {
  font-size: 64px;
  transition: font-size 0.3s ease-in-out;
}
</style>
