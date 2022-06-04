import { createRouter, createWebHashHistory  } from "vue-router";
import FavouriteItems from '../compoopents/Cart/FavouriteItems.vue'
import MainBody from '../compoopents/Body/MainBody.vue'
import AboutUs from '../compoopents/About/AboutUs.vue'
export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',component:MainBody},
        {path:'/added',component:FavouriteItems},
        {path:'/about',component:AboutUs},
    ],
    linkActiveClass:'active',
    
})