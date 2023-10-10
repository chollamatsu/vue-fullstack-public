<template>
  <div class="grid-wrap">
    <div class="product-item" v-for="product in products" :key="product.id">
      <img :src="product.imageUrl" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <router-link :to="'/productdetail/' + product.id">
        <button >{{ titles.VIEW_DETAIL }}</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props:["products"],
  data(){
    return {
      titles: {
        VIEW_DETAIL:"View Details",
      }
    }
  }
};
</script>

<style scoped>
.grid-wrap {
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #ddd085c7;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-item img {
  height: 200px;
  width: 200px;
}

.product-item a {
  width: 100%;
}

.product-item button {
  width: 100%;
}

.product-name {
  margin-bottom: 0;
}
</style>
