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

CSS SIGN Infinity

.form-container {
  background-color: #fdfaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  border-radius: 0%;
  width: 40vw;
  height: 85vh;
  
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-name {
  font-weight: 800;
  color: #dc8721;
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
  background-color: #6c783f;
  color: white;
  border: 0px;
  border-radius: 7%;
  height: 3rem;
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  font-size: 21px;
}

/* .bassline-container {
 text-align: center;
 margin-top: 1rem;
} */

span {
  color: rgb(44, 44, 44);
  
}

</script>
