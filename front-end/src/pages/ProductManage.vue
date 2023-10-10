<template>
  <div>
    <div>
      <span>{{ titles.CANVAS_NAME }}</span>
      <!-- <span>canvasName is: {{ canvasName }}</span> -->
      <input v-model="name" class="box-input" placeholder="ex. canvas name" />
    </div>
    <div>
      <span>{{ titles.PRICE }}</span>
      <input v-model="price" class="box-input" placeholder="ex. canvas name" />
    </div>
    <div>
      <span>{{ titles.IMG_URL }}</span>
      <input type="file" ref="image" @change="handleFileChange" />
      <span>{{ selectedFile }}</span>
    </div>
    <button @click="onSubmit">{{ titles.SUBMIT }}</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductManage",
  data() {
    return {
      id: null,
      name: "",
      price: null,
      imageUrl: "",
      userId: null,
      titles: {
        SUBMIT: "Submit",
        IMG_URL: "imageUrl : ",
        PRICE: "price : ",
        CANVAS_NAME: "canvas Name : ",
      },
      selectedFile: null,
    };
  },
  methods: {
    async onSubmit() {
      const formData = new FormData();
      formData.append("id", "01"); // Mock id
      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("image", this.$refs.image.files[0]);
      console.log("form data:", formData, {
        headers: {
          "Content-type": "multipart/form-data", // Important for file uploads.
        },
      });
      await axios.post("/api/upload", formData);
    },
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    }
  },
};
</script>

<style scoped>
.box-input {
  background-color: var(--input-product-background-color);
}
</style>
