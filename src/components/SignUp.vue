<template>
  <div class="form-container">
   <div class="title-container">
      <img id="logo" src="/images/logo.png" alt="Remind logo">
      <h1>Sign up in Remind!</h1>
      <h3>The cutest to-do app you will find</h3>
    </div>
    <form @submit.prevent="SignUp">
      <input type="email" placeholder="write your e-mail" v-model="email" required class="input-field">
      <input type="password" placeholder="pick a password" v-model="password" required class="input-field">
      <input type="password" placeholder="confirm your password" v-model="confirmPassword" required class="input-field">
      <button type="submit" class="submit-button">Create account</button>
    </form>
    <div class="bassline-container">
      <span>Already have an account? </span><PersonalRouter :route="route" :buttonText="buttonText" />
      <p v-show="errorMsg">{{ errorMsg }}</p>
    </div>
  </div>
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
const buttonText = "Sign in";




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
      await useUserStore().signUp(email.value, password.value);
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
