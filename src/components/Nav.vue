<template>

<nav class="ecru shadow-md">
  <!-- <div class="bg-black max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"> -->
    
    

    <div class=" relative flex items-center justify-between w-full h-16 mx-5">
      <div class="flex items-center">
        <img class="w-9" src="https://res.cloudinary.com/dtqumztbl/image/upload/v1661428448/ironhack-to-do-app/images/orange_logo_kndd1y.png" alt="app logo">
        <h1 class="orange-text text-2xl font-semibold text-center ml-2">Note App</h1>
      </div>
      <div class="flex items-center">
        <p class="text-sm font-medium mr-5" >Hey {{ name[0] }}!</p>
        <button @click="signOut" class="bg-olive text-white px-3 py-2 rounded-md text-sm font-medium" >Log out</button>
      </div>
    </div>
  <!-- </div> -->

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

<style>

nav {
  background-color: #fdfaf5;
  display: flex;
  justify-content:space-between;
  padding: 6rem -1rem;
}

.logo-name {
  display: flex;
  flex-direction: row;
  align-items:flex-start;
  
}

.right-container {
  display: flex;

}

#logout-button {
  background-color: #9fae87;
  color: white;
  border: 0px;
  /* border-radius: 7%; */
  height: 3rem;
  width: 6rem;
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  margin-left: 1rem; 
}

</style>
