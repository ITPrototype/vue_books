<template>
    <div class="container">
        <div class="ava">
            <img class="rasm" src="https://avatars.githubusercontent.com/u/94013172?v=4" alt="avatarka">
        </div>
        <h1 style="text-align:center; text-decoration: underline;">ITPrototype</h1>
        <section class="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptatibus dolorum, facilis veniam rerum repellat eos sequi expedita minima ipsa temporibus ex libero quis porro quasi enim esse corrupti? Ipsam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto voluptas omnis quibusdam vel odio nesciunt tempora porro deserunt esse odit nobis voluptates ducimus, aliquid tempore cumque modi neque eos.</p>
        </section><hr>
        <div class="social">
            <a href="https://instagram.com/mamedov.kemrannn"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/kamron-mamedov-177396237/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/ITPrototype"><i class="fa-brands fa-github"></i></a>
            <a href="https://t.me/DjdgsuTbshsgK12"><i class="fa-brands fa-telegram"></i></a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .container{
        width: 80%;
        margin: 0 auto;
    }
    .ava{
        width: 165px;
        margin: 20px auto;
        border-right: 2px solid black;
        border-radius: 150px;
        padding: 5px;
    }
    .rasm{
        width: 150px;
        border-radius: 100px;
    }
    .social{
        width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 10px auto;
    }
    .text{
        margin: 40px auto;
    }
    .social a{
        font-size: 29px;
    }
    .social a .fa-instagram{
        color: rgb(149, 36, 177);
    }
    .social a .fa-telegram{
        color: rgb(18, 180, 255);
    }
    .social a .fa-github{
        color: rgb(0, 0, 0);
    }
    .social a .fa-linkedin{
        color: rgb(81, 0, 255);
    }
</style>