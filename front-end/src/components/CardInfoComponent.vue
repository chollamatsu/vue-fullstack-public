<template>
  <CardComponent>
    <template v-slot:card-header
      ><!-- สร้าง template มาเพื่อเอาไว้ map เข้ากับ slot ที่เราจองพื้นที่หรือวางโครงไว้ที่ card component -->
      <h3>{{ message }}</h3>
      <!-- <span class="ribbon">NEW</span> -->
      <!-- ถ้าเราอยากแทรกข้อมูลอพไรลงใน card ก็แทรกลงไปในนี้แล้วมันก็จะไป แทรกให้ใน card component -->
    </template>
    <template v-slot:card-body> 
        <span>{{ fname }}</span>
        <span>{{ lname }}</span>
        <span>{{ email }}</span>
    </template>
  </CardComponent>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
export default {
  name: "CardInfo",
  components: {
    CardComponent,
  },
  props: {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    email: {
      type: String,
    },
  },
};
</script>

<style scoped>
.ribbon {
  width: 60px;
  font-size: var(--font-s);
  padding: 4px;
  position: absolute;
  right: -25px;
  top: -12px;
  text-align: center;
  border-radius: 25px;
  transform: rotate(20deg);
  background-color: var(--product-background-color);
  color: var(--white-2);
}
</style>
