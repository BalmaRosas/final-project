TASKITEM toggle
<template>
    <button @click="stateChange(task2.id)" 
    class="task-button" :class="done ? 'done' : 'not-done'" 
    >Done</button>
</template>

<script setup>
//constante que guarda el valor por defecto de "done" que es una clase dinámica que le he pasado al button
const done = ref(false)

//como el @click no funciona bien con + de 1 evento, ponemos los 2 eventos (la función que cambiara el valor de is-complete y la clase de done) en una constante 2 en 1
//
const stateChange = ((taskId) => {
  emit('toggleTask', taskId);
  done.value = !done.value
})

</script>
