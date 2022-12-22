

import { defineStore } from "pinia";
import axios from "axios";
import { Task } from "../interfaces/task";
import authHeader from "../services/auth-header";

export const useTasks = defineStore('Tasks', {
    state: () => ({
        tasks: [] as Task[],
    }),
    getters: {
        getTasks(state) {
            return state.tasks
        },
    },
    actions: {
        async fetchTasks() {
            try {
                const response = await axios.post(
                    import.meta.env.VITE_GW_TASKS_URL + "get-tasks/", 
                    {} ,
                    authHeader()
                );
                this.tasks = response.data.tasks;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        setTasks(tasks: Task[]) {
            this.tasks = tasks;
        },

    }
}
)
