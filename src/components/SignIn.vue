<template>
<div class="form-container flex flex-wrap min-h-screen w-full content-center justify-center py-10">
  
  <!-- Login component -->
  <div class="flex shadow-md">
    <!-- Login form -->
    <div class="ecrue-ground flex flex-wrap content-center justify-center rounded-l-md" style="width: 24rem; height: 32rem;">
      <div class="w-72 flex flex-col items-center">
        <!-- Heading -->
        <img class="w-10" src="https://res.cloudinary.com/dtqumztbl/image/upload/v1661428448/ironhack-to-do-app/images/orange_logo_kndd1y.png" alt="app logo">
        <h1 class="orange-text text-2xl font-semibold text-center mt-2 mb-6">Note App</h1>
        <h1 class="text-xl font-semibold text-center text-gray-800">Welcome back!</h1>
        <h2 class="text-center text-gray-400 ">The cutest to do app you will find</h2>

        <!-- Form -->
        <form @submit.prevent="signIn" class="mt-4">
          <div class="mb-3">
            <label class="mb-2 block text-xs font-semibold text-gray-800">Email</label>
            <input type="email" placeholder="Enter your email" class="block w-full rounded-md border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 py-1 px-1.5 text-gray-500" 
            v-model="email" required/>
          </div>

          <div class="mb-3">
            <label class="mb-2 block text-xs font-semibold text-gray-800">Password</label>
            <input type="password" placeholder="*****" class=" block w-full rounded-md border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 py-1 px-1.5 text-gray-500" 
            v-model="password" required/>
          </div>

          <div class="mb-3">
            <p class="text-center text-amber-600 text-xs font-semibold" v-show="errorMsg">{{ errorMsg }}</p>
            <button class="green-button mb-1.5 block w-full text-center text-white bg-purple-700 px-2 py-1.5 rounded-md">Sign in</button>
            
          </div>
        </form>

        <!-- Footer -->
        <div class="text-center">
          <span class="text-xs text-gray-400 font-semibold">Don't have an account? </span><PersonalRouter class=" green-text text-xs font-semibold text-purple-700" :route="route" :buttonText="buttonText" />
          
        </div>
      </div>
    </div>

    <!-- Login banner -->
    <div class="flex flex-wrap content-center justify-center rounded-r-md" style="width: 24rem; height: 32rem;">
      <img class="w-full h-full bg-center bg-no-repeat bg-contain rounded-r-md" src="https://res.cloudinary.com/dtqumztbl/image/upload/v1661440324/ironhack-to-do-app/images/jess-bailey-FHCVK6Vyvwc-unsplash_dayh65.jpg">
    </div>

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
const route = "/auth/sign-up";
const buttonText = "Sign up";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
const hidePassword = ref(true);

const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/" });
  } catch (error) {
    // displays error message
    errorMsg.value = error.message;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style>



</style>
