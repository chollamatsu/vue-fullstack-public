<template>
  <div>
    <h1>home</h1>
    <!-- <div v-if="obj.length > 0">
      <h1>home</h1>
    </div>
    <div v-else class="loading-wrap">
      <LoadingPage></LoadingPage>
    </div> -->
  </div>
</template>

<script>
// import LoadingPage from "./LoadingPage.vue";
export default {
  name: "HomePage",
  data() {
    return {
      obj: [],
    };
  },
};
</script>

<style scoped>
</style>
