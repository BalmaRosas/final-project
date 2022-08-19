<template>
  <nav>
    <h2>Hola {{ name[0] }}</h2> 
     <button @click="signOut">Log Out</button>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
//constant to save a variable that will hold the use router method
// const route = "/auth/login";
// const buttonText = "Log Out"
// constant to save a variable that will get the user from store with a computed function imported from vue
const userStore = useUserStore();
// constant that calls user email from the useUSerStore
const email = userStore.user.email;
// constant that saves the user email and cleans out the @client from the user
const name = email.split("@");
// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const redirect = useRouter();

const signOut = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signOut();
    // redirects user to the homeView
    redirect.push({ path: "/auth/login" });
  } catch (error) {
    // displays error message
    errorMsg.value = error.message;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  };
}
</script>

<style></style>
