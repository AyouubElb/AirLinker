<template lang="">
  <div class="row mx-0">
    <div class="col-md-6 auth-left position-relative">
      <Auth_Left />
    </div>
    <div class="col-md-6 auth-right d-flex justify-content-center">
      <Auth_Right />
    </div>
  </div>
</template>
<script>
import Auth_Left from "../components/Auth_Left.vue";
import Auth_Right from "../components/Auth_Right.vue";
export default {
  name: "Auth",
  components: {
    Auth_Left,
    Auth_Right,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
/* In your Auth.vue style section */

.auth-left {
  /* background-image: url("../assets/auth-img.jpg"); */
  /* Ensure the background image covers the entire div */
  background-size: cover;
  /* Center the background image horizontally and vertically */
  background-position: center 25%;
  width: 45%;
}

.full-height-bg {
  height: 100vh;
}

.auth-right {
  width: 55%;
  padding: 90px 32px 32px;
}
</style>
