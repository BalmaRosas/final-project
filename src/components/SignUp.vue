<template>
  <div>Sign Up</div>
  <PersonalRouter :route="route" :buttonText="buttonText" />
  <form @submit.prevent="SignUp">
    <input type="text" placeholder="e-mail" v-model="email" required>
    <input type="password" placeholder="password" v-model="password" required>
    <input type="password" placeholder="confirm password" v-model="confirmPassword" required>
    <input type="submit">
  </form>
  <h2 v-show="errorMsg">{{ errorMsg }}</h2>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/login";
const buttonText = "Test the Sign In Route";




// Input Fields
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// Error Message
const errorMsg = ref("");

// Show hide password variable
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
// Show hide confrimPassword variable
const hidePassword = ref(true);



// Router to push user once SignedUp to Log In
const redirect = useRouter();

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
const SignUp = async () => {
  if(password.value === confirmPassword.value) {
    try {
      // calls the user store and send the users info to backend to logIn
      await useUserStore().signIn(email.value, password.value);
      // redirects user to the homeView
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      // displays error message
      errorMsg.value = error.message;
      // hides error message
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  else errorMsg.value = "Passwords do not match"
};

</script>

<style></style>
