<template lang="">
  <form>
    <div class="mb-3 text-start">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
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
        id="password"
        placeholder="Enter password"
        v-model="user.password"
      />
    </div>
    <div class="mb-3 text-start">
      <label for="first_name" class="form-label">First name</label>
      <input
        type="text"
        class="form-control"
        id="first_name"
        placeholder="Enter first name"
        v-model="user.firstName"
      />
    </div>
    <div class="mb-3 text-start">
      <label for="last_name" class="form-label">Last name</label>
      <input
        type="text"
        class="form-control"
        id="last_name"
        placeholder="Enter last name"
        v-model="user.lastName"
      />
    </div>
    <button
      type="submit"
      class="btn btn-dark"
      @click.prevent="register"
      @keyup.prevent="register"
    >
      Create Account
    </button>
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
        firstName: "",
        lastName: "",
        getEmails: false,
      },
    };
  },
  methods: {
    register() {
      fetch(`${API_URL}/users/register`, {
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
            toastr.warning(res.error, "Please check form !", {
              positionClass: "toast-bottom-left",
            });
          } else {
            toastr.success("User is created SuccessFully", "New Account", {
              positionClass: "toast-bottom-left",
            });
            this.$router.push("/auth");
          }
        })
        .catch((err) => {
          toastr.error(err, "Server Error!", {
            positionClass: "toast-bottom-left",
          });
        });
    },
  },
  mounted() {},
};
</script>
<style></style>
