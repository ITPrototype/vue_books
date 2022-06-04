<template>
      <nav class="navbar teal lighten-2">
        <div class="nav-wrapper teal lighten-2">
        <a href="#" class="brand-logo">IT Books Store</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li ><router-link to="/"><i class="material-icons left">home</i> Home</router-link></li>
            <li><router-link to="/added"><i class="material-icons left">favorite_border</i> Favourite</router-link></li>
            <li><router-link to="/about"><i class="material-icons left">assignment_ind</i> About Us</router-link></li>
        </ul>
        </div>
    </nav>
</template>

<script>
export default {
    methods:{
        
    }
}
</script>

<style scoped>
    .navbar{
        padding: 0 10px;
    }
    a.active{
        background: rgba(0, 0, 0, 0.136);
    }
</style>