<template>
  <div class="add-task">
    <p>{{useUserStore().user.id}} hola</p>
    <h1>Add a new task</h1>
    <h3>Keep your life organized, prepare for a trip ? Start here</h3>
    <p v-if="showError">{{ errorMsg }}</p>
    <!-- <form @submit.prevent="addTask"> -->
      <input type="text" placeholder="write a title" v-model="taskTitle" class="input-field">
      <input type="text" placeholder="write a description" v-model="taskDescription" class="input-field">
      <!-- <button type="submit" class="submit-button">Create task</button> -->
      <button @click="addTask" class="submit-button">Create task</button>
    <!-- </form> -->
  </div>
</template>


<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { useTaskStore } from "../stores/task";
import { storeToRefs } from "pinia";

// constant to save a variable that define the custom event that will be emitted to the homeView
const emit = defineEmits([ "addingTask" ]);
// constant to save a variable that holds the value of the title input field of the new task
const taskTitle = ref("");

// constant to save a variable that holds the value of the description input field of the new task
const taskDescription = ref("");
// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showError = ref(false)
// const constant to save a variable that holds the value of the error message
const errorMsg = ref(null)
// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.

function addTask() {
  // si el largo del valor que el usuario ha metido es más corto que 0, o sea no ha escrito nada
  if (taskTitle.value.length === 0 || taskDescription.value.length === 0 ) {
    //el error pasaráa ser TRUE (SE MOSTRARÁ)
    showError.value = true;
    //y te aparecerá este mensaje
    errorMsg.value = "Please, fill both fields";
    setTimeout(() => {
      //el error pasaráa ser FALSE (DEJARÁ DE  MOSTRARSE)
      showError.value = false;
      // cuando pasen 6000 milisegundos
    }, 6000);
  }
   const task = {
    title: taskTitle.value,
    description: taskDescription.value,
  };
  emit("addingTask", task);
    taskTitle.value = "";
    taskDescription.value = "";
};

</script>

<style>
.add-task {
  background-color: #fdfaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  height: 75vh;
  border-radius: 3%;
  margin: 30px;
}
</style>
