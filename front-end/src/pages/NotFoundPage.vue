<template>
  <!-- <h1>page not found</h1> -->
<img :src="notfound">
</template>

<script>
import notfound from '@/assets/page-not-found.gif'
export default {
    name:"NotFoundPage",
    data(){
        return{
            notfound,
        }
    }
}
</script>

<style>

</style>