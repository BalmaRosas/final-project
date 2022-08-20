<template>
  
  <div class="form-container">
    <div class="title-container">
      <img src="" alt="Remind logo">
      <h1>Log In to Remind!</h1>
      <h3>The cutest to do app you'll find</h3>
    </div>
    <form @submit.prevent="signIn">
    <p>balma.rosas@gmail.com</p>
    <input type="text" placeholder="write your e-mail" v-model="email" required>
    <input type="password" placeholder="write your password" v-model="password" required>
    <input type="submit" id="submit-button">
    </form>
    <div class="bassline-container">
      <!-- <p>Don't have an account yet?</p> -->
      <span>Don't have an account yet? </span><PersonalRouter :route="route" :buttonText="buttonText" />
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
const route = "/auth/sign-up";
const buttonText = "Sign Up for free";

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
body {
  background-color: rgb(200, 187, 239);
  margin: 0px;
}

.form-container {
  background-color: white;
  /* padding: 4rem;
  max-width: 1000px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5rem;
  border-radius: 3%;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30vh;
  width: 50vw;
  max-width: 350px;
}

#submit-button {
  background-color: rgb(99, 59, 136);
  color: white;
  /* border-radius: 7%; */
  height: 2rem;
}

/* .bassline-container {
  display: flex;
  flex-direction: row;
  
} */

</style>
