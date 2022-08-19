<template>
  <div>Sign Up</div>
  <PersonalRouter :route="route" :buttonText="buttonText" />
  <form @click.prevent="SignUp">
    <input type="text" placeholder="e-mail" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <input type="password" placeholder="confirm password" v-model="password">
    <input type="submit">
  </form>
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
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/auth" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};

</script>

<style></style>
