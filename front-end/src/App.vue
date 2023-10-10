<template>
  <div>
    <Navbar />
    <!-- <h1>Hello world</h1> -->

    <div class="page-wrap">
      <router-view></router-view>
    </div>
    <!-- test tailwind -->
    <!--  <div class="justify-center flex bg-yellow-300 items-center h-screen">
      <div class="text-4xl">Hello 👋🏼</div>
    </div> -->
    
    <!-- <FooterComponent/> -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import FooterComponent from "./components/FooterComponent.vue"

export default {
  name: "App",
  components: {
    Navbar,
    // FooterComponent
  },
};
</script>
<style src="@/styles/colors.css"></style>
<style src="@/styles/elements.css"></style>
<style src="@/styles/tailwind.css"></style>
<style src="@/styles/variablesDark.css"></style>
<style src="@/styles/variablesLight.css"></style>
