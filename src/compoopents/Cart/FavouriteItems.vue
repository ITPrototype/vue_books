<template>
    <div class="content">
        <table>
        <thead>
          <tr>
              <th>Book</th>
              <th  class="center">Book Url</th>
              <th  class="center">Book Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book of tabbooks" :key="book">
            <td>{{book.title}}</td>
            <td  class="center"><a href={{book.url}}>Url</a></td>
            <td  class="center">{{book.price}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
export default {
   data(){
        return{
            title:'',
            url:'',
            price:'',
            tabbooks:[]
        }
   },
   methods:{
       getData(){
           this.tabbooks = 
                JSON.parse(localStorage.getItem('favourite-book')) || [];
       }
   },
   mounted(){
       this.getData()
   }
}
</script>
<style scoped>
    .content{
        width: 80%;
        margin: 20px auto;
        height: 500px;
    }
    .center{
        text-align: center;
    }
</style>