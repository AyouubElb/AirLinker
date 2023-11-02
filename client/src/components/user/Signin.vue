<template lang="">
  <form>
    <div class="mb-3 text-start">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        :style="{ border: errorBorderStyle, 'box-shadow': errorBoxShadowStyle }"
        id="email"
        placeholder="Enter email address"
        v-model="user.email"
      />
    </div>
    <div class="mb-3 text-start">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        :style="{ border: errorBorderStyle, 'box-shadow': errorBoxShadowStyle }"
        id="password"
        placeholder="Enter password"
        v-model="user.password"
      />
    </div>
    <div class="text-error text-start">
      <p>{{ error }}</p>
    </div>
    <button
      type="submit"
      class="btn btn-dark"
      @click.prevent="connexion"
      @keyup.prevent="connexion"
    >
      Sign in
    </button>
    <div class="mt-4">
      <router-link to="/account/forgotten-password" style="color: black"
        >Forgot Password?</router-link
      >
    </div>
  </form>
</template>
<script>
import { API_URL } from "../../config";
import toastr from "toastr";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  computed: {
    errorBorderStyle() {
      return this.error ? "1px solid rgb(191, 46, 53, 1)" : "";
    },
    errorBoxShadowStyle() {
      return this.error ? "none" : "";
    },
  },
  methods: {
    connexion() {
      fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            this.error = res.error;
          } else {
            localStorage.setItem("jwt_info", JSON.stringify(res));
            this.$router.push("/");
          }
        })
        .catch((err) => {
          toastr.error(err, "Server Error!", {
            positionClass: "toast-bottom-left",
          });
        });
    },
  },
};
</script>
<style>
.text-error {
  color: rgb(191 46 53/1);
}
</style>
