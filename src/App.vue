<template>
  <HomePage v-if="showContent"></HomePage>
   <div class="loaderBody" v-if="showLoaderMain">
    <div class="waviy" >
    <span style="--i:1">I</span>
    <span style="--i:2">T</span>
    <span style="--i:3"> </span>
    <span style="--i:4">B</span>
    <span style="--i:5">O</span>
    <span style="--i:6">O</span>
    <span style="--i:7">K</span>
    <span style="--i:8">S</span>
  </div>
   </div>
</template>


<script>
import HomePage from "./compoopents/Home/HomePage.vue"
export default {
    components: { HomePage },
    data(){
      return{
        showLoaderMain:true,
        showContent:false
      }
    },
    methods:{
      showLoader(){
        setTimeout(()=>{
          this.showLoaderMain = false
          this.showContent = true
        },3000)
        this.showLoader = false
      }
    },
    mounted(){
        this.showLoader()
    }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
.loaderBody {
  background-color:  #151719;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0,0,0,.2));
  font-size: 60px;
}
.waviy span {
  font-family: 'Alfa Slab One', cursive;
  position: relative;
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(.1s * var(--i));

}
@keyframes waviy {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
}
</style>
