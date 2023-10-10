<template>
  <div>
    <div v-if="products.length > 0">
      <h1>{{ message }}</h1>
      <ProductsList :products="products"></ProductsList>
    </div>
    <div v-else>
      <div class="loading-wrap">
        <LoadingPage></LoadingPage>
      </div>
      
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/ProductsList.vue";
import axios from "axios";
import LoadingPage from "./LoadingPage.vue";
export default {
  name: "ProductsPage",
  data() {
    return {
      message: "Products",
      products: [],
    };
  },
  components: {
    ProductsList,
    LoadingPage
  },
  async created() {
    //this function is automatically called by view as soon as this page is created.
    //the url can coppy from postman by the way it may get some err by CORS cuz it againt request from 2 differ origin => config proxy
    const response = await axios.get("/api/products"); //request to backend
    const products = response.data;

    this.products = products; //assign data tha we got back from server to products in data-function
  },
};
</script>

<style></style>
