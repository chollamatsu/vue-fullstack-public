<template>
    <img :src="waterLoading" alt="">
</template>

<script>
import waterLoading from "../assets/waterloading.gif"
export default {
    name:"LoadingPage",
    data(){
        return{
            waterLoading
        }
    }
}
</script>

<style>

</style>