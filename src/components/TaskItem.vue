<template>
  <div v-if="editForm == false" class="card-container">
    <h2>{{ task2.title }}</h2>
    <p>{{ task2.description }}</p>
    <button @click="emit('deleteTask', task2.id);" class="task-button delete">Delete</button>
    <button @click="editFormValue" class="task-button edit">Edit</button>
    <button @click="toggleTask" 
    class="task-button" :class="task2.is_complete ? 'done' : 'not-done'"
    >Done</button>
  </div>

  <div v-if="editForm == true" class="card-container">
    <input type="text" 
    placeholder="write your new title"
    v-model="newTitle">
     <input type="text" 
    placeholder="write your new description"
    v-model="newDescription">
    <button @click="editTask(newTitle, newDescription, task2.id);" 
    class="task-button edit">Confirm</button>
    
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
.card-container {
  background-color: #fdfaf5;
  height: 150px;
  width: 150px;
  padding: 3rem;
  margin: 2rem;
}

.task-button {
  color: white;
  border: 0px;
  /* border-radius: 7%; */
  cursor: pointer;
  font-weight: 400;
  font-size: 17px;
}

.not-done {
  background-color: #9fae87;
}

.done {
  background-color: #7aafda;
}

.delete {
  background-color: #e37771;
}

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
