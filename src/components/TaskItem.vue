<template>
  <div>
    <h2>{{ task2.title }}</h2>
    <p>{{ task2.description }}</p>
    <button @click="emit('deleteTask', task2.id);" class="task-button delete">Delete</button>
    <button @click="emit('editTask', task2.id, task2.title, task2.description)" class="task-button edit">Edit</button>
    <button @click="toggleTask" 
    class="task-button" :class="task2.is_complete ? 'done' : 'not-done'"
    >Done</button>
  </div>
  <!-- :class="task2.is_complete ? 'done' : 'not-done'"  -->
</template>

<script setup>
import { ref } from "@vue/reactivity";

const emit = defineEmits(["deleteTask", "toggleTask", "editTask"]);

//const props = defineProps(["ENTER-PROP-HERE"]);
const props = defineProps({ task2: Object });

//constante que guarda el valor por defecto de "done" que es una clase dinámica que le he pasado al button
 //const done = ref(false)

//como el @click no funciona bien con + de 1 evento, ponemos los 2 eventos (la función que cambiara el valor de is-complete y la clase de done) en una constante 2 en 1
const toggleTask = () => {
  props.task2.is_complete = !props.task2.is_complete
  emit('toggleTask', props.task2.id, props.task2.is_complete);
}

</script>

<style>
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
