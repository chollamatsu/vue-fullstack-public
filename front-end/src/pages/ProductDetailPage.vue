<template>
  <div>
    <div v-if="product">
      <div class="img-wrap">
        <img :src="product.imageUrl" />
      </div>
      <div class="product-details">
        <div class="detail-title">
          <h2>{{ product.name }}</h2>
          <h3>{{ product.price }}</h3>
        </div>

        <button
          @click="addToCart"
          class="add-to-cart"
          v-if="!isInCart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {{ titles.ADD_TO_CART }}
        </button>
        <button v-else class="grey-button cursor-not-allowed">
          {{ titles.ITEM_ADDED }}
        </button>
      </div>
    </div>
    <div v-else>
      <NotFoundPage></NotFoundPage>
    </div>
  </div>
</template>

<script>
import NotFoundPage from "./NotFoundPage.vue";
import axios from "axios";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      // message: "This is product detail page!",
      product: {},
      cartItems: [],
      titles: {
        ADD_TO_CART: "Add to Cart",
        ITEM_ADDED: "This item is added"
      }
    };
  },
  components: {
    NotFoundPage,
  },
  methods: {
    async addToCart() {
      await axios.post("/api/users/1234/cart", {
        id: this.$route.params.productId,
      });
      alert("Items added successfully!!!");
    },
  },
  computed: {
    isInCart() {
      return this.cartItems.some(
        (item) => item.id === this.$route.params.productId
      );
    },
  },
  async created() {
    const response = await axios.get(
      `/api/products/${this.$route.params.productId}`
    );
    const cartResponse = await axios.get(`/api/users/1234/cart`);
    const product = response.data;
    this.product = product;
    console.log("detail:", response);

    // const proditems = items.data.find(id => id === product.id)
    const cartItems = cartResponse.data;
    this.cartItems = cartItems;
  },
};
</script>

<style scoped>
.product-details {
  padding: 16px;
  position: relative;
}

.detail-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.add-to-cart {
  width: 100%;
  margin-top: 16px;
  background-color: var(--green-2);
}

.add-to-cart:hover {
  background-color: var(--green-1);
}

svg {
  display: unset;
}
</style>
