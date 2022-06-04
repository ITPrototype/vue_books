<template>
    <HeaderVue></HeaderVue>
    <router-view></router-view>
    <LastFooterVue></LastFooterVue>
</template>

<script>
import HeaderVue from "../Header.vue"
import LastFooterVue from "../LastFooter.vue"
import MainBody from "../Body/MainBody.vue"
export default {
    components:{ HeaderVue, LastFooterVue, MainBody }
}
</script>