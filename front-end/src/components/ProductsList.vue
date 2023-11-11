<template>
  <div class="grid-wrap">
    <div class="product-item" v-for="product in products" :key="product.id">
      <img :src="product.imageUrl" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <router-link :to="'/productdetail/' + product.id">
        <button >{{ titles.VIEW_DETAIL }}</button>
      </router-link>
      <button @click="onDeleteProduct(product)" class="bg-red-50 hover:bg-red-500">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductList",
  props:["products"],
  components: {
    // eslint-disable-next-line
    axios,
  },
  data(){
    return {
      titles: {
        VIEW_DETAIL:"View Details",
      }
    }
  },
  methods: {
    async onDeleteProduct(product) {
      console.log("product item - id: ", product._id);
      const res = await axios.delete(`/api/products/${product._id}`);
      // await axios.delete(`/api/products/${product._id}`);
      console.log("delete response:", res);
      if (res) {
        alert("Delete Succesfully!");
      } else {
        alert("Delete Unsuccesfully!")
      }
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid var(--product-list-border-color);
  background-color: var(--product-list-background-color);
}

button:hover {
  border: 1px solid var(--product-list-hover-border-color);
  background-color: var(--product-list-hover-background-color);
  color: var(--font-hover-color);
}

.grid-wrap {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
}

.product-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  border: 1px solid var(--border-product);
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 2%;
  width: 32%;
}

.product-item img {
  height: 200px;
  width: 200px;
  border-radius: 6px;
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
