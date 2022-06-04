<template>
    <form class="form" @submit.prevent>
      <div class="input-field col s6">
          <input 
            id="search" 
            type="text" 
            class="validate"
            :value="query"
            @input="inputQuery"
          >
        </div>
        <button @click="getBooks()" class="btn waves-effect waves-light" type="submit" name="action">
          <i class="material-icons center">search</i>
        </button>
    </form>
    <div class="info">
      <span class="text-muted">Page:{{page}}</span>
      <span class="text-muted">Total books:{{total}}</span>
    </div>
    <div class="loader" v-if="showLoader">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    <div class="container" v-if="mainContent">
      <cards :books="this.booksArr"></cards>
    </div>
    <div class="NotFound" v-if="notfound">
        <h2 style="color: red; text-align: center;">Not found</h2>
    </div>
    <div class="pagination">
        <button @click="prevPage" class="btn waves-effect waves-light" type="submit" name="action">
         <i class="material-icons left">arrow_back</i>
          Prev
        </button>
        <button @click="nextPage" class="btn waves-effect waves-light" type="submit" name="action">Next
          <i class="material-icons right">arrow_forward</i>
        </button>
    </div>
</template>

<script>
import axios from 'axios'
import Cards from './Cards.vue'
export default {
  components: { Cards },
  data(){
    return {
      page:1,
      total:1,
      booksArr:[],
      query:'vue',
      showLoader: false,
      mainContent: true,
      notfound:false
    }
  },
  methods:{
    async getBooks(page = 1){
      this.showLoader = true
      this.mainContent = false
      try{
        const response = await axios.get(`https://api.itbook.store/1.0/search/${this.query}/${page}`);
        const data = response.data.books
        this.booksArr = data
        this.showLoader = false
        this.mainContent = true
        this.page = response.data.page
        this.total = response.data.total
        if(this.total == 0){
          this.notfound = true
        }else{
          this.notfound = false
        }
        console.log(response);
      }catch(error){
        console.log(error);
      }
    },
    async prevPage(){
      this.page--
      this.getBooks(this.page)
    },
    async nextPage(){
      this.page++
      this.getBooks(this.page)
    },
    inputQuery(event){
      this.query = event.target.value;
    }
  },
  mounted(){
    this.getBooks(this.page)
  }
}
</script>

<style scoped>
  .container{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .form{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 250px;
    margin: 20px auto;
  }
  .loader{
    margin: 150px auto;
    width: 100px;
  }
  .lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgb(0, 255, 187);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
.pagination{
  margin: 20px auto;
  width: 220px;
}
.pagination button{
  margin-left: 5px;
}
.info{
  margin: 5px auto;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-muted{
  color: gray;
}
.NotFound{
  width: 80%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>