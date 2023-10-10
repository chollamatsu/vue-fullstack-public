<template>
  <ul>
    <section name="card-header" class="card header">
      <img src="../assets/spring-floral.jpg" />
    </section>

    <section name="card-body" class="card body">
      <h1>body</h1>
    </section>
  </ul>
</template>

<script>
export default {
  name: "CardComponent",
  data(){
    return{
      message:"card info"
    }
  },
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  border-radius: 5px;
  width: 50%;
    height: auto;
}
.card.header {
  background-color: rgb(208, 223, 144);
}
.card.body {
  background-color: rgb(109, 149, 184);
}
img {
  width: 40%;
}
</style>
