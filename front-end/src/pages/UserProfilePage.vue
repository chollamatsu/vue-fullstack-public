<template>
  <CardInfoComponent
    :fname="profileInfo.fname"
    :lname="profileInfo.lname"
    :email="profileInfo.email"
  >
  </CardInfoComponent>
</template>

<script>
import CardInfoComponent from "@/components/CardInfoComponent.vue";

export default {
  name: "UserProfilePage",
  components: {
    CardInfoComponent,
  },
  methods: {
    editInfo() {
      console.log("edit info");
    },
    data() {
      return {
        message: "test",
        profileInfo: {},
      };
    },
    created() {
      const profileInfo = {
        fname: "first",
        lname: "last",
        email: "email",
      };
      this.profileInfo = profileInfo
    },
  },
};
</script>

<!-- connot pass the section  -->
