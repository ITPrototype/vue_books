<template>
      <div class="card" v-for="book of books" :key="book">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" id="rasm" :src="book.image" alt={{book.title}}>
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{{books.title}}<i class="material-icons right">more_vert</i></span>
            <p>{{book.title}}</p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">{{book.title}}<i class="material-icons right">close</i></span>
            <p>{{book.subtitle}}</p>
            <button @click="addBook(book)" class="btn waves-effect waves-light" type="submit" name="action">{{textbtn}}
                <i class="material-icons right">{{iconbtn}}</i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        books:{
            type:Array,
            required:true
        }
    },
    data(){
        return{
            favouriteBooks:[],
            textbtn:'Add',
            iconbtn:'add'
        }
    },
    methods:{
        addBook(book){
            this.favouriteBooks.indexOf(book)===-1 ? this.favouriteBooks.push(book) && localStorage.setItem('favourite-book',JSON.stringify(this.favouriteBooks))
            :alert(`You alreader added 👉 "${book.title}"`)
            this.favouriteBooks.includes(book) ? this.textbtn = 'Add' : this.textbtn = 'Added' ;
        }
    }
}
</script>

<style scoped>
    #rasm{
        width: 100%;
        height: 300px;
    }
    #rasm:hover{
        transition: 0.9s;
        transform: scale(1.1);
    }
    .card{
        width: 250px;
    }
</style>