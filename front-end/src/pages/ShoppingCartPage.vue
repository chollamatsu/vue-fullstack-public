<template>
  <div>
    <!-- <h1>{{ message }}</h1> -->
    <div v-show="isVisible" >
      <div v-for="index in 5" :key="index">
        <SkeletonItem></SkeletonItem><br>
      </div>
    </div>
    <div v-if="cartItems.length > 0">
      <ShoppingCartListVue
        @remove-from-cart="removeFromCart($event)"
        :cartItems="cartItems"
      ></ShoppingCartListVue>
      <button @click="processItems" class="checkout-button">
        {{ titles.PROCESS_TO_CHECK_OUT }}
      </button>
    </div>
    <div v-if="cartItems.length === 0">
      {{ titles.CART_ITEM_STATUS }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ShoppingCartListVue from "../components/ShoppingCartList.vue";
import SkeletonItem from "../components/SkeletonItem.vue";

export default {
  name: "ShoppingCartPage",
  data() {
    return {
      message: "Shopping Cart",
      cartItems: [],
      isVisible: true,
      titles: {
        PROCESS_TO_CHECK_OUT: "Process to Checkout.",
        CART_ITEM_STATUS: "You current have no items in your cart!",
      }
    };
  },
  components: {
    ShoppingCartListVue,
    SkeletonItem,
  },
  methods: {
    async removeFromCart(productId) {
      const response = await axios.delete(`/api/users/1234/cart/${productId}`);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
      alert("delete item successfully!!!");
    },
    processItems() {
      alert("process items");
    },
  },
  async created() {
    const response = await axios.get("/api/users/1234/cart");
    const cartItems = response.data;
    this.cartItems = cartItems;
    this.isVisible = false;
  },
};
</script>

<style scoped>
.checkout-button {
  width: 100%;
}
</style>
