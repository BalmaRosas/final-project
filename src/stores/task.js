import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      return this.tasks;
    },
    // New code
    async addTask(title, description) {
      console.log(useUserStore().user.id);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          is_complete: false,
          description: description,
        },
      ]);
    },

    async deleteTaskStore(id) {
      //va a supabase para acceder a la información
      const {data, error} = await supabase
      // de la tabla "tasks"
      .from("tasks")
      //bórralo todo (lo que coincida con la siguiente línea)
      .delete()
      //lo que tenga el mismo id(1º) en la base de datos que el id(2º) que le pasamos con el emit
      .match({
        id: id
      });
    },

    async editTask(newTitle, newDescription, id) {
      //va a supabase para acceder a la información
      const {data, error} = await supabase
       // de la tabla "tasks"
      .from("tasks")
      //actualiza el título(1r ttile) por el nuevo título(2ºtitle) 
      .update([{
        title: newTitle,
        description: newDescription,}])
      //del objeto que tenga el mismo id(1º) en la base de datos que el id(2º) que le pasamos con el emit
      .match({
        id: id
      });
    },

    async toggleTask(id, completed) {
      console.log("estem a toggleTask");
      const {data, error} = await supabase
      .from("tasks")
      //actualiza is-complete(1º) de la base de datos, por el valor opuesto del is-complet(2º) 
      .update({is_complete: completed})
      .match({
        id: id
      });

      console.log(data);
    },
  },
});   
