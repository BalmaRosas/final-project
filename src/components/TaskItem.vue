<template>
  <div class="bg-ecru rounded shadow-md flex flex-col items-center px-4 py-9" v-if="editForm == false">
    <div class="h-16">
      <h2 class="text-xl font-semibold text-center text-gray-800">{{ task2.title }}</h2>
    </div>
    <div class="h-32">
      <p class="text-center text-gray-600">{{ task2.description }}</p>
    </div>
    <div class="flex">
      <button class="rounded bg-softred text-white px-2 py-1 rounded-md text-sm font-medium m-1" @click="emit('deleteTask', task2.id);">Delete</button>
      <button class="rounded bg-orange text-white px-2 py-1 rounded-md text-sm font-medium m-1" @click="editFormValue" >Edit</button>
      <button class="rounded text-white px-2 py-1 rounded-md text-sm font-medium m-1" @click="toggleTask" 
      :class="task2.is_complete ? 'done' : 'not-done'"
      >Done</button>
    </div>
  </div>

  <div v-if="editForm == true" class="bg-ecru rounded shadow-md flex flex-col items-center px-6 py-6 ">
    <!-- px-7 py-7 -->
    <input type="text" 
    placeholder="write your new title"
    v-model="newTitle"
    class="block w-full rounded-md border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 py-1 px-1.5 text-gray-500 mt-3 mb-7">
     <input type="text" 
    placeholder="write your new description"
    v-model="newDescription"
    class="block w-full rounded-md border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 pb-12 px-3 text-gray-500">
    <button @click="editTask(newTitle, newDescription, task2.id);" 
    class="bg-olive rounded text-white px-2 py-1 rounded-md text-sm font-medium mt-16">Confirm</button>
    
  </div>
  
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useTaskStore } from "../stores/task";


const infoUseTaskStore = useTaskStore();
//import func from "../../vue-temp/vue-editor-bridge";

const emit = defineEmits(["deleteTask", "toggleTask", "editTask", "editFormValue"]);

//const props = defineProps(["ENTER-PROP-HERE"]);
const props = defineProps({ task2: Object });

//como el @click no funciona bien con + de 1 evento, ponemos los 2 eventos (la función que cambiara el valor de is-complete y la clase de done) en una constante 2 en 1
const toggleTask = () => {
  props.task2.is_complete = !props.task2.is_complete
  emit('toggleTask', props.task2.id, props.task2.is_complete);
}

// constante que define el valor por defecto del div

const newTitle = ref("");
const newDescription = ref("");

const editForm = ref(false);

const editFormValue = () => {
  editForm.value = !editForm.value;};

async function editTask(newTitle, newDescription, id) {
    await infoUseTaskStore.editTask(newTitle, newDescription, id);
    console.log(newTitle, newDescription, id)
    infoUseTaskStore.fetchTasks(); 
    editFormValue();
};


</script>

<style>
/* .card-container {
  background-color: #fdfaf5;
  height: 150px;
  width: 150px;
  padding: 3rem;
  margin: 2rem;
} */

/* .task-button {
  color: white;
  border: 0px;
  /* border-radius: 7%; */
  /* cursor: pointer;
  font-weight: 400;
  font-size: 17px;
} */ 

.not-done {
  background-color: #6c783f;
}

.done {
  background-color: #7aafda;
}

/* .delete {
  background-color: #e37771;
} */

.edit {
  background-color: #ebc868;
}
</style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or like an object, up to you.
2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error, a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit the new task detail or details[this is in reference of the task title and the task description].
3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the status[completed, not complted] of the taskItem.
4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean empty variable.
5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the inputField will be used here to save the value as a prop on this function.
6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.
7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional that first checks if the value of the task [either title and description or just title] is empty which if true it runs the function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field to an empty string to clear it from the ui. 
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
