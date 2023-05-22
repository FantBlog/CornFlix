<template>
    <div @click="toggleOn" class="background-container d-flex align-items-center justify-content-center mx-0">
        <div v-if="isStateOn">
            <h1 class="tracking-in-expand cornflix">CORNFLIX</h1>
        </div>
        <div class="scale-up-center" v-else>
            <div class="text-container align-items-end">
                <router-link :to="{ name: 'movies' }">Home</router-link><br>
            </div>
            <div class="text-container">
                <router-link :to="{ name: 'commu' }">Community</router-link>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
name: 'HomeView',
components: {
},
data() {
    return{
    isStateOn:true
    }
},
methods:{
    toggleOn(){
    this.isStateOn = false
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

.scale-up-center {
  height: 350px;
  width: 350px;
  background-color: rgba(0, 0, 0, 0.8);
  animation: scale-up-center 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.1s both;
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
.text-container > a {
  font-size: 50px;
  color: white;
  text-decoration: none;
}
.scale-up-center a:hover {
  font-size: 64px;
  transition: font-size 0.3s ease-in-out;
}
</style>
