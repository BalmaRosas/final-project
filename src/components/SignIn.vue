<template>
  
  <div class="form-container">
    <div class="title-container">
      
      <img id="logo" src="/images/logo.png" alt="Remind logo">
      <h1>Log In to Remind!</h1>
      <h3>The cutest to-do app you will find</h3>
    </div>
    <form @submit.prevent="signIn">
      <!-- <div class="input-line"> -->
        <i class="material-icons">email</i>
        <input type="email" placeholder="write your e-mail" v-model="email" required class="input-field" >
      <!-- </div>  -->
      <input type="password" placeholder="write your password" v-model="password" required class="input-field">
      <button type="submit" class="submit-button">Log in</button>
    </form>
    <div class="bassline-container">
      <span>Don't have an account? </span><PersonalRouter :route="route" :buttonText="buttonText" />
      <p v-show="errorMsg">{{ errorMsg }}</p>
      <p>balma.rosas@gmail.com</p>
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

.form-container {
  background-color: #fdfaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  height: 75vh;
  border-radius: 3%;
  position: absolute;
  top: 10vh;
  left: 20vw;
  right: 20vw;
  bottom: 10vh;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: rgb(44, 44, 44);
}

h3 {
  margin-top: 0px;
  font-weight: 500;
  color: rgb(98, 98, 98);
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 37vh;
  width: 100%;
  max-width: 350px;
}

/* .input-line {
  display: flex;
  flex-direction: row;
} */

.material-icons {
  color: rgb(98, 98, 98);
  
}

.input-field {
  /* border: 0px; */
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-color: rgb(98, 98, 98);
  background-color: #fdfaf5;
  font-size: 16px;
  font-weight: 400;

}

.submit-button {
  background-color: #9fae87;
  color: white;
  border: 0px;
  /* border-radius: 7%; */
  height: 3rem;
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  font-size: 21px;
}

.bassline-container {
 text-align: center;
 margin-top: 1rem;
}

span {
  color: rgb(44, 44, 44);
  
}

</style>
