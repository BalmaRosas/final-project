<template>
<div class="bg-ecru rounded shadow-md w-100 my-10 mx-12 py-10 px-10 lg:px-60">
  <!-- mx-10 my-10 px-80 py-10 -->
  
        <h1 class="text-3xl font-semibold text-center text-gray-800">Add a task</h1>
        <h2 class="text-xl text-center text-gray-400 mt-2 mb-10">Keep your notes and ideas organized</h2>

 
          <div class="mb-3 mt-4">
            <label class="mb-2 block text-s font-semibold text-gray-800">Title:</label>
            <input type="text" placeholder="Write a title" class="block w-full rounded-md border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 py-1 px-1.5 text-gray-500" 
            v-model="taskTitle" required/>
          </div>

          <div class="mb-3 mt-4">
            <label class="mb-2 block text-s font-semibold text-gray-800">Description:</label>
            <input type="text" placeholder="Write a description" class=" block w-full rounded-md border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 py-1 px-1.5 text-gray-500" 
            v-model="taskDescription"/>
          </div>

          <div class="mb-3 mt-4">
            <p class="text-center text-orange text-xs font-semibold" v-show="errorMsg">{{ errorMsg }}</p>
            <button @click="addTask" class="green-button mt-10 block w-full text-center text-white bg-purple-700 px-2 py-1.5 rounded-md">Add task</button>
          </div>
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
  // si el largo del valor que el usuario ha metido es m??s corto que 0, o sea no ha escrito nada
  if (taskTitle.value.length === 0 || taskDescription.value.length === 0 ) {
    //el error pasar??a ser TRUE (SE MOSTRAR??)
    showError.value = true;
    //y te aparecer?? este mensaje
    errorMsg.value = "Please, fill both fields";
    setTimeout(() => {
      //el error pasar??a ser FALSE (DEJAR?? DE  MOSTRARSE)
      errorMsg.value = false;
      // cuando pasen 6000 milisegundos
    }, 5000);
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

</style>
