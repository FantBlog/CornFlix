<template>
    <div  class="main">
        <!-- <HeaderLayout /> -->
        <div v-if="isStateOn">
        <h1>CORNFLIX</h1>
        </div>
        <div v-else>
        <router-link :to="{ name: 'movies' }">Home</router-link><br>
        <router-link :to="{ name: 'commu' }">Community</router-link>
        </div>
        <img @click="toggleOnOff" alt="home img" src="@/assets/popcorn/home.png">
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
name: 'HomeView',
components: {
    // HelloWorld
},
data() {
    return{
    isStateOn:true
    }
},
methods:{
    toggleOnOff(){
    this.isStateOn = !this.isStateOn;
    }
}
}
</script>
