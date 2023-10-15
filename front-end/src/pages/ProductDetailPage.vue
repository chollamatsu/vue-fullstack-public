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
        <cartIconVue/>
          {{ titles.ADD_TO_CART }}
        </button>
        <button v-else class="grey-button cursor-not-allowed">
          {{ titles.ITEM_ADDED }}
        </button>
        <button @click="OnEdit" class="edit-btn bg-orange-50 hover:bg-orange-500">Edit</button>
        <div v-if="isEdit">
          <span>Edit name: </span>
          <input type="text" v-model="name"><br>
          <span>Edit name: </span>
          <input type="text" v-model="price">
          <button @click="OnUpdate">Update Name</button>
        </div>
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
import cartIconVue from '../components/icons/cartIcon.vue';

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
      },
      isEdit: false,
      name: '',
      price: '',
    };
  },
  components: {
    NotFoundPage,
    cartIconVue
  },
  methods: {
    async addToCart() {
      await axios.post("/api/users/1234/cart", {
        id: this.$route.params.productId,
      });
      alert("Items added successfully!!!");
    },
    OnEdit() {
      console.log("product detail:", this.product);
      this.isEdit = !this.isEdit;
    },
    async OnUpdate() {
      // const oldName = this.product.name;
      this.product.name = this.name;
      this.product.price = this.price;
      console.log("name product updated!!!", this.product);
      const response = await axios.post(`/api/product/${this.product.id}`, this.product)
      console.log("update name response:", response);
      if(response) {
        this.isEdit = !this.isEdit;
        alert("name product updated!!!");
      } else {
        alert("Failed to update!!!");
      }
    }
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
