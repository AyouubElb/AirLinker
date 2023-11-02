<template lang="">
  <div class="text_right-container">
    <img src="../assets/AirLinker.png" class="w-16" alt="" />
    <h1>My AirLinker</h1>

    <div class="text-center login_signup">
      <div class="pb-3 mb-4">
        <button
          class="btn d-inline auth-buttons"
          :class="{ active: login }"
          @click="login = true"
        >
          Sign in
        </button>
        <button
          class="btn d-inline auth-buttons"
          :class="{ active: !login }"
          @click="login = false"
        >
          Sign up
        </button>
      </div>

      <Signin v-if="login" />

      <Signup v-else />
    </div>
  </div>
</template>
<script>
import Signin from "./user/Signin.vue";
import Signup from "./user/Signup.vue";
export default {
  components: {
    Signin,
    Signup,
  },
  data() {
    return {
      login: true,
    };
  },
  methods: {},
};
</script>
<style>
.w-16 {
  width: 7rem;
}

.text_right-container {
  text-align: center;

  font-family: Ubuntu, sans-serif;
  width: 60%;
}

.text_right-container h1 {
  color: #295dbd;
  font-weight: 600;
  font-size: 23px;
  margin: 0px 0px 20px;
}

.login_signup .auth-buttons {
  border: none;
  font-size: 14px;
  padding: 14px 0px;
  color: #6e6e6e;
  font-weight: 600;
  border-radius: 0;
  width: 50%;
  border-bottom: 1px solid #e5e7eb;
}

.login_signup .active {
  color: #1b1b1b;
  border-bottom: 3px solid #1b1b1b;
}

.login_signup form {
  font-size: 14px;
  font-weight: 500;
  color: black;
}

.login_signup form label {
  margin-bottom: 4px;
}

.login_signup form button {
  font-weight: 600;
  font-size: 14px;
  color: white;
  width: 100%;
  background-color: black;
  padding: 0.5rem;
  border-radius: 9999px;
}
</style>
